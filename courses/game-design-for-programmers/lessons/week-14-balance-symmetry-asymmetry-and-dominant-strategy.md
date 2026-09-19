---
week: 14
title: "Balance: Symmetry, Asymmetry, and Dominant Strategy"
unit: 4
unitTitle: "Chance, Skill & Balance"
estimatedMinutes: 90
prerequisites:
  - "Week 13"
objectives:
  - "Define game balance and distinguish it from equality and fairness."
  - "Compare symmetric and asymmetric balance and explain the trade-offs of each."
  - "Analyze a mechanic using rock-paper-scissors counter relationships and identify degenerate cases."
  - "Explain how cost curves, nerfs, and buffs steer the metagame over time."
  - "Critique a tier list as a snapshot of a metagame rather than a fixed law."
vocabulary:
  - term: "Balance"
    definition: "The state in which no available option trivially dominates the rest, so many strategies remain viable across skill levels."
  - term: "Symmetry"
    definition: "A design in which all players or sides have access to identical options, making the contest a test of execution and decision-making."
  - term: "Asymmetry"
    definition: "A design in which sides have different options and abilities, trading ease of balancing for expressiveness and variety."
  - term: "Dominant strategy"
    definition: "An option that is at least as good as every alternative in every situation, so rational players always choose it and the decision collapses."
  - term: "Rock-paper-scissors"
    definition: "A counter cycle in which each option beats one and loses to one, guaranteeing that no single choice dominates."
  - term: "Cost curve"
    definition: "The relationship between an option's price and its power; a healthy curve makes higher-cost options more powerful without making low-cost ones useless."
  - term: "Metagame"
    definition: "The game about the game: the set of strategies the community converges on given the current rules, discovered and spread through play."
  - term: "Nerf"
    definition: "A change that reduces an option's power, typically applied to shrink a dominant or overused strategy."
  - term: "Buff"
    definition: "A change that increases an option's power, typically applied to make weak or unused strategies viable."
  - term: "Tier list"
    definition: "A ranking of options by perceived strength at a given skill level and patch; a diagnostic snapshot, not a permanent truth."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which definition of balance best matches the discipline's usage?"
    options:
      - "A) Every option has statistically identical win rates"
      - "B) No option trivializes the game, and many strategies remain viable"
      - "C) All sides are perfectly symmetric"
      - "D) The strongest option is equally strong for everyone"
    answer: "B"
    explanation: "Balance is about the absence of game-trivializing options and a healthy space of viable strategies, not numeric equality or symmetry."
  - id: 2
    type: "multiple-choice"
    question: "Why is asymmetric balance generally harder than symmetric balance?"
    options:
      - "A) It is mathematically impossible to balance"
      - "B) Different sides have distinct strengths, so equivalence means comparable power rather than identical options"
      - "C) Players refuse to play asymmetric games"
      - "D) Asymmetric games cannot use counters"
    answer: "B"
    explanation: "When sides differ, you cannot compare like for like; balance means each side has real strengths and weaknesses that require different skills, which is harder to verify."
  - id: 3
    type: "multiple-choice"
    question: "Why does a pure rock-paper-scissors cycle keep decisions live?"
    options:
      - "A) It contains built-in output randomness"
      - "B) No option dominates, because each beats exactly one and loses to exactly one"
      - "C) It makes all options identical"
      - "D) It removes the need for skill"
    answer: "B"
    explanation: "A closed counter cycle guarantees every option has a predator and prey, preventing any single choice from being universally correct and keeping the decision space open."
  - id: 4
    type: "multiple-choice"
    question: "A dominant strategy is best described as:"
    options:
      - "A) An action that is at least as good as every alternative in all situations"
      - "B) The most expensive item in the shop"
      - "C) The option that beats the most popular pick"
      - "D) The starting choice with the highest tier-list rating"
    answer: "A"
    explanation: "Dominance is a comparative property: the option is never worse than the alternatives, so rational players always take it and the decision tree collapses to one branch."
  - id: 5
    type: "multiple-choice"
    question: "If a 1-cost card consistently outperforms a 3-cost card, the most likely diagnosis is:"
    options:
      - "A) Healthy design, since cheap cards should be strong"
      - "B) A broken cost curve that creates dominance and should be retuned"
      - "C) Excessive output randomness"
      - "D) A metagame that has not developed yet"
    answer: "B"
    explanation: "A cost curve should make higher-cost options more powerful. When a cheap option beats an expensive one, the curve is inverted and the expensive option is dominated."
  - id: 6
    type: "multiple-choice"
    question: "Why do developers often prefer buffs to nerfs when tuning?"
    options:
      - "A) Buffs are cheaper to implement"
      - "B) Buffs expand the set of viable options instead of shrinking it, preserving fun mechanics"
      - "C) Buffs are invisible to players and avoid complaining"
      - "D) Buffs reduce variance automatically"
    answer: "B"
    explanation: "Nerfing fun mechanics removes content and can anger players; buffing weak options enlarges the viable pool. Nerfs remain necessary when an option trivializes the game."
  - id: 7
    type: "short-answer"
    question: "Distinguish symmetric from asymmetric balance and give one example of each."
    answer: "Symmetric balance gives all players identical options, as in chess or a Quake arena, making the contest about execution. Asymmetric balance gives sides different options and abilities, as in StarCraft's factions or Overwatch's heroes, trading balancing difficulty for variety and expression."
    explanation: "Symmetry is easier to verify because both sides face identical constraints, while asymmetry demands comparable-but-different power that is harder to measure."
  - id: 8
    type: "short-answer"
    question: "What is the metagame, and why can it change even when the game is not patched?"
    answer: "The metagame is the community's evolving set of viable strategies. It changes without a patch because players innovate, copy successful builds, and counter known strategies, so the population of strategies shifts through discovery and imitation alone."
    explanation: "The metagame is emergent social behavior layered on top of fixed rules, so it evolves through learning even when the underlying systems do not change."
  - id: 9
    type: "applied"
    question: "A sniper option in your game wins the vast majority of matches at every skill level. Propose two distinct balance changes and explain the trade-off of each."
    answer: "Any two of: nerf the sniper directly by reducing damage, range, or rate of fire, which risks making it unviable; add a hard counter such as a flanker or smoke mechanic, which punishes the sniper but adds complexity; increase its cost or cooldown so it is a high-risk choice; or buff competing options to widen the viable pool. Each trades power against variety or complexity."
    explanation: "There is no single correct fix; the point is to choose between shrinking the dominant option and growing its competitors, and to accept the side effects."
  - id: 10
    type: "applied"
    question: "A hero is rated S-tier in professional play but D-tier at low ranks. What does this tell you about balance and tier lists?"
    answer: "The hero's power depends on skill and coordination, so it is not globally dominant. Tier lists are snapshots at a specific skill level and patch, and balancing only for one audience can distort the other; the designer must decide which population the balance target serves."
    explanation: "This gap shows that tier lists are contextual diagnostics rather than universal laws, and that the same option can be simultaneously too strong and too weak depending on the player."
