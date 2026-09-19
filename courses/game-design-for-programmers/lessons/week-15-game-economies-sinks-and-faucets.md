---
week: 15
title: "Game Economies, Sinks, and Faucets"
unit: 4
unitTitle: "Chance, Skill & Balance"
estimatedMinutes: 90
prerequisites:
  - "Weeks 13-14"
objectives:
  - "Describe any game's resource system as an economy of faucets, sinks, and flows."
  - "Compute net resource flow and use it to estimate time-to-afford for a target item."
  - "Explain why exponential resource growth paired with flat sinks produces inflation."
  - "Compare closed and open economies and predict the pressures each faces."
  - "Design sinks and exchange rates that keep a resource economy healthy."
vocabulary:
  - term: "Game economy"
    definition: "The system of resources, sources, drains, and conversion rates that governs how value is produced and consumed in a game."
  - term: "Faucet"
    definition: "Any source that injects resources into the economy, such as quest rewards, enemy drops, or daily bonuses."
  - term: "Sink"
    definition: "Any mechanism that removes resources from the economy, such as vendors, repairs, consumables, or upgrade costs."
  - term: "Currency"
    definition: "A resource whose primary role is to be exchanged for other goods or services rather than consumed directly for its own effect."
  - term: "Inflation"
    definition: "The condition where currency supply grows faster than the goods and sinks that absorb it, so the currency loses value and prices rise."
  - term: "Exchange rate"
    definition: "The ratio at which one currency or resource converts into another, which sets relative value between parallel systems."
  - term: "Exponential growth"
    definition: "Compounding increase where a quantity grows in proportion to its current size, producing a curve that accelerates over time."
  - term: "Tuning"
    definition: "The iterative adjustment of numeric parameters to steer a system toward a desired player experience or balance state."
  - term: "Closed economy"
    definition: "A self-contained economy with no external injections or trade, where total value is largely controlled inside the game."
  - term: "Resource flow"
    definition: "The rate at which resources enter, move through, and leave an economy, measured per unit of play time."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "In economic terms, a faucet is best defined as:"
    options:
      - "A) A mechanism that removes resources from the economy"
      - "B) A source that injects resources into the economy"
      - "C) The ratio between two currencies"
      - "D) A player-facing interface element"
    answer: "B"
    explanation: "Faucets are sources of new resources, such as quest rewards or enemy drops. Sinks are the drains that remove them."
  - id: 2
    type: "multiple-choice"
    question: "Which of the following is a sink?"
    options:
      - "A) A daily login bonus"
      - "B) Repair and vendor fees that consume currency"
      - "C) A new region added in a patch"
      - "D) An XP multiplier"
    answer: "B"
    explanation: "Repairs, fees, and other costs remove currency from circulation, which is the defining function of a sink."
  - id: 3
    type: "multiple-choice"
    question: "A player earns 600 gold per hour from faucets and spends 340 gold per hour on sinks. What is the net surplus per hour?"
    options:
      - "A) 260 gold"
      - "B) 340 gold"
      - "C) 940 gold"
      - "D) Negative 260 gold"
    answer: "A"
    explanation: "Net flow is faucets minus sinks: 600 minus 340 equals 260 gold per hour accumulating in the player's pocket."
  - id: 4
    type: "multiple-choice"
    question: "In a game economy, inflation means:"
    options:
      - "A) Prices fall because currency is scarce"
      - "B) Currency supply outgrows the goods and sinks that absorb it, so currency loses value"
      - "C) Players earn less than they spend"
      - "D) Sinks exceed faucets over time"
    answer: "B"
    explanation: "When currency accumulates faster than it can be spent or removed, each unit buys less, which is inflation. Falling prices and larger sinks are the opposite condition."
  - id: 5
    type: "multiple-choice"
    question: "Why is exponential faucet growth paired with flat sinks dangerous?"
    options:
      - "A) It reduces variance in rewards"
      - "B) Income outpaces drains, so the surplus compounds and floods the economy with currency"
      - "C) It makes sinks progressively stronger"
      - "D) It removes the need for currencies"
    answer: "B"
    explanation: "A compounding faucet against a flat sink widens the gap every hour, producing runaway surpluses and inflation. Sinks must often scale alongside income."
  - id: 6
    type: "multiple-choice"
    question: "What distinguishes a closed economy from an open one?"
    options:
      - "A) Closed economies have no faucets"
      - "B) Closed economies have no external injections or trade, while open economies interact with outside flows such as player trading or real money"
      - "C) Open economies have no sinks"
      - "D) They are structurally identical"
    answer: "B"
    explanation: "Closed economies are self-contained; open economies connect to external sources or other markets, which adds uncontrollable faucets and drains."
  - id: 7
    type: "short-answer"
    question: "Define faucet and sink and give one concrete game example of each."
    answer: "A faucet injects resources, for example gold earned from quest rewards in World of Warcraft. A sink removes resources, for example repair costs, vendor purchases, or consumable purchases in the same game."
    explanation: "The pair is the basic accounting of any economy: sources add currency and drains remove it, and their balance determines whether value is stable."
  - id: 8
    type: "short-answer"
    question: "Why can a healthy faucet-to-sink ratio in early play become a problem later?"
    answer: "Faucets often grow faster than sinks, especially when income compounds as players reach higher-level content while sinks stay flat. The early balance can flip into a large surplus that accumulates and causes inflation."
    explanation: "Economies are dynamic; a ratio measured at one point in the progression curve will not hold once income scales up."
  - id: 9
    type: "applied"
    question: "An item costs 12,000 gold. Faucets provide 700 gold per hour and sinks consume 300 gold per hour. How long until the player can afford the item, and what happens if buffs raise faucets to 900 gold per hour?"
    answer: "Current net flow is 700 minus 300, or 400 gold per hour, so the item takes 12,000 divided by 400, or 30 hours. With faucets at 900, net flow is 600 per hour and the item takes 20 hours. Raising income by under 30 percent cuts time-to-reward by a third, which can trivialize the sink that the item cost was meant to create."
    explanation: "This shows how sensitive time-to-afford is to faucet changes and why income buffs must be paired with proportional sinks."
  - id: 10
    type: "applied"
    question: "Your late game has runaway inflation: veteran players hold millions of useless gold. Propose two sinks or structural fixes and explain how each restores value."
    answer: "Any two of: add recurring percentage-based sinks such as repair or upkeep costs that scale with wealth; add prestige or cosmetic vendors with very large, repeatable prices to mop up surplus; introduce a second currency or exchange rate that converts surplus gold into a scarce resource; or flatten cap faucets so veteran income stops compounding. Each removes currency or raises the demand for it."
    explanation: "Effective anti-inflation fixes either absorb existing supply or slow its growth, and percentage-based or repeatable sinks scale with the very players who hold the surplus."
