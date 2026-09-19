---
week: 12
title: "Onboarding and Skill Scaffolding"
unit: 3
unitTitle: "Player Psychology & Motivation"
estimatedMinutes: 90
prerequisites:
  - "Weeks 9-11"
objectives:
  - "Describe the first-time user experience and identify the make-or-break decisions inside it."
  - "Distinguish explicit, implicit, and diegetic tutorial techniques and choose among them."
  - "Apply scaffolding and progressive disclosure to sequence new mechanics."
  - "Manage cognitive load by separating intrinsic, extraneous, and germane demands."
  - "Design a safe learning space and a skill gate that teaches before it tests."
vocabulary:
  - term: "Onboarding"
    definition: "The whole process of bringing a new player from zero knowledge to confident, self-directed play."
  - term: "FTUE"
    definition: "First-time user experience — the opening minutes that shape whether a new player continues or quits."
  - term: "Tutorial"
    definition: "Any designed sequence that teaches a player to play, whether explicit instruction, guided practice, or environmental teaching."
  - term: "Scaffolding"
    definition: "Temporary support structures that make a task doable before the player has the skill, removed as competence grows."
  - term: "Cognitive load"
    definition: "The demand a task places on working memory; it rises with the number of novel things a player must hold at once."
  - term: "Diegetic tutorial"
    definition: "Teaching delivered inside the fiction and world of the game — an in-world character, object, or interface rather than a detached overlay."
  - term: "Progressive disclosure"
    definition: "Revealing mechanics, options, and complexity gradually so players meet each idea when it is relevant."
  - term: "Skill gate"
    definition: "A point that requires demonstrated competence to pass, such as a boss or a locked ability, used to ensure readiness for what follows."
  - term: "Signposting"
    definition: "Visual, audio, or spatial cues that direct attention to what matters next without breaking immersion."
  - term: "Safe learning space"
    definition: "A low-stakes environment where a new mechanic can be practiced without punishing failure."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What is the primary purpose of the first-time user experience?"
    options:
      - "A) To deliver the entire rule set before play begins"
      - "B) To bring a new player to confident, self-directed play while earning their continued interest"
      - "C) To showcase the game's art budget in a cinematic"
      - "D) To maximize the number of mechanics introduced in the first ten minutes"
    answer: "B"
    explanation: "The FTUE is about reaching confident play and retaining the player; dumping the full rule set (A) or cramming mechanics (D) is exactly the cognitive-load failure it is meant to avoid."
  - id: 2
    type: "multiple-choice"
    question: "Super Mario Bros. World 1-1 introduces the Goomba, then a question block, then a gap, in an open space with no time pressure. Which onboarding concept best describes this?"
    options:
      - "A) A skill gate enforced by a boss"
      - "B) A safe learning space that teaches through level design"
      - "C) A diegetic tutorial delivered by an in-world character"
      - "D) Extraneous cognitive load"
    answer: "B"
    explanation: "The opening area removes threat so each new idea can be met and practiced, which is the definition of a safe learning space. The teaching is implicit, through the level rather than an instruction."
  - id: 3
    type: "multiple-choice"
    question: "In Dead Space, the health bar is projected from the character's suit rather than drawn on a separate HUD layer. What is this an example of?"
    options:
      - "A) A skill gate"
      - "B) A diegetic interface element"
      - "C) Progressive disclosure of difficulty settings"
      - "D) A fixed-interval reward schedule"
    answer: "B"
    explanation: "The information lives inside the fiction — the suit the character wears — so it is diegetic. It reduces the separation between player and world rather than gating progress."
  - id: 4
    type: "multiple-choice"
    question: "Which change most directly reduces extraneous cognitive load during onboarding?"
    options:
      - "A) Adding more tutorials so every rule is stated explicitly"
      - "B) Introducing one new mechanic at a time and deferring the rest until relevant"
      - "C) Increasing the number of on-screen meters and indicators"
      - "D) Making the first level harder to focus attention"
    answer: "B"
    explanation: "Extraneous load comes from information and interface demands unrelated to the core learning. Spacing new mechanics and hiding irrelevant options keeps working memory free for the thing being taught."
  - id: 5
    type: "multiple-choice"
    question: "What is scaffolding in game design?"
    options:
      - "A) Permanent assistance that remains for the entire game"
      - "B) Temporary support that makes a task doable before the player has the skill, removed as competence grows"
      - "C) A cosmetic reward for completing the tutorial"
      - "D) The order in which levels are unlocked"
    answer: "B"
    explanation: "Scaffolding is defined by being temporary and competence-building. Permanent assistance is accessibility (Week 34), which is a different and equally valid thing."
  - id: 6
    type: "multiple-choice"
    question: "A metroidvania locks a door that only opens with a double jump the player learns in the next area. What is this door doing?"
    options:
      - "A) Acting as a skill gate tied to an ability gate"
      - "B) Reducing the skill ceiling"
      - "C) Serving as a diegetic reward schedule"
      - "D) Increasing intrinsic cognitive load artificially"
    answer: "A"
    explanation: "The door gates progress on an ability the player must demonstrate elsewhere, so it is a skill gate expressed through a lock. It controls pacing and readiness rather than lowering the ceiling."
  - id: 7
    type: "short-answer"
    question: "Define progressive disclosure and explain why it matters for a game with many interacting systems."
    answer: "Progressive disclosure reveals mechanics, options, and complexity gradually so the player meets each idea when it becomes relevant. In a system-heavy game it prevents the tutorial from becoming a manual: working memory can only hold a few novel elements at once, so introducing everything up front produces confusion rather than understanding."
    explanation: "It is the interface version of lazy loading: load the module when the player needs it, not before."
  - id: 8
    type: "short-answer"
    question: "Give one advantage and one disadvantage of a diegetic tutorial compared with an explicit on-screen instruction."
    answer: "A diegetic tutorial preserves immersion and can teach without the game stepping out of its fiction, which improves tone and world credibility. Its disadvantage is legibility: in-world cues can be missed or misread, and they cannot easily explain complex rules, so the player may fail without understanding what was being taught."
    explanation: "The trade-off is between immersion and instructional clarity; many games layer a diegetic cue with a single explicit confirmation."
  - id: 9
    type: "applied"
    question: "A strategy game's tutorial begins with a 12-minute narrated cutscene explaining resources, tech trees, combat, and diplomacy, then drops the player into a full-scale battle. Players report confusion and quit before completing it. Diagnose the onboarding failures using scaffolding, cognitive load, and safe learning space, then propose a revised sequence."
    answer: "The cutscene front-loads intrinsic and extraneous load at once and offers no practice, so nothing is encoded; the full-scale battle then demands all four systems simultaneously with no scaffolds and no safe space. Revise by introducing one resource loop first in a small, low-stakes task, then add combat once resources are understood, then diplomacy, each with a bounded scenario that isolates the new system. Provide an optional reference and a forgiving failure state."
    explanation: "Teaching and doing must be interleaved, and complexity should be added one layer at a time against a rising but not overwhelming challenge."
  - id: 10
    type: "applied"
    question: "Design a 10-minute onboarding flow for a game about momentum-based movement. Specify the first safe learning space, the first skill gate, and one piece of signposting, and explain what each is teaching."
    answer: "Open with a safe learning space — a wide, hazard-free slope with a single ramp and no timer — where the player discovers that speed builds with slope and releases with jumps; the only feedback is motion and sound, so the first lesson is the core verb. Then place a skill gate: a short gap that requires the player to combine a downhill run with a timed jump, which tests whether momentum was understood before introducing the next verb. Signposting: a bright, distant landmark and a directional light cue aligning with the proper line down the slope, so the player knows where to go without a minimap."
    explanation: "Each element isolates one lesson: the safe space teaches the verb, the gate tests it, and the signposting directs attention without explaining."
