---
week: 13
title: "Randomness, Probability, and Uncertainty"
unit: 4
unitTitle: "Chance, Skill & Balance"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1-12"
objectives:
  - "Distinguish input randomness from output randomness and predict how each affects a player's sense of agency."
  - "Compute the expected value and variance of a simple random mechanic and explain what each number tells a designer."
  - "Explain how pity timers and pseudo-random distribution change the felt frequency of rare events."
  - "Evaluate a random mechanic against fairness perception rather than raw probability."
  - "Use seeding deliberately to support reproducibility, testing, and shared player experience."
vocabulary:
  - term: "RNG"
    definition: "The random number generator a game uses to produce chance outcomes; in practice a deterministic sequence driven by an internal or chosen seed."
  - term: "Randomness"
    definition: "Deliberate unpredictability built into a game's rules, used to create variety, uncertainty, catch-up chances, or simulation."
  - term: "Probability"
    definition: "The chance that a given outcome occurs, expressed as a value between 0 and 1 or as a percentage."
  - term: "Variance"
    definition: "A measure of how widely individual results scatter around the average; high variance means dramatic swings even when the average is fixed."
  - term: "Input randomness"
    definition: "Randomness that shapes the situation before the player decides, such as a generated map, opening hand, or enemy composition."
  - term: "Output randomness"
    definition: "Randomness that resolves after the player commits to an action, such as whether an attack hits, crits, or drops loot."
  - term: "Uncertainty"
    definition: "The player's incomplete knowledge of what will happen; a source of suspense and engagement when the player can still act on it."
  - term: "Pity timer"
    definition: "A safety rule that guarantees a rare reward after a set number of failures, capping the worst possible luck streaks."
  - term: "Pseudo-random distribution"
    definition: "A scheme in which the effective chance rises after each failure and falls after each success, so procs cluster less than independent rolls do."
  - term: "Fairness"
    definition: "The player's perception that outcomes are just; distinct from raw probability, since vivid losses and streaks distort how odds are felt."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which of the following is an example of input randomness?"
    options:
      - "A) A critical-hit roll made after your attack connects"
      - "B) A procedurally generated map you face before choosing a route"
      - "C) An enemy's damage roll that resolves as its attack lands"
      - "D) A loot box's contents revealed after purchase"
    answer: "B"
    explanation: "Input randomness shapes the situation before the player decides, such as a generated map or opening hand. The other options all resolve after the player has already committed."
  - id: 2
    type: "multiple-choice"
    question: "A weapon deals 10 damage normally and 30 damage on a 25 percent critical hit. What is its expected damage per swing?"
    options:
      - "A) 10"
      - "B) 12.5"
      - "C) 15"
      - "D) 20"
    answer: "C"
    explanation: "Expected value is 0.75 times 10 plus 0.25 times 30, which equals 7.5 plus 7.5, or 15. The other answers mis-weight the critical probability."
  - id: 3
    type: "multiple-choice"
    question: "Which statement best describes a pseudo-random distribution?"
    options:
      - "A) It is true hardware randomness with no pattern"
      - "B) The chance to succeed rises after each failure and drops after each success"
      - "C) It uses a seed that guarantees no outcome ever repeats"
      - "D) It is a uniform distribution with deliberately higher variance"
    answer: "B"
    explanation: "Pseudo-random distribution dynamically adjusts the effective chance to reduce clustering, so procs feel more evenly spaced than independent rolls would produce."
  - id: 4
    type: "multiple-choice"
    question: "What is the primary design purpose of a pity timer?"
    options:
      - "A) To increase the variance of rare rewards"
      - "B) To cap the worst bad-luck streaks so rare rewards feel reachable"
      - "C) To hide the drop table from data miners"
      - "D) To make skilled players win more often"
    answer: "B"
    explanation: "A pity timer guarantees a rare outcome after enough failures, preventing the tail of very unlucky streaks that make players distrust the system."
  - id: 5
    type: "multiple-choice"
    question: "Why can a displayed 95 percent hit chance in a tactics game still feel unfair to players?"
    options:
      - "A) The underlying math must be incorrect"
      - "B) Humans weight memorable failures heavily and misjudge probability"
      - "C) The game secretly uses no random number generator"
      - "D) A 95 percent chance is mathematically identical to a coin flip"
    answer: "B"
    explanation: "Fairness is perceived, not computed. Players remember painful misses far more than routine hits, so a mathematically honest 95 percent still produces a felt sense of betrayal."
  - id: 6
    type: "multiple-choice"
    question: "Output randomness primarily affects which part of the play loop?"
    options:
      - "A) The situation before the player makes a decision"
      - "B) The resolution that occurs after the player has committed"
      - "C) Only the game's art direction"
      - "D) Matchmaking between players"
    answer: "B"
    explanation: "Output randomness resolves after commitment. This is why it can make a correct decision fail and why it more easily erodes the player's sense of agency."
  - id: 7
    type: "short-answer"
    question: "Explain the difference between input randomness and output randomness, and give one game example of each."
    answer: "Input randomness varies the situation before the player decides, for example a procedurally generated Slay the Spire map or your opening hand in a card game. Output randomness resolves after the player commits, for example whether an XCOM shot hits or whether a Pokemon attack lands a critical hit."
    explanation: "The distinction matters because input randomness invites planning and adaptation, while output randomness can override a sound decision after the fact."
  - id: 8
    type: "short-answer"
    question: "Why can a mechanic with a favorable expected value still feel unfair to players?"
    answer: "Because expected value is a long-run average, while variance determines how much individual outcomes deviate. A favorable average can still produce frequent-feeling losing streaks and vivid individual failures that players remember and interpret as injustice."
    explanation: "Players experience outcomes one at a time, not as an average, so the shape of the distribution and the salience of losses drive perceived fairness."
  - id: 9
    type: "applied"
    question: "You are tuning a 20 percent chance-to-stun ability that players call unfair when it triggers against them. Using this lesson, propose two changes and justify each."
    answer: "Any two of: switch to pseudo-random distribution so stuns are spaced rather than clustered; add bad-luck protection or a pity-style guarantee; reduce variance by converting the proc to a stacking meter that fills predictably; provide counterplay or a brief immunity window after a stun; or cap consecutive procs. Each change reduces the felt randomness of the loss."
    explanation: "The goal is not to change the average but to change the distribution and the player's ability to respond, moving the mechanic toward felt fairness."
  - id: 10
    type: "applied"
    question: "A roguelike lets players share a run seed with friends. Identify one clear benefit and one clear risk of exposing the seed."
    answer: "Benefit: reproducibility enables shared competitive or cooperative experiences, fair comparisons, daily-run contests, and easier bug reproduction. Risk: a known seed can be solved, reverse-engineered, or replayed, letting players eliminate uncertainty and exploit a fixed sequence."
    explanation: "Seeding converts randomness into a shareable, testable asset, but a visible seed also removes the unpredictability that drives tension in a roguelike."
