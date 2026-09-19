---
week: 9
title: "Motivation: Self-Determination Theory and Player Types"
unit: 3
unitTitle: "Player Psychology & Motivation"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1-8"
objectives:
  - "Distinguish intrinsic from extrinsic motivation and predict which one sustains play after rewards are exhausted."
  - "Explain autonomy, competence, and relatedness and map each to concrete game features."
  - "Describe the overjustification effect and identify designs where it is likely to appear."
  - "Compare the Bartle taxonomy and the Quantic Foundry model as tools built on different assumptions."
  - "Construct a motivation profile for a target audience and design one feature that serves more than one profile."
vocabulary:
  - term: "Intrinsic motivation"
    definition: "The drive to do something for its own sake — curiosity, mastery, or play — rather than for a separable outcome."
  - term: "Extrinsic motivation"
    definition: "The drive to act in order to obtain a separable outcome such as points, currency, rank, or money."
  - term: "Self-determination theory"
    definition: "Deci and Ryan's account of motivation built on three basic psychological needs: autonomy, competence, and relatedness."
  - term: "Autonomy"
    definition: "The experience of acting from one's own volition rather than being controlled or coerced by the system."
  - term: "Competence"
    definition: "The experience of being effective, improving, and meeting a challenge that matches one's skill."
  - term: "Relatedness"
    definition: "The experience of feeling connected to and cared about by other people, whether real players or characters."
  - term: "Player type"
    definition: "A category describing a recurring pattern of player motivation or behavior; a lens for audience thinking, not a fixed identity."
  - term: "Bartle taxonomy"
    definition: "Richard Bartle's 1996 four-type model of MUD players — Achievers, Explorers, Socializers, and Killers — arranged on two axes."
  - term: "Overjustification effect"
    definition: "The tendency of a salient, controlling extrinsic reward to undermine intrinsic motivation for an activity a person already enjoys."
  - term: "Motivation profile"
    definition: "A weighted description of the motivations a particular player or audience tends to hold, used to check a design against its intended audience."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which statement best captures the relationship between intrinsic and extrinsic motivation in design?"
    options:
      - "A) Extrinsic rewards are always harmful and should be avoided."
      - "B) Intrinsic motivation is what sustains play after rewards are exhausted, and salient extrinsic rewards can displace it."
      - "C) Intrinsic motivation only matters for children; adults respond to extrinsic rewards alone."
      - "D) The two are fully additive: adding a reward can only increase play."
    answer: "B"
    explanation: "The lesson argues both forms are real, but intrinsic motivation sustains play when no reward is present, and the overjustification effect shows extrinsic rewards can displace it. A is too absolute, C is unsupported, and D ignores the overjustification effect."
  - id: 2
    type: "multiple-choice"
    question: "Which set correctly lists the three basic psychological needs in self-determination theory?"
    options:
      - "A) Autonomy, competence, relatedness"
      - "B) Challenge, reward, progression"
      - "C) Action, social, mastery"
      - "D) Achievement, exploration, domination"
    answer: "A"
    explanation: "SDT names autonomy, competence, and relatedness. Action/Social/Mastery are Quantic Foundry clusters, and the others are distractors assembled from other frameworks."
  - id: 3
    type: "multiple-choice"
    question: "A player who has beaten a game's campaign ten times keeps replaying it for the joy of perfect execution. The developer adds a mandatory daily checklist that grants currency for replaying one level. Two weeks later the player has stopped. Which concept best explains this?"
    options:
      - "A) Reward fatigue from inflated numbers"
      - "B) The overjustification effect"
      - "C) Relatedness collapse caused by single-player design"
      - "D) A Bartle taxonomy misclassification"
    answer: "B"
    explanation: "The player's intrinsic reason was displaced by a salient, controlling extrinsic structure, which is the overjustification effect. Reward fatigue (A) concerns a reward losing potency, not intrinsic motivation being crowded out."
  - id: 4
    type: "multiple-choice"
    question: "In Bartle's taxonomy, which type is organized around interacting with the world to discover what is in it?"
    options:
      - "A) Achiever"
      - "B) Killer"
      - "C) Explorer"
      - "D) Socializer"
    answer: "C"
    explanation: "Bartle's Explorer interacts with the world in order to discover. Achievers act on the world to accumulate, Killers act on players to dominate, and Socializers interact with players to connect."
  - id: 5
    type: "multiple-choice"
    question: "What distinguishes the Quantic Foundry model from Bartle's taxonomy?"
    options:
      - "A) It is derived from factor analysis of large survey samples and describes motivations as continuous rather than categorical."
      - "B) It was derived entirely from competitive shooter players."
      - "C) It replaces motivations with in-game behavioral telemetry."
      - "D) It claims each player fits exactly one of twelve fixed categories."
    answer: "A"
    explanation: "Quantic Foundry's model emerged from factor-analyzing hundreds of thousands of survey responses and yields weighted, continuous motivations, whereas Bartle's is categorical and came from one genre and era."
  - id: 6
    type: "multiple-choice"
    question: "Which feature most directly targets relatedness as SDT defines it?"
    options:
      - "A) A branching skill tree that changes your build"
      - "B) A cooperative raid with voice-friendly roles and a shared goal"
      - "C) A speedrun timer with a global leaderboard"
      - "D) A photo mode with adjustable depth of field"
    answer: "B"
    explanation: "Relatedness is about feeling connected to and cared about by others, which co-op with shared goals and complementary roles serves directly. Skill trees serve competence, leaderboards serve a mix of competence and social comparison, and photo mode serves autonomy or expression."
  - id: 7
    type: "short-answer"
    question: "Define autonomy in self-determination theory and give one concrete game feature that supports it."
    answer: "Autonomy is acting from one's own volition rather than being controlled; any feature that offers meaningful, unforced choice qualifies, such as non-linear level order, build variety, optional difficulty settings, or the freedom to ignore the main quest."
    explanation: "The key is volition rather than the mere presence of options; forced or illusory choices do not satisfy the need."
  - id: 8
    type: "short-answer"
    question: "Why can adding a battle pass reduce retention in a game whose players are already intrinsically motivated?"
    answer: "A battle pass attaches a controlling, expected extrinsic payoff to play that players already did for its own sake, so play can be reattributed from enjoyment to obligation; when the pass feels like a job, players who were playing for love may quit rather than comply."
    explanation: "This is the overjustification effect operating at scale: the reward makes the intrinsic reason feel irrelevant."
  - id: 9
    type: "applied"
    question: "A cozy farming game's most engaged players are decorators and completionists, but a recent update adds a mandatory timed combat arena to every season. Engagement drops among decorators while a small competitive group is satisfied. Using the Quantic Foundry clusters, diagnose the mismatch and propose a fix that serves both audiences."
    answer: "The update raises Achievement (Completion, Power) and Action (Excitement) motivations while starving Creativity (Design), which the decorators hold. Fix: keep the arena as an optional, clearly signposted activity with cosmetic or decorative rewards, and provide a parallel seasonal progression path built around decoration, collection, or town relationships so no motivation is forced."
    explanation: "The design should serve multiple motivations through optional depth and parallel paths rather than forcing one profile's content on everyone."
  - id: 10
    type: "applied"
    question: "You want to decide whether your next project should lean on extrinsic reward or intrinsic motivation. Describe how you would use a motivation profile to make the decision, including one risk you would check."
    answer: "Survey or interview the target audience to establish weighted motivations, align the core loop with the strongest intrinsic needs (for example competence for mastery-driven players or relatedness for social players), then layer extrinsic rewards only where they reinforce rather than replace that loop. Check the overjustification risk: whether the reward converts play the audience already loves into an obligation, and whether removing the reward would leave the game worth playing."
    explanation: "A motivation profile turns audience assumptions into evidence and keeps reward decisions subordinate to the underlying motivational fit."