---

# Week 12 — Onboarding and Skill Scaffolding

## Why This Matters

You have written a README for every project you have shipped, and you know the difference between documentation that a new contributor actually reads and a wall of text that guarantees they never open the repo again. A game's opening minutes are that README, except the reader cannot ask questions and will close the tab permanently if the first screen confuses them. Onboarding is where all the design skill from this unit is cashed in: motivation, difficulty, and feedback converge on the single question of whether a new player reaches competent, self-directed play before they run out of patience.

## Learning Objectives

- Describe the first-time user experience and identify the make-or-break decisions inside it.
- Distinguish explicit, implicit, and diegetic tutorial techniques and choose among them.
- Apply scaffolding and progressive disclosure to sequence new mechanics.
- Manage cognitive load by separating intrinsic, extraneous, and germane demands.
- Design a safe learning space and a skill gate that teaches before it tests.

## Lesson

### What onboarding is for

**Onboarding** is the process of bringing a player from zero knowledge to confident play. Its first phase, the **FTUE** (first-time user experience), covers the opening minutes and carries disproportionate weight: players who reach competence continue, and players who do not rarely come back. The FTUE has two jobs that must be done at once — teach, and be worth staying for. A game that teaches perfectly in a boring opening still loses the player.

The tempting failure is the information dump: a text box, a cutscene, or a modal that explains every system before the player has any reason to care. This is the equivalent of a 4,000-line README. The alternative is to teach through play, and to structure that play so each lesson is unambiguous.