---

# Week 13 — Randomness, Probability, and Uncertainty

## Why This Matters

As a programmer, `random()` is a solved utility: call it, get a number, move on. You already know the hidden machinery — deterministic generators, seeds, uniform versus normal distributions. What this lesson adds is the designer's question that sits on top of that machinery: where in the cause-and-effect chain does the random number land, and how will a human who is desperate to feel in control interpret it? Randomness is a user-experience decision wearing a statistics costume. Get the placement and the distribution right, and chance becomes a source of tension and replayability. Get them wrong, and players conclude the game cheated.

## Learning Objectives

- Distinguish input randomness from output randomness and predict how each affects a player's sense of agency.
- Compute the expected value and variance of a simple random mechanic and explain what each number tells a designer.
- Explain how pity timers and pseudo-random distribution change the felt frequency of rare events.
- Evaluate a random mechanic against fairness perception rather than raw probability.
- Use seeding deliberately to support reproducibility, testing, and shared player experience.

## Lesson

### Randomness Is a Design Material

Games reach for randomness for a small set of reasons: variety, so repeated content does not grow stale; uncertainty, so outcomes are not foregone conclusions; verisimilitude, so a world behaves probabilistically; and catch-up, so weaker players occasionally get a chance. None of these require "true" randomness. Call of Duty's recoil patterns, Civilization's combat rolls, and Slay the Spire's card order are deterministic sequences that merely look random and are tuned until they feel right. Treat the RNG as a small service with three levers: its call sites, its distribution, and its seed. Each lever is a design choice, and each one changes how play feels.

