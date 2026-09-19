---
week: 1
title: "What Game Design Is (and Isn't)"
unit: 1
unitTitle: "Foundations of Game Design"
estimatedMinutes: 90
prerequisites: []
objectives:
  - "Define game design and distinguish it from game development, programming, art, audio, and production."
  - "Explain the rules → play → experience model and use it to trace a designer's choice to a player's feeling."
  - "Identify the disciplines on a typical game team and describe what each contributes to the player experience."
  - "Apply the designer's guiding question — 'what do I want the player to do, feel, and learn?' — to reframe a feature request as an experience goal."
vocabulary:
  - term: "game design"
    definition: "The craft of choosing rules, goals, resources, and interactions that produce a particular player experience; it specifies how a game should behave, not how it is built."
  - term: "game developer"
    definition: "Anyone who contributes to building a game — designers, programmers, artists, audio, QA, and production; the term names the team and the act of building, not specifically design."
  - term: "player experience"
    definition: "The sum of what a player thinks, feels, and does while playing; it is the actual product a designer is trying to manufacture."
  - term: "mechanic"
    definition: "A single rule-governed action or interaction available to the player, such as jumping, firing, blocking, or trading; usually expressed as a verb plus its rules."
  - term: "rule"
    definition: "A constraint that defines what can and cannot happen in the game's system, and therefore what choices exist."
  - term: "goal"
    definition: "The objective or condition a player works toward; goals direct attention and give individual actions meaning."
  - term: "constraint"
    definition: "A limitation on action, time, or resources that makes choices meaningful by forbidding the unlimited, easy answer."
  - term: "systems designer"
    definition: "A designer who specializes in how interlocking rules, numbers, and economies behave as a whole over long spans of play."
  - term: "iteration"
    definition: "The repeated cycle of build, test, observe, and revise that moves a design from a guess toward a known-good experience."
  - term: "designer's question"
    definition: "The recurring prompt 'What do I want the player to do, feel, and learn?' used to orient every decision toward experience rather than features."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which statement best captures the core distinction between game design and game programming?"
    options:
      - "A) Design decides how the game should behave and feel; programming decides how that behavior is implemented."
      - "B) Design is the creative half of the job and programming is the technical half, and the two never overlap."
      - "C) Design is what the lead does; programming is what everyone else does."
      - "D) Design produces art and story; programming produces mechanics."
    answer: "A"
    explanation: "Design specifies the intended behavior and experience; implementation realizes it. B overstates the split, C misstates roles, and D wrongly assigns mechanics to programming."
  - id: 2
    type: "multiple-choice"
    question: "In the rules → play → experience model, what does 'play' refer to?"
    options:
      - "A) The marketing trailer that shows the game in motion."
      - "B) The moment-to-moment behavior that emerges when a player acts inside the rules."
      - "C) The final shipped build of the game."
      - "D) The story the player is told between levels."
    answer: "B"
    explanation: "Play is the dynamic middle layer: the actual session behavior produced by a person acting on the rules. The trailer and build are artifacts, not play."
  - id: 3
    type: "multiple-choice"
    question: "A designer says, 'I want the player to feel a spike of panic when their health is low.' Which part of the craft are they working in?"
    options:
      - "A) Production scheduling"
      - "B) Experience design — defining a target feeling before choosing mechanics"
      - "C) Localization"
      - "D) Engine architecture"
    answer: "B"
    explanation: "The statement names a desired player feeling, which is the experience the designer then engineers rules to produce. The other options are production or implementation concerns."
  - id: 4
    type: "multiple-choice"
    question: "Which question is the designer's guiding question as defined in this lesson?"
    options:
      - "A) 'Is this feature technically feasible?'"
      - "B) 'How many hours of content does this add?'"
      - "C) 'What do I want the player to do, feel, and learn?'"
      - "D) 'Which competitor does this imitate?'"
    answer: "C"
    explanation: "The guiding question keeps the designer oriented toward the player's actions, emotions, and takeaways. Feasibility and content volume are downstream concerns."
  - id: 5
    type: "multiple-choice"
    question: "What is the primary responsibility of a systems designer?"
    options:
      - "A) Writing dialogue and cutscenes."
      - "B) Modeling how interlocking rules, numbers, and economies behave over time as a whole."
      - "C) Building the rendering pipeline."
      - "D) Managing the project schedule."
    answer: "B"
    explanation: "Systems design concerns the behavior of the whole machine of rules and numbers across long play sessions. Dialogue is narrative, rendering is engineering, scheduling is production."
  - id: 6
    type: "multiple-choice"
    question: "Why is it a category error to say 'the design is the game'?"
    options:
      - "A) Because designs are always written down and games are not."
      - "B) Because the game is the experience played by the player, while design is the set of choices intended to produce it."
      - "C) Because design only covers art, which the player never notices."
      - "D) Because a game cannot exist without a publisher."
    answer: "B"
    explanation: "The design is an intention encoded in rules; the game as experienced exists only when a player plays. The two are related but not identical, which is why playtesting exists."
  - id: 7
    type: "short-answer"
    question: "Define player experience in your own words, then name one thing a designer can change to influence it."
    options: []
    answer: "Player experience is the total of what a player thinks, feels, and does while playing. A designer can influence it by changing a rule, a goal, a resource cost, feedback, pacing, or any constraint that shapes player behavior."
    explanation: "The definition must center on the player's inner and outward state, not on the game's content. Any concrete rule-level lever is an acceptable second half."
  - id: 8
    type: "short-answer"
    question: "Explain, in two or three sentences, why a designer benefits from understanding programming, art, and production even though design is distinct from them."
    options: []
    answer: "Design is delivered through technology, visuals, and a schedule, so a designer who understands those disciplines can propose ideas that can actually be built, communicate intent precisely to specialists, and recognize when an experience goal is blocked by a technical or production constraint. Understanding does not mean doing those jobs; it means designing within reach of them."
    explanation: "Look for the idea that design is entangled with execution even though its subject matter — the player's experience — is different."
  - id: 9
    type: "applied"
    question: "A teammate proposes adding a stamina bar to your action game 'because other games have one.' Using this lesson's framing, write the two or three questions you would ask before agreeing, and explain what each is trying to protect."
    options: []
    answer: "Ask: (1) 'What do we want the player to do, feel, and learn that they currently do not?' — this tests whether the feature serves an experience goal. (2) 'What behavior would the stamina bar change moment to moment?' — this tests the rules → play link. (3) 'What would we cut or constrain to pay for it?' — this tests whether the feature earns its complexity. A stamina bar is only justified if it produces a specific, intended player behavior or feeling."
    explanation: "Strong answers convert a competitor-driven feature request into an experience goal and a testable behavioral prediction."
  - id: 10
    type: "applied"
    question: "Players report that a boss feels 'unfair.' Using rules → play → experience, describe how you would locate the problem rather than immediately tuning damage numbers."
    options: []
    answer: "Separate the layers: the rules are the boss's attacks, timings, hitboxes, and resource costs; play is what actually happens in a session (players being hit by attacks they could not see or predict); experience is the felt judgment 'unfair.' I would observe or record play to find the specific rule–play mismatch, then change the rule that causes the unreadable or unavoidable event. That fix then produces a different experience. Tuning damage would move numbers without addressing the mismatch."
    explanation: "The point is to trace the symptom back through play to the responsible rule, rather than treating the felt experience as directly adjustable."
