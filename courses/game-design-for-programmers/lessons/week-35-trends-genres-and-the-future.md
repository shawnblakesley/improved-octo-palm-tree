---
week: 35
title: "Trends, Genres, and the Future"
unit: 9
unitTitle: "Synthesis & Capstone"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1–34"
objectives:
  - "Explain how genres form, hybridize, and function as design conventions rather than fixed laws."
  - "Compare indie, AAA, and live-service models in terms of scope, risk, and player relationship."
  - "Evaluate procedural generation, VR/AR, and AI-assisted tools as design choices with trade-offs."
  - "Argue a position in the ludology-versus-narratology debate using concrete games as evidence."
vocabulary:
  - term: "Genre"
    definition: "A set of shared conventions — mechanics, structure, aesthetics — that lets players and designers reason about a family of games."
  - term: "Hybridization"
    definition: "Combining conventions from two or more genres to create a design that is legible yet novel."
  - term: "Indie"
    definition: "Games made by small, often self-funded teams, typically with limited scope and more freedom to take formal risks."
  - term: "AAA"
    definition: "Large-budget, large-team commercial productions with high production values, heavy marketing, and correspondingly high risk."
  - term: "Live service"
    definition: "A game designed to be operated and updated continuously after launch rather than released as a finished, static product."
  - term: "Games-as-a-service"
    definition: "A business and design model in which ongoing content, events, and monetization keep players engaged over years."
  - term: "Procedural generation"
    definition: "Using algorithms to produce content — levels, terrain, items, narrative — from rules and parameters rather than by hand."
  - term: "Virtual reality"
    definition: "A medium in which head-mounted displays and tracked motion place the player inside a simulated space, changing presence and input."
  - term: "Game preservation"
    definition: "The effort to keep games playable and studyable over time, despite obsolete hardware, dead servers, and rights complications."
  - term: "Ludology"
    definition: "The study of games as formal systems and play as a distinct mode of meaning-making, as opposed to reading games primarily as stories."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which statement best reflects how genre functions in design?"
    options:
      - "A) Genre is a fixed law that every game in a category must obey."
      - "B) Genre is a set of shared conventions that can be followed, subverted, or hybridized."
      - "C) Genre is only a marketing label with no design content."
      - "D) Genre determines a game's budget."
    answer: "B"
    explanation: "Genres are conventions, not laws; designers use them for legibility and then bend or combine them. They are more than marketing but do not dictate budget."
  - id: 2
    type: "multiple-choice"
    question: "What most distinguishes an indie production from a AAA production?"
    options:
      - "A) Indie games are always better designed."
      - "B) AAA games never take creative risks."
      - "C) Team size, budget, and the resulting risk tolerance differ greatly."
      - "D) Indie games cannot use procedural generation."
    answer: "C"
    explanation: "The meaningful difference is scale and risk tolerance, which shapes scope and process. Quality and creativity are independent of the label."
  - id: 3
    type: "multiple-choice"
    question: "A defining design consequence of the live-service model is that:"
    options:
      - "A) The game is finished before launch and never changes."
      - "B) The game must keep generating reasons to return after launch."
      - "C) It cannot be played offline under any circumstances."
      - "D) It eliminates the need for onboarding."
    answer: "B"
    explanation: "Live service shifts effort from a one-time release to ongoing content, events, and retention design; whether it works offline is a separate implementation choice."
  - id: 4
    type: "multiple-choice"
    question: "Procedural generation is best understood as:"
    options:
      - "A) A replacement for all level designers."
      - "B) A technique that trades authorial control for scale and variety, and must be tuned like any system."
      - "C) A way to avoid playtesting."
      - "D) A rendering optimization."
    answer: "B"
    explanation: "Procedural generation is a design trade-off: it produces volume and replayability from rules, at the cost of hand-crafted specificity, and it still needs tuning and playtesting."
  - id: 5
    type: "multiple-choice"
    question: "The ludology-versus-narratology debate is fundamentally about:"
    options:
      - "A) Whether games need graphics."
      - "B) Whether games should be studied primarily as formal systems or as narrative media."
      - "C) Whether multiplayer is better than single-player."
      - "D) Whether games should be preserved."
    answer: "B"
    explanation: "The debate concerns how games generate meaning: through rules and play, through story, or through the interaction of both."
  - id: 6
    type: "multiple-choice"
    question: "Why is game preservation a design-relevant problem rather than only a library concern?"
    options:
      - "A) Because games never age."
      - "B) Because online dependencies, dead servers, and obsoleted hardware can make a game unplayable, erasing the design record."
      - "C) Because preservation increases sales."
      - "D) Because old games are always superior."
    answer: "B"
    explanation: "Live-service dependencies and platform churn can render games unplayable, which erases both the player experience and the design knowledge they encode."
  - id: 7
    type: "short-answer"
    question: "Give one advantage and one cost of procedural generation compared with hand-authored content."
    answer: "Advantage: it produces large volumes of content and replayability from a compact set of rules, which small teams can afford. Cost: it tends to produce generic or samey results and offers the designer less control over pacing and specific emotional beats, so it usually needs curation or hand-authored anchors."
    explanation: "A good answer names both the scale/efficiency gain and the loss of authored specificity and control."
  - id: 8
    type: "short-answer"
    question: "Why should designers be cautious about adopting new technology trends on the strength of their novelty alone?"
    answer: "Because a technology only matters if it serves the intended experience. A trend may add cost, constrain the design, or fail to fit the team's skills, while the underlying audience or need may not exist yet. The disciplined question is what player experience the technology enables that other options cannot, not whether it is new."
    explanation: "The answer should frame technology as a means to an experience, and warn against hype-driven adoption."
  - id: 9
    type: "scenario"
    question: "You are designing a small-budget game and considering procedural generation for your levels. Describe when you would use it, when you would not, and how you would keep the results from feeling generic."
    answer: "Use it when the game's appeal depends on variety and replayability and the rules can be tuned to produce interesting situations — roguelikes and survival games are natural fits. Do not use it when the experience depends on precise pacing, authored set pieces, or specific emotional beats. To avoid sameness, constrain generation with hand-authored templates, curate and filter outputs, add bespoke anchors such as boss rooms or story beats, and playtest generated content as rigorously as authored content."
    explanation: "A strong answer ties the choice to the intended experience and describes curation and constraints, not just the algorithm."
  - id: 10
    type: "scenario"
    question: "A studio proposes turning a finished single-player game into a live service with seasonal content and an always-online requirement. List two design opportunities and two design risks you would raise in the meeting."
    answer: "Opportunities: ongoing content and events can extend the game's life and keep a community engaged, and player data can inform future updates. Risks: the always-online requirement can make the game unplayable when servers close, harming preservation and players; and retention mechanics can distort the original design, adding grind or monetization pressure that conflicts with the experience. A disciplined proposal must justify each against the game's pillars."
    explanation: "Good answers weigh longevity and community against preservation, access, and design integrity."