### Tutorial design: teaching without telling

**Tutorial** covers any designed sequence that teaches the player, from explicit prompts to environmental guidance. Three families are worth distinguishing:

- **Explicit tutorial:** a prompt, tooltip, or trainer tells the player the rule. Precise and fast, but brittle — it can be skipped, it breaks immersion, and it can teach without producing understanding.
- **Implicit tutorial:** the level or system is built so the correct action is discoverable and the incorrect one is survivable. This is the strongest form when it works, because the player learns by doing. **Super Mario Bros.** World 1-1 is the canonical example: an open space, a single Goomba placed so it invites a jump, a question block positioned to be hit, and a gap sized to the player's jump — all with no text.
- **Diegetic tutorial:** teaching delivered inside the fiction. A **diegetic tutorial** uses an in-world character, object, or interface. **Portal**'s GLaDOS narrates and taunts while the test chambers functionally teach portal physics in escalating pairs. **Half-Life 2** teaches physics and weapons through the world and a supporting character rather than menus. **Metroid Prime** teaches scanning through the suit's own systems.

The best onboarding usually layers these: a diegetic cue, an implicit affordance, and one minimal explicit confirmation to remove ambiguity. The rule of thumb is to let the player learn the verb, then tell them the name.

### Scaffolding and progressive disclosure

**Scaffolding** is temporary support that makes a task doable before the player has the skill, removed as competence grows — exactly like the scaffolding on a building under construction. In games it can be mechanical (assisted aiming, generous checkpoints, a hint arrow), structural (simpler level layouts), or informational (an adviser who offers suggestions that later dry up). The key property is that it is designed to be removed.

**Progressive disclosure** decides what exists on screen and in the rules at each stage. Only show the systems that matter now; reveal the rest when they become relevant. The engineering parallel is lazy loading: players load the module they need, when the module is needed, rather than paying the cost up front. A strategy game that hides the diplomacy screen until the first neighbor appears is using progressive disclosure; a game that opens with all four systems visible is not.

Together, scaffolding and progressive disclosure control the difficulty curve from Week 11: what looks like a gentle early curve is often a curve plus scaffolding plus a reduced visible surface.

### Cognitive load

**Cognitive load** is the demand a task places on working memory, and it is the real constraint behind onboarding. Load comes in three flavors:

- **Intrinsic load** — the inherent difficulty of the thing being learned. Some is unavoidable; a game about orbital mechanics just is harder to teach than a game about jumping.
- **Extraneous load** — load from presentation, interface, and irrelevant detail. This is the kind you cut.
- **Germane load** — effort spent building durable mental models. This is the kind you want.

Working memory holds only a few novel items at once. Every new meter, keybinding, resource, and rule competes for that budget. Introducing one mechanic at a time is not dumbing down; it is respecting the bottleneck. Reducing extraneous load means trimming HUD, deferring secondary systems, and never making the player remember something the interface could show.

### Safe learning spaces and skill gates

A **safe learning space** is a low-stakes environment where a new mechanic can be practiced without punishing failure. **Dark Souls** places a weak first enemy and an early boss in a room designed to be survivable, teaching dodge, block, and attack before the real difficulty begins. **Breath of the Wild** gives the player the Great Plateau — a bounded sandbox with a handful of distinct tasks and no obligation to leave until the basics click. **Portal**'s early chambers are literally test chambers, which makes the safe space part of the fiction.

Once a skill has been taught, a **skill gate** tests it. A boss, a locked ability, or a required challenge can function as a gate, ensuring the player is ready for what follows. The failure mode is a gate with no prior teaching — a test on material that was never presented, which reads as unfairness rather than challenge. The teach–test–twist rhythm from Week 21 is the general pattern: teach the mechanic, test it in isolation, then twist it in combination.

