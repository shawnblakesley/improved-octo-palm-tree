---
week: 29
title: "Prototyping and Iteration"
unit: 8
unitTitle: "Production, Ethics & Players"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1–28"
objectives:
  - "Write a falsifiable design hypothesis for a proposed mechanic."
  - "Select the cheapest prototype form capable of answering a specific design question."
  - "Run a rapid iteration loop and record what each pass taught you."
  - "Distinguish a prototype, a minimum viable product, and a vertical slice."
  - "Decide when to kill a prototype using criteria committed to in advance."
vocabulary:
  - term: "Prototype"
    definition: "A deliberately incomplete, disposable artifact built to answer one specific design question before committing real production effort."
  - term: "Paper prototype"
    definition: "A prototype made of cards, tokens, and boards in which humans resolve the rules by hand; ideal for turn-based systems, economies, and choice structures."
  - term: "Vertical slice"
    definition: "A small section of the game built to final quality across every discipline, used to prove the team can hit the target and to define what 'done' looks like."
  - term: "Graybox"
    definition: "Untextured, unlit blockout geometry used to test scale, sightlines, and route readability without the distraction of finished art."
  - term: "MVP"
    definition: "Minimum viable product: the smallest version of the game that delivers real value to real players and can ship; a product decision, not a learning artifact."
  - term: "Fail fast"
    definition: "The practice of surfacing invalid assumptions as early and cheaply as possible so that bad ideas are abandoned before they consume production budget."
  - term: "Iteration loop"
    definition: "The repeating cycle of state a hypothesis, build the cheapest test, observe a player, record the result, and revise or kill."
  - term: "Design hypothesis"
    definition: "A falsifiable claim about player experience that a prototype is built to test; it must be capable of being proven wrong."
  - term: "Rapid prototyping"
    definition: "Producing many rough, fast versions of an idea in quick succession, accepting ugliness and impermanence in exchange for speed of learning."
  - term: "Playable"
    definition: "A state in which a person other than the author can operate the build without the author narrating the rules or controls."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What is the primary purpose of a prototype?"
    options:
      - "A) To demonstrate final art and audio quality to stakeholders"
      - "B) To answer one specific design question cheaply and early"
      - "C) To serve as the foundation of the shipping codebase"
      - "D) To satisfy a publisher milestone requirement"
    answer: "B"
    explanation: "A prototype is an instrument for learning, so it exists to answer a question. Art quality, shipping foundations, and milestone paperwork are separate concerns that belong to other artifacts."
  - id: 2
    type: "multiple-choice"
    question: "Which of these is a design hypothesis rather than a feature request?"
    options:
      - "A) Add a grappling hook to the traversal kit."
      - "B) Players will use the grapple to bypass intended routes, so its range should be capped."
      - "C) The grapple should have a two-second cooldown."
      - "D) Grappling hooks are popular in comparable games."
    answer: "B"
    explanation: "A hypothesis makes a falsifiable prediction about player behavior. A is a feature, C is an implementation detail, and D is an appeal to popularity, none of which can be proven wrong by a playtest."
  - id: 3
    type: "multiple-choice"
    question: "A vertical slice differs from a prototype in that a vertical slice…"
    options:
      - "A) is always made of paper and tokens"
      - "B) represents final-quality work across every discipline for a small section"
      - "C) cannot be playtested by outside players"
      - "D) is simply another word for MVP"
    answer: "B"
    explanation: "A vertical slice executes one narrow path to production standard so the team has a shared definition of done. A prototype is disposable and answers a question; an MVP is a shippable product."
  - id: 4
    type: "multiple-choice"
    question: "A minimum viable product is best described as…"
    options:
      - "A) a throwaway build used to test a single assumption"
      - "B) the smallest product that delivers real value to players and can ship"
      - "C) an untextured blockout of a level"
      - "D) a written description of the game's rules"
    answer: "B"
    explanation: "The MVP is defined by value to players and shippability. The throwaway build is a prototype and the untextured blockout is a graybox."
  - id: 5
    type: "multiple-choice"
    question: "In design practice, 'fail fast' means…"
    options:
      - "A) ship the game early and patch the problems later"
      - "B) surface invalid assumptions as early and cheaply as possible"
      - "C) make the difficulty punishing so players learn quickly"
      - "D) avoid all playtesting until the game is polished"
    answer: "B"
    explanation: "Fail fast is about the cost of being wrong, not the speed of release. Its purpose is to abandon bad assumptions before they consume production budget."
  - id: 6
    type: "multiple-choice"
    question: "Why is a paper prototype often the right choice for testing a turn-based resource economy?"
    options:
      - "A) Paper is more entertaining than a digital build."
      - "B) It tests rules, incentives, and turn structure without any engine work."
      - "C) Publishers require a paper version before funding."
      - "D) It removes the need for any later playtesting."
    answer: "B"
    explanation: "A human resolving the rules can test a turn-based system faster than code can be written. Paper cannot test moment-to-moment game feel, and it never removes the need for later testing."
  - id: 7
    type: "short-answer"
    question: "Define 'graybox' and give one reason a designer uses one."
    answer: "A graybox is untextured, unlit blockout geometry that establishes scale, sightlines, and routes. Designers use it because finished art can make a bad space look good and hide whether the layout actually reads."
    explanation: "The graybox tells the truth about readability, whereas a beautiful art pass can flatter poor layout and mislead the team."
  - id: 8
    type: "short-answer"
    question: "Why should prototype code be treated as disposable, and what is the risk of instead treating it as the foundation of the shipping game?"
    answer: "A prototype deliberately ignores architecture, persistence, performance, and edge cases so it can answer its question quickly. Promoting it to the foundation means inheriting a codebase optimized for the wrong goal, which is technical debt taken on after the loan was already repaid."
    explanation: "The prototype's shortcuts are correct for learning and wrong for shipping. Keep it only as a deliberate, late decision made after the design question is settled."
  - id: 9
    type: "applied"
    question: "A team spends eight months building final art and animation before anyone plays the core combat loop. When they finally test it, the loop is boring. Diagnose the process failure and prescribe a fix."
    answer: "The team never pulled its load-bearing assumption — that the core loop is satisfying — to the front of the schedule, so it incurred full production cost on an unvalidated core. The fix is to prototype the core loop first in the cheapest playable form, state the hypothesis explicitly, and set kill criteria before building content, then add art only once the loop survives testing."
    explanation: "Polish cannot repair a bad core; a polished bad loop is still bad. Prototyping de-risks the assumptions that would sink the project."
  - id: 10
    type: "applied"
    question: "You need to find out whether the tension of 'almost being seen' in a stealth game actually works. Choose a prototype medium, state the question as a hypothesis, and name one thing you would measure."
    answer: "Use a graybox digital prototype, because the question is about spatial tension and moment-to-moment feel rather than turn-based rules. Example hypothesis: 'Players will slow down, check sightlines, and report tension when a guard's vision cone sweeps near them without detecting them.' Measure time-per-room, detection counts, and players' own descriptions of tension."
    explanation: "The medium must match the question; feel questions need real-time geometry and timing, not paper. The hypothesis must be falsifiable and imply a measurement."