---

# Week 35 — Trends, Genres, and the Future

## Why This Matters

Every field has a temptation to mistake the present for the permanent. In games, that takes
the form of treating today's dominant genre, business model, or technology as the inevitable
future. History is unkind to those predictions: genres rise and hybridize, platforms churn,
and models that looked permanent are abandoned. The useful skill is not forecasting — it is
reading the forces that shape games so you can design deliberately within them.

This lesson is about context: where genres come from, how the industry is structured, and
which emerging tools are genuinely design-relevant. The goal is measured judgment, not
enthusiasm. When something is uncertain, the honest move is to say so and reason about the
trade-offs rather than repeat a prediction.

## Learning Objectives

By the end of this lesson you will be able to:

- Explain how genres form, hybridize, and function as design conventions.
- Compare indie, AAA, and live-service models in terms of scope, risk, and player relationship.
- Evaluate procedural generation, VR/AR, and AI-assisted tools as design choices.
- Argue a position in the ludology-versus-narratology debate using concrete games.

## Lesson

### Genre as Convention, Not Law

A **genre** is a shared vocabulary of conventions: a set of mechanics, structures, and
aesthetics that lets players predict what a game will feel like and lets designers communicate
quickly. "Roguelike" tells you about permadeath and procedural runs; "Metroidvania" implies
ability-gated exploration. Genres are useful precisely because they compress information.

