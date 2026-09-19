---
week: 21
title: "Designing Puzzles and Obstacles"
unit: 6
unitTitle: "Challenge, Enemies & AI"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1–20"
objectives:
  - "Define a puzzle as a searchable solution space rather than a hidden answer."
  - "Deconstruct a puzzle into its teach, test, and twist beats."
  - "Diagram the dependency graph of a multi-step puzzle or lock-and-key sequence."
  - "Design a layered hint system that preserves the player's ownership of the aha moment."
  - "Distinguish open-ended puzzles from authored puzzles and choose appropriately."
vocabulary:
  - term: "Puzzle"
    definition: "A system with a goal, a set of legal moves, constraints on those moves, and feedback that lets the player search for a solution."
  - term: "Aha moment"
    definition: "The instant a player's existing knowledge reorganizes into the solution; it is the unit of satisfaction in puzzle design."
  - term: "Teach–test–twist"
    definition: "A sequencing structure that introduces one rule safely, applies it under pressure, then subverts or combines it to force generalization."
  - term: "Affordance"
    definition: "A property of an object or space that suggests how it can be used, making a solution visible to the player."
  - term: "Constraint"
    definition: "A limit on the moves available to the player; constraints prune the search space and make a puzzle elegant rather than trivial."
  - term: "Hint system"
    definition: "A layered mechanism that nudges a stuck player by confirming attention or restating rules without naming the solution."
  - term: "Dependency graph"
    definition: "A diagram of preconditions and the operations that satisfy them, used to see a puzzle's critical path, optional branches, and shortcuts."
  - term: "Solution space"
    definition: "The set of all states reachable from the start of a puzzle, and the subset of those that reach the goal."
  - term: "Open-ended puzzle"
    definition: "A puzzle with a rich rule set and many valid solutions, usually scored on efficiency or expression rather than correctness."
  - term: "Cognitive challenge"
    definition: "The mental load a puzzle places on working memory, inference, and planning, as distinct from execution difficulty."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "According to the lesson, which element is required for a system to count as a puzzle?"
    options:
      - "A) A timer that punishes slow play"
      - "B) A goal state, legal moves, constraints, and feedback"
      - "C) An opponent that reacts to the player"
      - "D) A narrative justification for the challenge"
    answer: "B"
    explanation: "The lesson defines a puzzle by a goal, moves, constraints, and feedback; timers, opponents, and story are optional context, not defining features."
  - id: 2
    type: "multiple-choice"
    question: "What is the 'aha' moment in puzzle design?"
    options:
      - "A) The moment the player gives up and asks for a hint"
      - "B) The moment the player first sees the puzzle's interface"
      - "C) The instant the player's existing knowledge reorganizes into the solution"
      - "D) The moment the designer reveals the intended solution in a cutscene"
    answer: "C"
    explanation: "The aha moment is a reorganization of information the player already had, which is why it feels like discovery rather than instruction."
  - id: 3
    type: "multiple-choice"
    question: "In the teach–test–twist structure, what does the 'twist' do?"
    options:
      - "A) It removes the rule the player just learned"
      - "B) It subverts or combines the rule so the player must generalize it"
      - "C) It introduces a boss that uses the rule against the player"
      - "D) It repeats the test with a shorter timer"
    answer: "B"
    explanation: "The twist forces the player to re-derive the principle in a new context instead of merely repeating a memorized sequence."
  - id: 4
    type: "multiple-choice"
    question: "What is the main design value of drawing a puzzle's dependency graph?"
    options:
      - "A) It proves the puzzle is mathematically solvable"
      - "B) It estimates how many players will finish the puzzle"
      - "C) It reveals the critical path, optional branches, and accidental shortcuts"
      - "D) It generates the puzzle's hint text automatically"
    answer: "C"
    explanation: "The graph exposes ordering, genuine choices, and degenerate solutions that bypass the intended chain — exactly what playtesters exploit."
  - id: 5
    type: "multiple-choice"
    question: "Which behavior best describes a well-designed hint system?"
    options:
      - "A) It offers the full solution immediately so players never get stuck"
      - "B) It confirms the player is looking at the right elements and restates relevant rules without naming the solution"
      - "C) It disables after the first use to preserve difficulty"
      - "D) It withholds all help so that online guides become the only recourse"
    answer: "B"
    explanation: "Hints should increase information density slowly and preserve the player's ownership of the aha moment."
  - id: 6
    type: "multiple-choice"
    question: "What is the primary cost of an open-ended puzzle compared with an authored one?"
    options:
      - "A) It always requires more expensive art"
      - "B) It cannot be scored or finished"
      - "C) Its aha moment is diffuse and its difficulty curve is harder to control"
      - "D) It has no replay value"
    answer: "C"
    explanation: "Open-ended puzzles trade precise control of discovery for replay value and expression, so the designer cannot guarantee a single clean insight."
  - id: 7
    type: "scenario"
    question: "Players are brute-forcing a four-symbol combination lock by trying every permutation instead of reasoning about the clues. What is the best fix?"
    options:
      - "A) Increase the number of symbols so brute force takes longer"
      - "B) Add a small penalty for each wrong attempt so guessing is discouraged"
      - "C) Rework the clues so they logically constrain the possible symbols, making the lock a deduction rather than a guess"
      - "D) Add a hint button that reveals the combination"
    answer: "C"
    explanation: "The real problem is a password, not a puzzle: the clues do not constrain the search. Restoring structure to the clues makes the search deducible, while a penalty only discourages the symptom."
  - id: 8
    type: "scenario"
    question: "A puzzle requires cutting a painting from its frame, but most players never consider it. What is the most designerly intervention?"
    options:
      - "A) Make the painting glow and add a tooltip that says 'Cut painting'"
      - "B) Add a locked door nearby so players wander back"
      - "C) Make the painting visibly ragged at the edges and place a blade on a table in the same room"
      - "D) Remove the puzzle and replace it with a lever"
    answer: "C"
    explanation: "This strengthens the affordance and stages the tool so the solution becomes discoverable without a tutorial prompt, preserving the aha moment."
  - id: 9
    type: "short-answer"
    question: "Explain why constraints tend to make puzzles better, using a specific example."
    answer: "Constraints prune the move space so the remaining options can be reasoned about and the intended path becomes legible. For example, a one-way door removes backtracking, so the player reads the space as forward progress rather than an open sandbox of choices."
    explanation: "A full-credit answer names the pruning mechanism and gives a concrete constraint (one-way door, carry limit, timer) with its effect on legibility."
  - id: 10
    type: "short-answer"
    question: "Choose a simple mechanic and describe a three-beat teach–test–twist sequence for it."
    answer: "For a gravity-flip mechanic: teach it in a flat room where flipping is the only way to reach a ledge; test it over a gap with spikes so timing matters; twist it by combining the flip with a moving platform so the player must flip mid-flight."
    explanation: "The answer should show a safe introduction, a pressured application, and a recombination that generalizes the rule."