---

# Week 15 — Game Economies, Sinks, and Faucets

## Why This Matters

Every game with resources has an economy, whether or not anyone calls it that. Gold, XP, crafting materials, lives, ammo, and even free time are resources that enter through some channels and leave through others. Engineers have strong intuitions here: this is a conservation problem. If allocation outpaces deallocation, the pool grows without bound. That is a memory leak, and in game design it is called inflation. Learning to see play as resource flow — and to model it in a spreadsheet before shipping it — is one of the highest-leverage skills a designer can build.

## Learning Objectives

- Describe any game's resource system as an economy of faucets, sinks, and flows.
- Compute net resource flow and use it to estimate time-to-afford for a target item.
- Explain why exponential resource growth paired with flat sinks produces inflation.
- Compare closed and open economies and predict the pressures each faces.
- Design sinks and exchange rates that keep a resource economy healthy.

## Lesson

### Every Game Has an Economy

A game economy is the system of resources plus the sources, drains, and conversion rates that govern them. The two fundamental parts are the faucet, which injects resources, and the sink, which removes them. Faucets include quest rewards, enemy drops, daily bonuses, and idle income. Sinks include vendors, repair fees, consumable purchases, upgrade costs, respec costs, and taxes on player trade. Even a game with a single resource has an economy: a score-attack game faucets points and sinks nothing, which is fine because nothing is being exchanged. The moment players save, spend, and choose between purchases, you have an economy that can go wrong.