### Probability, Expected Value, and Variance

Players do not experience probability; they experience outcomes. Still, you must reason about the distribution behind each outcome. Expected value (EV) is the long-run average. An attack that deals 10 damage normally and 30 on a 25 percent critical has EV = 0.75(10) + 0.25(30) = 15. Variance measures how far single results stray from that average. Two mechanics can share an EV and feel completely different: a steady 15 per swing versus a gamble between 10 and 30. High variance produces dramatic highs and lows — thrilling in a boss fight, corrosive in a ranked ladder match, because a single unlucky roll can erase twenty minutes of good play. When you evaluate a random mechanic, ask two questions: is the average where I want it, and is the spread where I want it?

### Input vs. Output Randomness

This is the central distinction of the lesson. Input randomness varies the situation *before* the player decides: procedurally generated maps, your opening hand, the modifiers on a dropped item, the enemy composition in the next wave. Output randomness resolves *after* the player commits: whether your shot hits, whether the critical strike procs, whether the loot drops. The two produce opposite emotional signatures. Input randomness asks "what will I do with this?" and rewards planning and adaptation, so it feeds agency. Output randomness asks "did I get away with it?" and can make a well-played decision fail anyway, so it erodes agency.

Designers usually prefer input randomness because the player still owns the response. Into the Breach gives you perfect information about enemy attacks and randomizes almost nothing after you commit; the tension comes from the board you must solve. XCOM is the famous counterexample: its 95 percent shots miss often enough that players feel betrayed, because the random roll lands after the player has already made the tactically correct choice. The math is honest; the placement of the randomness is what stings. When a mechanic feels unfair, the first thing to check is not the probability but whether the roll happens before or after the player's decision.

### Uncertainty as an Emotional Engine

Uncertainty is not the enemy of fun; it is a source of it. A game with no uncertainty has no suspense. The design question is where uncertainty sits and how much the player can act on it. Perfect information produces calculation; hidden information produces reading and bluffing. Poker is the cleanest illustration: the shuffled deck is input randomness applied equally to everyone, and the skill lives in betting under uncertainty. The randomness creates the texture; the decisions create the depth. Every time you add a random element, ask what decision it creates, and for whom.

### Streaks, Pity Timers, and Pseudo-Random Distribution

True independence produces clusters. Flip a fair coin a hundred times and long runs are mathematically expected, but players read a run of five losses as a broken system rather than statistics. Two standard fixes exist. A pity timer guarantees a rare reward after a fixed number of failures, so a player never goes indefinitely without one; many gacha games, including Genshin Impact, use pity so that a five-star character remains reachable. Pseudo-random distribution (PRD) raises the effective chance after each failure and lowers it after a success, so procs cluster less than independent rolls would; Dota 2 famously uses PRD for critical strikes and evasion. Both techniques trade statistical purity for a distribution that feels fair, which is almost always the more important target. Fire Emblem's "true hit" system is a cousin of these ideas: displayed hit rates are not the literal ones, because averaging two rolls produces a curve that matches human intuition better than a single uniform roll.

### Seeding: Reproducibility and Shared Experience

A seed makes a random sequence reproducible. That is a gift. It lets you reproduce bugs, lets speedrunners compare identical runs, and lets friends share a world. Minecraft and Civilization let players enter a seed, and roguelikes such as Slay the Spire run daily challenges that everyone experiences identically. Seeding turns randomness from a liability into a social and QA feature. It carries a cost, though: a visible seed can be reverse-engineered and solved, so competitive designs often hide it or reroll it per match.

### Fairness Is Felt, Not Computed