But a genre is not a rulebook. **Hybridization** — combining conventions from different
families — is one of the main engines of design innovation. *Hades* fuses roguelike structure
with explicit narrative progression and relationship systems; *Vampire Survivors* strips
action games to automatic attacks and builds a genre around positioning and build-crafting;
*Dark Souls* merged action combat with interconnected world design and asynchronous
multiplayer. The most interesting designs often sit at these seams. When you hybridize, ask
which conventions you are keeping because they serve the experience and which you are keeping
out of habit.

### Indie, AAA, and the Shape of Production

**Indie** games come from small, frequently self-funded teams. Their advantage is freedom:
low overhead permits formal risk, unusual subjects, and short iteration loops. Their
constraint is scope, which is why so many indies are built around a single strong mechanic.
**AAA** games are large-budget, large-team productions. Their advantage is production value
and reach; their constraint is risk, because a large budget must be recouped and a large team
is slow to change direction. These are structural differences, not moral ones — great and
terrible games exist at every scale.

The **games-as-a-service** model and its **live service** practice sit on top of this. Rather
than shipping a finished object, the studio operates the game indefinitely, adding content and
events. The design consequence is that retention and recurring engagement become first-class
goals, which can be wonderful (a game that grows with its community) or corrosive (a game
twisted into a monetization funnel). Watching how a service model changes a game's incentives
is one of the clearest ways to see business model as a design force.

### Procedural Generation: Rules That Make Content

**Procedural generation** uses algorithms to produce content from rules and parameters. It is,
in effect, a compression of content into a generator — and like any compressor, it trades
fidelity for size. *Dwarf Fortress* generates worlds, histories, and personalities with
astonishing depth from simulation rules; *No Man's Sky* generated an entire galaxy and then
spent years improving the systems around it. *Return of the Obra Dinn* is a useful contrast:
its world is fixed and hand-authored, and its procedural elements serve deduction rather than
volume.

The design lesson is that generation does not remove authorship; it relocates it. You author
the rules, constraints, and curation. Generated content that is not filtered, anchored, and
playtested tends to feel samey. Used well, it is a system the player learns — which connects
directly to Week 7's emergence.

### VR, AR, and AI: Technology as a Means

**Virtual reality** changes the relationship between body and game: head-tracked presence and
motion controls make scale, spatial awareness, and physicality newly meaningful, as *Half-Life:
Alyx* demonstrates, while *Beat Saber* shows how naturally it fits rhythm play. It also brings
real constraints — comfort, locomotion, session length — that designers must solve rather than
ignore. Augmented reality overlays play onto the physical world, which is compelling in
specific contexts and awkward in many others. Whether either becomes dominant is genuinely
uncertain; treat them as media with particular strengths, not as inevitable replacements.

AI-assisted tools — for asset generation, code assistance, testing, and tuning — are already
changing how games are *made*, and the picture is evolving quickly. The measured designer's
question is not "will AI change games?" but "which production problems does this solve, at
what cost to craft, labor, and authorship?" As with any technology, novelty is not an argument.
What matters is the experience enabled.

### Preservation, Criticism, and the Historical Record

Games are unusually fragile as artifacts. They depend on specific hardware, on online servers
that get switched off, and on licenses that expire. **Game preservation** — through efforts
like GOG's re-releases, the Video Game History Foundation's research, and emulation projects
such as MAME — keeps both the playable experience and the design knowledge available. For a
designer this is not abstract: reading a game you cannot play is not the same as playing it,
and the loss of a game is the loss of a case study. The engineering analogy is a long-running
service reaching end-of-life with no migration path: the data outlives the system that gave it
meaning.

