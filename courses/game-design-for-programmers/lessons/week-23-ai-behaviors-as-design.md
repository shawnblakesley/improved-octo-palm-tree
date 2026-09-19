---
week: 23
title: "AI Behaviors as Design"
unit: 6
unitTitle: "Challenge, Enemies & AI"
estimatedMinutes: 90
prerequisites:
  - "Weeks 21–22"
objectives:
  - "Explain how game AI differs from general-purpose AI and why optimal play is usually the wrong goal."
  - "Design perception rules that produce interesting information asymmetries for the player."
  - "Use finite state machines and behavior trees as conceptual tools for reasoning about behavior."
  - "Recognize readability, rubber-banding, and flanking as fairness levers rather than technical defaults."
  - "Evaluate companion AI by the experience it creates, not by the tasks it automates."
vocabulary:
  - term: "Game AI"
    definition: "The systems that generate believable, readable opponent and ally behavior, optimized for player experience rather than objective optimality."
  - term: "Finite state machine"
    definition: "A behavior model that moves between a fixed set of states such as idle, patrol, alert, and attack, with rules for transitions."
  - term: "Behavior tree"
    definition: "A hierarchical behavior model that composes conditions and actions into prioritized branches, making complex behavior modular and readable."
  - term: "Perception"
    definition: "The rules by which an AI notices the player, including vision cones, line of sight, sound, and memory of last-known positions."
  - term: "Pathfinding"
    definition: "The process of finding a route through the level's navigable space, whose output the player experiences as whether enemies arrive plausibly."
  - term: "Readable AI"
    definition: "AI whose intentions and state are legible to the player through animation, sound, and posture, so behavior feels fair rather than random."
  - term: "Rubber-band AI"
    definition: "A stealth or pacing technique that adjusts AI pressure to keep an encounter tense, such as letting the player escape only to reapply pressure later."
  - term: "Flanking"
    definition: "Coordinated group behavior in which enemies attack from different directions to divide the player's attention and deny a single safe firing line."
  - term: "Companion AI"
    definition: "An allied AI whose design goal is to support and direct the player's experience rather than to compete with or replace the player."
  - term: "Fairness"
    definition: "The property that AI advantages are visible, counterable, and consistent, so defeats feel attributable to player decisions."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What is the primary goal of game AI, as described in the lesson?"
    options:
      - "A) To play the game optimally and defeat the player as often as possible"
      - "B) To create believable, readable, and fair experiences for the player"
      - "C) To reduce the amount of CPU used by enemies"
      - "D) To imitate human behavior as closely as possible"
    answer: "B"
    explanation: "Game AI is a design material whose success is measured in player experience, not in win rate or realism."
  - id: 2
    type: "multiple-choice"
    question: "In a finite state machine, what do the transitions represent?"
    options:
      - "A) The physical path an enemy walks"
      - "B) The conditions under which behavior changes from one mode to another"
      - "C) The enemy's health thresholds"
      - "D) The order in which animations play"
    answer: "B"
    explanation: "The states are behavior modes; transitions are the conditions — spotted the player, lost sight, took damage — that switch between them."
  - id: 3
    type: "multiple-choice"
    question: "Which perception design produces the most useful tension in a stealth game?"
    options:
      - "A) Enemies see through walls so the player can never hide"
      - "B) Enemies have a vision cone, hearing radius, and a memory of the last-known position"
      - "C) Enemies never notice the player at all"
      - "D) Enemies always know the player's exact location once alerted"
    answer: "B"
    explanation: "Layered perception creates information asymmetry and a meaningful reset state, which is what makes stealth readable and tense."
  - id: 4
    type: "multiple-choice"
    question: "Why is rubber-band AI controversial but sometimes useful?"
    options:
      - "A) It changes the game's art style mid-encounter"
      - "B) It can sustain tension, but if hidden it can feel like the game is cheating"
      - "C) It always makes the game easier"
      - "D) It removes the need for difficulty settings"
    answer: "B"
    explanation: "Adjusting AI pressure can keep pacing tight, but concealment undermines fairness; the effect should be bounded and ideally invisible."
  - id: 5
    type: "multiple-choice"
    question: "What makes flanking behavior feel fair rather than cheap?"
    options:
      - "A) The flankers deal no damage"
      - "B) The player can perceive and contest the flank in time"
      - "C) The flank only happens once per level"
      - "D) The flankers are always visible from the start"
    answer: "B"
    explanation: "Flanking divides attention, which is legitimate pressure as long as the player can see or hear it coming and respond."
  - id: 6
    type: "multiple-choice"
    question: "How should companion AI primarily be judged?"
    options:
      - "A) By how many kills it earns"
      - "B) By the experience it creates and the player's sense of agency"
      - "C) By how closely it mimics a human teammate"
      - "D) By how rarely it uses resources"
    answer: "B"
    explanation: "Companions exist to support the player's story; an efficient ally that solves fights can rob the player of agency."
  - id: 7
    type: "scenario"
    question: "Players complain that an enemy sniper 'cheats' because it hits them from off-screen the moment they enter a courtyard. What is the best fix?"
    options:
      - "A) Reduce the sniper's damage so the hit matters less"
      - "B) Remove the sniper entirely"
      - "C) Add a visible muzzle glint, a laser line, and an audio cue before the shot, and place the sniper within the courtyard's readable sightlines"
      - "D) Give the player a permanent shield while in courtyards"
    answer: "C"
    explanation: "The complaint is about fairness and legibility, not damage. Making the threat perceivable and placed in the player's information space fixes the root problem."
  - id: 8
    type: "scenario"
    question: "A companion AI in a co-op game is so effective that it clears enemies before the player arrives. What is the designer's best change?"
    options:
      - "A) Increase the companion's damage further so it is even more useful"
      - "B) Make the companion focus on supporting actions — marking threats, reviving, covering flanks — and let the player resolve kills"
      - "C) Disable the companion entirely for most of the game"
      - "D) Give the companion a long list of commands the player must issue constantly"
    answer: "B"
    explanation: "Companions should amplify the player's agency rather than substitute for it; shifting to support actions keeps the player at the center of the experience."
  - id: 9
    type: "short-answer"
    question: "Explain the difference between game AI's goal and general-purpose AI's goal, and why that difference matters for design."
    answer: "General-purpose AI is optimized to solve problems correctly or optimally, while game AI is optimized to produce a readable, fair, and interesting experience. An optimal opponent would exploit every weakness and feel unfair, so designers deliberately make AI lose information, hesitate, and telegraph."
    explanation: "Full credit distinguishes optimality from experience and gives an example of deliberately handicapping AI for the player's sake."
  - id: 10
    type: "short-answer"
    question: "Describe how a vision cone and hearing radius together create a stealth 'reset' that players can understand."
    answer: "A vision cone gives the player a visible rule for when they are seen, and a hearing radius gives them a rule for when noise betrays them. Together they define what counts as safe movement and what triggers a search, so the player can predict and recover from mistakes."
    explanation: "The answer must connect perception rules to predictable player behavior and a recoverable alert state."
