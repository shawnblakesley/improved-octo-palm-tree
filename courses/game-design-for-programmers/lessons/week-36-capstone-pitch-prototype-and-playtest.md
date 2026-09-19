---
week: 36
title: "Capstone: Pitch, Prototype, and Playtest"
unit: 9
unitTitle: "Synthesis & Capstone"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1–35"
objectives:
  - "Write a one-page design document anchored by design pillars, core loop, and target aesthetic."
  - "Build the smallest playable prototype that can answer your design's riskiest question."
  - "Run playtests with at least three testers, record raw observations, and iterate once."
  - "Deliver a postmortem and portfolio-ready pitch that defends design decisions and cuts."
vocabulary:
  - term: "Pitch"
    definition: "A concise argument for a game — what it is, who it is for, and why it matters — meant to win support or funding."
  - term: "Design pillar"
    definition: "A short, memorable principle that anchors design decisions and resolves trade-offs by judging whether a feature belongs."
  - term: "Prototype"
    definition: "A rough, disposable playable version built to answer a specific design question as cheaply as possible."
  - term: "Playtest"
    definition: "A session in which real players play a build while the designer observes behavior and gathers evidence."
  - term: "Postmortem"
    definition: "A structured, blameless retrospective that examines what worked, what failed, and why, to improve future projects."
  - term: "Portfolio"
    definition: "A curated body of work demonstrating a designer's process, decisions, and finished artifacts to employers or collaborators."
  - term: "Elevator pitch"
    definition: "A very short spoken version of a pitch — thirty seconds to a minute — that makes the core idea memorable."
  - term: "Vertical slice"
    definition: "A small, polished, representative section of a game that demonstrates final quality across every discipline."
  - term: "Iteration"
    definition: "The repeated cycle of building, testing, learning, and revising that turns a prototype into a design."
  - term: "Critique"
    definition: "Structured, specific feedback focused on the work rather than the person, explaining why something does or does not achieve its goal."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What is the primary purpose of a design pillar?"
    options:
      - "A) To list every feature the game will contain."
      - "B) To provide a short principle that resolves design trade-offs and tests whether features belong."
      - "C) To estimate the project's budget."
      - "D) To replace the design document."
    answer: "B"
    explanation: "Pillars are decision tools: when a feature conflicts with a pillar, the pillar helps you cut or change it. They are not feature lists or budgets."
  - id: 2
    type: "multiple-choice"
    question: "The best prototype is the one that:"
    options:
      - "A) Looks the most polished."
      - "B) Contains the most content."
      - "C) Answers the design's riskiest question at the lowest cost."
      - "D) Uses the final art."
    answer: "C"
    explanation: "Prototypes exist to reduce uncertainty cheaply. Polish and content are irrelevant if the core question remains unanswered."
  - id: 3
    type: "multiple-choice"
    question: "During a playtest, the most valuable thing a designer can do is:"
    options:
      - "A) Explain the rules before the player starts."
      - "B) Observe behavior and ask neutral, open questions."
      - "C) Tell the player when they are playing incorrectly."
      - "D) Ask whether they liked it."
    answer: "B"
    explanation: "Observed behavior is evidence; neutral questions avoid leading the tester. Explaining rules, correcting, and yes/no liking questions all contaminate the data."
  - id: 4
    type: "multiple-choice"
    question: "A blameless postmortem is valuable because it:"
    options:
      - "A) Assigns responsibility so someone can be disciplined."
      - "B) Focuses on systems, decisions, and lessons so the team improves."
      - "C) Proves the project was successful."
      - "D) Avoids discussing failures entirely."
    answer: "B"
    explanation: "Blameless retrospectives surface honest lessons about process and decisions. Blame suppresses information; ignoring failure teaches nothing."
  - id: 5
    type: "multiple-choice"
    question: "What distinguishes a vertical slice from an early prototype?"
    options:
      - "A) A vertical slice is disposable and unpolished."
      - "B) A vertical slice is a small, polished sample that shows final quality across disciplines."
      - "C) A vertical slice contains the entire game."
      - "D) A vertical slice is only a written document."
    answer: "B"
    explanation: "A vertical slice demonstrates representative final quality in a narrow slice; a prototype is rough and built to test an idea cheaply."
  - id: 6
    type: "multiple-choice"
    question: "When asked 'what would you cut?' the strongest answer is one that:"
    options:
      - "A) Refuses to cut anything because everything is essential."
      - "B) Names features that conflict with the pillars and explains what the game loses."
      - "C) Cuts the core mechanic to save time."
      - "D) Lists random features without justification."
    answer: "B"
    explanation: "Cutting is a design skill. Defensible cuts trace back to the pillars and acknowledge the trade-off, rather than defending everything or sacrificing the core."
  - id: 7
    type: "short-answer"
    question: "Explain why design pillars make scope decisions easier."
    answer: "Pillars compress the game's identity into a few principles, so any proposed feature can be tested against them. When time or budget is tight, features that do not serve a pillar are the first to cut, which keeps the project coherent instead of accumulating whatever seemed appealing."
    explanation: "The answer should connect pillars to consistent, defensible scope cuts under constraint."
  - id: 8
    type: "short-answer"
    question: "Why should a playtest report separate raw observations from interpretation?"
    answer: "Raw observations record what actually happened — where players paused, what they said, where they failed — while interpretation is the designer's inference about why. Keeping them separate lets other readers evaluate the evidence and prevents the designer's assumptions from being smuggled in as fact, which is the whole point of testing."
    explanation: "The distinction preserves evidence integrity and mirrors separating data from analysis in any experiment."
  - id: 9
    type: "scenario"
    question: "Your prototype's core loop is playable, but testers finish it in three minutes and say it 'felt fine.' Describe the next iteration: what question you would ask, what you would change, and what you would measure."
    answer: "The vague reaction means the prototype is not yet creating a strong aesthetic, so the next question is which moment should produce the target feeling — tension, delight, mastery — and why it is not landing. I would tighten or intensify that moment, raise or restructure the challenge to extend the loop, and remove anything that dilutes it. I would then measure session length, where players disengage, and whether their unprompted language describes the intended experience."
    explanation: "A strong answer converts vague feedback into a testable design hypothesis and a specific change with observable measures."
  - id: 10
    type: "scenario"
    question: "You have one week to prepare a portfolio piece from your capstone. List what you would include, and explain how you would present process alongside the finished artifact."
    answer: "Include the playable build, the one-page design doc, the pitch, and the postmortem. Present process by showing the design pillars, one key decision and its alternative, and a before/after iteration driven by playtest evidence, so a reviewer can see how you think, not just what you made. Keep it short and lead with the playable experience."
    explanation: "A portfolio demonstrates judgment and process, not only the final build; showing iteration and rationale is what distinguishes a designer."