---

# Week 14 — Balance: Symmetry, Asymmetry, and Dominant Strategy

## Why This Matters

Engineers already think in terms of equilibria, load distribution, and parameter tuning. Game balance borrows that mindset but changes the objective function: you are not making every option equal, you are keeping the decision space open. A game becomes boring the moment one option is always correct; at that point the player has stopped making decisions and is just executing a script. Your job is to preserve branching in the strategy tree across skill levels and across time, using symmetry, counters, cost curves, and patches. The tools are quantitative; the goal is experiential.

## Learning Objectives

- Define game balance and distinguish it from equality and fairness.
- Compare symmetric and asymmetric balance and explain the trade-offs of each.
- Analyze a mechanic using rock-paper-scissors counter relationships and identify degenerate cases.
- Explain how cost curves, nerfs, and buffs steer the metagame over time.
- Critique a tier list as a snapshot of a metagame rather than a fixed law.

## Lesson

### What Balance Actually Means

Balance is not equality. Chess is balanced, yet the two sides are not guaranteed equal outcomes; it is balanced because neither player has an option that trivializes the game and because outcomes are decided by play. Balance is also dynamic: as players improve, the set of viable options shifts, and an option that was fine at launch can become dominant once the community learns to use it. A designer therefore balances against a moving population, not a static spreadsheet, which is why live games patch continuously rather than ever declaring balance finished. The best you can do is keep the decision space open at the skill levels and moments that matter most. A balanced game has a wide space of viable strategies, no single path that always wins, and room for skill to express itself. Fairness is a related but distinct idea: fairness is the player's perception that the contest is just, while balance is a structural property of the options. You can have a fair game that is unbalanced (everyone shares the same overpowered tool) and an unfair-feeling game that is technically balanced. Aim for both, but measure them separately.

