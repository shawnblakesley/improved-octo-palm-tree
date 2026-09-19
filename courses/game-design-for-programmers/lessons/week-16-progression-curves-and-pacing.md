---
week: 16
title: "Progression, Curves, and Pacing"
unit: 4
unitTitle: "Chance, Skill & Balance"
estimatedMinutes: 90
prerequisites:
  - "Weeks 13-15"
objectives:
  - "Describe a progression system as a sequence of curves and gates rather than a single ladder."
  - "Distinguish XP curves from power curves and predict how each shape affects difficulty pacing."
  - "Design reward cadence that keeps players motivated without flattening challenge."
  - "Explain how content gating and time-to-fun interact with retention."
  - "Evaluate prestige loops and meta progression as ways to extend a game's endgame."
vocabulary:
  - term: "Progression"
    definition: "The structured unfolding of player power, content, or unlocks over time, serving as a pacing and motivation device."
  - term: "XP curve"
    definition: "The function that maps time or effort to levels, defining how much experience each level requires."
  - term: "Power curve"
    definition: "The function that maps levels or play time to player capability, such as stats, skills, or gear thresholds."
  - term: "Pacing"
    definition: "The deliberate rhythm of intensity, downtime, challenge, and reward across a play session and across the whole game."
  - term: "Reward cadence"
    definition: "The frequency and rhythm with which rewards are delivered, which governs how generous or grindy a game feels."
  - term: "Content gating"
    definition: "Restricting access to content until a prerequisite is met, used to pace complexity, control difficulty, and sequence the experience."
  - term: "Prestige loop"
    definition: "A reset of accumulated progress in exchange for a persistent bonus or status, extending the progression ladder with a new cycle."
  - term: "Meta progression"
    definition: "Permanent advancement that persists across runs or sessions, as opposed to power that resets at the start of a run."
  - term: "Time-to-fun"
    definition: "The elapsed time from first launch until the player experiences the core enjoyable activity, a key driver of early retention."
  - term: "Endgame"
    definition: "The content and progression that exists after the main leveling or story arc, designed to retain committed players."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "A linear XP curve means that:"
    options:
      - "A) Each level requires the same amount of experience"
      - "B) Each level requires exponentially more experience"
      - "C) Levels stop after a fixed cap"
      - "D) Player power decreases with each level"
    answer: "A"
    explanation: "A linear curve holds the XP requirement per level constant. Polynomial and exponential curves increase the requirement as levels rise."
  - id: 2
    type: "multiple-choice"
    question: "The primary design purpose of content gating is to:"
    options:
      - "A) Pad playtime with no benefit"
      - "B) Pace the delivery of complexity and control the flow of difficulty and reward"
      - "C) Sell downloadable content"
      - "D) Reduce the game's file size"
    answer: "B"
    explanation: "Gating sequences complexity and controls when players meet new challenges or rewards, which keeps pacing coherent rather than overwhelming."
  - id: 3
    type: "multiple-choice"
    question: "Reward cadence refers to:"
    options:
      - "A) The frequency and rhythm of rewards over time"
      - "B) The total number of rewards in the game"
      - "C) The visual style of reward animations"
      - "D) The monetization model"
    answer: "A"
    explanation: "Cadence is about timing and rhythm, not totals; the same rewards delivered on a different schedule produce a very different felt experience."
  - id: 4
    type: "multiple-choice"
    question: "Time-to-fun is best defined as:"
    options:
      - "A) The time until the player first experiences the core enjoyable activity"
      - "B) The total playtime of the main story"
      - "C) The time to reach the level cap"
      - "D) The game's load time"
    answer: "A"
    explanation: "Time-to-fun measures how quickly a new player reaches the hook. Long tutorials before the core loop is available hurt early retention."
  - id: 5
    type: "multiple-choice"
    question: "A prestige loop typically works by:"
    options:
      - "A) Resetting progress in exchange for a persistent bonus or status, starting a new cycle"
      - "B) Removing all progression systems"
      - "C) Adding only cosmetic purchases"
      - "D) Matching players against similar opponents"
    answer: "A"
    explanation: "Prestige trades accumulated progress for a lasting reward and a fresh climb, extending the progression ladder without much new content."
  - id: 6
    type: "multiple-choice"
    question: "How does meta progression differ from in-run progression?"
    options:
      - "A) Meta progression persists across runs, while in-run progression resets each run"
      - "B) Meta progression is always monetized"
      - "C) In-run progression is permanent"
      - "D) They are identical systems"
    answer: "A"
    explanation: "Meta progression carries between sessions and softens failure, while in-run progression is scoped to a single attempt and resets afterward."
  - id: 7
    type: "short-answer"
    question: "Explain the difference between pacing and reward cadence."
    answer: "Pacing is the overall rhythm of intensity, downtime, challenge, and reward across the experience, while reward cadence is specifically the frequency and timing with which rewards are delivered. Cadence is one instrument the designer uses to shape pacing."
    explanation: "Pacing is the broad experiential timeline; cadence is the reward-specific schedule that contributes to it, alongside difficulty and level structure."
  - id: 8
    type: "short-answer"
    question: "Why is time-to-fun important, and what does a long time-to-fun cost a game?"
    answer: "Time-to-fun measures how quickly a new player reaches the core enjoyable loop. A long time-to-fun costs early retention, because many players quit before experiencing what makes the game worth playing."
    explanation: "Players churn during onboarding if the hook is delayed, so designers front-load a taste of the core activity before extended teaching."
  - id: 9
    type: "applied"
    question: "Players report that your game feels grindy in its middle act while the beginning and end feel fine. Using this lesson, propose three distinct fixes."
    answer: "Any three of: flatten the XP or power curve in that band; increase reward cadence with smaller, more frequent milestones; adjust content gating so new content arrives sooner; add side objectives or optional rewards that shorten the perceived gap; or introduce a complementary progression track such as gear or talents to give visible progress even when levels slow."
    explanation: "Grind is usually a pacing mismatch between the effort curve and the reward curve, so fixes either reduce required effort or increase visible reward frequency."
  - id: 10
    type: "applied"
    question: "Your story-driven game's credits roll after 15 hours, but committed players want a reason to keep going. Design an endgame using at least two concepts from this lesson."
    answer: "Any combination that uses prestige loops, meta progression, new curves, or reward cadence: for example, a New Game Plus prestige loop that resets difficulty with a persistent unlock tree; an endgame currency with its own faucets and sinks; challenge tiers that gate escalating rewards; or a mastery track that continues the power curve. The design should offer a new goal and a reason for continued play."
    explanation: "A successful endgame reframes progression after the main arc, using resets, new tracks, or escalating challenges to create fresh goals rather than repeating content."