---

# Week 1 — What Game Design Is (and Isn't)

## Why This Matters

You already know how to make software that works. Game design is the adjacent craft of making software that *does something to a person*. That shift — from "does it run?" to "does it produce the intended experience?" — is the whole job, and it changes which questions you ask first. This lesson draws the boundary around the discipline so that everything else in the course has a place to attach.

## Learning Objectives

- Define game design and distinguish it from game development, programming, art, audio, and production.
- Explain the rules → play → experience model and use it to trace a designer's choice to a player's feeling.
- Identify the disciplines on a typical game team and describe what each contributes to the player experience.
- Apply the designer's guiding question to reframe a feature request as an experience goal.

## Lesson

### The job in one sentence

Game design is the craft of deciding what a game should do to the person playing it, and then choosing rules, goals, and interactions that make that happen. A designer's output is not code, and not art. It is a set of decisions about behavior: what the player can do, what it costs, what happens when they succeed or fail, and how the game responds. The concrete artifacts — a design document, a tuning spreadsheet, a level sketch — are only ways of recording those decisions.

The word "design" carries a useful double meaning here. It is both the *plan* and the *result of planning*. In games, the plan is cheap and the result is everything, because the plan almost never survives contact with an actual player. This is why design is inseparable from iteration: you make a decision, you watch a real person interact with it, and you revise.

