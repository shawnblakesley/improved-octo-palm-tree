---
week: 22
title: "Enemy Design and Encounter Composition"
unit: 6
unitTitle: "Challenge, Enemies & AI"
estimatedMinutes: 90
prerequisites:
  - "Week 21"
objectives:
  - "Classify enemies by the role they play in an encounter rather than by their fiction."
  - "Design telegraphed attack patterns that keep a fight readable and fair."
  - "Compose multiple enemy roles into an encounter with a deliberate difficulty budget."
  - "Shape arena geometry to control pressure, spacing, and retreat options."
  - "Use elite enemies to raise stakes without breaking the encounter's readable grammar."
vocabulary:
  - term: "Enemy role"
    definition: "The function an enemy performs in a fight — such as tank, sniper, or swarm — independent of its visual theme."
  - term: "Telegraph"
    definition: "A pre-attack signal that tells the player what is about to happen and roughly when, giving them a fair window to respond."
  - term: "Attack pattern"
    definition: "The timing, range, and sequencing of an enemy's attacks, considered as a learnable rhythm rather than isolated hits."
  - term: "Encounter"
    definition: "A discrete combat situation composed of enemies, arena, and pacing, with a beginning, escalation, and resolution."
  - term: "Composition"
    definition: "The deliberate selection and placement of enemy roles so their strengths and weaknesses interact."
  - term: "Pressure"
    definition: "The amount of simultaneous demand an encounter places on the player's attention, positioning, and resources."
  - term: "Difficulty budget"
    definition: "A designer's rough accounting of how much threat, complexity, and time an encounter should spend, so difficulty escalates in measured steps."
  - term: "Swarm"
    definition: "A mass of individually weak enemies whose threat comes from numbers, flanking, and attention overload rather than raw damage."
  - term: "Elite enemy"
    definition: "A tougher variant or unique foe that raises the stakes of an encounter while usually keeping the same readable grammar as its base type."
  - term: "Arena"
    definition: "The bounded combat space whose geometry — cover, elevation, chokepoints, exits — dictates how a fight actually plays out."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "In encounter design, what does an enemy's 'role' describe?"
    options:
      - "A) Its visual theme and animation budget"
      - "B) The function it performs in a fight, such as tank, sniper, or swarm"
      - "C) The lore reason it is hostile to the player"
      - "D) Its position in the game's overall difficulty curve"
    answer: "B"
    explanation: "Role is functional, not thematic; the same function can be skinned as a knight, a robot, or a fungus."
  - id: 2
    type: "multiple-choice"
    question: "Why do attacks need a telegraph?"
    options:
      - "A) To make the game easier by adding delay"
      - "B) To let the player respond fairly within a readable window"
      - "C) To show off the animation system"
      - "D) To give enemies a chance to be interrupted"
    answer: "B"
    explanation: "A telegraph converts an unavoidable hit into a learnable event the player can react to or punish."
  - id: 3
    type: "multiple-choice"
    question: "What is a difficulty budget used for?"
    options:
      - "A) Tracking how much money was spent on enemy art"
      - "B) Limiting the total number of enemies in a level to a fixed cap"
      - "C) Accounting for threat and complexity so difficulty escalates in measured steps"
      - "D) Ensuring every encounter is the same length"
    answer: "C"
    explanation: "It is a rough designer's ledger of how much pressure an encounter should spend relative to the curve."
  - id: 4
    type: "multiple-choice"
    question: "A tank enemy and a sniper enemy posed in the same open room are dangerous mainly because:"
    options:
      - "A) They deal more damage together than separately"
      - "B) They force the player to solve two conflicting spatial problems at once"
      - "C) They share the same attack pattern"
      - "D) They cannot both be killed"
    answer: "B"
    explanation: "Composition creates tension when two roles demand incompatible responses — closing distance vs. finding cover."
  - id: 5
    type: "multiple-choice"
    question: "What most distinguishes an elite enemy from a boss?"
    options:
      - "A) Elites are always optional and bosses are mandatory"
      - "B) Elites usually keep the readable grammar of their base type while raising stakes"
      - "C) Elites cannot be defeated by the player's core mechanic"
      - "D) Elites always appear in groups"
    answer: "B"
    explanation: "Elites are upgrades of an existing threat, so the player can apply learned responses; bosses are their own authored set piece."
  - id: 6
    type: "multiple-choice"
    question: "Why does arena geometry matter as much as the enemies placed in it?"
    options:
      - "A) It determines the frame rate of the encounter"
      - "B) Cover, elevation, and chokepoints decide how pressure and spacing actually resolve"
      - "C) It is the only way to make enemies pathfind"
      - "D) It has no effect if the enemies are well designed"
    answer: "B"
    explanation: "The same enemy roster plays completely differently in an open field, a corridor, and a multi-level room."
  - id: 7
    type: "scenario"
    question: "Playtesters say an encounter is 'chaotic' and they die without understanding why. The enemies are a swarm plus a sniper. What is the best first change?"
    options:
      - "A) Remove the swarm and keep the sniper"
      - "B) Increase the player's health so they survive longer"
      - "C) Give the sniper a distinct, longer telegraph and a laser sight so its threat is spatially legible"
      - "D) Add a tank to make the fight more memorable"
    answer: "C"
    explanation: "The complaint is about readability, not raw difficulty. A clear telegraph and sightline turn an invisible threat into one the player can prioritize and counter."
  - id: 8
    type: "scenario"
    question: "You want an encounter to feel like a pressure cooker that rewards retreating and repositioning. Which arena best supports that?"
    options:
      - "A) A wide, empty circle with no cover"
      - "B) A single narrow corridor with enemies at both ends"
      - "C) A room with staggered cover, a raised platform, and two side exits"
      - "D) A flat arena with all enemies spawned at once around the player"
    answer: "C"
    explanation: "Staggered cover, elevation, and side exits give the player meaningful choices about pressure and spacing, which is what the intended feeling requires."
  - id: 9
    type: "short-answer"
    question: "Define 'pressure' in encounter design and explain one way a designer can raise it without adding enemies."
    answer: "Pressure is the simultaneous demand placed on the player's attention, positioning, and resources. It can be raised by shrinking the arena, removing cover, adding a timer, or making existing enemies attack from two directions at once."
    explanation: "A full-credit answer defines pressure as simultaneous demand and names a non-population lever such as space, time, or sightlines."
  - id: 10
    type: "short-answer"
    question: "Describe the function of a swarm enemy and one counter the player should discover."
    answer: "A swarm's threat is numbers, flanking, and attention overload rather than individual damage. The player should learn to use area attacks, chokepoints, or elevation to neutralize many weak enemies at once."
    explanation: "The answer must distinguish swarm threat (multiplicity) from raw damage and name a positional or mechanical counter."