---

# Week 16 — Progression, Curves, and Pacing

## Why This Matters

Progression is the designer's most powerful pacing tool. It answers a question players ask constantly without saying it out loud: am I getting anywhere, and is it worth continuing? As an engineer, you already think in terms of growth functions, unlock dependencies, and state machines, and that is most of the machinery. What this lesson adds is the experiential dimension: the same mathematical curve can feel generous, grindy, or rushed depending on how it is scheduled. Progression is not one ladder; it is a set of curves and gates that you compose into a rhythm.

## Learning Objectives

- Describe a progression system as a sequence of curves and gates rather than a single ladder.
- Distinguish XP curves from power curves and predict how each shape affects difficulty pacing.
- Design reward cadence that keeps players motivated without flattening challenge.
- Explain how content gating and time-to-fun interact with retention.
- Evaluate prestige loops and meta progression as ways to extend a game's endgame.

## Lesson

### Progression Is a Pacing Device

It is tempting to treat progression as pure player power: bigger numbers, better stats. But its real job is pacing. Progression meters out new complexity, gives players a visible sense of forward motion, and justifies the difficulty ramp by handing them tools at roughly the same rate the game asks more of them. Think of a progression system as a directed graph of unlocks, where each node is a capability and each edge is a prerequisite. A well-shaped graph introduces one meaningful new option at a time, so the player is always learning without being overwhelmed. Designers who treat progression only as a stat ladder end up with numbers that grow but experiences that do not.