Skill gates must also be honest about their strictness. A gate that can be bypassed teaches players that the teaching is optional; a gate that cannot be passed without mastery can strand players permanently. Metroidvania ability gates are usually safe because the required skill is discrete and demonstrated elsewhere.

### Signposting

**Signposting** is the art of directing attention without breaking immersion: lighting, color, motion, sound, and spatial composition that say "look here." Games use warm light on a path, a distinct silhouette on a distant landmark, an audio cue when a lever becomes usable, and the now-notorious yellow paint on climbable ledges. Signposting is not onboarding alone — it runs through the whole game (and returns in Unit 5) — but it is the difference between a tutorial the player follows and one they wander away from.

Two principles keep signposting honest. First, consistency: if yellow means "climb here," it must always mean that, or the cue becomes noise. Second, restraint: too many cues cancel each other out, and players stop reading any of them. Cue the one thing that matters, then let the player learn the rest.

## Key Takeaways

- The FTUE has to teach and to hold interest at the same time; information dumps fail both.
- Explicit tutorials are precise but brittle; implicit and diegetic teaching build deeper understanding when the level supports them.
- Scaffolding is temporary support that is removed; progressive disclosure controls what the player must think about at each stage.
- Cognitive load is the bottleneck — cut extraneous load and introduce one mechanic at a time.
- Safe learning spaces teach the verb; skill gates test it; a gate with no prior teaching is a fairness failure.
- Signposting should be consistent and restrained, directing attention without explaining.

## Vocabulary

| Term | Definition |
|---|---|
| Onboarding | The whole process of bringing a new player from zero knowledge to confident, self-directed play. |
| FTUE | First-time user experience — the opening minutes that shape whether a new player continues or quits. |
| Tutorial | Any designed sequence that teaches a player to play, whether explicit instruction, guided practice, or environmental teaching. |
| Scaffolding | Temporary support structures that make a task doable before the player has the skill, removed as competence grows. |
| Cognitive load | The demand a task places on working memory; it rises with the number of novel things a player must hold at once. |
| Diegetic tutorial | Teaching delivered inside the fiction and world of the game — an in-world character, object, or interface rather than a detached overlay. |
| Progressive disclosure | Revealing mechanics, options, and complexity gradually so players meet each idea when it is relevant. |
| Skill gate | A point that requires demonstrated competence to pass, such as a boss or a locked ability, used to ensure readiness for what follows. |
| Signposting | Visual, audio, or spatial cues that direct attention to what matters next without breaking immersion. |
| Safe learning space | A low-stakes environment where a new mechanic can be practiced without punishing failure. |

## Quiz

**1. (Multiple choice)** What is the primary purpose of the first-time user experience?

- A) To deliver the entire rule set before play begins
- B) To bring a new player to confident, self-directed play while earning their continued interest
- C) To showcase the game's art budget in a cinematic
- D) To maximize the number of mechanics introduced in the first ten minutes

**2. (Multiple choice)** Super Mario Bros. World 1-1 introduces the Goomba, then a question block, then a gap, in an open space with no time pressure. Which onboarding concept best describes this?

- A) A skill gate enforced by a boss
- B) A safe learning space that teaches through level design
- C) A diegetic tutorial delivered by an in-world character
- D) Extraneous cognitive load

**3. (Multiple choice)** In Dead Space, the health bar is projected from the character's suit rather than drawn on a separate HUD layer. What is this an example of?

- A) A skill gate
- B) A diegetic interface element
- C) Progressive disclosure of difficulty settings
- D) A fixed-interval reward schedule

**4. (Multiple choice)** Which change most directly reduces extraneous cognitive load during onboarding?

- A) Adding more tutorials so every rule is stated explicitly
- B) Introducing one new mechanic at a time and deferring the rest until relevant
- C) Increasing the number of on-screen meters and indicators
- D) Making the first level harder to focus attention

**5. (Multiple choice)** What is scaffolding in game design?

- A) Permanent assistance that remains for the entire game
- B) Temporary support that makes a task doable before the player has the skill, removed as competence grows
- C) A cosmetic reward for completing the tutorial
- D) The order in which levels are unlocked

**6. (Multiple choice)** A metroidvania locks a door that only opens with a double jump the player learns in the next area. What is this door doing?