---

# Week 21 — Designing Puzzles and Obstacles

## Why This Matters

Puzzles are the branch of design that maps most directly onto your day job. A puzzle is a state space with a goal, a set of legal moves, and a solution the player must discover rather than execute. Tuning one is search-space design: deciding how large the space is, how visible the affordances are, how many dead ends exist, and how the player learns whether they are warm. Debugging a puzzle that "should" work is usually debugging a false affordance or an unstated rule.

The inversion from software is worth naming. In most software, the goal is for the user to reach the answer quickly. In puzzle design, the goal is the journey through the space; a puzzle that solves itself has failed. The designer's whole craft is making the search satisfying — deep enough to reward thought, bounded enough to be fair, and structured so that the insight feels earned.

## Learning Objectives

- Define a puzzle as a system of goal, constraints, affordances, and moves.
- Explain the aha moment and why it is the unit of puzzle satisfaction.
- Apply the teach–test–twist structure to sequence a puzzle's ideas.
- Read a puzzle as a dependency graph and identify its critical path and optional branches.
- Design a hint system that nudges without spoiling.

## Lesson

### What a Puzzle Actually Is

A puzzle has four parts: a goal state, a set of legal moves, constraints that limit those moves, and feedback that tells the player whether they are approaching the goal. Remove any one and you have a toy or a chore instead of a puzzle. Sudoku supplies a goal (fill the grid), moves (place digits), constraints (no repeats), and feedback (conflicts are illegal). The Witness supplies line-drawing rules and a terminal that confirms a correct rule before advancing. Baba Is You makes the rules themselves movable objects.

