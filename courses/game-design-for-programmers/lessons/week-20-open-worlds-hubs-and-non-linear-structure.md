---
week: 20
title: "Open Worlds, Hubs, and Non-Linear Structure"
unit: 5
unitTitle: "Level & World Design"
estimatedMinutes: 90
prerequisites: "Weeks 17-19"
objectives:
  - "Distinguish linear, non-linear, hub-and-spoke, and open-world structures."
  - "Design points of interest and traversal that make exploration self-motivating."
  - "Apply gating thoughtfully in non-linear spaces without breaking player agency."
  - "Compare theme-park and sandbox design philosophies and their trade-offs."
  - "Analyze sequence breaking as an intended feature or a design failure."
vocabulary:
  - term: "Open world"
    definition: "A game structure in which the player can move freely through a large, contiguous space and choose the order of many objectives."
  - term: "Hub-and-spoke"
    definition: "A structure with a central hub connected to self-contained mission or level spaces, combining free choice of order with authored destinations."
  - term: "Non-linear structure"
    definition: "Any structure that lets players choose the order, route, or subset of content they engage with rather than forcing a single sequence."
  - term: "Point of interest"
    definition: "A distinct, discoverable location in a world that promises content, reward, or story, and pulls players across space."
  - term: "Traversal"
    definition: "The act and design of moving through the world; traversal mechanics determine how fun and costly it is to cross distance."
  - term: "Exploration"
    definition: "Player-driven discovery of unknown space, rewarded by novelty, secrets, and the satisfaction of mapping the world."
  - term: "Theme park design"
    definition: "A design philosophy that guides players through tightly authored, distinct attractions in a controlled order, prioritizing polish and pacing."
  - term: "Sandbox"
    definition: "A design philosophy that gives players systems and space with minimal authored sequence, prioritizing freedom and emergent play."
  - term: "Sequence breaking"
    definition: "Performing content out of its intended order, either through a design oversight or as an honored skill."
  - term: "Gating"
    definition: "Deliberately restricting access to content until a condition is met, used to sequence a non-linear world without hard walls."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What defines an open world?"
    options:
      - "A) It has no objectives at all"
      - "B) The player can move freely through a large, contiguous space and choose the order of many objectives"
      - "C) It is always procedurally generated"
      - "D) It has no loading screens"
    answer: "B"
    explanation: "Open world means free movement through contiguous space plus broad control over objective order; generation and loading are implementation details, not the definition."
  - id: 2
    type: "multiple-choice"
    question: "What is the main structural advantage of hub-and-spoke?"
    options:
      - "A) It removes all gating"
      - "B) It combines free choice of destination order with tightly authored, self-contained destinations"
      - "C) It requires the least content of any structure"
      - "D) It eliminates traversal"
    answer: "B"
    explanation: "Hub-and-spoke lets the player choose which spoke to take while each destination remains a controlled, authored experience."
  - id: 3
    type: "multiple-choice"
    question: "What is a point of interest?"
    options:
      - "A) A spot where the game crashes"
      - "B) A distinct, discoverable location that promises content or reward and pulls players across space"
      - "C) A mandatory story checkpoint"
      - "D) A point where the player can save"
    answer: "B"
    explanation: "Points of interest are the world's invitations; they motivate traversal by promising something worth reaching."
  - id: 4
    type: "multiple-choice"
    question: "Which design philosophy tightly guides players through authored attractions in a controlled order?"
    options:
      - "A) Sandbox"
      - "B) Theme park"
      - "C) Roguelike"
      - "D) Sandbox with emergent systems"
    answer: "B"
    explanation: "Theme park design is about controlled sequencing and polish, analogous to a physical theme park's attractions; sandbox design favors freedom and emergence."
  - id: 5
    type: "multiple-choice"
    question: "What is sequence breaking?"
    options:
      - "A) A crash caused by out-of-order data"
      - "B) Performing content out of its intended order, whether by oversight or by design"
      - "C) Skipping a cutscene"
      - "D) A bug in the save system"
    answer: "B"
    explanation: "Sequence breaking is any out-of-order completion; it can be an exploit, a tolerated skill, or even a deliberate reward for mastery."
  - id: 6
    type: "multiple-choice"
    question: "Why is traversal design central to an open world?"
    options:
      - "A) Because traversal is the activity the player performs most between content"
      - "B) Because it determines the game's file size"
      - "C) Because it replaces combat entirely"
      - "D) Because open worlds cannot have combat"
    answer: "A"
    explanation: "The player spends most of their time moving between points of interest, so the quality of traversal sets the baseline experience."
  - id: 7
    type: "short-answer"
    question: "Contrast theme-park and sandbox design in terms of authorial control and emergent play."
    answer: "Theme-park design keeps tight authorial control, sequencing polished, distinct attractions; sandbox design cedes control to the player and relies on systems to generate emergent situations. Theme parks trade freedom for pacing and reliability, while sandboxes trade curation for player-driven stories."
    explanation: "The spectrum runs from authored sequence to emergent freedom; most games blend both, but the philosophy determines what gets prioritized."
  - id: 8
    type: "short-answer"
    question: "Explain how gating and non-linear structure can coexist, and why gating is sometimes necessary even in an open world."
    answer: "Gating restricts access until a condition is met, while non-linearity gives players choice among available options. They coexist when gates are soft or conditional rather than hard walls; gating ensures the player meets required abilities or story beats before content that depends on them, preserving difficulty curves and narrative order."
    explanation: "A world with no gating at all risks overwhelming players or letting them skip foundational teaching; good gates feel like locks to solve, not walls to resent."
  - id: 9
    type: "applied"
    question: "You are designing an open-world region. Describe how you would place three points of interest and one traversal mechanic so that players are always pulled forward without a quest marker. Reference sightlines and traversal cost."
    answer: "Sample: place the first point of interest within a strong sightline from the entry point so it is discovered immediately; place the second partially occluded behind terrain so reaching the first reveals the second, chaining discovery; place the third visible from the second's summit. Choose a traversal mechanic (climbing, gliding, a mount) that makes the terrain between them interesting rather than merely time-consuming, and vary the cost so the shortest path is not always the obvious one."
    explanation: "Visible, chained points of interest plus traversal that is fun per unit distance lets curiosity, not markers, drive movement."
  - id: 10
    type: "applied"
    question: "Playtesters discover a route that skips your carefully ordered second act entirely. Is this a bug or a feature? Describe how you would decide and what you would change."
    answer: "Sample: decide by whether the skip damages required teaching, narrative comprehension, or difficulty pacing. If the player skips content they needed — an ability, a plot reveal, a difficulty ramp — that is a gating failure, and the fix is a soft gate such as a locked path or an environmental condition, not a hard invisible wall. If the skip is a harmless expression of mastery and the game still works afterward, honor it by ensuring the world state remains coherent, and possibly reward it."
    explanation: "Sequence breaking is a design problem to classify, not automatically patch; the criteria are whether essential learning or narrative coherence is lost."