---

# Week 22 — Enemy Design and Encounter Composition

## Why This Matters

A single enemy is a noun; an encounter is a sentence. Programmers instinctively model enemies as objects with behavior, but the interesting design work happens one level up: choosing which behaviors to put in a room together so their combination creates a problem the player can read, solve, and feel clever about. This is composition in the same sense as function composition — a handful of simple, well-understood pieces producing a rich result — except the runtime is a human under pressure.

This lesson treats enemies as design material. The unit of craft is not "the goblin" but "the goblin, the archer, and the ledge." Get the encounter grammar right and you can reuse a dozen enemy types across a whole game; get it wrong and you will keep adding hit points to compensate for a room that was never legible.

## Learning Objectives

- Classify enemies by combat role rather than by fiction or theme.
- Design telegraphed attack patterns that are learnable and fair.
- Compose roles into encounters using a deliberate difficulty budget.
- Shape arenas to control pressure, spacing, and retreat.
- Deploy elite enemies to raise stakes without breaking the readable grammar.

## Lesson

### Enemies Are Verbs With Agendas

The most useful habit is to name an enemy by what it does to the player, not by what it looks like. A tank forces the player to retreat or reposition because it cannot be killed quickly head-on. A sniper forces the player to break line of sight or close distance under fire. A swarm forces the player to avoid being surrounded and to use area tools. A support enemy forces the player to prioritize a target that is not directly threatening. The fiction — zombie, knight, drone — is a costume laid over the verb.