---

# Week 9 — Motivation: Self-Determination Theory and Player Types

## Why This Matters

You already know how to build loops: take input, update state, emit feedback, repeat. What you have probably never had to model carefully is why a human keeps pressing the button after the novelty wears off. Motivation is the part of the system that lives outside your process, inside the player, and it is the difference between a game people finish and a game people quietly abandon at hour two. Engineers reach for reward schedules first because they look like clean, tunable infrastructure. But reward is only one input into a much older control loop, and that loop has its own stability requirements.

## Learning Objectives

- Distinguish intrinsic from extrinsic motivation and predict which one sustains play.
- Explain autonomy, competence, and relatedness and map each to concrete game features.
- Describe the overjustification effect and identify designs where it is likely to appear.
- Compare the Bartle taxonomy and the Quantic Foundry model as tools built on different assumptions.
- Construct a motivation profile for a target audience and design one feature that serves more than one profile.

## Lesson

### Two engines

**Intrinsic motivation** is the drive to do something for its own sake: curiosity, mastery, play, the pleasure of a well-executed move. **Extrinsic motivation** is the drive to do something for a separable outcome — points, currency, a trophy, a rank, a payout. Both are real, and neither is inherently superior. Extrinsic rewards are excellent at teaching behavior ("do this, get that") and at pacing content. Intrinsic motivation is what keeps a player in the game after the rewards have been collected.