---
# Week 20 — Open Worlds, Hubs, and Non-Linear Structure

## Why This Matters

You have designed systems that let users choose their own path — configuration, plugin architectures, lazy evaluation. Open-world design is that philosophy applied to space: you define a graph of destinations and let the player traverse it in an order you do not fully control. The engineering instincts transfer directly. The hard part is not the graph; it is making *every path through the graph* feel authored and intentional.

This lesson covers the structural spectrum from linear corridors to full sandboxes, and the tools — points of interest, traversal, soft gating — that let freedom coexist with design. It is also the last lesson in the Level & World Design unit, so it is where space grows into a world.

## Learning Objectives

- Distinguish linear, non-linear, hub-and-spoke, and open-world structures.
- Design points of interest and traversal that make exploration self-motivating.
- Apply gating thoughtfully in non-linear spaces without breaking player agency.
- Compare theme-park and sandbox design philosophies and their trade-offs.
- Analyze sequence breaking as an intended feature or a design failure.

## Lesson

### From Linear to Non-Linear

A **non-linear structure** lets players choose the order, route, or subset of content they engage with. The simplest non-linear form is the branching level; the most elaborate is the **open world**. In between sit hybrids like the **hub-and-spoke**, where a central hub connects to self-contained missions — the model behind *Super Mario 64*, *Hitman*, and *Deus Ex*.