### XP Curves and Power Curves

Two distinct curves drive most progression, and conflating them causes trouble. The XP curve maps effort to levels: how much experience the next level requires. It is commonly linear early and polynomial or exponential later, so each level takes progressively longer. The power curve maps levels to capability: how much stronger the player becomes. The danger is a mismatch. If the power curve accelerates faster than the difficulty curve, the game becomes trivial; if the XP curve accelerates faster than the content justifies, the game becomes a grind. Pokemon's experience curves, Diablo's paragon levels, and World of Warcraft's leveling bands are all variations on these shapes and are tuned alongside the content that surrounds them.

A simple way to reason about this is to track two rates: effort per level and capability per level. In a healthy band, capability per level roughly matches the increase in challenge, so the player feels progress without the game collapsing. When designers say a section "feels grindy," they usually mean effort per level rose while capability per level stayed flat, so the player is running to stand still.

### Pacing and Beats

Pacing is the deliberate rhythm of tension and release across a session and across the whole game. In narrative work people talk about beats; in games the same idea applies to encounters, exploration, and rewards. A typical session moves between high-intensity sequences, quieter traversal or puzzle beats, and moments of payoff. If every beat is loud, players habituate and feel nothing. If every beat is quiet, they disengage. The job is variation with escalation, so that the peaks feel earned and the valleys give players room to breathe and consolidate skills.

### Reward Cadence

Reward cadence is the schedule on which rewards arrive. Ten rewards spread evenly across an hour feel very different from ten rewards dumped at the end, even though the total is identical. Frequent small rewards sustain motivation through long efforts, while occasional large rewards create memorable spikes. This connects directly to the reinforcement schedules you studied earlier: variable schedules are compelling, and predictable ones create rhythm and trust. The design failure modes are opposite and equally real. If rewards are too sparse, players feel the game is stingy and stop; if rewards are constant and trivial, they habituate and the rewards stop meaning anything. Cadence is how you spend motivation efficiently.

### Content Gating

Content gating restricts access until a condition is met, whether a level, a key item, or a skill. Gating does three jobs: it paces complexity so players are not overwhelmed, it controls difficulty by ensuring players have the tools the content assumes, and it sequences the experience so narrative and mechanical reveals land in the right order. Pokemon's gym badges and Zelda's dungeon items are classic gates. Over-gating, however, produces frustration and artificial padding, especially when the gate is a grind rather than a skill check. Under-gating produces aimless difficulty spikes, because players reach content before they have the means to handle it. Gates should be earned through the skills the content will test.

### Time-to-Fun

Time-to-fun is the elapsed time from first launch to the first genuinely enjoyable experience of the core loop. It is one of the strongest predictors of early retention, because players decide whether to continue long before they have seen most of your game. A long tutorial, a slow story prologue, or a grindy opening can cost you the player before the good part arrives. The fix is not to remove onboarding but to front-load a taste of the core activity, then teach within it. If your game is about clever combat, the player should be making a meaningful combat choice within the first few minutes, not after twenty minutes of exposition.

### Prestige Loops and Meta Progression

When content runs out, progression can restart on a new axis. A prestige loop resets accumulated progress in exchange for a persistent bonus or status, creating a fresh climb with a higher ceiling. Call of Duty's prestige system, Diablo's paragon-style resets, and idle games built on rebirth mechanics all use this pattern. Meta progression is the related idea of permanent advancement that persists across runs, as in roguelikes such as Hades, where unlockable weapons and upgrades make each run slightly stronger even after a loss. Both soften the sting of failure and extend the game's lifespan without needing entirely new content. Both also carry a risk: if meta progression is too strong, it can override player skill and turn the game into a grind for permanent power rather than a test of mastery.

