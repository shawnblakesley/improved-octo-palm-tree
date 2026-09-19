---
week: 2
title: "Games as Systems: MDA and Formal Elements"
unit: 1
unitTitle: "Foundations of Game Design"
estimatedMinutes: 90
prerequisites:
  - "Week 1 — What Game Design Is (and Isn't)"
objectives:
  - "Describe any game as a formal system by identifying its players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes."
  - "Explain the MDA framework and trace a design decision from mechanics through dynamics to aesthetics."
  - "Distinguish reinforcing feedback loops from balancing feedback loops and predict how each shapes long-term play."
  - "Read a game as a system of states and identify the transitions that matter to the player experience."
vocabulary:
  - term: "MDA framework"
    definition: "A model that separates a game into Mechanics (the rules the designer writes), Dynamics (the behavior that emerges during play), and Aesthetics (the emotional responses the player has)."
  - term: "mechanics"
    definition: "The rules, data, and algorithms that define the game's possible behaviors at the level the designer builds; the bottom layer of MDA."
  - term: "dynamics"
    definition: "The runtime behavior that emerges when players act on the mechanics; the middle layer of MDA, and the layer the player actually experiences."
  - term: "aesthetics"
    definition: "The emotional responses the game is designed to evoke; the top layer of MDA and the designer's real target."
  - term: "formal elements"
    definition: "The structural components every game contains: players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes."
  - term: "feedback loop"
    definition: "A chain in which an action's result feeds back to influence future actions; loops can reinforce change or balance it."
  - term: "reinforcing loop"
    definition: "A feedback loop where success produces the means for more success, amplifying a lead and driving toward runaway outcomes."
  - term: "balancing loop"
    definition: "A feedback loop that counteracts change and pushes a system back toward a stable range, such as catch-up mechanics."
  - term: "game state"
    definition: "A snapshot of everything the game currently tracks — positions, resources, scores, flags — that determines what can happen next."
  - term: "systems thinking"
    definition: "Analyzing a game as a web of interacting parts whose combined behavior cannot be understood by looking at any part alone."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which list correctly orders the layers of the MDA framework from what the designer writes to what the player feels?"
    options:
      - "A) Aesthetics → Dynamics → Mechanics"
      - "B) Mechanics → Dynamics → Aesthetics"
      - "C) Mechanics → Aesthetics → Dynamics"
      - "D) Dynamics → Mechanics → Aesthetics"
    answer: "B"
    explanation: "MDA runs Mechanics (rules) → Dynamics (emergent play behavior) → Aesthetics (emotional response). The designer builds from the left; the player experiences from the right."
  - id: 2
    type: "multiple-choice"
    question: "A player exploits a damage-stacking build to trivialize a roguelike. In MDA terms, this is primarily a phenomenon of which layer?"
    options:
      - "A) Mechanics, because the damage formula is in the code."
      - "B) Dynamics, because it emerges from the interaction of mechanics during play."
      - "C) Aesthetics, because the player enjoys it."
      - "D) None — it is a bug, not a design phenomenon."
    answer: "B"
    explanation: "The individual damage numbers are mechanics, but the exploited build only becomes dominant through interaction during play, which is dynamics. The enjoyment is aesthetic, but the described phenomenon is the emergent strategy."
  - id: 3
    type: "multiple-choice"
    question: "Which of the following is NOT one of the formal elements listed in this lesson?"
    options:
      - "A) Boundaries"
      - "B) Procedures"
      - "C) Graphics budget"
      - "D) Conflict"
    answer: "C"
    explanation: "The formal elements are players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes. A graphics budget is a production constraint, not a formal element of the game system."
  - id: 4
    type: "multiple-choice"
    question: "In Monopoly, collecting rent from more properties letting you buy even more properties is an example of what?"
    options:
      - "A) A balancing feedback loop"
      - "B) A reinforcing feedback loop"
      - "C) A formal element called 'outcome'"
      - "D) Input randomness"
    answer: "B"
    explanation: "Success (ownership) produces the means for more success (rent to buy more), amplifying a lead — the definition of a reinforcing loop. A balancing loop would counteract the leader."
  - id: 5
    type: "multiple-choice"
    question: "Why does the MDA separation matter for a designer's workflow?"
    options:
      - "A) It proves games are not art."
      - "B) It reminds the designer that the player experiences dynamics and aesthetics, not the raw mechanics, so tuning must be judged by play, not by rules alone."
      - "C) It shows that aesthetics should always be chosen before mechanics."
      - "D) It means mechanics never need to be tested."
    answer: "B"
    explanation: "Because the player lives in dynamics and aesthetics, a rule that reads perfectly on paper must still be validated in play. That is the practical point of distinguishing the layers."
  - id: 6
    type: "multiple-choice"
    question: "Reading a game 'as a system of states' means describing it as which of the following?"
    options:
      - "A) A list of its art assets."
      - "B) A set of possible states and the transitions between them, driven by player actions and rules."
      - "C) A marketing funnel."
      - "D) A sequence of cutscenes."
    answer: "B"
    explanation: "A state-system view models the game as states (positions, resources, flags) plus transitions (actions and their conditions), which is what makes cause and effect traceable."
  - id: 7
    type: "short-answer"
    question: "Name four of the eight formal elements and give a one-sentence example of each from any game you know."
    options: []
    answer: "Any four of: players (two sides in chess), objectives (capture the flag), procedures (the sequence of a turn), rules (you may not move through pieces), resources (health, gold, ammo), conflict (opposing goals), boundaries (the board or map edges), outcomes (win, lose, draw)."
    explanation: "The point is to show each element concretely rather than recite the list abstractly."
  - id: 8
    type: "short-answer"
    question: "Explain the difference between a reinforcing loop and a balancing loop, and give one game example of each."
    options: []
    answer: "A reinforcing loop amplifies change so success breeds more success (Monopoly rent; snowballing in a real-time strategy game). A balancing loop counteracts change to keep the system stable (Mario Kart-style rubber-banding, or a catch-up mechanic that helps the trailing player)."
    explanation: "The distinction is direction: divergence versus convergence toward a stable range."
  - id: 9
    type: "applied"
    question: "You are designing a wave-defense game and notice that expert players quit around wave 20 because they have become untouchable, while new players quit around wave 5 because they cannot keep up. Using feedback loops, propose one design change for each problem and name the loop type you are adding."
    options: []
    answer: "For experts, add a balancing loop: scale enemy pressure, resource costs, or threats with the player's power so dominance does not compound (for example, stronger enemies appear as your damage grows). For new players, add or strengthen a balancing loop that helps the trailing side — catch-up resources, a grace period, or reduced early pressure. A reinforcing loop for new players (rewards that scale with early success) would deepen the first problem rather than solve it."
    explanation: "Look for one change that counteracts runaway success and one that counteracts early failure, correctly labeled as balancing loops."
  - id: 10
    type: "applied"
    question: "Pick a game you know and identify three aesthetics (kinds of fun) it targets. For each, describe one mechanic that serves it and one dynamic that results, in MDA terms."
    options: []
    answer: "Example: Hades targets challenge (mechanic: enemy patterns and dodge windows; dynamic: tense room clears), discovery (mechanic: randomized boon rewards; dynamic: build experimentation across runs), and narrative (mechanic: relationship flags; dynamic: evolving dialogue between runs). Any game and any three defensible aesthetics with matched mechanics and dynamics is correct."
    explanation: "The answer is strong if each aesthetic is linked to both a mechanic and the emergent dynamic, not just asserted."