---

# Week 23 — AI Behaviors as Design

## Why This Matters

You already know that "AI" in games is not the same as the AI in the news. Game AI is a design material: a system whose success is measured by whether the player feels hunted, outmatched, or supported in a way that is legible and fair. The classic formulation is that game AI should be a good *storyteller*, not a good *player*. An enemy that plays optimally — camps the objective, never misses, never loses track of you — is not impressive; it is unplayable.

This lesson is about the design decisions encoded in AI: what enemies know, how they perceive, how they mislead, how they group, and when they should politely lose. Your technical background makes the machinery easy to understand; the craft is choosing what behavior should feel like from the other side of the screen.

## Learning Objectives

- Explain why game AI optimizes for player experience, not optimality.
- Design perception rules that create meaningful information asymmetries.
- Use finite state machines and behavior trees as conceptual models for behavior.
- Apply readability, rubber-banding, and flanking as fairness levers.
- Evaluate companion AI by the experience it creates.

## Lesson

### AI as Design Material

The first design decision is what the AI knows. Omniscient AI is trivial to program and terrible to play against, because it removes the player's ability to manipulate information. Deliberately limiting the AI's knowledge — it did not see you; it heard something and is investigating — is what creates the space for stealth, distraction, and tactical play. This is why the perception model is usually the most consequential AI design decision in a game, more consequential than the combat logic itself.