### Symmetry vs. Asymmetry

A symmetric design gives every player the same options. Chess, checkers, and arena shooters like Quake use symmetry because it makes balance legible: if the sides are identical, any imbalance must come from the map, the starting position, or the players themselves. Symmetry is easy to verify and easy to trust, but it can feel flavorless and limits design expression.

An asymmetric design gives sides different options. StarCraft's three races, Overwatch's hero roster, and most fighting-game casts are asymmetric. Asymmetry is more expressive and more replayable, but it is far harder to balance because equivalence no longer means identity — it means comparable strength achieved through different tools. Blizzard's guiding idea is that asymmetry is balanced when each side has distinct strengths and weaknesses that demand different skills, so no side is simply better. The practical difficulty is that a small numerical tweak on one side can ripple unpredictably across matchups, and players will always find the worst-case pairing.

### Rock-Paper-Scissors and Counters

The counter cycle is the basic tool for preventing dominance. In a pure rock-paper-scissors relationship, each option beats exactly one and loses to exactly one, so no choice is universally correct and the decision stays live. Pokemon's type chart is a large counter web, and Team Fortress 2's classes counter one another in broad strokes. Two conditions make counters work. First, they must be legible: the player must be able to understand and predict the relationship. Second, they must be answerable: the player needs a way to adapt, such as switching heroes, changing loadout, or repositioning. If a counter is overwhelming and unanswerable, the game degenerates into "pick the correct counter," which is a coin flip dressed as strategy. If counters are too weak, choices stop mattering.

### Cost Curves

A cost curve maps an option's price to its power. In deckbuilders and MOBAs, a cost-2 card should be roughly twice as impactful as a cost-1 card, and a cost-6 card should justify its slot. Healthy curves often bend rather than rise linearly, because stacking many cheap effects can otherwise outvalue one expensive one. If a cheap option outperforms an expensive one, the curve is inverted and the expensive option is dominated. Think of the curve as a function you are fitting to a target: outliers are not personality, they are balance bugs, and they usually signal a dominant strategy waiting to be discovered. Cost curves are also how you add asymmetry without chaos — different factions can have different curves, so long as each curve has its own internal logic.

### Nerfs, Buffs, and the Metagame

The metagame is the game about the game: the set of strategies the community converges on given the current rules. It emerges from play, evolves through innovation and imitation, and can shift even when nothing is patched. Developers steer it with changes. A nerf reduces an option's power; a buff increases it. Broadly, buffs enlarge the viable pool while nerfs shrink it, so when a choice is available, buffing weak options preserves more of the game's content and fun. But nerfs are sometimes the only honest fix: if an option trivializes play, buffing everything around it just inflates the whole system. League of Legends and Dota 2 patch frequently to keep the metagame churning, because a frozen metagame is a solved game. Treat patches as a control loop: you change a parameter, the community adapts, and you measure again.

### Reading Counters as a Graph

It helps to picture your options as a graph: nodes are choices, and an edge points from a counter to the thing it beats. A healthy graph is strongly connected, meaning you can travel from any option to any other by following counters, so no choice is a dead end. Dominance appears as a node with no incoming edges — nothing beats it. Degeneracy appears as a small cycle that bypasses the rest of the graph, such as an infinite combo that ignores the intended counter structure. When you patch, you are editing this graph: adding an edge is a counter, removing one is a nerf. Watch connectivity, not just individual win rates, because a roster that is technically balanced but disconnected plays like rock-paper-scissors with no rock.

