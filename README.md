# From Linear Regression to DeepSeek-V4.1-Flash

A self-contained, self-paced learning site built from the curriculum: nine phases from tooling and math
foundations to training and deploying DeepSeek-V4.1-Flash (`deepseek-flash`).

No build step, no dependencies. Open `index.html` in a browser.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell and script includes |
| `styles.css` | All styling, including light/dark themes, diagrams, and responsive layout |
| `curriculum.js` | All course content: phases, lessons, vocabulary, exercises, quizzes |
| `diagrams.js` | SVG diagram engine, diagram specs, and lesson/phase diagram mapping |
| `videos.js` | Curated YouTube links keyed by phase and lesson |
| `app.js` | Routing, rendering, progress tracking, quiz grading, theme |

## Features

- **Nine phases, 45 lessons** following the curriculum plan (orientation, math/ML, deep learning, Transformers, pretraining, post-training/RL, DeepSeek architecture, deployment, capstone).
- **Vocabulary dropdowns** — every lesson has expandable terms with specific definitions instead of dense prose.
- **Architecture diagrams** — 20 hand-built SVG diagrams (attention, RoPE, MoE, MLA, hybrid sparse attention, the V4.1-Flash causal encoder-decoder, KV cache paging, disaggregated serving, and more), rendered from a small flowchart engine so they follow the light/dark theme.
- **Curated YouTube videos** — 90 links keyed to phases and lessons (Karpathy, 3Blue1Brown, Stanford CS336, Umar Jamil, Jia-Bin Huang, freeCodeCamp, IBM, and others). Every lesson links to a diagram or a video.
- **Exercises** — one hands-on task per lesson with a collapsible hint and a completion checkbox.
- **Quizzes** — a multiple-choice check per phase with immediate feedback, explanations, and a saved best score.
- **Progress tracking** — lessons, exercises, and quiz scores persist in `localStorage`. A "Continue" button jumps to your next incomplete lesson.
- **Light/dark theme**, responsive layout with a collapsible sidebar on mobile.
- **Reset progress** from the sidebar footer.

## Editing content

Everything the site displays comes from `CURRICULUM` in `curriculum.js`. To add or change material,
edit that object only. A phase has this shape:

```js
{
  id: "p1", num: 1, title: "...", tagline: "...", goal: "...", duration: "6 weeks",
  lessons: [{
    id: "p1l1", title: "...", goal: "...",
    points: ["short", "bullets"],
    vocab: [{ term: "...", detail: "..." }],
    exercise: { title: "...", task: "...", hint: "..." }
  }],
  quiz: [{ q: "...", options: ["a","b","c","d"], answer: 1, explain: "..." }]
}
```

Lesson `id` values must stay unique; progress is keyed on them.

### Adding a diagram

Diagrams use a tiny flowchart engine. Add a spec to `DIAGRAMS` in `diagrams.js`, then map an id in
`DIAGRAM_FOR`:

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
`accent`, `good`, or `gold`; add `dashed: true` for dashed arrows. Corners route automatically based
on node positions.

### Adding a video

Add to the relevant key in `VIDEO_FOR` in `videos.js`:

```js
p5l3: [ v("Video title", "Channel", "https://www.youtube.com/watch?v=XXXXXXXXXXX") ]
```

Phase key (`p5`) videos appear in the phase header; lesson key (`p5l3`) videos appear inside that
lesson. Lesson videos already shown at the phase level are hidden to avoid repeats.

## Running

- Double-click `index.html`, or
- Serve locally for a cleaner URL: `python -m http.server 8000` then open `http://localhost:8000/`.