The second decision is how the AI communicates. An AI's internal state is invisible; only its behavior and presentation reach the player. A guard who has spotted you but stands still reads as blind, and a guard who silently closes from behind reads as a cheater. Readable AI gives the player a window into its intentions through animation, posture, sound, and barked lines. The technical system that produces the behavior matters far less than the player's ability to predict it.

### Perception: Vision, Hearing, and Memory

Perception is defined by rules the player can learn. A vision cone says: within this angle and range, and with clear line of sight, you are seen. A hearing radius says: making noise reaches you, and moving quietly does not. Metal Gear Solid has used vision cones and alert states for decades because the rules are so legible that players can plan around them. Alien: Isolation builds its entire horror loop on a creature whose perception is explicitly uncertain — it can be distracted, but never fully predicted — which is a deliberate inversion of legibility in service of dread.

The third component is memory. When an AI loses sight of the player, does it forget instantly, search the last-known position, or hunt for a while? Each answer produces a different game. Instant forgetting makes stealth a sequence of isolated checks; persistent memory makes it a running pursuit. The last-known-position model is the workhorse because it gives the player a clear recovery path: break line of sight, move away from where you were, and wait for the search to end. That recovery rhythm is the difference between a stealth game and a stress simulator.

### Finite State Machines and Behavior Trees, Conceptually

Two models dominate how designers reason about behavior, and you can think of them as notation rather than implementation.

A finite state machine (FSM) is a small set of modes — idle, patrol, suspicious, search, attack, flee — with rules for moving between them. Its virtue is clarity: every mode is visible and testable, and designers can describe exactly what an enemy does. Its weakness is combinatorial growth; as you add conditions, transitions multiply, and the graph becomes hard to reason about. FSMs are the right tool when behavior needs to be tightly authored and predictable.

A behavior tree composes behavior hierarchically. A root selects among priorities — combat first, then investigate, then patrol — and each branch checks conditions before acting. Think of it as a decision procedure that re-evaluates what matters each tick. Behavior trees scale better than flat FSMs because new behaviors slot into a branch without touching the whole graph, and they express the designer's priority order directly: what should an enemy do when it is hurt, alerted, and out of ammo? The tree answers by ordering. Neither model is better; both are ways of making the designer's intent explicit enough to tune.

### Pathfinding and the Illusion of Competence

Players experience pathfinding entirely through outcomes: did the enemy take a sensible route, did it get stuck, did it appear from a direction that made sense? A technically optimal path can feel wrong — an enemy that takes the perfect flanking route through a door the player never noticed reads as cheating. Good pathfinding design is often about constraints that make movement legible: preferring main corridors, avoiding obvious teleports, and letting enemies arrive where the player expects a threat to come from.

This is the same principle as animation: the goal is not fidelity to the underlying path, but the player's mental model of it. F.E.A.R. is still studied because its soldiers use cover, call out their flanks, and retreat convincingly; the memorable part is not the algorithm but the *narrative* the behavior produces — a squad that appears to think.

### Readability, Rubber-Banding, and Fairness

Readability is the throughline. An AI action should have a cause the player can perceive. When an enemy suddenly gains speed, sees through a wall, or ignores damage, the player loses their model and calls it unfair — even if the underlying system is behaving consistently.

Rubber-banding is the deliberate adjustment of AI pressure to keep an encounter tense. The term usually describes racing games that slow the leaders or speed the trailers, but the same idea appears in Alien: Isolation, where the creature is sometimes steered away to give the player a breath and then re-applied to keep dread high. The technique sustains pacing, but it must be bounded and subtle. If the player notices the game is helping or hindering them, the illusion collapses and the win feels cheap. The design rule is to rubber-band *opportunity*, not outcomes: give the player a window to recover, not a scripted victory.