### What design is not

It is worth being blunt about the boundaries, because they are crossed constantly in casual conversation.

**Design is not programming.** Programming realizes behavior; design specifies which behavior is worth realizing. When a programmer chooses an algorithm, the question is "how do I make this run correctly and fast?" When a designer chooses a rule, the question is "what will this do to the player's choices and feelings?" A programmer can implement a jump with perfect physics and still have a game that jumps badly, because "badly" is a judgment about feel, not correctness.

**Design is not art.** Artists create the game's look and sound; designers decide what the art needs to communicate. An enemy's silhouette, a health bar's color, and the sound of a hit are all feedback systems, and feedback is design territory even when it is delivered through art.

**Design is not production.** Production asks "when will this be done, by whom, and at what cost?" Design asks "is this the right thing at all?" Production keeps a good design shippable; it does not make a bad one good.

**Design is not the same as game development.** "Game developer" is the umbrella term for the whole team and the act of building. A developer might be an engineer, an artist, a producer, a QA tester, or a designer. Using "developer" and "designer" interchangeably hides exactly the distinction this course is built on.

That said, none of these disciplines is isolated. A designer who cannot talk to engineers proposes unbuildable ideas; a designer who cannot talk to artists gets feedback the player cannot read. The disciplines are separate *lenses*, not separate *kingdoms*.

### Rules → play → experience

The most useful model in this course is a three-layer stack:

1. **Rules** are the static specification: what exists, what actions are legal, what they cost, what wins.
2. **Play** is what happens when a player acts inside those rules: the dynamic, moment-to-moment behavior that emerges in a session.
3. **Experience** is what the player thinks, feels, and remembers as a result.

If you come from software, the analogy is almost too convenient: the rules are the source, play is the runtime execution, and experience is the observable outcome you actually care about — except that here the "outcome" is a human emotional state, so you cannot unit-test it directly. You test it with people.

The important property of this stack is that **you design at the top of it and diagnose in the middle.** You begin with an intended experience ("I want players to feel clever and slightly anxious"), you translate that into rules, and then you observe play to see whether the translation worked. When it fails, the failure usually lives at the seam between rules and play, not in the experience itself. You cannot directly dial down "unfair"; you fix the rule that made an attack unreadable, and fairness emerges.

Consider *Super Mario Bros.* The intended experience is buoyant, readable momentum — running and jumping that feel generous even when you are precise. The rules that produce it include forgiving jump arcs, momentum carried through the air, coyote-time-style leniency around edges, and a camera that never lets a hazard approach from an unseeable angle. None of those is "the fun." The fun is the experience; the rules are the machine that manufactures it. Change the jump arc and you have changed the feeling of the entire game.

### The designer as experience architect

It helps to picture the designer as an architect of a building the player will only ever experience by walking through it. The architect does not pour the concrete or install the wiring — but the architect decides where the doors are, how light falls into a room, and what you see when you turn a corner. Players will never read your design document, just as visitors never read blueprints. They will only ever experience the building.

This is why designers talk about *player experience* rather than *features*. *Dark Souls* does not "have" difficulty in the abstract; it produces a specific experience of cautious, earned progress punctuated by dread. *Doom* (1993) does not "have" fast movement; it produces the experience of aggressive forward pressure. Both games are made of rules and numbers, but the numbers exist to serve the feeling. When a designer loses sight of the feeling, the work degenerates into feature collection — stamina bars and crafting menus added because other games have them.

A useful discipline is to state every design decision as a sentence about the player: *the player should feel*, *the player should be tempted to*, *the player should learn that*. If you cannot complete the sentence, you do not yet know why the decision exists.

### Who else is on the team

A typical game team, even a small one, contains roles that map to different layers of the stack:

- **Designers** own the rules, the goals, the balance, the levels, and the intended experience.
- **Engineers** own whether the game runs and how; they build the systems designers tune.
- **Artists and animators** own the visual language and the readability of state.
- **Audio designers** own a huge fraction of moment-to-moment feedback and mood.
- **Producers** own scope, schedule, and the cut list.
- **QA testers** own finding the places where the rules and play diverge from intent.