**Criticism** and **cultural impact** complete the picture. Games shape and reflect the
societies that play them, and criticism is how the medium argues with itself about what it is
becoming. That conversation has a long-running fault line: **ludology** versus narratology.
Ludologists study games as formal systems — rules, play, simulation — and argue that meaning
arises from interaction, not just story. Narratologists read games as storytelling media, kin
to film and literature. The productive position is usually that both matter and their
interaction is the interesting part: *The Last of Us* and *Disco Elysium* are unthinkable as
pure formalism, while *Tetris* and *Chess* are unthinkable as pure narrative. The debate
sharpens your vocabulary whether or not you pick a side.

## Key Takeaways

- Genres are conventions that aid legibility; hybridization at their seams drives much of the
  medium's formal innovation.
- Indie, AAA, and live-service models differ mainly in scale, risk tolerance, and the
  player relationship they imply — each shapes design decisions in concrete ways.
- Procedural generation relocates authorship into rules and curation; it still requires
  filtering, anchors, and playtesting to avoid feeling generic.
- VR, AR, and AI tools are means to experiences; evaluate them by the problems they solve,
  not by their novelty, and be honest about uncertainty.
- Preservation keeps designs playable and studyable; online dependencies and hardware churn
  can erase the record entirely.
- The ludology-versus-narratology debate is best treated as two lenses, not a war to win.

## Vocabulary

| Term | Definition |
|---|---|
| Genre | A set of shared conventions — mechanics, structure, aesthetics — that lets players and designers reason about a family of games. |
| Hybridization | Combining conventions from two or more genres to create a design that is legible yet novel. |
| Indie | Games made by small, often self-funded teams, typically with limited scope and more freedom to take formal risks. |
| AAA | Large-budget, large-team commercial productions with high production values, heavy marketing, and correspondingly high risk. |
| Live service | A game designed to be operated and updated continuously after launch rather than released as a finished, static product. |
| Games-as-a-service | A business and design model in which ongoing content, events, and monetization keep players engaged over years. |
| Procedural generation | Using algorithms to produce content — levels, terrain, items, narrative — from rules and parameters rather than by hand. |
| Virtual reality | A medium in which head-mounted displays and tracked motion place the player inside a simulated space, changing presence and input. |
| Game preservation | The effort to keep games playable and studyable over time, despite obsolete hardware, dead servers, and rights complications. |
| Ludology | The study of games as formal systems and play as a distinct mode of meaning-making, as opposed to reading games primarily as stories. |

## Quiz

**1.** Which statement best reflects how genre functions in design?

- A) Genre is a fixed law that every game in a category must obey.
- B) Genre is a set of shared conventions that can be followed, subverted, or hybridized.
- C) Genre is only a marketing label with no design content.
- D) Genre determines a game's budget.

**2.** What most distinguishes an indie production from a AAA production?

- A) Indie games are always better designed.
- B) AAA games never take creative risks.
- C) Team size, budget, and the resulting risk tolerance differ greatly.
- D) Indie games cannot use procedural generation.

**3.** A defining design consequence of the live-service model is that:

- A) The game is finished before launch and never changes.
- B) The game must keep generating reasons to return after launch.
- C) It cannot be played offline under any circumstances.
- D) It eliminates the need for onboarding.

**4.** Procedural generation is best understood as:

- A) A replacement for all level designers.
- B) A technique that trades authorial control for scale and variety, and must be tuned like any system.
- C) A way to avoid playtesting.
- D) A rendering optimization.

**5.** The ludology-versus-narratology debate is fundamentally about:

- A) Whether games need graphics.
- B) Whether games should be studied primarily as formal systems or as narrative media.
- C) Whether multiplayer is better than single-player.
- D) Whether games should be preserved.

**6.** Why is game preservation a design-relevant problem rather than only a library concern?