### Dominance and Degeneracy

A dominant strategy is one that is at least as good as every alternative in every situation, so rational players always choose it. A degenerate strategy exploits a loophole to win trivially or endlessly, such as corner-camping a spawn or an infinite damage combo. Both collapse the decision space; dominance does it through raw strength, degeneracy through an unintended interaction. The fixes are structural: add a cost, add a counter, change the incentive, or remove the exploit. The worst response is to leave it in because "skilled players will adapt" — competitive players optimize, and they will find it.

### Skill and the Balance Target

Balance has no single target, because different skill levels experience the same rules differently. An option can be weak in a beginner's hands and dominant in an expert's, because its power depends on execution, timing, or coordination. That is why Overwatch and League of Legends balance casual and professional play on separate tracks, and why a change that improves one audience can ruin the other. Before you tune anything, name the population you are tuning for and the behaviour you want to change. A balance change without a target is just a number moving.

### Tier Lists

Tier lists rank options by perceived strength, usually at a specific skill level and patch. They are useful diagnostics: a cluster at the top warns you about dominance, and a gap between pro and low-rank ratings warns you that an option rewards coordination. They are not laws. A tier list is a snapshot of a metagame, it can be self-fulfilling because popularity breeds perception, and it often ignores matchup nuance. Use tier lists the way you use profiling data — as a signal that points you toward where to look, not as the answer itself.

## Key Takeaways

- Balance is the absence of game-trivializing options and the presence of many viable strategies, not numeric equality.
- Symmetry is easy to balance and verify but limits expression; asymmetry is expressive but demands comparable, not identical, power.
- Counters prevent dominance only when they are legible and answerable.
- Cost curves are tunable functions; an inverted curve usually hides a dominant option.
- Buffs tend to expand the viable pool and nerfs shrink it, but removing a trivializing option sometimes requires a nerf.
- The metagame is emergent player behavior; tier lists are contextual snapshots, not permanent truths.

## Vocabulary

| Term | Definition |
|---|---|
| Balance | The state in which no available option trivially dominates the rest, so many strategies remain viable across skill levels. |
| Symmetry | A design in which all players or sides have access to identical options, making the contest a test of execution and decision-making. |
| Asymmetry | A design in which sides have different options and abilities, trading ease of balancing for expressiveness and variety. |
| Dominant strategy | An option that is at least as good as every alternative in every situation, so rational players always choose it and the decision collapses. |
| Rock-paper-scissors | A counter cycle in which each option beats one and loses to one, guaranteeing that no single choice dominates. |
| Cost curve | The relationship between an option's price and its power; a healthy curve makes higher-cost options more powerful without making low-cost ones useless. |
| Metagame | The game about the game: the set of strategies the community converges on given the current rules, discovered and spread through play. |
| Nerf | A change that reduces an option's power, typically applied to shrink a dominant or overused strategy. |
| Buff | A change that increases an option's power, typically applied to make weak or unused strategies viable. |
| Tier list | A ranking of options by perceived strength at a given skill level and patch; a diagnostic snapshot, not a permanent truth. |

## Quiz

1. Which definition of balance best matches the discipline's usage?
   - A) Every option has statistically identical win rates
   - B) No option trivializes the game, and many strategies remain viable
   - C) All sides are perfectly symmetric
   - D) The strongest option is equally strong for everyone
2. Why is asymmetric balance generally harder than symmetric balance?
   - A) It is mathematically impossible to balance
   - B) Different sides have distinct strengths, so equivalence means comparable power rather than identical options
   - C) Players refuse to play asymmetric games
   - D) Asymmetric games cannot use counters
3. Why does a pure rock-paper-scissors cycle keep decisions live?
   - A) It contains built-in output randomness
   - B) No option dominates, because each beats exactly one and loses to exactly one
   - C) It makes all options identical
   - D) It removes the need for skill