---

# Week 36 — Capstone: Pitch, Prototype, and Playtest

## Why This Matters

Every skill in this course converges here. You have learned to read games as systems, to
design meaningful choices, to tune difficulty, to build worlds, to write narrative, to test
assumptions, and to design ethically. The capstone asks you to do all of it at once, at the
smallest possible scale: pitch a design, build the least version that can be played, watch
real people play it, change something, and explain what you learned.

If you are an engineer, this will feel familiar. It is the build-measure-learn loop, a
blameless postmortem, and a scoped MVP applied to experience design. The difference is that
your success metric is not a passing test suite — it is whether a specific person felt the
thing you intended. Engineering discipline gets you to a playable artifact; only iteration
and honest observation close the gap between what you designed and what players experience.

## Learning Objectives

By the end of this lesson you will be able to:

- Write a one-page design document anchored by pillars, core loop, and target aesthetic.
- Build the smallest playable prototype that answers the design's riskiest question.
- Run playtests with at least three testers and iterate on the evidence.
- Deliver a postmortem and portfolio-ready pitch defending your decisions and cuts.

## Lesson

### The One-Page Pitch

A **pitch** is an argument, not a description. It says what the game is, who it is for, what
the player does, and why that is worth someone's time or money. The **elevator pitch** is its
compressed form: a sentence or two you could say before the doors open. *"A roguelike where
every death advances a relationship story"* or *"a deduction game set on a doomed ship"* —
these are legible, specific, and make a promise.