The specific role called a **systems designer** focuses on how interlocking rules, costs, and economies behave over long spans — the "backend" of the experience. A systems designer on *Civilization* cares less about how one sword fight feels and more about whether the tech tree, production costs, and AI behavior produce interesting strategic tension across four hundred turns. Both are design, at different timescales.

### The designer's guiding question

When you are stuck, or when someone hands you a feature request, there is one question that reliably reorients you: **what do I want the player to do, feel, and learn?**

- *Do* names the behavior: what should the player spend their attention and input on?
- *Feel* names the emotional target: tension, delight, relief, awe, loss.
- *Learn* names the takeaway: the skill, insight, or story the player carries out of the session.

*Portal* wants the player to *do* deliberate spatial reasoning, to *feel* clever and slightly unnerved, and to *learn* that the rules of its world are consistent and worth trusting. Every puzzle and every line of GLaDOS serves that triple. A feature that does not serve the triple is a candidate for the cut list, no matter how fun it sounds in isolation.

## Key Takeaways

- Game design is the craft of producing a chosen player experience through rules, goals, and interactions — not the act of programming, drawing, or scheduling the game.
- The rules → play → experience stack lets you design at the top and diagnose in the middle; you fix rules, not feelings directly.
- The designer is an experience architect: players never see the blueprint, only the building.
- "Game developer" describes the whole team; designers are one discipline among several, each contributing to the experience.
- The guiding question — what should the player do, feel, and learn? — converts feature requests into experience goals.

## Vocabulary

| Term | Definition |
|---|---|
| game design | The craft of choosing rules, goals, resources, and interactions that produce a particular player experience; it specifies how a game should behave, not how it is built. |
| game developer | Anyone who contributes to building a game — designers, programmers, artists, audio, QA, and production; the term names the team and the act of building, not specifically design. |
| player experience | The sum of what a player thinks, feels, and does while playing; it is the actual product a designer is trying to manufacture. |
| mechanic | A single rule-governed action or interaction available to the player, such as jumping, firing, blocking, or trading; usually expressed as a verb plus its rules. |
| rule | A constraint that defines what can and cannot happen in the game's system, and therefore what choices exist. |
| goal | The objective or condition a player works toward; goals direct attention and give individual actions meaning. |
| constraint | A limitation on action, time, or resources that makes choices meaningful by forbidding the unlimited, easy answer. |
| systems designer | A designer who specializes in how interlocking rules, numbers, and economies behave as a whole over long spans of play. |
| iteration | The repeated cycle of build, test, observe, and revise that moves a design from a guess toward a known-good experience. |
| designer's question | The recurring prompt "What do I want the player to do, feel, and learn?" used to orient every decision toward experience rather than features. |

## Quiz

**1. (Multiple choice)** Which statement best captures the core distinction between game design and game programming?

A) Design decides how the game should behave and feel; programming decides how that behavior is implemented.
B) Design is the creative half of the job and programming is the technical half, and the two never overlap.
C) Design is what the lead does; programming is what everyone else does.
D) Design produces art and story; programming produces mechanics.

**2. (Multiple choice)** In the rules → play → experience model, what does "play" refer to?

A) The marketing trailer that shows the game in motion.
B) The moment-to-moment behavior that emerges when a player acts inside the rules.
C) The final shipped build of the game.
D) The story the player is told between levels.

**3. (Multiple choice)** A designer says, "I want the player to feel a spike of panic when their health is low." Which part of the craft are they working in?

A) Production scheduling
B) Experience design — defining a target feeling before choosing mechanics
C) Localization
D) Engine architecture

**4. (Multiple choice)** Which question is the designer's guiding question as defined in this lesson?

A) "Is this feature technically feasible?"
B) "How many hours of content does this add?"
C) "What do I want the player to do, feel, and learn?"
D) "Which competitor does this imitate?"

**5. (Multiple choice)** What is the primary responsibility of a systems designer?

A) Writing dialogue and cutscenes.
B) Modeling how interlocking rules, numbers, and economies behave over time as a whole.
C) Building the rendering pipeline.
D) Managing the project schedule.

