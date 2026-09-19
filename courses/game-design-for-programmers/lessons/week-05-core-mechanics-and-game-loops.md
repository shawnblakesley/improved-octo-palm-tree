---
week: 5
title: "Core Mechanics and Game Loops"
unit: 2
unitTitle: "Mechanics, Systems & Emergence"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1-4"
objectives:
  - "Define the core mechanic and distinguish it from a game's supporting mechanics."
  - "Diagram a core loop as a cycle and label its act, resolve, reward, and invest stages."
  - "Classify mechanics as primary or secondary and evaluate whether they reinforce the core."
  - "Identify nested loops at moment-to-moment, session, and meta timescales."
  - "Diagnose compulsion loops and feedback failures in a game you have played."
vocabulary:
  - term: "Core Mechanic"
    definition: "The single repeated action at the center of a game, which the rest of the design exists to support (shooting in Doom, jumping in Mario)."
  - term: "Core Loop"
    definition: "The repeating cycle of player action, resolution, and reward that constitutes moment-to-moment play."
  - term: "Meta Loop"
    definition: "The long-horizon loop of persistent progression and unlocks that changes how future sessions begin."
  - term: "Nested Loop"
    definition: "A loop contained within a longer loop, such as an encounter nested inside a session inside a progression arc."
  - term: "Primary Mechanic"
    definition: "A mechanic that directly serves the core loop and the core mechanic."
  - term: "Secondary Mechanic"
    definition: "A supporting mechanic that adds texture or pacing but is not essential to the core loop."
  - term: "Verb"
    definition: "A player-facing action the game lets the player take, such as jump, shoot, build, or persuade."
  - term: "Compulsion Loop"
    definition: "A very tight loop that delivers a fast reward and immediately invites the next repetition."
  - term: "Loop Timescale"
    definition: "How long one full turn of a loop takes, from seconds (moment-to-moment) to weeks (meta progression)."
  - term: "Feedback"
    definition: "The timely, legible information a game returns to the player about the result of their action, closing the loop."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which of the following best defines a game's core mechanic?"
    options:
      - "A) The highest-scoring strategy a skilled player can discover."
      - "B) The single repeated action the player performs, which the rest of the design supports."
      - "C) The rendering and physics systems that make the game run."
      - "D) The longest progression track in the game."
    answer: "B"
    explanation: "The core mechanic is the repeated central action (shooting, jumping, placing blocks). It is defined by player behavior, not by technology or by optimal strategy."
  - id: 2
    type: "multiple-choice"
    question: "What is the difference between a verb and a mechanic?"
    options:
      - "A) They are two words for the same thing."
      - "B) A verb is a player-facing intent; a mechanic is the rule system that resolves it."
      - "C) Verbs only exist in combat games; mechanics exist everywhere."
      - "D) Mechanics are player-facing; verbs are internal to the engine."
    answer: "B"
    explanation: "A verb is what the player wants to do (jump); a mechanic is the rule that determines what happens when they do it. One verb can resolve through many mechanics."
  - id: 3
    type: "multiple-choice"
    question: "In the loop pattern act, resolve, reward, invest, what is the function of the reward stage?"
    options:
      - "A) It closes the loop and motivates the next iteration."
      - "B) It ends the session and returns the player to the menu."
      - "C) It replaces the core mechanic over time."
      - "D) It has no effect on pacing."
    answer: "A"
    explanation: "The reward confirms that the action mattered and gives the player a reason to run the loop again. Without it the cycle has no pull."
  - id: 4
    type: "multiple-choice"
    question: "A game where each run unlocks permanent upgrades that change later runs is using which structure?"
    options:
      - "A) A single moment-to-moment loop with no outer structure."
      - "B) Nested loops spanning several timescales."
      - "C) An open loop with no feedback."
      - "D) A degenerate strategy."
    answer: "B"
    explanation: "The short combat or exploration loop is nested inside a persistent meta loop, so play spans seconds and hours at once."
  - id: 5
    type: "multiple-choice"
    question: "Which is the clearest example of a secondary mechanic threatening to overshadow the core loop?"
    options:
      - "A) Jumping in Super Mario Bros."
      - "B) Shooting in Doom"
      - "C) The card game Gwent inside The Witcher 3"
      - "D) Rotating tetrominoes in Tetris"
    answer: "C"
    explanation: "Gwent is a supporting minigame that proved more compelling than its host for many players, eventually becoming a standalone product."
  - id: 6
    type: "multiple-choice"
    question: "Player churn that begins right after they master the core mechanic most directly indicates which problem?"
    options:
      - "A) The meta loop is too thin to offer new decisions."
      - "B) The feedback is unrealistically fast."
      - "C) The game has too few verbs."
      - "D) The camera is too responsive."
    answer: "A"
    explanation: "Mastery of the inner loop removes its challenge, so players need an outer loop that changes how the inner loop is played. With nothing new to decide, they leave."
  - id: 7
    type: "short-answer"
    question: "Define a compulsion loop and give one real-game example, explaining what drives the repetition."
    answer: "A compulsion loop is a very tight cycle that delivers a quick reward and immediately invites the next repetition. Example: Civilization's 'one more turn,' where finishing a turn reveals new progress and a new decision."
    explanation: "The defining features are tightness (fast reward) and re-invitation (the loop ends by presenting the next stimulus). The example should show both."
  - id: 8
    type: "short-answer"
    question: "Explain why a game can feel like a treadmill when its meta loop rewards exist but its inner loop is weak."
    answer: "The outer loop keeps granting goals and rewards, but the moment-to-moment play is not satisfying on its own, so the player feels they are working for rewards rather than enjoying play."
    explanation: "Rewards can sustain behavior temporarily but cannot substitute for a satisfying inner loop; the mismatch produces the sensation of unpaid labor."
  - id: 9
    type: "applied"
    question: "A survival game has players gather resources, craft, fight, and build a base. Sketch its nested loops across at least three timescales, and name one place where feedback could be strengthened."
    answer: "Moment-to-moment (seconds): swing a tool or dodge an enemy. Encounter (minutes): clear a wolf pack or a cave. Session (30-90 minutes): gather enough to fortify a wall or unlock a tool tier. Meta (hours): explore biomes and unlock crafting tiers. Feedback improvement: resource pickups need immediate audio and a visible inventory change so the player knows the action registered."
    explanation: "The loops should nest coherently, and the feedback fix should be timely, legible, and proportionate to the action."
  - id: 10
    type: "applied"
    question: "Players praise a game's core mechanic but stop playing after three hours. Using loop vocabulary, diagnose the likely cause and propose a design fix."
    answer: "The inner loop is satisfying but mastered, so the game lacks an outer or meta loop that introduces new decisions. Fix: add a progression layer that changes how the core mechanic is used, such as new verbs, modifiers, or goals that alter play."
    explanation: "The diagnosis should name the specific loop that is failing, and the fix should add decisions rather than simply add rewards."