The essential design question is not "is this hard?" but "is this *searchable*?" A good puzzle has a space the player can explore with intent. A bad puzzle is a password: the answer is arbitrary and the player can only guess. Programmers already have the word for the difference — structure. Puzzle design is the craft of putting structure into a secret.

### The Aha Moment

The aha moment is the instant the player's mental model clicks and the solution becomes obvious. It is the currency of puzzle design.

The mechanism is worth naming precisely: the player already possessed the solution's parts but held them in the wrong relationship. The designer arranges a situation where the rearrangement becomes possible, then gets out of the way. "Of course!" means the puzzle worked. "How was I supposed to know?" means it failed — almost always because a rule was never established or an affordance was invisible.

### Teach–Test–Twist

The most reliable structure for sequencing puzzle ideas is teach–test–twist.

**Teach** introduces one rule in a safe, low-stakes context. Portal's early chambers teach that portals conserve momentum with a simple drop-and-fling, and the player cannot fail catastrophically; the lesson is the reward.

**Test** presents the same rule under pressure. Now there is a gap, a hazard, or a timer, and the player must apply the rule rather than observe it.

**Twist** subverts the rule or combines it with another, forcing generalization. Portal's later chambers twist momentum puzzles with turrets, buttons, and moving platforms, so the same principle must be re-derived in new conditions.

This is the tutorial scaffolding from Week 12 applied to ideas instead of controls. It is also why strong puzzle games rarely feel like they are stacking unrelated gimmicks: each new idea is a variation on a principle the player already owns.

### Affordances and Constraints

An affordance is a property that suggests how an object can be used. A handle affords pulling, a ledge affords climbing, a crate affords being pushed, stacked, or burned depending on the rules. Affordances are how designers make solutions visible. If a puzzle requires noticing that a painting can be cut from its frame, the room must make paintings salient — otherwise the rule is unfair rather than clever.

A constraint is a limit on available moves. Constraints are not obstacles to good design; they are the source of elegance. If the player can do anything, there is no puzzle, only a task. The one-way door is the canonical example: it removes backtracking, so forward momentum becomes the only reading. Lock-and-key structures, carry limits, and expiring effects all prune the search tree the same way, leaving a legible path.

The discipline is making constraints feel like rules of the world rather than arbitrary walls. "The bridge is out" is fiction; "you may carry only one item" is a rule. Both are legitimate, but the player must be able to hold them in mind alongside everything else.

### Solution Space and Dependency Graphs

Every puzzle defines a solution space: the set of states reachable from the start and the subset that reaches the goal. Designers rarely model this formally, but they reason about it constantly. A healthy puzzle has a space large enough for experimentation and small enough that experimentation converges.

For multi-step puzzles, the useful abstraction is a dependency graph. Nodes are the preconditions a player must establish, and edges are operations that produce one from another. "Open the gate" depends on "find the crank," which depends on "drain the moat," which depends on "learn the drain lever exists." Draw the graph and you can see whether the chain is a straight line — a lock-and-key corridor — or a lattice with multiple routes and genuine player agency. You can also see accidental shortcuts: a degenerate solution that bypasses half the graph, which is exactly the class of bug a playtester finds in three minutes.

This is the same ordering reasoning you do when sequencing build steps or resolving dependencies. If two prerequisite nodes depend on each other, the player must discover an order; if they are independent, you have created a real choice. Designers usually want some independence so the player feels clever for choosing a route, and some dependency so the sequence still delivers a designed beat.

### Hints Without Spoilers

Hints are the hardest part of puzzle design, because the value of the puzzle is the player's ownership of the solution. A hint that gives the answer transfers ownership to the designer and destroys the aha. A good hint system does three things: it confirms the player is looking at the right elements, it restates the relevant rule without naming its application, and it never escalates faster than frustration warrants.

The best systems are diegetic and layered. Return of the Obra Dinn withholds confirmation until three identities are correct at once, preventing brute force without ever telling you who is who. The principle is to raise information density slowly: first signal "you are warm," then narrow the domain, and only then connect the dots — ideally in a way the player still has to execute.