The distinction matters because the two compete. Designers often assume reward is purely additive — more reward, more play. In practice, a reward and an existing internal reason can conflict.

### Self-determination theory

Self-determination theory (SDT), developed by Edward Deci and Richard Ryan, holds that people have three basic psychological needs:

- **Autonomy** — acting from one's own volition rather than being controlled.
- **Competence** — being effective, improving, and meeting an appropriate challenge.
- **Relatedness** — feeling connected to and cared about by others.

When these needs are met, intrinsic motivation rises; when they are thwarted, motivation collapses even in an otherwise well-built game. SDT is useful to designers because it is diagnostic: when players disengage, ask which need stopped being served.

Map the needs to features and the theory becomes practical. Autonomy lives in meaningful choice — build variety, route freedom, difficulty options, permission to ignore the main quest. Competence lives in the loop of learned skills paying off: a clean parry, a solved puzzle, a rising rank. Relatedness lives in co-op, guilds, and companion characters, and even in the perceived warmth of a single-player cast.

Consider **Journey**. It has almost no extrinsic reward: no score, no levels, no item drops. What it has is a desert, a wordless companion, and movement skill that quietly deepens. It satisfies relatedness (a stranger who can only chirp, and only when near), competence (scarf and movement mastery), and autonomy (no forced direction) — and it reaches an emotional register reward systems rarely touch. **Portal 2** is a competence engine: each chamber states a problem, hands you tools, and lets you feel smart. Its payoff is almost entirely the click of understanding. **Minecraft** pairs competence (survival, redstone engineering) with autonomy (creative mode, base building), while servers supply relatedness. **Animal Crossing: New Horizons** is an autonomy toy: no failure state, no optimum, and therefore no way to be bad at it.

### The overjustification effect

Here is where designers get burned. The **overjustification effect** is the tendency of a salient extrinsic reward to undermine intrinsic motivation for an activity the person already enjoys. Give a child a reward for drawing and their later free-time drawing can decrease; the behavior is reattributed from "I draw because I like it" to "I draw because I get paid." The classic studies are Deci's 1971 puzzle experiment and Lepper, Greene, and Nisbett's 1973 expected-reward study with markers.

The risk grows with how controlling and expected the reward feels. A surprise cosmetic after a hard-fought match usually does no harm. A mandatory daily checklist that turns a beloved activity into a job can. The player who loved your arena shooter for its movement does not need a battle pass; the battle pass may teach them that movement was never the point. Extrinsic rewards are not dangerous in themselves. They are dangerous when they displace an intrinsic reason you were relying on.

### Player typologies: Bartle and Quantic Foundry

If motivation varies, you need a way to talk about audiences. Two models dominate.

The **Bartle taxonomy** comes from Richard Bartle's 1996 study of MUD players. It sorts players along two axes — acting versus interacting, and focus on players versus the world — into four **player types**: **Achievers** (act on the world to accumulate), **Explorers** (interact with the world to discover), **Socializers** (interact with players to connect), and **Killers** (act on players to dominate). It is memorable precisely because it is simple. It is also limited: it was derived from one genre in one era and treats a position on two axes as an identity. Treat it as a lens, not a user database.

The **Quantic Foundry** model (Nick Yee and Nicolas Ducheneaut) is the empirical successor. Built by factor-analyzing survey responses from hundreds of thousands of gamers, it proposes six motivation clusters — Action, Social, Mastery, Achievement, Immersion, and Creativity — each split in two (Mastery into Challenge and Strategy, Immersion into Fantasy and Story, and so on), for twelve motivations. Because it is continuous rather than categorical, it can say "high in Discovery, moderate in Competition," which matches how players actually behave.

The engineering analogy is worth stating plainly: a four-bucket typology is a hard classifier over what is really continuous, correlated, and context-dependent data. You can ship with a hard classifier and be usefully wrong, but know that you chose it for communication, not accuracy.

### Motivation profiles and designing for several audiences

A **motivation profile** is a weighted description of the motivations a player or audience tends to hold. Studios use profiles to check a design against reality: who is this for, and does our feature set actually serve them?

