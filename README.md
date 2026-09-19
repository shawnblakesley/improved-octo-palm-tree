# Learning Hub

A static, dependency-free multi-course site. The hub page lists courses; each course is a standalone
subsite with its own lessons, vocabulary, exercises, quizzes, diagrams, and video references.
Progress is saved separately for every course.

## Structure

```
index.html                  Hub: the course catalog
catalog.js                  Course registry (source of truth for the hub and app menu)
portal.js                   Renders the hub
styles.css                  Shared styling for the hub and all courses

main.js                     Electron desktop shell
build/icon.ico, icon.png    App icon
build/make-icon.ps1         Regenerates the icon

courses/
  linear-regression-to-deepseek/
    index.html              Course subsite shell
    curriculum.js           Phases, lessons, vocabulary, exercises, quizzes
    diagrams.js             SVG diagram engine, specs, and lesson mapping
    videos.js               Curated YouTube links per phase and lesson
    app.js                  Routing, progress, quizzes, theme

  game-design-for-programmers/
    index.html              Course subsite shell (per-lesson quizzes)
    curriculum.js           Units, lessons, vocabulary, exercises, quizzes
    diagrams.js             SVG diagram engine, specs, and lesson mapping
    videos.js               Curated YouTube links per unit and lesson
    app.js                  Routing, progress, quizzes, theme
    lessons/                Full Markdown source for all 36 lessons
```

Each course loads the shared `styles.css` and `catalog.js` from two levels up, then its own scripts.

## Adding a course

1. Copy `courses/linear-regression-to-deepseek/` to `courses/<new-slug>/`.
2. In the new `curriculum.js`, set `id` to `<new-slug>` and replace the content.
3. In the new `index.html`, update the `<title>`, and keep `data-hub-href="../../index.html"`.
4. Add an entry to `catalog.js`:

```js
{
  id: "new-slug",
  title: "Course title",
  shortTitle: "Short sidebar label",
  subtitle: "One line describing the outcome",
  description: "A sentence or two for the hub card.",
  path: "courses/new-slug/",
  lessons: 20,
  duration: "4 phases",
  level: "Intermediate",
  tags: ["Topic"],
  accent: "#0d9488",
  status: "available"     // or "planned" to show it as Coming soon
}
```

`CURRICULUM.id` must match the catalog `id`; that is how the course and the hub agree on where
progress is stored. A commented template sits at the bottom of `catalog.js`.

## Running

- **Hub:** open `index.html`. A course can also be opened directly, for example
  `courses/linear-regression-to-deepseek/index.html`.
- **Local server:** `python -m http.server 8000`, then open `http://localhost:8000/`.
- **Desktop app:** see below.

## Desktop app (Electron)

`main.js` wraps the hub in an Electron window. It serves the files from an in-process HTTP server on
a fixed loopback port so that `localStorage` progress survives restarts, serves `index.html` for
directory URLs, and sends YouTube links to your default browser.

```bash
npm install     # installs Electron (first time only)
npm start       # or: node_modules\electron\dist\electron.exe .
```

The window opens on the hub. Its **Go** menu lists every available course (from `catalog.js`) with
a quick link to each course's overview, plus course-specific sections where defined.

**Requirements:** Node.js 22.12 or newer. The project uses Electron 44, which switched to
`@electron/get` 5 and Electron's maintained `@electron-internal/extract-zip`; Electron 39 and
earlier depended on `extract-zip`, which carries open high-severity symlink path-traversal
advisories (GHSA-jmr9-qjv8-65gv, GHSA-7pqw-9j4j-h8q3) with no patched release. `npm install` runs
Electron's installer via the `postinstall` script to download the binary. If `npm start` reports a
missing binary, run `npm install` again.

### Desktop shortcut

A shortcut named **DeepSeek Curriculum** is on the desktop. It targets
`node_modules\electron\dist\electron.exe` with the project directory as its argument, so no console
window appears.

To recreate it (for example after moving the project), run:

```powershell
$proj = (Get-Location).Path
$lnk = (New-Object -ComObject WScript.Shell).CreateShortcut(
  (Join-Path ([Environment]::GetFolderPath('Desktop')) 'DeepSeek Curriculum.lnk'))
$lnk.TargetPath = Join-Path $proj 'node_modules\electron\dist\electron.exe'
$lnk.Arguments = '"' + $proj + '"'
$lnk.WorkingDirectory = $proj
$lnk.IconLocation = (Join-Path $proj 'build\icon.ico')
$lnk.Save()
```

## Progress storage

Each course stores progress under `course:<id>:progress:v1` in `localStorage`, keyed to the course
id. Lesson checkboxes, exercise completion, quiz best scores, and the theme are stored together, so
courses never overwrite each other. Because storage is per origin, opening the same course through
the Electron app keeps one set of progress and a local dev server keeps another.

## Course features

- **Nine phases, 45 lessons** (in the DeepSeek course): tooling, math/ML, deep learning,
  Transformers, pretraining, post-training/RL, DeepSeek architecture, deployment, and a capstone.
- **Nine units, 36 lessons** (in the Game Design course): foundations and systems, player
  psychology, balance and economies, level and world design, challenge and AI, narrative and
  emotion, production and ethics, and a playtested capstone. Every lesson carries its own
  multiple-choice quiz plus reflective prompts with model answers.
- **Vocabulary dropdowns** instead of dense prose, with a specific definition per term.
- **Architecture diagrams** rendered from a small SVG flowchart engine, theme-aware.
- **Curated videos** keyed to phases and lessons.
- **Exercises** with collapsible hints and completion checkboxes.
- **Quizzes** with instant feedback, explanations, and a saved best score.
- **Progress tracking** and a light/dark theme.

### Adding a diagram

Add a spec to `DIAGRAMS` in the course's `diagrams.js`, then map an id in `DIAGRAM_FOR`:

```js
S["my-diagram"] = {
  title: "What it shows", width: 900, height: 300,
  nodes: [
    { id: "a", x: 20, y: 100, w: 140, h: 70, label: "Tokenizer", sub: ["byte-level BPE"], kind: "box" },
    { id: "b", x: 240, y: 100, w: 150, h: 70, label: "Pretraining", sub: ["next-token"], kind: "accent" }
  ],
  edges: [ { from: "a", to: "b", label: "token ids" } ],
  labels: [ { x: 450, y: 250, text: "optional caption line" } ]
};
DIAGRAM_FOR["p3l1"] = "my-diagram";
```

Node `kind` is one of `box`, `accent`, `good`, `gold`, or `ghost`. Edge `color` can be `muted`,
`accent`, `good`, or `gold`; add `dashed: true` for dashed arrows. Corners route automatically.

### Adding a video

Add to the relevant key in `VIDEO_FOR` in the course's `videos.js`:

```js
p5l3: [ v("Video title", "Channel", "https://www.youtube.com/watch?v=XXXXXXXXXXX") ]
```

Phase key (`p5`) videos appear in the phase header; lesson key (`p5l3`) videos appear inside that
lesson. Lesson videos already shown at the phase level are hidden to avoid repeats.