The spectrum is really about authorial control. A linear level controls sequence, so it can guarantee pacing, teaching order, and spectacle. A non-linear world gives up those guarantees in exchange for agency. Your job as a designer is to decide which guarantees you can afford to lose.

```
LINEAR:      A -> B -> C -> D -> E
BRANCHING:           B -> D
              A -> <        > -> E
                     C -> D
HUB:              [B]
                   |
            [C]--[HUB]--[D]
                   |
                  [E]
OPEN WORLD:   a field of many nodes, many edges, few fixed orders
```

The graph view is useful here, but incomplete. Edges in a game world have *cost* — measured in seconds, in danger, in tedium — and nodes have *pull* — measured in curiosity and promised reward. That is why **traversal** design is the heart of the genre. If moving between nodes is a pleasure, the player will forgive repetition; if it is a tax, the world feels like a chore no matter how many markers you place.

Non-linearity is not free. Every branch multiplies the states a player can occupy — which objectives are complete, which abilities are held, which characters are alive — and that multiplies the combinatorial space of your test matrix. A linear level has essentially one order to verify; a non-linear world has many, and broken combinations hide in the gaps. This is the open-world equivalent of an exponential test suite, and it is why large worlds lean so heavily on systemic, repeatable content: systems tolerate arbitrary order because they are not authored sequences. When you choose non-linearity, you are also choosing where to spend your testing budget.

### Points of Interest and the Pull of Exploration

A **point of interest** is a distinct, discoverable location that promises content or reward. It is the weenie from Week 17 scaled up to a region. **Exploration** is player-driven discovery of unknown space, and it is self-motivating only when curiosity is reliably rewarded. The design rule is simple: make the interesting thing visible, and make reaching it interesting.

*The Legend of Zelda: Breath of the Wild* is the modern benchmark. It uses towers not as content markers but as vantage points that reveal distant points of interest, which then become new vantage points. The player is always chasing the next interesting silhouette on the horizon. *Elden Ring* does the same with its golden trees and impossible architecture, and it famously omits a minimap, trusting the composition of the world to guide. *Outer Wilds* takes the extreme: there is no combat and no progression, only knowledge, and every point of interest is a mystery the player chooses to pursue.

The spacing of points of interest matters as much as their design. Sprinkle them too closely and the world feels like a checklist; space them too far apart and traversal dominates. The rhythm that works is a rising tide of visible landmarks: at any moment the player should be able to see one thing to do now and one thing to want later. Negative space between points of interest is not wasted map — it is the distance that gives arrival meaning. A shortcut revealed after a long journey is only satisfying because the journey was long enough to be felt.

### Gating Without Walls

**Gating** restricts access until a condition is met. In an open world, gating is what keeps a partially non-linear structure coherent. The trick is to make gates feel like puzzles rather than walls. A locked door, a cliff that requires a later ability, a bridge that needs a quest completed — all are soft gates that communicate "not yet" without saying "no."

Do it badly and you get the notorious invisible wall: a hard, unexplained boundary that breaks immersion and tells the player the world is a set. Do it well and the gate becomes content itself. *Super Metroid* and *Hollow Knight* build entire progression systems from ability gates: you cannot reach the upper region until you can wall-jump, and the wall-jump is the reward for exploring the lower one. The gate is not an obstacle placed in front of the player; it is a promise.

It is worth being honest about hard gates too. There are legitimate reasons to fence content: protecting players from regions far above their power, keeping a story reveal in order, or bounding a production area that is not finished. The trick is not to pretend the fence does not exist but to make it legible in the fiction — a sandstorm, a collapsed bridge, a guard who turns you back. Players forgive boundaries that belong to the world. They do not forgive boundaries that reveal the world is a stage set.

### Theme Park vs. Sandbox

Two philosophies anchor the design spectrum. **Theme park design** guides players through tightly authored, distinct attractions in a controlled order. Ubisoft's open-world formula — towers, side activities, and a curated main path — is the commercial archetype: every visitor can find the rides, and quality is uniform. **Sandbox** design hands players systems and space with minimal authored sequence, prioritizing freedom and emergent play. *Minecraft*, *Garry's Mod*, and *The Elder Scrolls* sit here; their content is a set of interacting rules rather than a queue of attractions.