Once you think in roles, you can audit a roster the way you audit an API. Every enemy should have a clear input (what it demands) and a clear output (what it costs the player when ignored). An enemy that demands nothing special is furniture. Two enemies that demand the same response are redundant in the same encounter; two that demand contradictory responses are the beginning of an interesting fight. Halo's covenant sandbox is the classic teaching example: Grunts collapse in panic, Elites press forward, Jackals shield a direction, and Hunters punish standing still. Each is a different verb.

### Telegraphing

A telegraph is a pre-attack signal. Its job is to convert what would be an unfair hit into a learnable event. The telegraph tells the player three things quickly: something is about to happen, roughly where it will land, and roughly when. The best telegraphs use multiple channels at once — a pose, a sound, a color, a floor decal — because players process different channels at different speeds.

The design tension is length. A long telegraph is fair but can make a fight feel sluggish and turn into a rhythm game of waiting. A short telegraph is snappy but can feel cheap when the player has no time to react. The resolution is to match telegraph length to the consequence: a chip-damage jab can be nearly instant, while a one-shot kill must be broadcast loudly and early. Dark Souls and Sekiro build entire fights on this ratio — the wind-up is long precisely because the hit is catastrophic. Into the Breach goes further and shows the incoming attack grid on the enemy's turn, making every threat perfectly legible and moving difficulty entirely into planning.

### Attack Patterns

An attack pattern is the timing, range, and sequencing of attacks considered as a rhythm rather than as isolated events. Patterns are what the player actually memorizes. A good pattern has variation within a recognizable grammar: it should be predictable enough to learn and varied enough that memorization alone does not trivialize it. The rhythm usually escalates — a slow opening, a faster middle, a punish window after the big move — and the punish window is where skill expresses itself.

Treat the pattern as a contract. If the enemy's wind-up always precedes a rightward sweep, the player will trust it; breaking your own contract without a visual cue is the combat equivalent of a function that returns a different type. This is why bosses get a distinct animation for a new move: the player needs to know the contract changed.

### Encounter Composition

An encounter is a short arc: setup, escalation, resolution. Composition is choosing roles so the arc has a shape. The most reliable engine of tension is incompatible demands. A tank in the open says "come closer"; a sniper on a ledge says "stay in cover." Together they force a decision about which problem to solve first, and that decision is the encounter. Add a swarm and the player must also avoid being surrounded, so the room now asks three questions at once.

The failure mode is noise. Stacking too many roles that all demand immediate attention produces a fight that reads as chaos — the player dies without a theory of why. The fix is usually sequencing: introduce roles one at a time, let the player solve each, then combine. This mirrors teach–test–twist from Week 21, because an encounter is a puzzle with a pulse. Left 4 Dead's Director is instructive: it chooses special-infected combinations and timing with dramatic pacing in mind, often deliberately giving the players quiet beats before a crescendo.

### Pressure, Spacing, and the Difficulty Budget

Pressure is the simultaneous demand on attention, positioning, and resources. Spacing is the player's control over distance and lines of fire. The two are coupled: pressure rises when the player loses the freedom to reposition. A designer can raise pressure by shrinking the arena, removing cover, adding a second approach direction, or shortening the interval between waves — none of which requires more enemies.

The difficulty budget is a designer's rough ledger for how much threat an encounter should spend, given where it sits in the overall curve. It is not a literal number; it is a discipline against the common programmer instinct to keep adding complexity until the system is "interesting." Every increment — an extra elite, a tighter timer, a new hazard — draws down the budget. Spending it all early leaves a flat, numbing back half; pacing it lets difficulty climb. Wave-based games like Gears of War's Horde mode make this explicit, and the underlying idea is the same as pacing any content: escalation must feel earned.