---

# Week 2 — Games as Systems: MDA and Formal Elements

## Why This Matters

As an engineer, you already think in systems: inputs, state, transitions, feedback. That instinct is the fastest route into game design, because a game is a formal system with a human in the loop. This lesson gives you two vocabularies for that system — the formal elements, which describe what a game is made of, and MDA, which describes how the parts turn into feelings. Once you can read a game this way, vague reactions like "it feels good" become addressable engineering problems.

## Learning Objectives

- Describe any game as a formal system by identifying its players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes.
- Explain the MDA framework and trace a design decision from mechanics through dynamics to aesthetics.
- Distinguish reinforcing feedback loops from balancing feedback loops and predict how each shapes long-term play.
- Read a game as a system of states and identify the transitions that matter to the player experience.

## Lesson

### What it means to call a game a formal system

Strip away the art, the story, and the sound, and every game is still a system: a set of entities, rules for how they may change, and goals that define success. *Tetris* is seven piece shapes, a gravity rule, a line-clear condition, and an accelerating clock. *Doom* is movement, weapons with damage and ammo, enemies with health and attack behavior, and a spatial objective. The formal description is thin, but it is not impoverished — it is exactly the machine that produces the experience.

Tracy Fullerton's **formal elements** give that machine a checklist. Every game, from *Go* to *Hades*, contains the same structural parts:

- **Players.** Who plays, how many, and in what relationship (cooperative, competitive, solo).
- **Objectives.** What the players are trying to achieve, which is what directs attention.
- **Procedures.** The steps of play — what happens in a turn, a round, a jump arc, a combat exchange.
- **Rules.** What is permitted and forbidden, including the constraints that create the decision space.
- **Resources.** Everything scarce and therefore valuable: health, ammo, time, mana, moves, money.
- **Conflict.** The obstacle, opponent, or tension that makes the objective non-trivial.
- **Boundaries.** The physical or conceptual limits of play — the map edge, the board, the magic circle.
- **Outcomes.** The ways play can end: win, lose, draw, or the open-ended continuation of a sandbox.

Running this checklist over an unfamiliar game is one of the fastest analytical moves you can make. It forces you to notice, for example, that *The Legend of Zelda*'s resources include consumable items *and* the structure of the overworld, and that its boundaries are partly spatial and partly gated.

### The MDA framework

The formal elements describe *what exists*. MDA describes *how it produces feeling*. It splits the game into three layers:

**Mechanics** are the rules, data, and algorithms the designer actually authors: damage numbers, movement speed, spawn rates, win conditions. **Dynamics** are what emerges when players act inside the mechanics: the rush strategy, the camping behavior, the dominant build, the tense standoff. **Aesthetics** are the emotional responses the game evokes: the desired feelings.

The layers run in opposite directions. The designer builds *mechanics → dynamics → aesthetics*, hoping the rules generate the right emergent behavior and therefore the right feelings. The player experiences the reverse: they feel an aesthetic, then notice the dynamics that produced it, and only rarely infer the mechanics underneath. The phrase "the player never sees the code" is not a joke; it is a design constraint.

This is why a change to a number can be invisible or catastrophic. Raise a weapon's damage by ten percent (mechanics) and you may not change the player's moment-to-moment play at all — or you may collapse a careful balance of threat into a power fantasy (dynamics and aesthetics). You cannot predict which from the spreadsheet alone. You predict it by playing.

A concrete example: suppose a designer lowers the reload time on a shotgun (mechanics). Players may respond not by using it more often, but by using it differently — closing distance and playing more aggressively (dynamics) — which nudges the game from a cautious cover shooter toward a brawler (aesthetics). Nothing in the numbers said "aggression." The dynamics appeared because players optimized against the new rule. This is the normal case, not an edge case, and it is why patch notes are design documents in disguise: every balance change is a hypothesis about emergent behavior.

### The eight kinds of fun

MDA's top layer is often taught through an "aesthetics of play" list — eight kinds of fun that a game can pursue. Different sources word the list slightly differently, but the useful set is: **sensation** (sensory pleasure), **fantasy** (make-believe and role-play), **narrative** (story and drama), **challenge** (obstacle and mastery), **fellowship** (social connection), **discovery** (exploration and secrets), **expression** (self-expression and creativity), and **submission** (relaxation, pastime, zoning out).

The list matters because it breaks the assumption that "fun" is one thing. *Tetris* leans hard on challenge and submission. *Dark Souls* leans on challenge and discovery. *Animal Crossing* leans on expression, fellowship, and submission. *Doom* leans on sensation, fantasy, and challenge. A game that tries to maximize all eight at once usually does none of them well; taste and focus are design decisions. When a player says "this isn't fun," the productive follow-up is "which kind of fun were you expecting, and which is this game actually offering?"

### Feedback loops: the engine of long-term play

Systems produce their most interesting behavior through **feedback loops**, where results feed back to shape future actions. Two directions matter.

A **reinforcing loop** amplifies change. In *Monopoly*, owning more property means collecting more rent, which buys more property — the leader accelerates away. In *Civilization*, a strong economy funds more research, which unlocks technologies that strengthen the economy. Reinforcing loops create momentum and runaway winners, which can be thrilling early and miserable late.

A **balancing loop** counteracts change and pulls the system back toward stability. Catch-up mechanics, diminishing returns, and escalating costs are all balancing loops. Many racing games quietly help the trailing player; many strategy games make each additional tech more expensive than the last. Balancing loops keep games from ending before they are decided and keep pressure on the leader.