### Curves in Practice: Reading a Progression Table

Once you have a spreadsheet, the fastest way to audit a progression system is to read its rows as a story. At level ten, how long did it take, how much stronger is the player, and what new content opened? At level twenty, the same three numbers. If time-per-level rises sharply while power-per-level and content-per-level stay flat, players will call it a grind. If power-per-level spikes while the content stays easy, players will call it trivial. Mature designs often alternate: a steep power gain paired with a new tier of challenge, followed by a flatter band that lets players enjoy their new capability before the next climb. This alternation is pacing expressed in numbers, and it is far easier to see in a table than to feel subjectively in play. Build the table before you build the content, because it is cheaper to move a number than to cut a level. A useful sanity check is to ask what the player can do at level thirty that they could not do at level ten; if the answer is only bigger numbers, the power curve is doing no experiential work.

### The Endgame

The endgame is the phase after the main arc, when leveling ends and committed players still want a reason to log in. Good endgames typically introduce a new axis of progression, such as raiding gear, ranked ladders, or challenge tiers, and their own economies of faucets and sinks. World of Warcraft's endgame raiding and Destiny's power grind are consumable by design: they answer the question "what now?" without pretending the original arc is endless. The design principle is that the endgame should offer new goals and new mastery, not simply repeat the campaign at higher numbers. If it does, players correctly perceive it as filler.

## Key Takeaways

- Progression is a pacing device; its job is to meter complexity and reward, not just inflate numbers.
- XP curves measure effort and power curves measure capability; a mismatch produces triviality or grind.
- Pacing alternates intensity and release, and reward cadence determines whether motivation is sustained or squandered.
- Content gating sequences complexity and difficulty, but should be earned through relevant skills, not padding.
- Short time-to-fun protects early retention by delivering the core loop before lengthy teaching.
- Prestige loops and meta progression extend longevity by restarting progress on a new axis, at the risk of replacing mastery with grinding.

## Vocabulary

| Term | Definition |
|---|---|
| Progression | The structured unfolding of player power, content, or unlocks over time, serving as a pacing and motivation device. |
| XP curve | The function that maps time or effort to levels, defining how much experience each level requires. |
| Power curve | The function that maps levels or play time to player capability, such as stats, skills, or gear thresholds. |
| Pacing | The deliberate rhythm of intensity, downtime, challenge, and reward across a play session and across the whole game. |
| Reward cadence | The frequency and rhythm with which rewards are delivered, which governs how generous or grindy a game feels. |
| Content gating | Restricting access to content until a prerequisite is met, used to pace complexity, control difficulty, and sequence the experience. |
| Prestige loop | A reset of accumulated progress in exchange for a persistent bonus or status, extending the progression ladder with a new cycle. |
| Meta progression | Permanent advancement that persists across runs or sessions, as opposed to power that resets at the start of a run. |
| Time-to-fun | The elapsed time from first launch until the player experiences the core enjoyable activity, a key driver of early retention. |
| Endgame | The content and progression that exists after the main leveling or story arc, designed to retain committed players. |

## Quiz

1. A linear XP curve means that:
   - A) Each level requires the same amount of experience
   - B) Each level requires exponentially more experience
   - C) Levels stop after a fixed cap
   - D) Player power decreases with each level
2. The primary design purpose of content gating is to:
   - A) Pad playtime with no benefit
   - B) Pace the delivery of complexity and control the flow of difficulty and reward
   - C) Sell downloadable content
   - D) Reduce the game's file size
3. Reward cadence refers to:
   - A) The frequency and rhythm of rewards over time
   - B) The total number of rewards in the game
   - C) The visual style of reward animations
   - D) The monetization model