### Arena Design

Arena geometry decides how the composition actually resolves. Cover determines whether a sniper is a problem or a joke; elevation decides who controls the fight; chokepoints decide whether a swarm can be funneled; exits decide whether retreat is a valid tactic. The same enemy roster in an open field, a corridor, and a multi-level room produces three entirely different encounters.

A practical method is to block out the arena with the intended verbs in mind. If the fight is about flanking, there must be routes a flanker can use and sightlines the player can break. If it is about holding ground, there must be a defensible position worth holding. Arena design is level design (Weeks 17–20) turned toward combat: geometry is the real rule set, and the enemies are simply what makes the rules matter.

### Elites and Escalation

An elite enemy raises stakes while mostly preserving the readable grammar of its base type. The flaming brute still charges; it just hits harder and has an extra move. This is powerful because the player already owns the counter — the encounter tests mastery rather than forcing a fresh lesson. Elites are the natural bridge between regular encounters and bosses, and they are a cheap way to make a familiar room feel new.

The design risk is a mismatch between spectacle and legibility. An elite that changes the fight's rules without telegraphing the change feels like a betrayal. The safe pattern is to keep the silhouette recognizable, add one or two new calls, and signal each new call clearly. Save true rule-breaking for bosses (Week 24), where the player expects a new contract and a dedicated arena to learn it.

## Key Takeaways

- Name enemies by the response they demand, not by their fiction.
- Telegraphs convert unfair hits into learnable events; scale their length to the consequence.
- Attack patterns are contracts: predictable enough to learn, varied enough to reward mastery.
- Encounters are short arcs whose tension comes from incompatible demands, not from raw enemy count.
- Pressure and spacing are the real difficulty levers; geometry is as much of the encounter as the enemies.
- Elites raise stakes by upgrading a known grammar; reserve rule-breaking for bosses.

## Vocabulary

| Term | Definition |
|---|---|
| Enemy role | The function an enemy performs in a fight, such as tank, sniper, or swarm, independent of theme. |
| Telegraph | A pre-attack signal that warns the player what is coming and roughly when. |
| Attack pattern | The timing, range, and sequencing of attacks as a learnable rhythm. |
| Encounter | A discrete combat situation with a beginning, escalation, and resolution. |
| Composition | The deliberate selection and placement of enemy roles so their strengths and weaknesses interact. |
| Pressure | The simultaneous demand an encounter places on attention, positioning, and resources. |
| Difficulty budget | A rough accounting of how much threat and complexity an encounter should spend. |
| Swarm | A mass of weak enemies whose threat is numbers, flanking, and attention overload. |
| Elite enemy | A tougher variant that raises stakes while keeping the base type's readable grammar. |
| Arena | The bounded combat space whose geometry dictates how a fight resolves. |

## Quiz

1. In encounter design, what does an enemy's "role" describe?
   - A) Its visual theme and animation budget
   - B) The function it performs in a fight, such as tank, sniper, or swarm
   - C) The lore reason it is hostile to the player
   - D) Its position in the game's overall difficulty curve

2. Why do attacks need a telegraph?
   - A) To make the game easier by adding delay
   - B) To let the player respond fairly within a readable window
   - C) To show off the animation system
   - D) To give enemies a chance to be interrupted

3. What is a difficulty budget used for?
   - A) Tracking how much money was spent on enemy art
   - B) Limiting the total number of enemies in a level to a fixed cap
   - C) Accounting for threat and complexity so difficulty escalates in measured steps
   - D) Ensuring every encounter is the same length

4. A tank and a sniper posed in the same open room are dangerous mainly because:
   - A) They deal more damage together than separately
   - B) They force the player to solve two conflicting spatial problems at once
   - C) They share the same attack pattern
   - D) They cannot both be killed