### Flanking and Group Behavior

A group is more than the sum of its members only if the members coordinate. Flanking — attacking from multiple directions so the player cannot hold one firing line — is the most common form of coordination and one of the clearest sources of pressure (Week 22). It is fair when the player can perceive it: a shout, a silhouetted movement, a burst of fire from a new angle. It is unfair when enemies conjure a surround with no warning.

Group behavior also includes roles and suppression: some enemies pin the player in place while others advance, and the tension comes from the player needing to break the pin without exposing themselves to the advance. The design question is always the same: can the player tell what is happening and choose a response? If yes, the group feels intelligent. If no, it feels like a trap.

### Companion AI

Companion AI has the opposite goal from enemy AI. An enemy exists to create pressure; a companion exists to support the player's experience and agency. The classic failure is the companion who is too capable: it kills the enemies, solves the puzzles, and leaves the player as a spectator. The classic second failure is the companion who is useless and dies constantly, turning every fight into a babysitting job.

The best companions are designed around *support verbs*: marking threats, reviving, opening routes, covering a flank, or commenting on the world. The Last of Us and God of War companions are memorable less for their combat output than for the way they keep the player oriented and emotionally connected. A useful test: if the companion were removed and its damage transferred to the player, would the experience be better or worse? If the answer is "basically the same," the companion is decoration; if it is "better," the companion is stealing agency.

## Key Takeaways

- Game AI is judged by the experience it creates, not by how well it plays.
- Perception rules — vision, hearing, memory — are the primary lever for tactic and tension.
- FSMs and behavior trees are ways of making behavior intent explicit and tunable.
- Players judge pathfinding and group behavior by legibility, not optimality.
- Rubber-banding sustains pacing when it is bounded and subtle; concealed cheating breaks trust.
- Companions should amplify the player's agency, not replace it.

## Vocabulary

| Term | Definition |
|---|---|
| Game AI | Systems that generate believable, readable opponent and ally behavior, optimized for player experience. |
| Finite state machine | A behavior model moving between a fixed set of states with defined transition conditions. |
| Behavior tree | A hierarchical behavior model composing conditions and actions into prioritized branches. |
| Perception | The rules by which AI notices the player, such as vision cones, sound, and last-known position. |
| Pathfinding | Finding a route through navigable space, experienced by the player as whether enemies arrive plausibly. |
| Readable AI | AI whose state and intentions are legible through animation, sound, and posture. |
| Rubber-band AI | Adjusting AI pressure to sustain tension, such as easing off before re-applying pressure. |
| Flanking | Coordinated attacks from multiple directions that divide the player's attention. |
| Companion AI | Allied AI designed to support and direct the player's experience rather than compete with them. |
| Fairness | The property that AI advantages are visible, counterable, and consistent. |

## Quiz

1. What is the primary goal of game AI, as described in the lesson?
   - A) To play the game optimally and defeat the player as often as possible
   - B) To create believable, readable, and fair experiences for the player
   - C) To reduce the amount of CPU used by enemies
   - D) To imitate human behavior as closely as possible

2. In a finite state machine, what do the transitions represent?
   - A) The physical path an enemy walks
   - B) The conditions under which behavior changes from one mode to another
   - C) The enemy's health thresholds
   - D) The order in which animations play

3. Which perception design produces the most useful tension in a stealth game?
   - A) Enemies see through walls so the player can never hide
   - B) Enemies have a vision cone, hearing radius, and a memory of the last-known position
   - C) Enemies never notice the player at all
   - D) Enemies always know the player's exact location once alerted

4. Why is rubber-band AI controversial but sometimes useful?
   - A) It changes the game's art style mid-encounter
   - B) It can sustain tension, but if hidden it can feel like the game is cheating
   - C) It always makes the game easier
   - D) It removes the need for difficulty settings