Most well-designed long games contain both, layered at different timescales. The designer's job is not to eliminate reinforcing loops — they are where dominance and mastery live — but to add balancing loops that keep the game interesting for both the winning and losing player.

Designers rarely get loops right on the first pass. An early playtest of a strategic game usually reveals that one loop dominates: some resource or combo compounds faster than anything else, and players find it within an hour. The fix is not always to weaken the loop; sometimes you strengthen a competing reinforcing loop so the dominant strategy has a rival. Counterplay in the rock-paper-scissors family is a set of balancing loops that keeps a single strong option from becoming the only option. Reading a game as loops, rather than as a list of features, is what lets you predict which way a balance patch will bend.

### Reading a game as a system of states

The final mental model is the **game state**: everything the game currently tracks, at any instant. In a platformer, state is position, velocity, health, the camera, the positions of enemies, and whether the flag is raised. A rule is a function that, given the current state and a player input, produces a next state. Games are, at bottom, state machines with a human choosing some transitions.

If you have ever debugged a state machine, you already know why this view is powerful. Bugs live in transitions: a state the designer never anticipated (a player wedged behind geometry, a quest flagged complete before its prerequisite). Design flaws live there too. *Hades* spends enormous effort on the states between runs — boons, relationships, unlocks — because those transitions are where its long-term pull lives. Reading a game as states and transitions turns "it feels unfair" into "this transition was reachable in a state the rules did not consider."

The point of all three lenses — formal elements, MDA, and state — is **systems thinking**: understanding that the behavior of the whole cannot be read off any single part. You design parts; the player experiences the interaction. That gap is both the difficulty and the joy of the craft.

## Key Takeaways

- Games are formal systems; the eight formal elements are a checklist for describing any of them.
- MDA separates mechanics (authored), dynamics (emergent), and aesthetics (felt); designers build in one direction and players experience in the other.
- "Fun" is plural — the eight aesthetics of play name different, sometimes conflicting targets.
- Reinforcing loops create runaway momentum; balancing loops stabilize; good long games layer both.
- A game is a state machine with a human choosing transitions, and most design failures live in transitions the designer never anticipated.

## Vocabulary

| Term | Definition |
|---|---|
| MDA framework | A model that separates a game into Mechanics (rules the designer writes), Dynamics (behavior that emerges during play), and Aesthetics (emotional responses the player has). |
| mechanics | The rules, data, and algorithms that define the game's possible behaviors at the level the designer builds; the bottom layer of MDA. |
| dynamics | The runtime behavior that emerges when players act on the mechanics; the middle layer of MDA, and the layer the player actually experiences. |
| aesthetics | The emotional responses the game is designed to evoke; the top layer of MDA and the designer's real target. |
| formal elements | The structural components every game contains: players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes. |
| feedback loop | A chain in which an action's result feeds back to influence future actions; loops can reinforce change or balance it. |
| reinforcing loop | A feedback loop where success produces the means for more success, amplifying a lead and driving toward runaway outcomes. |
| balancing loop | A feedback loop that counteracts change and pushes a system back toward a stable range, such as catch-up mechanics. |
| game state | A snapshot of everything the game currently tracks — positions, resources, scores, flags — that determines what can happen next. |
| systems thinking | Analyzing a game as a web of interacting parts whose combined behavior cannot be understood by looking at any part alone. |

## Quiz

**1. (Multiple choice)** Which list correctly orders the layers of the MDA framework from what the designer writes to what the player feels?

A) Aesthetics → Dynamics → Mechanics
B) Mechanics → Dynamics → Aesthetics
C) Mechanics → Aesthetics → Dynamics
D) Dynamics → Mechanics → Aesthetics

**2. (Multiple choice)** A player exploits a damage-stacking build to trivialize a roguelike. In MDA terms, this is primarily a phenomenon of which layer?

A) Mechanics, because the damage formula is in the code.
B) Dynamics, because it emerges from the interaction of mechanics during play.
C) Aesthetics, because the player enjoys it.
D) None — it is a bug, not a design phenomenon.

**3. (Multiple choice)** Which of the following is NOT one of the formal elements listed in this lesson?

A) Boundaries
B) Procedures
C) Graphics budget
D) Conflict

**4. (Multiple choice)** In Monopoly, collecting rent from more properties letting you buy even more properties is an example of what?