**6. (Multiple choice)** Why is it a category error to say "the design is the game"?

A) Because designs are always written down and games are not.
B) Because the game is the experience played by the player, while design is the set of choices intended to produce it.
C) Because design only covers art, which the player never notices.
D) Because a game cannot exist without a publisher.

**7. (Short answer)** Define player experience in your own words, then name one thing a designer can change to influence it.

**8. (Short answer)** Explain, in two or three sentences, why a designer benefits from understanding programming, art, and production even though design is distinct from them.

**9. (Applied)** A teammate proposes adding a stamina bar to your action game "because other games have one." Using this lesson's framing, write the two or three questions you would ask before agreeing, and explain what each is trying to protect.

**10. (Applied)** Players report that a boss feels "unfair." Using rules → play → experience, describe how you would locate the problem rather than immediately tuning damage numbers.

## Answer Key

**1. A** — Design specifies intended behavior and experience; implementation realizes it. B overstates the split, C misstates roles, and D wrongly assigns mechanics to programming.

**2. B** — Play is the dynamic middle layer: session behavior produced by a person acting on the rules. The trailer and the build are artifacts, not play.

**3. B** — The statement names a desired feeling, which is the experience the designer then engineers rules to produce. The others are production or implementation concerns.

**4. C** — The guiding question keeps the designer oriented toward the player's actions, emotions, and takeaways. Feasibility and content volume are downstream concerns.

**5. B** — Systems design concerns how the whole machine of rules and numbers behaves across long play. Dialogue is narrative, rendering is engineering, scheduling is production.

**6. B** — Design is an intention encoded in rules; the experienced game exists only when a player plays. The gap between them is exactly why playtesting exists.

**7.** Player experience is the total of what a player thinks, feels, and does while playing. Any concrete lever — a rule, goal, resource cost, feedback element, or constraint — counts as the second half of the answer.

**8.** Design is delivered through technology, visuals, and a schedule, so a designer who speaks those languages proposes buildable ideas, communicates intent precisely, and spots when an experience goal is blocked by a technical or production constraint. Understanding is not the same as doing those jobs.

**9.** Ask what the player should do, feel, and learn that they currently do not (serves the experience goal); what behavior would change moment to moment (tests the rules → play link); and what would be cut to pay for it (tests whether the complexity earns its place). A stamina bar is justified only by a specific, intended behavioral or emotional result.

**10.** Separate the layers: rules are the boss's attacks, timings, hitboxes, and costs; play is what actually happens (players hit by unreadable or unavoidable attacks); experience is the felt judgment "unfair." Observe play to find the rule–play mismatch, then change that rule. Tuning damage moves numbers without addressing the mismatch.

## Exercises

1. **Boundary sort.** Take five tasks a game team performs each week — for example, "decide how much health a potion restores," "implement potion drinking," "paint the potion icon," "schedule the potion feature," and "test whether potions break the economy." Label each as design, programming, art, production, or QA, and write one sentence explaining the boundary. Where two labels seem defensible, explain why.

2. **Rules → play → experience trace.** Choose a game you know well and pick one moment that produces a strong feeling (a *Dark Souls* boss entrance, a *Tetris* piece-lock at high speed, a *Hades* escape attempt). Write three short paragraphs: the rules that create the situation, the play that unfolds in a session, and the experience a player reports. Then change one rule and predict how the experience shifts.

3. **Feature request reframe.** Find a real feature request in a game you play or an idea of your own. Write the request as it was stated, then rewrite it as an answer to "what do I want the player to do, feel, and learn?" Finally, name the smallest rule change that could test the reframed goal this week — a paper prototype, a pencil sketch, or a single modified number.

## Further Study

- Jesse Schell, *The Art of Game Design: A Book of Lenses* — the definitive treatment of design as experience architecture; the "lenses" are practical thinking tools.
- Tracy Fullerton, *Game Design Workshop* — a strong, exercise-driven introduction that formalizes rules, play, and experience.
- Raph Koster, *A Theory of Fun for Game Design* — an accessible argument that games are pattern-recognition machines and that "fun" is a learning response.
- *The Making of Super Mario Bros.* (developer commentary and interviews collected around the 1985 original) — a concrete case study in tuning rules for feel.