The one-page design document is the pitch's structured cousin. It contains, at most: the
title and hook; the **design pillars**; the core loop (Week 5); the target aesthetic (Week 2's
MDA); the primary mechanics; and the intended audience and platform. One page is a discipline,
not an accident. If it does not fit, your idea is not yet focused.

### Design Pillars Resolve Arguments

**Design pillars** are the three or four short principles that define the game's identity.
Good pillars are memorable and opinionated: *"combat is a conversation," "the world tells the
story," "failure teaches."* Their value is not decoration — it is decision-making. When two
features compete for time, when a mechanic feels wrong but you cannot say why, when someone
asks for a feature that would be fun in a different game, the pillar settles it. A pillar
should be specific enough that it can be violated; a pillar like "it's fun" is useless.

As an engineer, think of pillars as an architectural contract: a small set of invariants that
every later decision must respect. Feature creep (Week 31) is what happens when there is no
contract to violate.

### Prototyping the Riskiest Question

A **prototype** is a rough, disposable playable artifact built to answer one question cheaply.
The crucial word is *disposable*: if you cannot throw it away, it is not a prototype. The
disciplined move is to identify the riskiest assumption — usually the core loop or the core
feeling — and build only what tests it. Gray boxes, paper cards, or a few hundred lines of
throwaway code are all legitimate.

*Celeste* began as a small prototype of the dash and climb mechanics; *Papers, Please* tested
its document-checking loop before building a nation's worth of content; *Vampire Survivors*
started as exactly the loop it shipped. The prototype's job is to make your central idea
falsifiable. If the question is "is this fun?", the prototype must be playable, not pretty.

A **vertical slice** comes later and means something different: a small, polished section
demonstrating final quality across every discipline, used to prove the game is producible.
Do not confuse the two — polishing a prototype early is one of the most common ways to waste
a budget.

### Playtesting: Watch, Don't Lead

A **playtest** replaces your assumptions with evidence (Week 30). The protocol for the
capstone is deliberately simple: recruit at least three testers, give them the build, and say
as little as possible. Observe where they hesitate, what they try, what they miss, and what
they say unprompted. Ask neutral, open questions ("What did you think that item was for?")
and never explain or correct. Only after the session should you ask what they would change.

Record **raw observations** separately from your interpretation. "Player pressed jump at the
gap three times and fell" is evidence; "the gap is too wide" is a hypothesis. Keeping the two
apart prevents your assumptions from masquerading as findings — the same discipline as
separating logs from root-cause analysis. Then pick *one* change, make it, and test again.
**Iteration** is a loop, not a single pass.

### Postmortem, Portfolio, and Critique

A **postmortem** is a structured, blameless retrospective. It answers: what did I intend, what
actually happened, why the gap, and what will I do differently? Blameless matters — the goal
is learning, not confession. Name the decisions honestly, including the cuts.

Your **portfolio** is the durable artifact. It should show the playable build, the one-page
doc, and the postmortem. Reviewers care less about polish than about judgment: show a key
decision, the alternative you rejected, and the playtest evidence that changed your mind.

Finally, learn to give and take **critique**. Critique is specific, focused on the work, and
explains *why* something does or does not achieve its goal. "The second jump feels floaty
because the hang time is long" is critique; "I didn't like it" is not. When you receive
critique, resist defending and ask what experience the critic had — they are reporting data
you cannot otherwise see.

### The Capstone Brief

Deliver the following four artifacts:

1. **One-page design document** — pillars, core loop, target aesthetic, primary mechanics,
   and audience.
2. **Playable prototype** — paper or digital, delivering one coherent 5–10 minute experience.
   It must be playable by someone else without you narrating.
3. **Playtest report** — at least three testers, raw observations separated from
   interpretation, and one documented iteration with the evidence that motivated it.
4. **Postmortem** — what you intended, what happened, what you cut, and what you would do
   differently, including at least one cut you made because it violated a pillar.

### "What Would You Cut?"

The signature question of any pitch is "what would you cut?" It is not a trap; it is a test of
priorities. The weak answer defends everything. The strong answer names features that conflict
with a pillar and explains the trade-off: "I'd cut the crafting system; it serves breadth and
this game's pillar is tension, so it dilutes the loop." Being able to cut well is evidence
that you understand your own design.