---

# Week 5 — Core Mechanics and Game Loops

## Why This Matters

You have spent your career learning that a system's behavior is dominated by its structure, not its surface features. Games work the same way: a player remembers the loop they ran, not the feature list on the box. This week gives you the vocabulary to name that loop, draw it, and find where it is broken.

## Learning Objectives

- Define the core mechanic and separate it from a game's supporting mechanics.
- Diagram a core loop as a cycle and label its act, resolve, reward, and invest stages.
- Classify mechanics as primary or secondary and judge whether they reinforce the core.
- Recognize nested loops and compulsion loops at different timescales.
- Diagnose feedback failures and churn using loop vocabulary.

## Lesson

### The core mechanic

Every game has a center of gravity. Strip away the art, the story, and the menus, and you find one action the player performs again and again: the **core mechanic**. In *Doom* it is shooting. In *Tetris* it is rotating and placing a falling shape. In *Super Mario Bros.* it is jumping. In *Dark Souls* it is the attack-dodge-stamina exchange. In *Slay the Spire* it is playing a card.

The core mechanic is not the feature list. It is the single repeated interaction the rest of the design exists to support. A useful test: remove it and ask whether the game still is the game. Remove shooting from *Call of Duty* and you have a military hiking simulator; remove the jump from *Mario* and you have lost the premise, not a bullet point. The core mechanic is the interface between player intent and the simulated world — the place where the player most continuously expresses themselves.