Motivations differ, and features that are mandatory for everyone cannot please everyone. Three strategies work:

1. **Parallel paths.** Let different players reach the same goal differently. Stardew Valley supports optimizing profit, romancing the town, decorating, or fishing; none is required. Hades layers fast combat, narrative mystery, and build-crafting so a player can care about any layer.
2. **Optional depth.** Put depth behind opt-in systems. A completionist can chase achievements; a socializer can ignore them. Cosmetics are the classic low-risk extrinsic reward precisely because they are harmlessly ignorable.
3. **Settings as design.** Dark Souls offers no difficulty menu but does offer build variety and co-op, letting players tune challenge with in-game choices. Hades offers God Mode for players who want the story more than the wall.

The failure mode is designing for nobody: a mandatory grind that drives out explorers, or a story gate that blocks competitors. Ask of every system: which motivation does this feed, and whose does it starve?

## Key Takeaways

- Intrinsic motivation sustains play after rewards are exhausted; extrinsic motivation teaches and paces.
- SDT's three needs — autonomy, competence, relatedness — are diagnostic tools for disengagement.
- The overjustification effect means salient, controlling rewards can erode play that players already loved.
- Bartle is memorable but categorical; Quantic Foundry is continuous and empirically derived. Use both as lenses.
- Design for multiple motivations with parallel paths, optional depth, and meaningful settings.
- Every feature feeds some motivations and starves others; say which, out loud, before shipping.

## Vocabulary

| Term | Definition |
|---|---|
| Intrinsic motivation | The drive to do something for its own sake — curiosity, mastery, or play — rather than for a separable outcome. |
| Extrinsic motivation | The drive to act in order to obtain a separable outcome such as points, currency, rank, or money. |
| Self-determination theory | Deci and Ryan's account of motivation built on three basic psychological needs: autonomy, competence, and relatedness. |
| Autonomy | The experience of acting from one's own volition rather than being controlled or coerced by the system. |
| Competence | The experience of being effective, improving, and meeting a challenge that matches one's skill. |
| Relatedness | The experience of feeling connected to and cared about by other people, whether real players or characters. |
| Player type | A category describing a recurring pattern of player motivation or behavior; a lens for audience thinking, not a fixed identity. |
| Bartle taxonomy | Richard Bartle's 1996 four-type model of MUD players — Achievers, Explorers, Socializers, and Killers — arranged on two axes. |
| Overjustification effect | The tendency of a salient, controlling extrinsic reward to undermine intrinsic motivation for an activity a person already enjoys. |
| Motivation profile | A weighted description of the motivations a particular player or audience tends to hold, used to check a design against its intended audience. |

## Quiz

**1. (Multiple choice)** Which statement best captures the relationship between intrinsic and extrinsic motivation in design?

- A) Extrinsic rewards are always harmful and should be avoided.
- B) Intrinsic motivation is what sustains play after rewards are exhausted, and salient extrinsic rewards can displace it.
- C) Intrinsic motivation only matters for children; adults respond to extrinsic rewards alone.
- D) The two are fully additive: adding a reward can only increase play.

**2. (Multiple choice)** Which set correctly lists the three basic psychological needs in self-determination theory?

- A) Autonomy, competence, relatedness
- B) Challenge, reward, progression
- C) Action, social, mastery
- D) Achievement, exploration, domination

**3. (Multiple choice)** A player who has beaten a game's campaign ten times keeps replaying it for the joy of perfect execution. The developer adds a mandatory daily checklist that grants currency for replaying one level. Two weeks later the player has stopped. Which concept best explains this?

- A) Reward fatigue from inflated numbers
- B) The overjustification effect
- C) Relatedness collapse caused by single-player design
- D) A Bartle taxonomy misclassification

**4. (Multiple choice)** In Bartle's taxonomy, which type is organized around interacting with the world to discover what is in it?

- A) Achiever
- B) Killer
- C) Explorer
- D) Socializer

**5. (Multiple choice)** What distinguishes the Quantic Foundry model from Bartle's taxonomy?

- A) It is derived from factor analysis of large survey samples and describes motivations as continuous rather than categorical.
- B) It was derived entirely from competitive shooter players.
- C) It replaces motivations with in-game behavioral telemetry.
- D) It claims each player fits exactly one of twelve fixed categories.

**6. (Multiple choice)** Which feature most directly targets relatedness as SDT defines it?