---

# Week 29 — Prototyping and Iteration

## Why This Matters

You already prototype. Every time you write a throwaway spike to find out whether an API can do what you need, you are doing exactly what a game designer does. The difference is that your spikes de-risk *feasibility* — can this be built? — while a game prototype de-risks *experience*: is the thing worth building at all? That question cannot be answered from a spec, a pitch deck, or a design document, because the answer lives in a human nervous system. Prototyping and iteration are how designers get at it. This is the part of the craft where your existing habits help most and mislead most.

## Learning Objectives

- Write a falsifiable design hypothesis for a proposed mechanic.
- Select the cheapest prototype form capable of answering a specific design question.
- Run a rapid iteration loop and record what each pass taught you.
- Distinguish a prototype, a minimum viable product, and a vertical slice.
- Decide when to kill a prototype using criteria committed to in advance.

## Lesson

### A prototype is a question, not a product

Every prototype exists to answer one specific question. If you cannot state that question in a single sentence, you are not prototyping; you are building a smaller version of the whole game, which is strictly worse than building the whole game because you will eventually throw it away. "Will players understand that the glowing chest can be opened?" "Does backing away while firing feel tense or merely fiddly?" "Is melee range readable from this camera angle?" A prototype that answers none of these — but ships with a menu, a save system, and a settings screen — has failed at prototyping even as it succeeded at software engineering.

This reframing changes what "done" means. A prototype is done the moment it has produced a trustworthy answer. Not when the code is clean. Not when it is extensible. Not when it is pretty. Valve's *Portal* is the canonical example: the core mechanic originated in a student project called *Narbacular Drop*, and the question "does moving through linked portals feel spatial and comprehensible?" was answered in an unpolished build long before the sterile Aperture aesthetic existed. The aesthetic was built on top of the answer, not in place of it.