- A) Acting as a skill gate tied to an ability gate
- B) Reducing the skill ceiling
- C) Serving as a diegetic reward schedule
- D) Increasing intrinsic cognitive load artificially

**7. (Short answer)** Define progressive disclosure and explain why it matters for a game with many interacting systems.

**8. (Short answer)** Give one advantage and one disadvantage of a diegetic tutorial compared with an explicit on-screen instruction.

**9. (Applied)** A strategy game's tutorial begins with a 12-minute narrated cutscene explaining resources, tech trees, combat, and diplomacy, then drops the player into a full-scale battle. Players report confusion and quit before completing it. Diagnose the onboarding failures using scaffolding, cognitive load, and safe learning space, then propose a revised sequence.

**10. (Applied)** Design a 10-minute onboarding flow for a game about momentum-based movement. Specify the first safe learning space, the first skill gate, and one piece of signposting, and explain what each is teaching.

## Answer Key

1. **B.** The FTUE is about reaching confident play and retaining the player; dumping the full rule set (A) or cramming mechanics (D) is the cognitive-load failure it is meant to avoid.
2. **B.** The opening area removes threat so each new idea can be met and practiced, which is a safe learning space, and the teaching is implicit through the level rather than an instruction.
3. **B.** The information lives inside the fiction — the suit the character wears — so it is diegetic. It reduces separation between player and world rather than gating progress.
4. **B.** Extraneous load comes from information and interface demands unrelated to the core learning. Spacing new mechanics and hiding irrelevant options keeps working memory free for what is being taught.
5. **B.** Scaffolding is defined by being temporary and competence-building. Permanent assistance is accessibility (Week 34), a different and equally valid thing.
6. **A.** The door gates progress on an ability the player must demonstrate elsewhere, so it is a skill gate expressed through a lock; it controls pacing and readiness rather than lowering the ceiling.
7. Progressive disclosure reveals mechanics and options gradually so the player meets each idea when it becomes relevant. In a system-heavy game it prevents the tutorial from becoming a manual, because working memory can only hold a few novel elements at once.
8. A diegetic tutorial preserves immersion and world credibility by never stepping out of the fiction. Its weakness is legibility: in-world cues can be missed or misread and cannot easily explain complex rules, so players may fail without understanding the lesson.
9. The cutscene front-loads intrinsic and extraneous load with no practice, so nothing is encoded, and the full-scale battle then demands all four systems at once with no scaffold and no safe space. Revise by introducing one resource loop in a small low-stakes task, then adding combat, then diplomacy, each in a bounded scenario that isolates the new system, with an optional reference and a forgiving failure state.
10. Open with a wide, hazard-free slope with no timer so the player discovers that speed builds downhill and releases on jumps — the core verb, taught by a safe learning space. Then a short gap requiring a downhill run plus a timed jump acts as a skill gate that tests momentum before the next verb is added. Signposting is a distant landmark with a directional light cue along the intended line, directing attention without a minimap or text.

## Exercises

1. **Hands-on: first-ten-minutes audit.** Record or recall the first ten minutes of a game you have never played. Log every new mechanic, meter, keybinding, and rule the game presents, in order. Mark which were taught implicitly, explicitly, or diegetically, and identify the exact moment the load exceeds what a new player can reasonably hold.

2. **Teach a mechanic without text.** Choose one mechanic from a game you are designing or studying. Design a single level or encounter that teaches it with no text and no tutorial prompt. Write the layout, the placement of the first instance, and the failure state, then include a one-sentence explicit prompt you would add only as a fallback.

3. **Onboarding rebuild.** Take a game whose opening you found confusing, and rewrite the first fifteen minutes as a sequence of scaffolded beats: safe learning space, first skill gate, first signpost, and the first moment you would allow failure to cost something. Justify the order with cognitive-load reasoning.

## Further Study

- **Celia Hodent, *The Gamer's Brain* (2017)** — a UX and cognitive-science account of perception, attention, memory, and onboarding.
- **Jesse Schell, *The Art of Game Design*, "The Lens of Essential Experience" and the tutorial lenses** — questions that force clarity about what the player must learn first.
- **Game Maker's Toolkit, "Super Mario 3D World's 4 Step Level Design"** — a widely cited video analysis of teach–test–twist structure.
- **Portal** (Valve, 2007) and **Metroid Prime** (Retro Studios, 2002) — two landmark case studies in diegetic and implicit teaching.