5. What makes flanking behavior feel fair rather than cheap?
   - A) The flankers deal no damage
   - B) The player can perceive and contest the flank in time
   - C) The flank only happens once per level
   - D) The flankers are always visible from the start

6. How should companion AI primarily be judged?
   - A) By how many kills it earns
   - B) By the experience it creates and the player's sense of agency
   - C) By how closely it mimics a human teammate
   - D) By how rarely it uses resources

7. **[Applied]** Players complain that an enemy sniper "cheats" because it hits them from off-screen the moment they enter a courtyard. What is the best fix?
   - A) Reduce the sniper's damage so the hit matters less
   - B) Remove the sniper entirely
   - C) Add a visible muzzle glint, a laser line, and an audio cue before the shot, and place the sniper within the courtyard's readable sightlines
   - D) Give the player a permanent shield while in courtyards

8. **[Applied]** A companion AI in a co-op game is so effective that it clears enemies before the player arrives. What is the designer's best change?
   - A) Increase the companion's damage further so it is even more useful
   - B) Make the companion focus on supporting actions — marking threats, reviving, covering flanks — and let the player resolve kills
   - C) Disable the companion entirely for most of the game
   - D) Give the companion a long list of commands the player must issue constantly

9. **[Short answer]** Explain the difference between game AI's goal and general-purpose AI's goal, and why that difference matters for design.

10. **[Short answer]** Describe how a vision cone and hearing radius together create a stealth "reset" that players can understand.

## Answer Key

1. **B.** Game AI is a design material measured by player experience, not by win rate or realism.
2. **B.** States are behavior modes; transitions are the conditions that switch between them.
3. **B.** Layered perception creates information asymmetry and a recoverable alert state, which makes stealth readable.
4. **B.** Rubber-banding can keep pacing tight, but concealment makes it feel like cheating; it should be bounded and subtle.
5. **B.** Flanking is legitimate pressure as long as the player can perceive and contest it in time.
6. **B.** Companions exist to support the player's experience; an efficient ally can steal agency.
7. **C.** The complaint is about fairness and legibility, so making the threat perceivable fixes the root issue.
8. **B.** Companions should amplify the player's agency; shifting them to support actions keeps the player central.
9. **Model answer:** General AI is optimized for correct or optimal problem-solving, while game AI is optimized for a readable, fair, interesting experience. An optimal opponent exploiting every weakness would feel unfair, so designers deliberately limit AI knowledge, add hesitation, and telegraph actions.
10. **Model answer:** The vision cone gives a visible rule for when the player is seen, and hearing gives a rule for when noise betrays them. Together they define safe movement and trigger a search state the player can escape, making stealth predictable and recoverable.

## Exercises

1. **Hands-on — write a perception spec.** Design an enemy's perception in plain language: vision cone angle and range, hearing radius, what blocks line of sight, how long memory lasts, and what the search state does. Then write the player-facing cues (sound, icons, posture) that communicate each state. Check that a player could predict the AI's behavior from the cues alone.
2. **FSM vs. behavior tree.** Take one enemy from a game you know and write its behavior as a five-state FSM. Then rewrite the same behavior as a prioritized behavior tree (combat, investigate, patrol). Note which model made the priority order more obvious and which handled exceptions more cleanly.
3. **Companion audit.** Choose a companion from a game you have played. List what it does for the player and what it does *instead* of the player. Propose two changes that would shift it further toward support verbs, and state what new risk each change introduces.

## Further Study

- **Alien: Isolation (Creative Assembly)** — a case study in perception uncertainty and pacing dread with a single AI.
- **F.E.A.R. (Monolith Productions)** — still the reference for squad AI that produces a readable tactical narrative.
- **The Last of Us Part II (Naughty Dog)** — study companion behavior, enemy callouts, and search states.
- **AI and Games (YouTube channel, Dr. Tommy Thompson)** — design-focused breakdowns of perception, flanking, and companion systems.
- **Game Maker's Toolkit (YouTube channel)** — accessible analysis of how AI behavior shapes player experience.