### Write the question as a design hypothesis

A **design hypothesis** is a falsifiable claim about player experience. It is the prototype's specification, and like a good unit test it must be capable of failing.

- Feature request: "Add a crafting system."
- Hypothesis: "Players will spend more time experimenting with recipes than gathering materials, and will describe crafting as self-expression rather than chores."

The first cannot be wrong, so it cannot teach you anything. The second can be wrong, and its wrongness is information. Notice how the hypothesis also implies its own measurement: time in the crafting menu versus time gathering, and the language players use afterward. Before you build, write down what result would make you abandon the idea. If no result would change your mind, you are not testing; you are decorating a decision you already made.

There is an engineering discipline hidden here. This is the same move as stating a falsifiable performance budget before optimizing: "the frame must hold 16 ms at 200 entities." Without the number, "performance is fine" is unfalsifiable. Without the hypothesis, "the prototype feels good" is equally empty.

### Choose the cheapest medium that can answer the question

Prototypes trade fidelity for speed. Match the form to the question, not to your ambitions.

**Paper prototypes** are the cheapest. You represent the rules with cards, tokens, and a board, and you play by hand. Paper is superb for turn-based systems, economies, resource curves, and choice structures, because a human resolves the rules faster than you can write them. Board games are effectively paper prototypes that shipped, and designers still build physical versions of digital systems to find out whether the numbers feel fair before a line of code exists. What paper cannot test is moment-to-moment feel — timing, input latency, camera. Never use paper to answer a game-feel question.

**Grayboxing** is the level designer's version of a paper prototype. A **graybox**, also called a blockout, is untextured, unlit geometry — cubes and ramps — that establishes scale, sightlines, and routes. Designers use it because art is expensive and misleading: a beautiful wall can convince you a bad corridor is good, while a gray corridor tells the truth about whether a space reads. The question "can players find the exit without a map?" is answerable in gray.

**Rapid prototyping** means accepting ugly work in exchange for speed. The best rapid prototypes are often text-only or assembled from primitives, and they are almost always throwaway. A **playable** prototype is one a person other than its author can operate without the author narrating the rules. That is a low bar that most first attempts fail, and clearing it is the whole point: if a tester needs you to explain the game, you have learned nothing about the game.

### Disposable, not foundational

This is the hardest lesson for engineers, because everything in our training says to build things that last. Prototype work is scaffolding, and scaffolding is meant to come down. A prototype deliberately ignores architecture, performance, persistence, and edge cases, because every one of those costs time that buys no new information. That is not laziness; it is the correct allocation of a fixed budget.

The failure mode is treating a prototype as the trunk of the shipping codebase. Now you have inherited a foundation optimized for the wrong thing: no save system, no networking, no content pipeline, and a global singleton holding "temporary" state. This is **technical debt** taken on for a loan you already repaid. Sometimes a prototype is worth promoting — *Minecraft* began small and grew, and *Slay the Spire* grew out of a game-jam experiment that merged deckbuilding with a roguelike — but the decision to keep it should be deliberate and late, made after the design question is settled rather than by default because the code exists.

### MVP and vertical slice are not prototypes

Three terms get collapsed constantly, so keep them separate.

- A **prototype** answers a question and is disposable. Its audience is the team.
- A **minimum viable product (MVP)** is the smallest version of the game that delivers real value to real players and can ship. Its audience is the market. An MVP is a product decision; a prototype is a learning decision.
- A **vertical slice** is a small section of the game built to final quality across every discipline — art, audio, animation, UI — to prove the team can hit the target and to align everyone on what "done" looks like. A vertical slice is a production instrument.

The distinctions map cleanly onto engineering. A prototype is a spike. An MVP is a v1 release with the non-essential features deferred. A vertical slice is a reference implementation: one narrow path executed to production standard so the rest of the project has a standard to copy.

### The iteration loop

Prototyping only pays off inside a loop:

1. State the hypothesis.
2. Build the cheapest artifact that can test it.
3. Put it in front of a player and watch.
4. Record what happened, especially where you were wrong.
5. Revise or kill, then repeat.