## Key Takeaways

- A pitch is a concise argument; the one-page doc is its structured form, and one page is a
  discipline that forces focus.
- Design pillars are decision tools: they resolve trade-offs and identify what to cut.
- Prototypes answer the riskiest question cheaply and throwaway; a vertical slice proves final
  quality and comes later.
- Playtests gather evidence: observe behavior, ask neutral questions, separate observations
  from interpretation, and iterate at least once.
- A blameless postmortem turns a project into learning; a portfolio presents your judgment,
  not just your artifact.
- The ability to cut well, traced to the pillars, is a mark of design maturity.

## Vocabulary

| Term | Definition |
|---|---|
| Pitch | A concise argument for a game — what it is, who it is for, and why it matters — meant to win support or funding. |
| Design pillar | A short, memorable principle that anchors design decisions and resolves trade-offs by judging whether a feature belongs. |
| Prototype | A rough, disposable playable version built to answer a specific design question as cheaply as possible. |
| Playtest | A session in which real players play a build while the designer observes behavior and gathers evidence. |
| Postmortem | A structured, blameless retrospective that examines what worked, what failed, and why, to improve future projects. |
| Portfolio | A curated body of work demonstrating a designer's process, decisions, and finished artifacts to employers or collaborators. |
| Elevator pitch | A very short spoken version of a pitch — thirty seconds to a minute — that makes the core idea memorable. |
| Vertical slice | A small, polished, representative section of a game that demonstrates final quality across every discipline. |
| Iteration | The repeated cycle of building, testing, learning, and revising that turns a prototype into a design. |
| Critique | Structured, specific feedback focused on the work rather than the person, explaining why something does or does not achieve its goal. |

## Quiz

**1.** What is the primary purpose of a design pillar?

- A) To list every feature the game will contain.
- B) To provide a short principle that resolves design trade-offs and tests whether features belong.
- C) To estimate the project's budget.
- D) To replace the design document.

**2.** The best prototype is the one that:

- A) Looks the most polished.
- B) Contains the most content.
- C) Answers the design's riskiest question at the lowest cost.
- D) Uses the final art.

**3.** During a playtest, the most valuable thing a designer can do is:

- A) Explain the rules before the player starts.
- B) Observe behavior and ask neutral, open questions.
- C) Tell the player when they are playing incorrectly.
- D) Ask whether they liked it.

**4.** A blameless postmortem is valuable because it:

- A) Assigns responsibility so someone can be disciplined.
- B) Focuses on systems, decisions, and lessons so the team improves.
- C) Proves the project was successful.
- D) Avoids discussing failures entirely.

**5.** What distinguishes a vertical slice from an early prototype?

- A) A vertical slice is disposable and unpolished.
- B) A vertical slice is a small, polished sample that shows final quality across disciplines.
- C) A vertical slice contains the entire game.
- D) A vertical slice is only a written document.

**6.** When asked "what would you cut?" the strongest answer is one that:

- A) Refuses to cut anything because everything is essential.
- B) Names features that conflict with the pillars and explains what the game loses.
- C) Cuts the core mechanic to save time.
- D) Lists random features without justification.

**7.** Explain why design pillars make scope decisions easier.

**8.** Why should a playtest report separate raw observations from interpretation?

**9.** Your prototype's core loop is playable, but testers finish it in three minutes and say it "felt fine." Describe the next iteration: what question you would ask, what you would change, and what you would measure.

**10.** You have one week to prepare a portfolio piece from your capstone. List what you would include, and explain how you would present process alongside the finished artifact.

## Answer Key

**1. B** — Pillars are decision tools: when a feature conflicts with a pillar, the pillar helps you cut or change it. They are not feature lists or budgets.

**2. C** — Prototypes exist to reduce uncertainty cheaply. Polish and content are irrelevant if the core question remains unanswered.

**3. B** — Observed behavior is evidence and neutral questions avoid leading the tester. Explaining rules, correcting, and yes/no liking questions all contaminate the data.