### The core loop

A mechanic in isolation is not play. Play happens when the mechanic repeats inside a cycle of goals and rewards. That cycle is the **core loop**, and its general form is:

act → resolve → reward → invest → act again

In *Vampire Survivors*, the loop is: move and dodge while weapons auto-fire → enemies die and drop experience gems → collect the gems and level up → choose an upgrade that changes what you can do → face a tougher swarm. In *Hades*, it is: enter a chamber → fight → choose a boon → clear the chamber → repeat through the run. The loop is the heartbeat, and its rhythm is what players experience as flow or as grind.

Engineers already know this shape. A real-time program runs `while (running) { read input; update; render; }`. A designed core loop is that structure with semantics attached to each stage: the input is a decision, the update is a resolution, the render is feedback, and the tick rate is the pacing. When the core loop is unclear, players feel it immediately — they do not know what they are supposed to be doing, or why what they did mattered. When it is tight, the game seems to play itself.

### Verbs and actions

Designers talk about **verbs**: the things a player *can do*. Jump, shoot, dodge, build, talk, steal, persuade, cook. A game's verb set is its player-facing API — the complete list of intents the player can express. Mechanics are the rule systems that resolve those intents. The distinction matters because one verb can resolve through many mechanics: Mario's jump becomes a stomp, a wall-jump, a triple-jump, or a ground-pound depending on context. Nintendo's long-standing philosophy is few verbs, deep interactions — a small API whose combinations still surprise the designers.

Compare that with games that ship dozens of shallow verbs. The controller has twenty bindings and none of them interact. The lesson is not that fewer is always better; it is that verbs should compose. A verb that never combines with another verb or system is probably a secondary mechanic wearing the costume of a core one.

### Primary and secondary mechanics

**Primary mechanics** serve the core loop directly. **Secondary mechanics** orbit it: crafting, inventory management, dialogue trees, traversal, minigames, base building. Secondary mechanics add texture, pacing breaks, and long-term goals, and they are healthy as long as they feed the core.

The failure mode is the secondary mechanic that outshines the primary. *The Witcher 3* shipped with Gwent, a card game so beloved it became a standalone product. This is a diagnostic, not automatically a disaster: if a secondary loop is more compelling than the core loop, you have two honest options. Promote it, and rebuild the game around it, or constrain it so it cannot cannibalize attention. What you should not do is leave an accidental competitor inside the product.

### Nested loops and timescales

Real games are not one loop but several, nested like call frames:

| Timescale | Loop | Example (*Hades*) |
|---|---|---|
| seconds | moment-to-moment | dash through an attack, land a combo |
| minutes | encounter | clear a chamber of enemies |
| 30–90 min | session | complete a run or reach a new biome |
| hours–weeks | meta loop | unlock weapons, buy Mirror upgrades, raise Heat |

The **meta loop** is everything that persists across sessions and changes how the next one begins: unlocks, leveling, prestige, seasonal content. The **loop timescale** is how long one turn of the wheel takes, and it governs what the player feels. A short inner loop produces tactile satisfaction; a long outer loop produces anticipation, planning, and attachment.

The two must interlock. If the inner loop is excellent but the meta loop is absent, players churn once they master the mechanic, because there is nothing new to decide. If the meta loop dangles rewards over a hollow inner loop, the game feels like a treadmill: satisfied numbers, dissatisfied player. *Civilization*'s "one more turn" remains the classic demonstration that a compelling inner loop makes the outer loop nearly irresistible.

### Compulsion loops

A **compulsion loop** is a particularly tight cycle that delivers a reward quickly and immediately re-invites the next iteration. Pull the lever, see the number go up, feel a small hit of progress, pull again. Slot machines are compulsion loops with no skill. Games can build them honestly — the combat rhythm of *Doom*, the escalating build choices in *Vampire Survivors* — or exploitatively, through variable-ratio loot boxes and energy timers. The pattern is neutral; the intent is not. You should be able to point at your compulsion loop and say what the player is choosing, not merely what they are receiving.

### Feedback