- A) Because games never age.
- B) Because online dependencies, dead servers, and obsoleted hardware can make a game unplayable, erasing the design record.
- C) Because preservation increases sales.
- D) Because old games are always superior.

**7.** Give one advantage and one cost of procedural generation compared with hand-authored content.

**8.** Why should designers be cautious about adopting new technology trends on the strength of their novelty alone?

**9.** You are designing a small-budget game and considering procedural generation for your levels. Describe when you would use it, when you would not, and how you would keep the results from feeling generic.

**10.** A studio proposes turning a finished single-player game into a live service with seasonal content and an always-online requirement. List two design opportunities and two design risks you would raise in the meeting.

## Answer Key

**1. B** — Genres are conventions, not laws; designers use them for legibility and then bend or combine them. They are more than marketing but do not dictate budget.

**2. C** — The meaningful difference is scale and risk tolerance, which shapes scope and process. Quality and creativity are independent of the label.

**3. B** — Live service shifts effort from a one-time release to ongoing content, events, and retention design; offline support is a separate implementation choice.

**4. B** — Procedural generation is a design trade-off: it produces volume from rules at the cost of hand-crafted specificity, and it still needs tuning and playtesting.

**5. B** — The debate concerns how games generate meaning: through rules and play, through story, or through both. Graphics, player count, and preservation are unrelated.

**6. B** — Live-service dependencies and platform churn can render games unplayable, erasing both the player experience and the design knowledge they encode.

**7.** Advantage: it produces large volumes of content and replayability from compact rules, which small teams can afford. Cost: it tends toward generic or samey results and gives less control over pacing and specific emotional beats, so it usually needs curation or hand-authored anchors. *(Accept any answer naming a scale/efficiency gain and a loss of authored specificity.)*

**8.** Because a technology only matters if it serves the intended experience. A trend may add cost, constrain the design, or exceed the team's skills while the audience need remains speculative; the disciplined question is what experience the technology uniquely enables. *(Accept any answer framing technology as a means to an experience and warning against hype.)*

**9.** Use it when appeal depends on variety and replayability and the rules can be tuned to produce interesting situations. Avoid it when the experience needs precise pacing, authored set pieces, or specific emotional beats. To prevent sameness, constrain generation with templates, curate and filter outputs, add bespoke anchors such as boss rooms, and playtest generated content rigorously. *(Accept any answer tied to intended experience plus curation.)*

**10.** Opportunities: ongoing content keeps a community engaged and extends the game's life, and player data can guide updates. Risks: an always-online requirement can make the game unplayable when servers close, harming preservation and players, and retention mechanics can distort the original design with grind or monetization pressure. *(Accept any two plausible opportunities and risks weighed against the game's pillars.)*

## Exercises

1. **Genre seam map (design task).** Choose two genres you know well and generate three
   hybrid concepts by swapping one core convention between them. For each, write a one-sentence
   pitch and identify which convention creates the novelty and which inherited convention you
   might need to discard. Select the strongest and note its biggest design risk.

2. **Model comparison.** Pick one indie, one AAA, and one live-service game. For each, write a
   short profile covering budget scale, update cadence, and the player relationship implied by
   its business model. Then argue which model best fits a design idea you are personally
   drawn to, and why.

3. **Preservation plan (hands-on).** Choose a game that depends on online servers or obsolete
   hardware. Outline what would be lost if it became unplayable and propose a preservation
   approach (official re-release, emulation, private server, documentation). Identify one legal,
   technical, or social obstacle and one design lesson the preservation effort preserves.

## Further Study

- *Hades* (Supergiant Games) — a widely cited example of genre hybridization between roguelike
  structure and character-driven narrative.
- *Dwarf Fortress* (Bay 12 Games) — deep procedural simulation and emergent storytelling.
- The Video Game History Foundation — an organization working openly on game preservation,
  research, and documentation.
- *Rules of Play* by Katie Salen and Eric Zimmerman — a foundational text engaging the
  ludology and narratology questions from a systems perspective.