Perceived fairness is not the same as actual probability. Players overestimate the frequency of rare events that hurt them, underestimate those that help them, and remember vivid losses longer than routine wins. The designer's job is to tune for the perception. That may mean hiding exact percentages, adding bad-luck protection, or ensuring a loss never feels unavoidable. If randomness can produce an outcome the player could not have prevented, players will attribute the defeat to the system rather than to themselves, and that trust is hard to win back.

### The Poker Analogy

Poker contains the whole lesson. Everyone shares the same input randomness — the deal. Skill is expressed through betting, folding, and reading opponents under uncertainty. Over one hand, luck dominates; over a thousand hands, skill compounds and the better player wins. Good game randomness works the same way: it should create decisions, apply symmetrically, and matter less than the choices it provokes. When randomness decides the match instead of seasoning it, it has stopped being a design tool and become a slot machine.

### Putting It Together: A Decision Checklist

When you introduce randomness, run a short checklist. First, what is the randomness for — variety, uncertainty, simulation, or catch-up? If you cannot name the purpose, cut it. Second, does it land before or after the player's decision? Prefer before, unless the tension of an uncertain resolution is itself the point. Third, what are the expected value and the variance, and do both match the intended feel? Fourth, how does it behave in the worst case — five misses in a row, or a lucky streak that ends a match early? Add protection against the tails if they would break trust. Fifth, can the player act on the uncertainty by adapting, hedging, or preparing? Randomness the player can respond to is strategy; randomness they cannot is a coin flip. Sixth, how will it be communicated, and will players understand the odds well enough to make informed choices? Finally, can it be seeded, tested, and reproduced? A random system you cannot inspect is a random system you cannot tune.

## Key Takeaways

- Randomness is a design material; your real levers are placement, distribution, and seed.
- Compare random mechanics on both expected value and variance, not just the average.
- Input randomness invites decisions and preserves agency; output randomness can override sound play and erode trust.
- Pity timers and pseudo-random distribution sacrifice statistical purity to make rare events feel fair.
- Perceived fairness, not raw probability, determines whether players accept a random mechanic.
- A shared seed turns randomness into a reproducible, social, testable feature — with the risk that it can be solved.

## Vocabulary

| Term | Definition |
|---|---|
| RNG | The random number generator a game uses to produce chance outcomes; in practice a deterministic sequence driven by an internal or chosen seed. |
| Randomness | Deliberate unpredictability built into a game's rules, used to create variety, uncertainty, catch-up chances, or simulation. |
| Probability | The chance that a given outcome occurs, expressed as a value between 0 and 1 or as a percentage. |
| Variance | A measure of how widely individual results scatter around the average; high variance means dramatic swings even when the average is fixed. |
| Input randomness | Randomness that shapes the situation before the player decides, such as a generated map, opening hand, or enemy composition. |
| Output randomness | Randomness that resolves after the player commits to an action, such as whether an attack hits, crits, or drops loot. |
| Uncertainty | The player's incomplete knowledge of what will happen; a source of suspense and engagement when the player can still act on it. |
| Pity timer | A safety rule that guarantees a rare reward after a set number of failures, capping the worst possible luck streaks. |
| Pseudo-random distribution | A scheme in which the effective chance rises after each failure and falls after each success, so procs cluster less than independent rolls do. |
| Fairness | The player's perception that outcomes are just; distinct from raw probability, since vivid losses and streaks distort how odds are felt. |

## Quiz

1. Which of the following is an example of input randomness?
   - A) A critical-hit roll made after your attack connects
   - B) A procedurally generated map you face before choosing a route
   - C) An enemy's damage roll that resolves as its attack lands
   - D) A loot box's contents revealed after purchase
2. A weapon deals 10 damage normally and 30 damage on a 25 percent critical hit. What is its expected damage per swing?
   - A) 10
   - B) 12.5
   - C) 15
   - D) 20
3. Which statement best describes a pseudo-random distribution?
   - A) It is true hardware randomness with no pattern
   - B) The chance to succeed rises after each failure and drops after each success
   - C) It uses a seed that guarantees no outcome ever repeats
   - D) It is a uniform distribution with deliberately higher variance