### Open-Ended vs. Authored Puzzles

An authored puzzle has one intended solution or a small set, and the designer controls the sequence of ideas. Portal, Myst, and The Witness are authored. The advantage is precision: the designer can guarantee the aha and orchestrate escalation. The cost is a learned solution — once known, replay value is gone, and players who encounter pieces out of order may be spoiled.

An open-ended puzzle provides a rich rule set and many valid solutions. Opus Magnum, Factorio, and most Zachtronics games are open-ended: players are scored on efficiency rather than correctness. The advantage is replay value, expression, and emergent solutions the designer never imagined. The cost is a diffuse aha — you optimize rather than discover — and a difficulty curve that is harder to control because suboptimal answers still clear the level.

Most games blend the two. Breath of the Wild's shrines are authored set pieces inside an open-ended physics sandbox, and the interesting design space lives in the overlap. A practical rule: use authored puzzles when you must teach or guarantee a beat, and open-ended puzzles when the fun is mastery, expression, and outsmarting a system.

### Obstacles Are Puzzles With Stakes

Obstacles — a chasm, a patrol, a collapsing floor — are puzzles with a clock and consequence. The same principles apply, but the feedback loop tightens. A puzzle can let a player think for ten minutes; an obstacle must be readable in half a second, because the player is already moving. That is why obstacle design leans on affordances instead of exposition: the climbable ledge, the jumpable gap, the enemy that telegraphs. If the player dies to an obstacle, they should immediately be able to name the mistake. If they cannot, they met a trap, not a challenge.

## Key Takeaways

- A puzzle is a searchable solution space defined by a goal, moves, constraints, and feedback — not a hidden password.
- The unit of value is the aha moment: the reorganization of knowledge the player already had.
- Teach–test–twist sequences ideas so each new puzzle generalizes rather than surprises.
- Affordances make solutions visible; constraints make the space legible and elegant.
- Dependency-graph thinking exposes accidental shortcuts and deliberate choices.
- Hints should confirm attention and restate rules, never name the solution.

## Vocabulary

| Term | Definition |
|---|---|
| Puzzle | A system with a goal, legal moves, constraints, and feedback that lets the player search for a solution. |
| Aha moment | The instant a player's existing knowledge reorganizes into the solution; the unit of satisfaction in puzzle design. |
| Teach–test–twist | A structure that introduces a rule safely, applies it under pressure, then subverts or combines it. |
| Affordance | A property of an object or space that suggests how it can be used, making a solution visible. |
| Constraint | A limit on available moves that prunes the search space and makes a puzzle elegant. |
| Hint system | A layered mechanism that nudges a stuck player without naming the solution. |
| Dependency graph | A diagram of preconditions and the operations that satisfy them, revealing paths and shortcuts. |
| Solution space | The set of states reachable from the start, and the subset that reaches the goal. |
| Open-ended puzzle | A puzzle with a rich rule set and many valid solutions, scored on efficiency or expression. |
| Cognitive challenge | The mental load a puzzle places on working memory, inference, and planning. |

## Quiz

1. According to the lesson, which element is required for a system to count as a puzzle?
   - A) A timer that punishes slow play
   - B) A goal state, legal moves, constraints, and feedback
   - C) An opponent that reacts to the player
   - D) A narrative justification for the challenge

2. What is the "aha" moment in puzzle design?
   - A) The moment the player gives up and asks for a hint
   - B) The moment the player first sees the puzzle's interface
   - C) The instant the player's existing knowledge reorganizes into the solution
   - D) The moment the designer reveals the solution in a cutscene

3. In teach–test–twist, what does the "twist" do?
   - A) It removes the rule the player just learned
   - B) It subverts or combines the rule so the player must generalize it
   - C) It introduces a boss that uses the rule against the player
   - D) It repeats the test with a shorter timer

4. What is the main design value of drawing a puzzle's dependency graph?
   - A) It proves the puzzle is mathematically solvable
   - B) It estimates how many players will finish the puzzle
   - C) It reveals the critical path, optional branches, and accidental shortcuts
   - D) It generates the puzzle's hint text automatically