### Currency Types and Why They Multiply

Designers rarely use one currency because a single currency forces every decision through the same exchange rate. Two or three currencies let you separate audiences and goals: soft currency for routine purchases, hard or premium currency for scarce items, and a progression currency for upgrades. Each currency needs its own faucets and sinks, or it will inflate or starve independently. Final Fantasy XIV's tomestones, Clash of Clans' multiple resources, and most free-to-play games all use parallel currencies to control pacing. The cost is cognitive load: each new currency is a new thing for players to learn and for you to tune.

### Faucets, Sinks, and Net Flow

The health of an economy is governed by net flow: faucets minus sinks, measured per unit of play time. If net flow is positive, wealth accumulates; if negative, it drains. Neither is inherently good. Early game often wants positive flow so players can buy their first upgrades, while late game may want the surplus absorbed by ambitious sinks. Consider a concrete worked example for a small RPG:

- Faucets per hour: quest rewards 400 gold, enemy drops 150 gold, amortized daily bonus 50 gold. Total faucet rate = 600 gold per hour.
- Sinks per hour: repairs 120 gold, consumables 180 gold, fast travel 40 gold. Total sink rate = 340 gold per hour.
- Net flow = 600 minus 340 = +260 gold per hour.

If a prestige mount costs 10,000 gold, a player starting from zero reaches it in about 10,000 divided by 260, or roughly 38.5 hours, ignoring other purchases. That is a usable target if 38 hours is the intended length of the ramp. But now suppose the faucet compounds: players reach higher-tier content and their income grows about 5 percent per hour, while sinks stay flat. At hour ten the faucet is 600 times 1.05 to the ninth power, approximately 931 gold per hour, so net flow is about 591 gold per hour. The same 10,000-gold item that took 38 hours in the flat model becomes trivial, and the surplus keeps accelerating. This is exactly the failure mode that makes veteran players hopelessly rich and makes old prices meaningless. The lesson: pair scaling faucets with scaling sinks, or cap the faucet.

### Inflation and Exchange Rates

Inflation is what happens when the currency supply grows faster than the goods and sinks that absorb it. Its symptoms are familiar: prices rise, old rewards feel worthless, and new players find the economy skewed by veterans. Deflation, the opposite, makes players hoard and stalls spending. Exchange rates set relative value between currencies; a fixed peg, such as 100 gold per gem, is simple to communicate, while a floating rate lets supply and demand find a price but is harder to control and easy to exploit. Whichever you choose, decide deliberately, because players will arbitrage any gap between a faucet and an exchange rate.

### Exponential Growth and Tuning Spreadsheets

Many designers make the mistake of letting rewards grow exponentially while costs grow linearly. Exponentials are seductive because they make high-level play feel epic, but they outrun flat systems quickly. The standard countermeasures are progressive, percentage-based sinks that scale with a player's wealth or level, repeated prestige costs, and separately tuned currencies. This is where a tuning spreadsheet earns its keep. Build a simple model with one column per hour or per level: faucet rate, sink rate, cumulative balance, and time-to-afford for key items. Watching the cumulative column is the fastest way to see a leak forming.

### Closed vs. Open Economies

A closed economy is self-contained: all faucets and sinks are under your control. A single-player offline game is closed, and so is a game with no player trading. An open economy connects to outside flows — player-to-player markets, cross-server trade, or real-money purchases. EVE Online is the famous example of a largely player-driven open economy, where the market itself becomes gameplay. Open economies are richer and more emergent but far harder to control, because external faucets (like real money) and external behavior (like botting and market manipulation) can wreck your carefully tuned ratios. If your economy is open, budget for monitoring and intervention, because you no longer own all the valves.

### Player Trade and Open Flows