A) A balancing feedback loop
B) A reinforcing feedback loop
C) A formal element called "outcome"
D) Input randomness

**5. (Multiple choice)** Why does the MDA separation matter for a designer's workflow?

A) It proves games are not art.
B) It reminds the designer that the player experiences dynamics and aesthetics, not raw mechanics, so tuning must be judged by play.
C) It shows that aesthetics should always be chosen before mechanics.
D) It means mechanics never need to be tested.

**6. (Multiple choice)** Reading a game "as a system of states" means describing it as which of the following?

A) A list of its art assets.
B) A set of possible states and the transitions between them, driven by player actions and rules.
C) A marketing funnel.
D) A sequence of cutscenes.

**7. (Short answer)** Name four of the eight formal elements and give a one-sentence example of each from any game you know.

**8. (Short answer)** Explain the difference between a reinforcing loop and a balancing loop, and give one game example of each.

**9. (Applied)** You are designing a wave-defense game and notice that expert players quit around wave 20 because they have become untouchable, while new players quit around wave 5 because they cannot keep up. Using feedback loops, propose one design change for each problem and name the loop type you are adding.

**10. (Applied)** Pick a game you know and identify three aesthetics (kinds of fun) it targets. For each, describe one mechanic that serves it and one dynamic that results, in MDA terms.

## Answer Key

**1. B** — MDA runs Mechanics → Dynamics → Aesthetics. The designer builds from the left; the player experiences from the right.

**2. B** — The damage numbers are mechanics, but the dominant build only exists through interaction during play, which is dynamics. The enjoyment is an aesthetic response to it.

**3. C** — The formal elements are players, objectives, procedures, rules, resources, conflict, boundaries, and outcomes. A graphics budget is a production constraint, not a formal element.

**4. B** — Success (ownership) produces the means for more success (rent to buy more), amplifying a lead — the definition of a reinforcing loop.

**5. B** — Because the player lives in dynamics and aesthetics, a rule that reads perfectly on paper must still be validated in play. That is the practical payoff of the distinction.

**6. B** — A state-system view models states (positions, resources, flags) plus transitions (actions and their conditions), which makes cause and effect traceable.

**7.** Any four of: players, objectives, procedures, rules, resources, conflict, boundaries, outcomes — each with a concrete example. The point is concreteness, not recitation.

**8.** A reinforcing loop amplifies change so success breeds more success (Monopoly rent; RTS snowballing). A balancing loop counteracts change to keep the system stable (catch-up mechanics, rising costs). The distinction is direction.

**9.** For experts, add a balancing loop that scales threat or cost with player power so dominance does not compound. For new players, add or strengthen a balancing loop that helps the trailing side. A reinforcing loop for new players would worsen the first problem.

**10.** Example: Hades targets challenge (mechanic: enemy patterns and dodge windows; dynamic: tense room clears), discovery (mechanic: randomized boons; dynamic: build experimentation), and narrative (mechanic: relationship flags; dynamic: evolving dialogue). Any game with three defensible aesthetics linked to mechanics and dynamics is correct.

## Exercises

1. **Formal-element teardown.** Choose one game and write its eight formal elements in a table. Then mark which element carries the most design weight in that game and justify your choice in two sentences.

2. **MDA trace.** Pick a single mechanic from a game you know — a resource cost, a reload time, a spawn rate. Write one sentence for the mechanic, one for the dynamic you expect it to produce, and one for the aesthetic it serves. Then describe an observation from play that would prove or disprove your prediction.

3. **Loop hunt.** Analyze a game you have played for at least ten hours and identify at least two reinforcing loops and two balancing loops. For each, write whether it becomes more or less noticeable as play continues, and propose one change that would alter the loop's strength.

## Further Study

- Robin Hunicke, Marc LeBlanc, and Robert Zubek, "MDA: A Formal Approach to Game Design and Game Research" (2004) — the original short paper; reads in under a half hour.
- Tracy Fullerton, *Game Design Workshop* — the formal-elements framework comes from here and is developed at length.
- *Civilization VI* and *Monopoly* — play (or re-play) one of these specifically to watch reinforcing and balancing loops operate over time.
- Donella Meadows, *Thinking in Systems* — the clearest general introduction to feedback loops, stock-and-flow reasoning, and leverage points, applicable well beyond games.