4. What is the primary design purpose of a pity timer?
   - A) To increase the variance of rare rewards
   - B) To cap the worst bad-luck streaks so rare rewards feel reachable
   - C) To hide the drop table from data miners
   - D) To make skilled players win more often
5. Why can a displayed 95 percent hit chance in a tactics game still feel unfair to players?
   - A) The underlying math must be incorrect
   - B) Humans weight memorable failures heavily and misjudge probability
   - C) The game secretly uses no random number generator
   - D) A 95 percent chance is mathematically identical to a coin flip
6. Output randomness primarily affects which part of the play loop?
   - A) The situation before the player makes a decision
   - B) The resolution that occurs after the player has committed
   - C) Only the game's art direction
   - D) Matchmaking between players
7. (Short answer) Explain the difference between input randomness and output randomness, and give one game example of each.
8. (Short answer) Why can a mechanic with a favorable expected value still feel unfair to players?
9. (Applied) You are tuning a 20 percent chance-to-stun ability that players call unfair when it triggers against them. Using this lesson, propose two changes and justify each.
10. (Applied) A roguelike lets players share a run seed with friends. Identify one clear benefit and one clear risk of exposing the seed.

## Answer Key

1. **B.** Input randomness shapes the situation before the player decides; the other three options resolve after the player has already committed.
2. **C.** Expected value is 0.75 × 10 + 0.25 × 30 = 7.5 + 7.5 = 15; the other choices mis-weight the critical probability.
3. **B.** PRD raises the effective chance after failures and lowers it after successes to reduce clustering, unlike a flat independent roll.
4. **B.** A pity timer guarantees a rare reward after enough failures, cutting off the unlucky tail that makes players distrust the system.
5. **B.** Fairness is perceived. Players recall painful misses disproportionately, so even honest odds feel unfair without bad-luck protection or clear communication.
6. **B.** Output randomness resolves after commitment, which is precisely why it can override a sound decision and erode agency.
7. **Short answer.** Input randomness varies the pre-decision situation (a generated map, an opening hand), while output randomness resolves after commitment (a hit roll, a crit). Input randomness invites planning; output randomness can invalidate it.
8. **Short answer.** Expected value is a long-run average, but variance governs individual outcomes. A favorable average can still yield frequent-feeling losing streaks and vivid failures that players read as injustice.
9. **Applied.** Any two of: use pseudo-random distribution to space procs; add bad-luck protection or a pity guarantee; convert the proc to a predictable stacking meter; grant brief immunity or counterplay after a stun; cap consecutive procs. Each reduces felt randomness without necessarily changing the average.
10. **Applied.** Benefit: reproducibility enables shared competitive runs, daily challenges, and easier bug reproduction. Risk: a known seed can be solved or replayed, eliminating the uncertainty that gives a roguelike its tension.

## Exercises

1. **Classify and diagnose.** Choose three games you play and list five random mechanics from them. For each, label it input or output randomness, estimate its probability and rough variance, and write one sentence on whether it strengthens or weakens player agency. Bring the list to your design journal.
2. **Build a probability spreadsheet (hands-on).** Create a spreadsheet that models a "15 percent chance to crit for triple damage" attack against a flat 10-damage attack. Compute expected value and standard deviation for both, then chart the distribution of total damage over 20 swings across 1,000 simulated runs. Note at what number of swings the higher-variance option becomes reliable.
3. **Redesign for felt fairness.** Take a mechanic you flagged as unfair in Exercise 1 and redesign its randomness using at least one technique from this lesson (pity timer, PRD, moving randomness from output to input, or making the roll visible). Write a short paragraph predicting the new felt experience.

## Further Study

- Jesse Schell, *The Art of Game Design: A Book of Lenses* — see the Lens of Chance and the Lens of Randomness.
- George Skaff Elias, Richard Garfield, and K. Robert Gutschera, *Characteristics of Games* — the chapters on luck, randomness, and skill.
- Dota 2 Wiki, "Pseudo-Random Distribution" — a concrete reference implementation and table of effective rates.
- Games to study: *Slay the Spire* (input randomness), *XCOM 2* (output randomness and perception), and poker (shared input randomness plus betting skill).