The moment players can trade, your economy gains a second layer you do not directly control. Players will find the most efficient faucet, concentrate on it, and sell the output to players who prefer a different activity. That specialization is healthy — it is what makes EVE Online's markets feel alive — but it also means prices, not your design intent, determine value. A single exploitable faucet can flood a player market and crash a currency's worth overnight. Guard against this with account-bound or untradeable currencies, per-account faucet caps, and sinks that operate on trade itself, such as market taxes and listing fees. If a currency must stay stable, keep it out of player trading and bind it to the account. If it is meant to float, accept volatility and build the instrumentation to monitor and intervene. Player trade turns an economy from a machine you operate into one you share, with all the loss of control that implies.

### Monitoring a Live Economy

A spreadsheet models the economy you designed; telemetry measures the economy you shipped. Once players are in, track the median and the high percentiles of currency balance over time. A rising median signals that faucets outpace sinks, while a widening gap between the median and the top percentile signals that a small group is farming a faucet you did not intend. Track the velocity of currency, not just its stock: fast-moving currency is doing work, while hoarded currency is dead weight. Then watch the price of anything players trade, because prices reveal relative value more honestly than design intent does. Treat these signals as a control loop: measure, adjust a faucet or sink, and measure again. The economy is never finished, only currently stable.

### Opportunity Cost and the Point of It All

Every purchase is a choice, and the real cost of an item is the best alternative you gave up, its opportunity cost. A well-designed economy is a machine for producing interesting spending decisions with real trade-offs. If a purchase is obviously correct, the faucet has made the decision for the player. If every purchase is unaffordable, the faucet has removed the decision entirely. Tune so that players are always choosing between two things they genuinely want.

## Key Takeaways

- Any system with saved and spent resources is an economy; model it with faucets, sinks, and net flow.
- Positive net flow is not automatically bad, but unchecked accumulation leads to inflation.
- Pair compounding faucets with scaling or percentage-based sinks; flat sinks cannot absorb exponential income.
- A worked spreadsheet with cumulative balance and time-to-afford exposes leaks far faster than intuition.
- Closed economies are controllable; open economies add uncontrollable external faucets and demand monitoring.
- The goal is not scarcity for its own sake but spending decisions with meaningful opportunity costs.

## Vocabulary

| Term | Definition |
|---|---|
| Game economy | The system of resources, sources, drains, and conversion rates that governs how value is produced and consumed in a game. |
| Faucet | Any source that injects resources into the economy, such as quest rewards, enemy drops, or daily bonuses. |
| Sink | Any mechanism that removes resources from the economy, such as vendors, repairs, consumables, or upgrade costs. |
| Currency | A resource whose primary role is to be exchanged for other goods or services rather than consumed directly for its own effect. |
| Inflation | The condition where currency supply grows faster than the goods and sinks that absorb it, so the currency loses value and prices rise. |
| Exchange rate | The ratio at which one currency or resource converts into another, which sets relative value between parallel systems. |
| Exponential growth | Compounding increase where a quantity grows in proportion to its current size, producing a curve that accelerates over time. |
| Tuning | The iterative adjustment of numeric parameters to steer a system toward a desired player experience or balance state. |
| Closed economy | A self-contained economy with no external injections or trade, where total value is largely controlled inside the game. |
| Resource flow | The rate at which resources enter, move through, and leave an economy, measured per unit of play time. |

## Quiz

1. In economic terms, a faucet is best defined as:
   - A) A mechanism that removes resources from the economy
   - B) A source that injects resources into the economy
   - C) The ratio between two currencies
   - D) A player-facing interface element
2. Which of the following is a sink?
   - A) A daily login bonus
   - B) Repair and vendor fees that consume currency
   - C) A new region added in a patch
   - D) An XP multiplier
3. A player earns 600 gold per hour from faucets and spends 340 gold per hour on sinks. What is the net surplus per hour?
   - A) 260 gold
   - B) 340 gold
   - C) 940 gold
   - D) Negative 260 gold