A loop cannot close without **feedback**: the information that tells the player what just happened. Feedback must be timely (inside the player's expectation window), legible (unambiguous), and proportionate (impact matches consequence). Damage numbers, hit flashes, controller rumble, sound effects, experience bars, and the brief silence before a boss health bar fills are all feedback.

Control theory is the right analogy. A closed-loop control system samples its output, compares it to a target, and corrects. Remove the sensor and you have an open loop that drifts and cannot be learned. Remove the correction and you have a warning light that never changes behavior. Games fail the same way: a hit with no freeze, no sound, and no visible reaction is not merely unpolished, it is an open loop, and the player cannot tell whether their decision worked.

### From features to loops

Studio pitches are usually written as feature lists: crafting, mounts, a skill tree, a photo mode. Players almost never describe a game that way. They describe what they did: "I cleared the fortress," "I kept losing to the second boss," "I just wanted one more upgrade." Those sentences are loop descriptions, and they reveal which loops actually carried the experience.

So resist the temptation to build breadth until a single loop is worth repeating on its own. A vertical slice of one strong loop teaches more than four half-loops, because a loop is only real after it has been run enough times for its rhythm to register. Ask what changes on each turn: a new option, a new challenge, or a new piece of information. If the honest answer is "nothing," you have a loop that will feel like work by the twentieth iteration. This is also why prototype art so often outperforms final art in early testing. With nothing to look at, testers feel the loop directly, and their boredom or compulsion is unambiguous feedback about the design rather than the presentation. Build the wheel first, then decorate it.

### Diagnosing a loop

When a game feels wrong, do not start by changing numbers. Draw the loop. Name each stage, the decision the player makes, and the reward they receive, then check whether each iteration changes the player's options. If iterations repeat identically, you have built grind. If a stage is unreadable, you have a feedback failure. If the outer loop is empty, you have a churn problem. Fixing the diagram is cheaper than fixing the balance spreadsheet.

## Key Takeaways

- The core mechanic is the one repeated action the rest of the game exists to support.
- The core loop is act, resolve, reward, invest — and its tightness determines whether play feels like flow or grind.
- Verbs are player intents; mechanics resolve them. Small verb sets with deep combinations outperform large shallow ones.
- Secondary mechanics should feed the core loop; if one outshines the core, promote or constrain it.
- Loops nest across timescales. Short loops satisfy, long loops retain, and they must interlock.
- Feedback closes the loop; missing, illegible, or disproportionate feedback is a structural failure, not just a polish problem.

## Vocabulary

| Term | Definition |
|---|---|
| Core Mechanic | The single repeated action at the center of a game, which the rest of the design exists to support. |
| Core Loop | The repeating cycle of player action, resolution, and reward that constitutes moment-to-moment play. |
| Meta Loop | The long-horizon loop of persistent progression and unlocks that changes how future sessions begin. |
| Nested Loop | A loop contained within a longer loop, such as an encounter inside a session inside a progression arc. |
| Primary Mechanic | A mechanic that directly serves the core loop and core mechanic. |
| Secondary Mechanic | A supporting mechanic that adds texture or pacing but is not essential to the core loop. |
| Verb | A player-facing action the game permits, such as jump, shoot, build, or persuade. |
| Compulsion Loop | A very tight loop that delivers a fast reward and immediately invites the next repetition. |
| Loop Timescale | How long one full turn of a loop takes, from seconds to weeks. |
| Feedback | Timely, legible information returned to the player about the result of their action. |

## Quiz

**1. (Multiple choice)** Which of the following best defines a game's core mechanic?
- A) The highest-scoring strategy a skilled player can discover.
- B) The single repeated action the player performs, which the rest of the design supports.
- C) The rendering and physics systems that make the game run.
- D) The longest progression track in the game.

**2. (Multiple choice)** What is the difference between a verb and a mechanic?
- A) They are two words for the same thing.
- B) A verb is a player-facing intent; a mechanic is the rule system that resolves it.
- C) Verbs only exist in combat games; mechanics exist everywhere.
- D) Mechanics are player-facing; verbs are internal to the engine.

**3. (Multiple choice)** In the loop pattern act, resolve, reward, invest, what is the function of the reward stage?
- A) It closes the loop and motivates the next iteration.
- B) It ends the session and returns the player to the menu.
- C) It replaces the core mechanic over time.
- D) It has no effect on pacing.