The loop's speed matters more than the quality of any single pass. Ten ugly passes beat one beautiful one, because each pass is a measurement. Nintendo's design culture is built on this search — the phrase "find the fun" describes a process, and Shigeru Miyamoto's habit of "upending the tea table" is a deliberate late-stage iteration that discards acceptable work in pursuit of better work. In practice, designers time-box each iteration: a day for a paper pass, a week for a digital one. When the box expires, you must decide: keep, revise, or kill.

### Testing assumptions, not polishing

Every project rests on a stack of assumptions, and the expensive ones sit at the bottom: that the core verb is satisfying, that the camera works, that players want the thing at all. Bugs in those assumptions cannot be fixed by polish; a polished bad core is still bad. Prototyping is the practice of pulling load-bearing assumptions to the front of the schedule. Ask "what would make this project fail?" and prototype that first, not the parts you already know how to build. Teams love to prototype the parts they enjoy, which is procrastination with a demo at the end.

### Kill criteria and the programmer's advantage

You need **fail fast** discipline, which means committing to kill criteria before you build. "If players cannot describe the core loop back to me after five minutes, I will cut the mechanic." Sunk cost is the enemy, and the prototype is cheap precisely so that killing it is cheap.

Here is where you, as a programmer, have an unusual advantage. You can wire up instrumentation on day one: log every input, time every session, chart every death. You can expose tuning values as data instead of constants so that iteration becomes an edit rather than a recompile. You can build the harness that makes ten passes possible in the time others manage two. That is a genuine edge in this craft. The trap is over-building. The moment a prototype gains a feature that does not serve the hypothesis — an options menu, a camera mode, a clever architecture — you have stopped buying information and started buying comfort. The best prototypers are programmers who have learned to stop early.

### When to stop

Iteration has diminishing returns and a horizon. The signal to stop is not "it is perfect" but "further changes no longer change the answer." Once players consistently experience what you intended, the remaining work belongs to production, not prototyping. Confusing the two is how projects spend years being "almost done."

## Key Takeaways

- A prototype is an instrument for answering one falsifiable design question, and it is finished when it has produced a trustworthy answer.
- Match the medium to the question: paper for rules and economies, graybox for space and readability, real-time builds for feel.
- Treat prototype work as disposable scaffolding; promoting it to the shipping foundation is debt incurred after the loan was repaid.
- Prototype, MVP, and vertical slice are different instruments with different audiences: the team, the market, and production.
- Run the loop fast, write down kill criteria in advance, and let evidence — not pride — decide what survives.
- Use your instrumentation and data-driven tuning skills, but stop the moment a feature stops buying information.

## Vocabulary

| Term | Definition |
|---|---|
| Prototype | A deliberately incomplete, disposable artifact built to answer one specific design question before committing real production effort. |
| Paper prototype | A prototype made of cards, tokens, and boards in which humans resolve the rules by hand; ideal for turn-based systems, economies, and choice structures. |
| Vertical slice | A small section of the game built to final quality across every discipline, used to prove the team can hit the target and to define what "done" looks like. |
| Graybox | Untextured, unlit blockout geometry used to test scale, sightlines, and route readability without the distraction of finished art. |
| MVP | Minimum viable product: the smallest version of the game that delivers real value to real players and can ship; a product decision, not a learning artifact. |
| Fail fast | The practice of surfacing invalid assumptions as early and cheaply as possible so that bad ideas are abandoned before they consume production budget. |
| Iteration loop | The repeating cycle of state a hypothesis, build the cheapest test, observe a player, record the result, and revise or kill. |
| Design hypothesis | A falsifiable claim about player experience that a prototype is built to test; it must be capable of being proven wrong. |
| Rapid prototyping | Producing many rough, fast versions of an idea in quick succession, accepting ugliness and impermanence in exchange for speed of learning. |
| Playable | A state in which a person other than the author can operate the build without the author narrating the rules or controls. |

## Quiz

**1. What is the primary purpose of a prototype?**
A) To demonstrate final art and audio quality to stakeholders
B) To answer one specific design question cheaply and early
C) To serve as the foundation of the shipping codebase
D) To satisfy a publisher milestone requirement

**2. Which of these is a design hypothesis rather than a feature request?**
A) Add a grappling hook to the traversal kit.
B) Players will use the grapple to bypass intended routes, so its range should be capped.
C) The grapple should have a two-second cooldown.
D) Grappling hooks are popular in comparable games.

**3. A vertical slice differs from a prototype in that a vertical slice…**
A) is always made of paper and tokens
B) represents final-quality work across every discipline for a small section
C) cannot be playtested by outside players
D) is simply another word for MVP