4. A dominant strategy is best described as:
   - A) An action that is at least as good as every alternative in all situations
   - B) The most expensive item in the shop
   - C) The option that beats the most popular pick
   - D) The starting choice with the highest tier-list rating
5. If a 1-cost card consistently outperforms a 3-cost card, the most likely diagnosis is:
   - A) Healthy design, since cheap cards should be strong
   - B) A broken cost curve that creates dominance and should be retuned
   - C) Excessive output randomness
   - D) A metagame that has not developed yet
6. Why do developers often prefer buffs to nerfs when tuning?
   - A) Buffs are cheaper to implement
   - B) Buffs expand the set of viable options instead of shrinking it, preserving fun mechanics
   - C) Buffs are invisible to players and avoid complaining
   - D) Buffs reduce variance automatically
7. (Short answer) Distinguish symmetric from asymmetric balance and give one example of each.
8. (Short answer) What is the metagame, and why can it change even when the game is not patched?
9. (Applied) A sniper option in your game wins the vast majority of matches at every skill level. Propose two distinct balance changes and explain the trade-off of each.
10. (Applied) A hero is rated S-tier in professional play but D-tier at low ranks. What does this tell you about balance and tier lists?

## Answer Key

1. **B.** Balance means the decision space stays open; equality of win rates and symmetry are neither necessary nor sufficient for it.
2. **B.** With different sides, you cannot compare like for like; balance becomes comparable power through distinct strengths, which is harder to verify.
3. **B.** A closed counter cycle guarantees every option has a predator and prey, so no single choice is always correct.
4. **A.** Dominance is comparative and situational: an option never worse than its alternatives, which collapses the decision to one branch.
5. **B.** A cost curve should reward higher cost with higher power; cost beating cost means the curve is inverted and the expensive card is dominated.
6. **B.** Buffs enlarge the viable pool and preserve content; nerfs shrink the game and are reserved for options that trivialize play.
7. **Short answer.** Symmetric designs give identical options to all players, as in chess or Quake, making balance about execution. Asymmetric designs give different options, as in StarCraft or Overwatch, so balance means comparable rather than identical power.
8. **Short answer.** The metagame is the community's evolving set of viable strategies. It changes without patches because players innovate, copy successful builds, and counter known strategies through learning and imitation.
9. **Applied.** Two of: directly nerf the sniper, risking unviability; add a hard counter such as a flanker or smoke, adding complexity; raise its cost or cooldown to make it high-risk; or buff competitors to widen the pool. Each trades power against variety or complexity.
10. **Applied.** The hero's strength depends on skill and coordination, so it is not globally dominant. Tier lists are contextual snapshots, and balancing for one audience can mistune the other.

## Exercises

1. **Counter-map a game.** Pick a competitive game with distinct options (a fighting game, a MOBA, or a hero shooter). Draw its counter relationships as a directed graph. Identify any option with no incoming counters and any pair that lacks a cycle; these are your dominance risks.
2. **Audit a cost curve (hands-on).** Choose a deckbuilder or crafting system and build a spreadsheet plotting each option's cost against a power score you define (damage plus health, or weighted stats). Add a trend line and flag every outlier on both sides. Note which outliers look intentional and which look like bugs.
3. **Patch notes exercise.** Write patch notes for three options in a game you know, one buff, one nerf, and one rework. For each, state the intended effect on the metagame and predict a likely player reaction. Then check a real patch note from that game and compare your reasoning to the developers'.

## Further Study

- Ian Schreiber and Brenda Romero, *Game Balance* (CRC Press) — the standard text on cost curves, counters, and tuning methodology.
- George Skaff Elias, Richard Garfield, and K. Robert Gutschera, *Characteristics of Games* — on luck, skill, and balance as system properties.
- David Sirlin, *Playing to Win* and his GDC talk on balancing multiplayer games — on dominance and competitive play.
- Games to study: *StarCraft II* (asymmetric factions), *Magic: The Gathering* (metagame and sideboards), and *Overwatch* (live balancing of an asymmetric roster).