4. Time-to-fun is best defined as:
   - A) The time until the player first experiences the core enjoyable activity
   - B) The total playtime of the main story
   - C) The time to reach the level cap
   - D) The game's load time
5. A prestige loop typically works by:
   - A) Resetting progress in exchange for a persistent bonus or status, starting a new cycle
   - B) Removing all progression systems
   - C) Adding only cosmetic purchases
   - D) Matching players against similar opponents
6. How does meta progression differ from in-run progression?
   - A) Meta progression persists across runs, while in-run progression resets each run
   - B) Meta progression is always monetized
   - C) In-run progression is permanent
   - D) They are identical systems
7. (Short answer) Explain the difference between pacing and reward cadence.
8. (Short answer) Why is time-to-fun important, and what does a long time-to-fun cost a game?
9. (Applied) Players report that your game feels grindy in its middle act while the beginning and end feel fine. Using this lesson, propose three distinct fixes.
10. (Applied) Your story-driven game's credits roll after 15 hours, but committed players want a reason to keep going. Design an endgame using at least two concepts from this lesson.

## Answer Key

1. **A.** A linear curve keeps the per-level XP requirement constant; polynomial and exponential curves raise it as levels climb.
2. **B.** Gating sequences complexity and controls when new challenge and reward arrive, keeping pacing coherent.
3. **A.** Cadence is about frequency and rhythm over time; the same total rewards on a different schedule feel entirely different.
4. **A.** Time-to-fun measures how quickly a new player reaches the hook, and a long delay costs early retention.
5. **A.** Prestige trades accumulated progress for a persistent benefit and a fresh climb, extending the ladder without much new content.
6. **A.** Meta progression persists across sessions and softens failure; in-run progression is scoped to a single attempt and resets.
7. **Short answer.** Pacing is the overall rhythm of intensity, downtime, challenge, and reward; reward cadence is specifically the frequency and timing of reward delivery, one instrument used to shape pacing.
8. **Short answer.** Time-to-fun is how long until a player first experiences the core enjoyable loop. A long time-to-fun costs early retention because players quit before reaching the hook.
9. **Applied.** Any three of: flatten the curve in that band; raise reward cadence with smaller, frequent milestones; adjust gating so new content arrives sooner; add optional side rewards; or add a parallel progression track so visible progress continues.
10. **Applied.** Any design using two or more of prestige loops, meta progression, new curves, gating, or cadence: for example, New Game Plus with a persistent unlock tree, an endgame currency with its own faucets and sinks, or escalating challenge tiers with rewards. It must offer new goals and mastery, not repeated content.

## Exercises

1. **Chart two curves (hands-on).** In a spreadsheet, plot four XP curves side by side: linear, polynomial (level squared), exponential (1.5 to the level), and a hand-tuned curve from a game you know. Add a column for cumulative time-to-level-cap and note which shape feels generous early and grindy late.
2. **Beat map a session.** Play one hour of a story or action game and note every intensity peak, lull, and reward, marking timestamps. Chart the rhythm on a simple timeline. Identify whether the cadence is regular, escalating, or erratic, and write a paragraph on how it felt.
3. **Design a prestige loop.** Choose a game you know and design a New Game Plus prestige loop: state what resets, what persists, what the persistent bonus is, and how you prevent it from trivializing the second playthrough. Give the first three cycle numbers.

## Further Study

- Ian Schreiber and Brenda Romero, *Game Balance* (CRC Press) — chapters on progression, curves, and reward structure.
- Celia Hodent, *The Gamer's Brain* — on onboarding, cognitive load, and the psychology of early retention.
- Jesse Schell, *The Art of Game Design: A Book of Lenses* — the Lens of Reward and the Lens of Time.
- Games to study: *Hades* (meta progression), *Call of Duty* (prestige loops), *World of Warcraft* (leveling and endgame), and *Vampire Survivors* (reward cadence and unlock pacing).