- A) A branching skill tree that changes your build
- B) A cooperative raid with voice-friendly roles and a shared goal
- C) A speedrun timer with a global leaderboard
- D) A photo mode with adjustable depth of field

**7. (Short answer)** Define autonomy in self-determination theory and give one concrete game feature that supports it.

**8. (Short answer)** Why can adding a battle pass reduce retention in a game whose players are already intrinsically motivated?

**9. (Applied)** A cozy farming game's most engaged players are decorators and completionists, but a recent update adds a mandatory timed combat arena to every season. Engagement drops among decorators while a small competitive group is satisfied. Using the Quantic Foundry clusters, diagnose the mismatch and propose a fix that serves both audiences.

**10. (Applied)** You want to decide whether your next project should lean on extrinsic reward or intrinsic motivation. Describe how you would use a motivation profile to make the decision, including one risk you would check.

## Answer Key

1. **B.** The lesson argues both forms are real, but intrinsic motivation sustains play when no reward is present, and the overjustification effect shows extrinsic rewards can displace it. A is too absolute, C is unsupported, and D ignores the overjustification effect.
2. **A.** SDT names autonomy, competence, and relatedness. Action/Social/Mastery are Quantic Foundry clusters, and the others are distractors assembled from other frameworks.
3. **B.** The player's intrinsic reason was displaced by a salient, controlling extrinsic structure. Reward fatigue (A) concerns a reward losing potency, not intrinsic motivation being crowded out.
4. **C.** Bartle's Explorer interacts with the world in order to discover. Achievers act on the world to accumulate, Killers act on players to dominate, and Socializers interact with players to connect.
5. **A.** Quantic Foundry's model emerged from factor-analyzing hundreds of thousands of survey responses and yields weighted, continuous motivations, whereas Bartle's is categorical and came from one genre and era.
6. **B.** Relatedness is about feeling connected to and cared about by others, which co-op with shared goals and complementary roles serves directly. Skill trees serve competence; leaderboards serve a mix of competence and social comparison; photo mode serves autonomy or expression.
7. Autonomy is acting from one's own volition rather than being controlled; any feature that offers meaningful, unforced choice qualifies, such as non-linear level order, build variety, optional difficulty settings, or the freedom to ignore the main quest. The key is volition rather than the mere presence of options.
8. A battle pass attaches a controlling, expected extrinsic payoff to play that players already did for its own sake, so play can be reattributed from enjoyment to obligation; when the pass feels like a job, players who were playing for love may quit rather than comply. This is the overjustification effect operating at scale.
9. The update raises Achievement (Completion, Power) and Action (Excitement) motivations while starving Creativity (Design), which the decorators hold. Keep the arena optional and clearly signposted with cosmetic or decorative rewards, and provide a parallel seasonal progression path built around decoration, collection, or town relationships so no motivation is forced.
10. Survey or interview the target audience to establish weighted motivations, align the core loop with the strongest intrinsic needs (competence for mastery-driven players, relatedness for social players), then layer extrinsic rewards only where they reinforce rather than replace that loop. Check the overjustification risk: whether the reward converts play the audience already loves into an obligation, and whether removing the reward would leave the game worth playing.

## Exercises

1. **Hands-on: three-needs audit.** Pick a game you have played for more than twenty hours. For each SDT need, write two specific features that serve it and one that thwarts it. Then name the single change you would make to strengthen the weakest need without removing content from the others.

2. **Motivation mapping.** Choose one game you bounced off within two hours. Write a short motivation profile for the audience it appears to target, then explain — in Quantic Foundry terms — which of your own motivations it starved. Be specific about the moment you lost interest.

3. **Design for three profiles.** Design a single feature for a hypothetical co-op game that simultaneously serves an Explorer, a Socializer, and an Achiever without forcing any of them to participate in the others' version of it. Write one paragraph of rules and one paragraph defending which SDT needs it satisfies.

## Further Study

- **Self-Determination Theory** — Deci and Ryan's foundational work, plus the 2000 *American Psychologist* paper "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being."
- **"Hearts, Clubs, Diamonds, Spades: Players Who Suit MUDs"** — Richard Bartle's 1996 paper introducing the taxonomy.
- **Quantic Foundry's Gamer Motivation Model** — the twelve-motivation model and its published survey methodology.
- **Journey** (thatgamecompany, 2012) and **Portal 2** (Valve, 2011) — two compact case studies in intrinsic motivation with almost no conventional reward systems.