4. In a game economy, inflation means:
   - A) Prices fall because currency is scarce
   - B) Currency supply outgrows the goods and sinks that absorb it, so currency loses value
   - C) Players earn less than they spend
   - D) Sinks exceed faucets over time
5. Why is exponential faucet growth paired with flat sinks dangerous?
   - A) It reduces variance in rewards
   - B) Income outpaces drains, so the surplus compounds and floods the economy with currency
   - C) It makes sinks progressively stronger
   - D) It removes the need for currencies
6. What distinguishes a closed economy from an open one?
   - A) Closed economies have no faucets
   - B) Closed economies have no external injections or trade, while open economies interact with outside flows such as player trading or real money
   - C) Open economies have no sinks
   - D) They are structurally identical
7. (Short answer) Define faucet and sink and give one concrete game example of each.
8. (Short answer) Why can a healthy faucet-to-sink ratio in early play become a problem later?
9. (Applied) An item costs 12,000 gold. Faucets provide 700 gold per hour and sinks consume 300 gold per hour. How long until the player can afford the item, and what happens if buffs raise faucets to 900 gold per hour?
10. (Applied) Your late game has runaway inflation: veteran players hold millions of useless gold. Propose two sinks or structural fixes and explain how each restores value.

## Answer Key

1. **B.** A faucet injects resources; a sink removes them. The pairing is the basic accounting of any economy.
2. **B.** Repair and vendor fees consume currency and therefore drain the economy, which defines a sink.
3. **A.** Net flow is 600 minus 340, which equals 260 gold per hour of accumulating surplus.
4. **B.** Inflation is currency supply outgrowing what can absorb it, so each unit buys less. Falling prices and heavier sinks are the reverse.
5. **B.** A compounding faucet against a flat sink widens the surplus every hour, flooding the economy; sinks must scale alongside income.
6. **B.** Closed economies are self-contained, while open economies connect to external faucets and drains such as player markets or real money.
7. **Short answer.** A faucet injects resources, such as quest gold, and a sink removes them, such as repair fees. Together they set whether a player's balance grows or shrinks over time.
8. **Short answer.** Faucets usually scale with progression and can compound, while sinks often stay flat, so an early balance can flip into a large surplus that causes inflation.
9. **Applied.** At 700 minus 300 = 400 net per hour, the item takes 30 hours. At 900 minus 300 = 600 net per hour, it takes 20 hours. A modest income buff cuts time-to-afford by a third and can trivialize the intended cost.
10. **Applied.** Two of: percentage-based recurring sinks that scale with wealth; very large repeatable cosmetic or prestige vendors; a convertible second currency that soaks up surplus; or capped faucets. Each absorbs existing supply or slows its growth.

## Exercises

1. **Build a tuning spreadsheet (hands-on).** Model a 20-hour slice of a game you know. Use one row per hour with columns for each faucet, each sink, net flow, and cumulative balance. Add a second sheet with a 5 percent compounding faucet and flat sinks, and chart both cumulative lines. Identify the hour where the compounding model visibly diverges.
2. **Find the leaks.** Play or watch twenty minutes of an RPG or MMO and log every resource you gain and spend. Compute the net flow per minute and estimate time-to-afford for the most expensive item you want. Write one paragraph on whether the ratio feels generous, punishing, or about right.
3. **Design an anti-inflation sink.** Create a sink for a late-game surplus that scales with player wealth rather than with level, such as a repeatable upgrade whose cost is a percentage of current holdings or a prestige vendor with escalating prices. Specify the numbers, explain who it targets, and predict the player reaction.

## Further Study

- Vili Lehdonvirta and Edward Castronova, *Virtual Economies: Design and Analysis* (MIT Press) — the canonical academic treatment of game economies.
- Ian Schreiber and Brenda Romero, *Game Balance* (CRC Press) — practical chapters on resource systems, faucets, and sinks.
- Raph Koster's writing on virtual economies and player-run markets.
- Games to study: *EVE Online* (player-driven open economy), *World of Warcraft* (multiple currencies and repair sinks), and *Clash of Clans* (parallel resources and timed sinks).