**4. B** — Blameless retrospectives surface honest lessons about process and decisions. Blame suppresses information, and ignoring failure teaches nothing.

**5. B** — A vertical slice demonstrates representative final quality in a narrow section; a prototype is rough and built to test an idea cheaply.

**6. B** — Cutting is a design skill. Defensible cuts trace back to the pillars and acknowledge the trade-off, rather than defending everything or sacrificing the core.

**7.** Pillars compress the game's identity into a few principles, so any proposed feature can be tested against them. When time is tight, features that do not serve a pillar are the first to cut, which keeps the project coherent instead of accumulating whatever seemed appealing. *(Accept any answer connecting pillars to consistent, defensible cuts.)*

**8.** Raw observations record what actually happened, while interpretation is the designer's inference about why. Keeping them separate lets others evaluate the evidence and prevents assumptions from being smuggled in as fact, which is the point of testing. *(Accept any answer about evidence integrity and separating data from analysis.)*

**9.** The vague reaction means the prototype is not yet producing a strong aesthetic, so the next question is which moment should create the target feeling and why it is not landing. I would intensify or restructure that moment, extend the loop, and remove anything that dilutes it, then measure session length, where players disengage, and whether their unprompted language matches the intended experience. *(Accept any answer converting vague feedback into a testable change with observable measures.)*

**10.** Include the playable build, the one-page design doc, the pitch, and the postmortem; present process by showing the pillars, one key decision and its rejected alternative, and a before/after iteration driven by playtest evidence, so a reviewer sees how you think. Keep it short and lead with the playable experience. *(Accept any answer demonstrating judgment and iteration, not just a finished build.)*

## Exercises

These exercises are the capstone milestones. Complete them in order across the week.

1. **Milestone 1 — One-page design document and pitch.** Write the one-page doc: title, hook,
   pillars (3–4), core loop, target aesthetic, primary mechanics, audience. Then write a
   30-second elevator pitch. Read it aloud; if you cannot say it without notes, tighten it.

2. **Milestone 2 — Playable prototype.** Build the smallest playable version that tests your
   riskiest assumption. Paper or digital, no final art. Target one coherent 5–10 minute
   experience that another person can play without you narrating. Note in one paragraph which
   question it answers and which it deliberately does not.

3. **Milestone 3 — Playtest report and iteration.** Run sessions with at least three testers.
   Record raw observations separately from interpretation. Choose one change supported by the
   evidence, implement it, and re-test. Then write the **postmortem**, including at least one
   cut you made because it violated a pillar.

### Capstone Rubric

| Criterion | 4 — Strong | 3 — Proficient | 2 — Developing | 1 — Incomplete |
|---|---|---|---|---|
| Design clarity | Pillars are specific and opinionated; every core element serves them. | Pillars are present and mostly guide decisions. | Pillars are vague or generic ("fun"). | No clear pillars or focus. |
| Playable prototype | 5–10 minute experience is coherent, playable unaided, and tests the core assumption. | Playable and coherent with minor rough edges. | Partially playable or needs narration. | Not playable. |
| Playtest evidence and iteration | 3+ testers; observations separated from interpretation; one iteration clearly tied to evidence. | 3 testers and a documented iteration with weaker linkage. | Fewer than 3 testers or no clear iteration. | No playtest evidence. |
| Postmortem and reflection | Honest, blameless; names a pillar-driven cut and concrete lessons. | Reflects on outcomes but is thin on cuts or lessons. | Summarizes events without analysis. | No postmortem. |
| Pitch and communication | Pitch is crisp, specific, and defended with the craft's vocabulary. | Pitch is clear but loose or jargon-light. | Pitch is confusing or overlong. | No pitch. |

## Further Study

- *The Door Problem* by Liz England — a short, widely read essay on what game designers
  actually do, useful for framing your portfolio.
- *Celeste* (Maddy Makes Games) and its postmortem material — a prototype-to-release case
  study with published developer reflections.
- GDC Postmortem talks (Game Developers Conference) — designers reflecting candidly on
  projects that succeeded and failed.
- *The Art of Game Design: A Book of Lenses* by Jesse Schell — a companion lens set for
  pitching and interrogating a design before you build it.