The trade-off is legible. Theme parks deliver reliable pacing and polish but can feel like a checklist. Sandboxes deliver ownership and stories players tell themselves, but they can feel aimless and are far harder to tune. Most successful large games are a blend: a curated critical path through a systemically alive world. *The Witcher 3* is a theme park of authored quests set in a region that rewards wandering; *Breath of the Wild* is a physics sandbox with a deliberately thin authored spine.

Neither pole is superior; they answer different questions. A theme park answers "what should I do next?" clearly and reliably, which suits players with limited time and stories that require an order. A sandbox answers "what can I do?" expansively, which suits players who want to author their own experience and can tolerate aimlessness. The most instructive designs blend deliberately: a strong critical path through a systemic world, so a hurried player can follow the spine while a wandering one ignores it and is still rewarded. Where your game sits on this spectrum is one of the first and most consequential decisions you will make.

### Sequence Breaking

**Sequence breaking** is performing content out of its intended order. It happens for two reasons: players are clever, and constraints leak. The designer's job is to classify it. If the skip lets players bypass essential teaching, a plot reveal, or a difficulty ramp, it is a gating failure and the fix is a *soft* gate — an environmental condition, a required ability — not a hard wall. If the skip is harmless and the world stays coherent, honor it. *Super Metroid* is famous for sequence breaks that speedrunners still discover, and some developers intentionally leave exploits in place because mastery expression is part of the game's appeal.

In practice, log every sequence break you observe and ask three questions: what content was skipped, does the game still function and make sense afterward, and did the skip require skill or exploit a bug? A hard-won skip that leaves the game coherent is usually an asset — it becomes community lore and sustains a speedrunning scene for years. A skip that breaks the game's logic or bypasses a required lesson should be closed, ideally by strengthening the fiction or the ability gate rather than adding a crude wall. The worst outcome is patching out a beloved exploit with an ugly barrier, which turns an asset into a grievance.

In graph terms, you are checking whether your dependency edges are actually enforced. A topological order you assumed but never encoded is not a design — it is a hope.

## Key Takeaways

- Non-linearity is a spectrum defined by how much sequence control you trade for player agency.
- Traversal is the genre's baseline experience; if moving between nodes is a tax, the world feels like a chore.
- Points of interest pull players through space; reveal them visibly and make the journey itself interesting.
- Gate with puzzles, abilities, and conditions, not invisible walls; a good gate is content.
- Theme parks trade freedom for pacing; sandboxes trade curation for emergent ownership.
- Sequence breaking must be classified: fix it if essential learning is lost, honor it if it is harmless mastery.

## Vocabulary

| Term | Definition |
|---|---|
| Open world | A game structure in which the player can move freely through a large, contiguous space and choose the order of many objectives. |
| Hub-and-spoke | A structure with a central hub connected to self-contained mission or level spaces, combining free choice of order with authored destinations. |
| Non-linear structure | Any structure that lets players choose the order, route, or subset of content they engage with rather than forcing a single sequence. |
| Point of interest | A distinct, discoverable location in a world that promises content, reward, or story, and pulls players across space. |
| Traversal | The act and design of moving through the world; traversal mechanics determine how fun and costly it is to cross distance. |
| Exploration | Player-driven discovery of unknown space, rewarded by novelty, secrets, and the satisfaction of mapping the world. |
| Theme park design | A design philosophy that guides players through tightly authored, distinct attractions in a controlled order, prioritizing polish and pacing. |
| Sandbox | A design philosophy that gives players systems and space with minimal authored sequence, prioritizing freedom and emergent play. |
| Sequence breaking | Performing content out of its intended order, either through a design oversight or as an honored skill. |
| Gating | Deliberately restricting access to content until a condition is met, used to sequence a non-linear world without hard walls. |

## Quiz

1. **Multiple choice.** What defines an open world?
   - A) It has no objectives at all
   - B) The player can move freely through a large, contiguous space and choose the order of many objectives
   - C) It is always procedurally generated
   - D) It has no loading screens

2. **Multiple choice.** What is the main structural advantage of hub-and-spoke?
   - A) It removes all gating
   - B) It combines free choice of destination order with tightly authored, self-contained destinations
   - C) It requires the least content of any structure
   - D) It eliminates traversal