**4. A minimum viable product is best described as…**
A) a throwaway build used to test a single assumption
B) the smallest product that delivers real value to players and can ship
C) an untextured blockout of a level
D) a written description of the game's rules

**5. In design practice, "fail fast" means…**
A) ship the game early and patch the problems later
B) surface invalid assumptions as early and cheaply as possible
C) make the difficulty punishing so players learn quickly
D) avoid all playtesting until the game is polished

**6. Why is a paper prototype often the right choice for testing a turn-based resource economy?**
A) Paper is more entertaining than a digital build.
B) It tests rules, incentives, and turn structure without any engine work.
C) Publishers require a paper version before funding.
D) It removes the need for any later playtesting.

**7. (Short answer) Define "graybox" and give one reason a designer uses one.**

**8. (Short answer) Why should prototype code be treated as disposable, and what is the risk of instead treating it as the foundation of the shipping game?**

**9. (Applied) A team spends eight months building final art and animation before anyone plays the core combat loop. When they finally test it, the loop is boring. Diagnose the process failure and prescribe a fix.**

**10. (Applied) You need to find out whether the tension of "almost being seen" in a stealth game actually works. Choose a prototype medium, state the question as a hypothesis, and name one thing you would measure.**

## Answer Key

1. **B.** A prototype is an instrument for learning, so it exists to answer a question. Art quality, shipping foundations, and milestone paperwork belong to other artifacts.

2. **B.** A hypothesis makes a falsifiable prediction about player behavior. A is a feature, C is an implementation detail, and D is an appeal to popularity.

3. **B.** A vertical slice executes one narrow path to production standard so the team shares a definition of done. A prototype is disposable; an MVP is a shippable product.

4. **B.** The MVP is defined by value to players and shippability. The throwaway build is a prototype, and the untextured blockout is a graybox.

5. **B.** Fail fast is about the cost of being wrong, not the speed of release; its purpose is to abandon bad assumptions before they consume budget.

6. **B.** A human resolving the rules can test a turn-based system faster than code can be written. Paper cannot test real-time feel and never removes the need for later testing.

7. **A graybox is untextured, unlit blockout geometry that establishes scale, sightlines, and routes.** Designers use it because finished art can make a bad space look good and hide whether the layout actually reads.

8. **A prototype deliberately ignores architecture, persistence, performance, and edge cases so it can answer its question quickly.** Promoting it to the shipping foundation means inheriting a codebase optimized for the wrong goal — technical debt taken on after the loan was repaid.

9. **The team never pulled its load-bearing assumption — that the core loop is satisfying — to the front of the schedule, so it paid full production cost on an unvalidated core.** The fix is to prototype the loop first in the cheapest playable form, state the hypothesis, set kill criteria, and add art only after the loop survives testing.

10. **Use a graybox digital prototype, because the question is about spatial tension and moment-to-moment feel rather than turn-based rules.** Example hypothesis: "Players will slow down, check sightlines, and report tension when a guard's vision cone sweeps near them without detecting them." Measure time-per-room, detection counts, and players' descriptions of tension.

## Exercises

1. **Hypothesis drill.** Take three features currently in your design journal and rewrite each as a falsifiable design hypothesis, including the measurement each one implies and the result that would make you kill it.
2. **Hands-on: paper prototype a system.** Choose a turn-based or economic system (combat resolution, a shop, a resource loop) and build a playable paper prototype from index cards. Run it with one other person, then write a half-page report stating the question you asked, what happened, and what you changed.
3. **Medium selection.** For each question below, choose the cheapest prototype form (paper, graybox, or real-time digital) and justify the choice in two sentences: (a) Is the stealth-vision tension readable? (b) Does the shop economy produce meaningful trade-offs? (c) Does the jump arc feel responsive?

## Further Study

- Tracy Fullerton, *Game Design Workshop* — the prototyping and playtesting chapters are the standard practical reference for low-fidelity design work.
- Jesse Schell, *The Art of Game Design: A Book of Lenses* — several lenses directly address iteration and the risk of over-building.
- Eric Ries, *The Lean Startup* — the build–measure–learn loop and the MVP concept, aimed at software generally but immediately transferable to game design.
- The GDC postmortem for *Narbacular Drop* / *Portal* and game-jam communities such as Ludum Dare and the Global Game Jam, which are rapid-prototyping practice at scale.