**4. (Multiple choice)** A game where each run unlocks permanent upgrades that change later runs is using which structure?
- A) A single moment-to-moment loop with no outer structure.
- B) Nested loops spanning several timescales.
- C) An open loop with no feedback.
- D) A degenerate strategy.

**5. (Multiple choice)** Which is the clearest example of a secondary mechanic threatening to overshadow the core loop?
- A) Jumping in Super Mario Bros.
- B) Shooting in Doom.
- C) The card game Gwent inside The Witcher 3.
- D) Rotating tetrominoes in Tetris.

**6. (Multiple choice)** Player churn that begins right after they master the core mechanic most directly indicates which problem?
- A) The meta loop is too thin to offer new decisions.
- B) The feedback is unrealistically fast.
- C) The game has too few verbs.
- D) The camera is too responsive.

**7. (Short answer)** Define a compulsion loop and give one real-game example, explaining what drives the repetition.

**8. (Short answer)** Explain why a game can feel like a treadmill when its meta loop rewards exist but its inner loop is weak.

**9. (Applied)** A survival game has players gather resources, craft, fight, and build a base. Sketch its nested loops across at least three timescales, and name one place where feedback could be strengthened.

**10. (Applied)** Players praise a game's core mechanic but stop playing after three hours. Using loop vocabulary, diagnose the likely cause and propose a design fix.

## Answer Key

**1. B** — The core mechanic is defined by the repeated central action, not by optimal strategy or technology.

**2. B** — Verbs are player intents; mechanics are the rules that resolve them, and one verb can route through many mechanics.

**3. A** — The reward confirms the action mattered and pulls the player into the next iteration of the loop.

**4. B** — Short loops nest inside a persistent meta loop, so play spans both seconds and hours.

**5. C** — Gwent is a supporting minigame that proved more compelling than its host for many players.

**6. A** — Once the inner loop is mastered, players need an outer loop that changes how the inner loop is played.

**7.** A compulsion loop is a very tight cycle that delivers a quick reward and immediately re-invites the next repetition. *Civilization*'s "one more turn" is the canonical example: finishing one turn reveals new progress and a fresh decision, so stopping is always slightly harder than continuing.

**8.** The meta loop keeps granting goals and rewards, but the moment-to-moment play is not satisfying on its own, so the player feels they are working for rewards rather than enjoying play. Rewards can sustain behavior briefly but cannot substitute for a satisfying inner loop.

**9.** Moment-to-moment (seconds): swing a tool or dodge an enemy. Encounter (minutes): clear a wolf pack or a cave. Session (30–90 minutes): gather enough to fortify a wall or reach a new tool tier. Meta (hours): unlock biomes and crafting tiers. A good feedback fix is immediate audio plus a visible inventory change on resource pickup, so the player knows the action registered.

**10.** The inner loop is satisfying but mastered, so the design lacks an outer or meta loop that introduces new decisions. The fix is to add a layer that changes how the core mechanic is used — new verbs, modifiers, or goals — rather than simply adding more rewards.

## Exercises

1. **Draw a core loop.** Pick a game you have played for more than ten hours. Write its core loop as a four-stage cycle (act, resolve, reward, invest), then annotate each nested timescale you can identify. Mark any stage whose feedback is weak.
2. **Diagnose a churn point.** Choose a game you abandoned. Identify which loop failed — inner, outer/meta, compulsion, or feedback — and support the diagnosis with a specific memory or observation of play.
3. **Design one page.** Design an original game's core loop on a single page: one core mechanic, three to five verbs, two primary mechanics, one secondary mechanic, and nested loops at three timescales. State what the player decides at each turn of the wheel.

## Further Study

- Jesse Schell, *The Art of Game Design: A Book of Lenses* — the lenses on essential experience and core mechanism are directly applicable.
- Daniel Cook, "The Chemistry of Game Design," *Lost Garden* (2007) — a widely cited essay on skill chains, reward loops, and why loops retain players.
- Raph Koster, *A Theory of Fun for Game Design* — argues that games are learning engines, which explains why loop feedback matters so much.
- Play *Doom* (1993) and *Hades* deliberately, noting each one's core loop and how its nested loops differ.