3. **Multiple choice.** What is a point of interest?
   - A) A spot where the game crashes
   - B) A distinct, discoverable location that promises content or reward and pulls players across space
   - C) A mandatory story checkpoint
   - D) A point where the player can save

4. **Multiple choice.** Which design philosophy tightly guides players through authored attractions in a controlled order?
   - A) Sandbox
   - B) Theme park
   - C) Roguelike
   - D) Sandbox with emergent systems

5. **Multiple choice.** What is sequence breaking?
   - A) A crash caused by out-of-order data
   - B) Performing content out of its intended order, whether by oversight or by design
   - C) Skipping a cutscene
   - D) A bug in the save system

6. **Multiple choice.** Why is traversal design central to an open world?
   - A) Because traversal is the activity the player performs most between content
   - B) Because it determines the game's file size
   - C) Because it replaces combat entirely
   - D) Because open worlds cannot have combat

7. **Short answer.** Contrast theme-park and sandbox design in terms of authorial control and emergent play.

8. **Short answer.** Explain how gating and non-linear structure can coexist, and why gating is sometimes necessary even in an open world.

9. **Applied / scenario.** You are designing an open-world region. Describe how you would place three points of interest and one traversal mechanic so that players are always pulled forward without a quest marker. Reference sightlines and traversal cost.

10. **Applied / scenario.** Playtesters discover a route that skips your carefully ordered second act entirely. Is this a bug or a feature? Describe how you would decide and what you would change.

## Answer Key

1. **B.** Open world means free movement plus broad control over objective order; procedural generation and loading are implementation details.
2. **B.** Hub-and-spoke gives the player choice among spokes while each destination stays tightly authored.
3. **B.** Points of interest are the world's invitations, motivating traversal by promising something worth reaching.
4. **B.** Theme park design sequences polished, authored attractions in a controlled order, unlike the freedom of a sandbox.
5. **B.** Sequence breaking is any out-of-order completion; it may be an exploit, a tolerated skill, or an intentional reward.
6. **A.** Players spend most of their time moving between content, so traversal quality sets the baseline experience.
7. **Theme park design keeps tight authorial control and sequences polished attractions; sandbox design cedes control and relies on systems for emergent play.** The first trades freedom for reliable pacing; the second trades curation for player-driven ownership.
8. **Gating restricts access until a condition is met; non-linearity gives choice among available options.** They coexist when gates are conditional or soft, ensuring players meet required abilities or story beats before dependent content.
9. **Sample: place the first point of interest within a strong sightline from the entry, the second partially occluded so it is revealed by reaching the first, and the third visible from the second's summit, chaining discoveries.** Choose a traversal mechanic that makes the intervening terrain interesting rather than merely time-consuming, and vary traversal cost so the obvious route is not always the best.
10. **Sample: decide by whether the skip removes essential teaching, a narrative reveal, or a difficulty ramp.** If so, it is a gating failure and needs a soft gate such as an environmental condition or required ability, not an invisible wall; if the skip is harmless mastery and the world stays coherent, honor or reward it.

## Exercises

1. **Region map with points of interest (hands-on).** Sketch a top-down map of a small open region with an entry point and five points of interest. For each, mark whether it is visible from the entry or from another point of interest. Add one traversal mechanic and annotate traversal cost on each edge. Then playtest by having a friend trace a route and explain what pulled them forward.

2. **Gate audit.** In an open-world game you are playing, list five gates and classify each as soft (puzzle, ability, condition) or hard (invisible wall, arbitrary block). Note how each made you feel, and rewrite one hard gate as a soft gate.

3. **Sequence-break postmortem.** Watch or read about a well-known sequence break (for example, in *Super Metroid* or *Breath of the Wild*). Decide whether the developers should patch, tolerate, or reward it, and justify your call using the criteria in this lesson.

## Further Study

- *The Legend of Zelda: Breath of the Wild* — towers, sightlines, and traversal as the engine of exploration.
- *Elden Ring* — a large open world that guides with composition and soft gating rather than a minimap.
- *Super Mario 64* — the archetypal hub-and-spoke structure and its influence on 3D level design.
- *Outer Wilds* — a non-linear world where the only progression is player knowledge.