5. Which behavior best describes a well-designed hint system?
   - A) It offers the full solution immediately so players never get stuck
   - B) It confirms the player is looking at the right elements and restates rules without naming the solution
   - C) It disables after the first use to preserve difficulty
   - D) It withholds all help so online guides become the only recourse

6. What is the primary cost of an open-ended puzzle compared with an authored one?
   - A) It always requires more expensive art
   - B) It cannot be scored or finished
   - C) Its aha moment is diffuse and its difficulty curve is harder to control
   - D) It has no replay value

7. **[Applied]** Players are brute-forcing a four-symbol combination lock by trying every permutation instead of reasoning about the clues. What is the best fix?
   - A) Increase the number of symbols so brute force takes longer
   - B) Add a small penalty for each wrong attempt so guessing is discouraged
   - C) Rework the clues so they logically constrain the possible symbols, making the lock a deduction rather than a guess
   - D) Add a hint button that reveals the combination

8. **[Applied]** A puzzle requires cutting a painting from its frame, but most players never consider it. What is the most designerly intervention?
   - A) Make the painting glow and add a tooltip that says "Cut painting"
   - B) Add a locked door nearby so players wander back
   - C) Make the painting visibly ragged at the edges and place a blade on a table in the same room
   - D) Remove the puzzle and replace it with a lever

9. **[Short answer]** Explain why constraints tend to make puzzles better, using a specific example.

10. **[Short answer]** Choose a simple mechanic and describe a three-beat teach–test–twist sequence for it.

## Answer Key

1. **B.** The lesson defines a puzzle by goal, moves, constraints, and feedback; timers, opponents, and story are optional context.
2. **C.** The aha moment is a reorganization of information the player already had, which is why it feels like discovery.
3. **B.** The twist forces the player to re-derive the principle in a new context rather than repeat a memorized sequence.
4. **C.** The graph exposes ordering, genuine choices, and degenerate solutions that bypass the intended chain.
5. **B.** Hints should raise information density slowly and preserve the player's ownership of the insight.
6. **C.** Open-ended puzzles trade precise control of discovery for replay value and expression.
7. **C.** The flaw is that the clues do not constrain the search, so the "puzzle" is really a password. Restoring structure to the clues makes the search deducible, while penalizing guesses only discourages the symptom.
8. **C.** This strengthens the affordance and stages the tool so the solution becomes discoverable without a tutorial prompt, preserving the aha.
9. **Model answer:** Constraints prune the move space so the remaining options can be reasoned about and the intended path becomes legible. A one-way door, for instance, removes backtracking and makes forward progress the only reading. Full credit requires naming the pruning mechanism and giving a concrete constraint and its effect.
10. **Model answer:** For gravity-flip: teach it in a flat room where flipping is the only way to reach a ledge; test it over a spike gap so timing matters; twist it with a moving platform so the player must flip mid-flight. Full credit requires a safe introduction, a pressured application, and a recombination that generalizes the rule.

## Exercises

1. **Hands-on — design a teach–test–twist sequence.** Pick one mechanic from a game you know (grappling hook, time rewind, gravity flip, light beam). Design three small rooms: one that teaches the rule safely, one that tests it under pressure, and one that twists it by combining it with a second rule. Draw the dependency graph for the third room and mark any shortcut a clever player might find.
2. **Hint system critique.** Recall a puzzle that frustrated you. Identify whether the failure was a missing rule, an invisible affordance, or an unfair constraint. Then write three escalating hints that would have rescued you without naming the solution.
3. **Authored vs. open-ended conversion.** Choose an authored puzzle from a linear game and propose how to turn it into an open-ended puzzle with multiple valid solutions. State what the game would score the player on and what new design risk you are accepting.

## Further Study

- **Portal and Portal 2 (Valve)** — study the developer commentary nodes on how test chambers teach, test, and twist a small rule set.
- **The Witness (Jonathan Blow)** — an extreme study in authoring a shared visual language and refusing to explain it in words.
- **Baba Is You (Arvi Teikari)** — an open-ended puzzle game where rules are physical objects; excellent for dependency-graph thinking.
- **Game Maker's Toolkit (YouTube channel)** — accessible design breakdowns that frequently cover puzzle structure, signposting, and teach–test–twist.