5. What most distinguishes an elite enemy from a boss?
   - A) Elites are always optional and bosses are mandatory
   - B) Elites usually keep the readable grammar of their base type while raising stakes
   - C) Elites cannot be defeated by the player's core mechanic
   - D) Elites always appear in groups

6. Why does arena geometry matter as much as the enemies placed in it?
   - A) It determines the frame rate of the encounter
   - B) Cover, elevation, and chokepoints decide how pressure and spacing actually resolve
   - C) It is the only way to make enemies pathfind
   - D) It has no effect if the enemies are well designed

7. **[Applied]** Playtesters say an encounter is "chaotic" and they die without understanding why. The enemies are a swarm plus a sniper. What is the best first change?
   - A) Remove the swarm and keep the sniper
   - B) Increase the player's health so they survive longer
   - C) Give the sniper a distinct, longer telegraph and a laser sight so its threat is spatially legible
   - D) Add a tank to make the fight more memorable

8. **[Applied]** You want an encounter to feel like a pressure cooker that rewards retreating and repositioning. Which arena best supports that?
   - A) A wide, empty circle with no cover
   - B) A single narrow corridor with enemies at both ends
   - C) A room with staggered cover, a raised platform, and two side exits
   - D) A flat arena with all enemies spawned around the player at once

9. **[Short answer]** Define "pressure" in encounter design and explain one way a designer can raise it without adding enemies.

10. **[Short answer]** Describe the function of a swarm enemy and one counter the player should discover.

## Answer Key

1. **B.** Role is functional; the same function can be skinned many ways.
2. **B.** A telegraph converts an unavoidable hit into a learnable, punishable event.
3. **C.** The budget is a rough ledger of threat and complexity relative to the difficulty curve.
4. **B.** Composition matters when two roles demand incompatible responses, forcing a decision.
5. **B.** Elites upgrade a known grammar so learned counters still apply; bosses author a new contract.
6. **B.** The same roster plays completely differently depending on cover, elevation, and exits.
7. **C.** The complaint is readability, not raw difficulty; making the hidden threat spatially legible is the first fix.
8. **C.** Staggered cover, elevation, and side exits give real choices about pressure and spacing.
9. **Model answer:** Pressure is the simultaneous demand on attention, positioning, and resources. It can be raised by shrinking the arena, removing cover, adding a timer, or opening a second approach direction.
10. **Model answer:** A swarm threatens through numbers, flanking, and attention overload rather than raw damage. The player should learn to use area attacks, chokepoints, or elevation to neutralize many weak enemies at once.

## Exercises

1. **Hands-on — design an enemy with a one-sentence counter-strategy.** Invent one enemy and state the response it demands in a single sentence (for example: "The Drifter punishes standing still, so the player must keep moving or force it into a corner"). Then define its telegraph, its attack pattern's rhythm, and the one moment it is vulnerable.
2. **Compose an encounter on paper.** Using three roles from a game you know, sketch an arena top-down and place them. Write the intended encounter arc (setup, escalation, resolution) and mark where the difficulty budget is spent. Note which role the player should kill first and why the geometry does or does not make that obvious.
3. **Elite redesign.** Take an existing weak enemy and promote it to an elite. Add one new attack and one new trait, keeping its silhouette and core grammar recognizable. Write two sentences on how you telegraph the new attack so it feels like a test of mastery rather than a betrayal.

## Further Study

- **Halo: The Master Chief Collection (343 Industries / Bungie)** — the covenant roster is the standard text on enemy roles and readable composition.
- **Into the Breach (Subset Games)** — every enemy attack is telegraphed perfectly, making composition and spacing the entire puzzle.
- **Left 4 Dead 2 (Valve)** — study the AI Director's dramatic pacing of special-infected combinations.
- **Game Maker's Toolkit (YouTube channel)** — design analysis of enemies, arenas, and boss encounters, including the Boss Keys series.
