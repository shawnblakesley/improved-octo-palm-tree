---
week: 28
title: "Emotional Design Beyond Fun"
unit: 7
unitTitle: "Narrative & Emotion"
estimatedMinutes: 90
prerequisites:
  - "Weeks 25-27"
objectives:
  - "Define emotional design and explain why fun is only one aesthetic among many."
  - "Distinguish tension, catharsis, horror, tragedy, awe, and empathy as designable emotional targets."
  - "Explain how negative emotions function as tools rather than as design failures."
  - "Analyze how a horror game manufactures dread through its systems, not only its art."
  - "Design a short emotional arc that deliberately deploys a negative emotion."
vocabulary:
  - term: "Emotional design"
    definition: "The deliberate targeting of specific feelings as design outcomes, treating emotion as a specification rather than a byproduct."
  - term: "Catharsis"
    definition: "The emotional release that follows sustained tension or grief, typically achieved when a build-up is finally resolved or acknowledged."
  - term: "Tension"
    definition: "The felt anticipation of possible loss or harm, accumulated by uncertainty, scarcity, and the threat of consequence."
  - term: "Horror design"
    definition: "The craft of producing fear and dread through pacing, vulnerability, sound, and the deliberate withholding of safety and information."
  - term: "Tragedy"
    definition: "A narrative form in which a character's flaw or circumstance leads to irreversible loss, inviting grief and reflection rather than comfort."
  - term: "Awe"
    definition: "The feeling of being small before something vast, beautiful, or incomprehensible, often produced by scale, sound, and perspective."
  - term: "Empathy"
    definition: "The player's capacity to feel with a character or another player, which games can engineer by giving the player that character's actions and constraints."
  - term: "Negative emotion"
    definition: "An unpleasant feeling such as fear, grief, guilt, or despair that can be deliberately deployed to create meaning rather than treated as a defect."
  - term: "Narrative payoff"
    definition: "The satisfying release of meaning or emotion when a setup, mystery, or tension is finally resolved or reframed."
  - term: "Ludonarrative consonance"
    definition: "The state in which a game's mechanics and its narrative reinforce the same meaning, so that play and story amplify each other."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "Which statement best captures emotional design as a discipline?"
    options:
      - "A) It means making games cheerful so players feel good."
      - "B) It means treating specific feelings as design targets and choosing systems to produce them."
      - "C) It means removing any content that could upset a player."
      - "D) It is a synonym for graphics quality."
    answer: "B"
    explanation: "Emotional design treats emotion as a specification — a chosen outcome that mechanics, pacing, and presentation are selected to produce."
  - id: 2
    type: "multiple-choice"
    question: "Why can a negative emotion be a design success rather than a failure?"
    options:
      - "A) Because players cannot tell the difference."
      - "B) Because unpleasant feelings can be the intended meaning, as when horror makes fear the point."
      - "C) Because negative emotions are easier to produce than positive ones."
      - "D) Because all games must include suffering."
    answer: "B"
    explanation: "Fear, grief, or guilt can be exactly the experience a work is about; unpleasantness is a problem only when it is unintended."
  - id: 3
    type: "multiple-choice"
    question: "In design terms, what is the relationship between tension and catharsis?"
    options:
      - "A) They are unrelated; either can occur alone."
      - "B) Catharsis is the release that follows sustained tension."
      - "C) Tension is caused by catharsis."
      - "D) Both describe pacing of rewards only."
    answer: "B"
    explanation: "Tension accumulates through uncertainty and threat; catharsis is the payoff when that build-up is released or acknowledged."
  - id: 4
    type: "multiple-choice"
    question: "Which is the clearest example of horror produced by systems rather than only by art?"
    options:
      - "A) A monster with detailed textures."
      - "B) A light source and sanity meter that force the player to choose between seeing and staying calm."
      - "C) A scary title screen."
      - "D) A trailer with a jump cut."
    answer: "B"
    explanation: "Horror lives in vulnerability, resource tension, and the withholding of safety — systemic choices the player must manage under fear."
  - id: 5
    type: "multiple-choice"
    question: "What distinguishes tragedy from a game merely having a sad ending?"
    options:
      - "A) Tragedy always ends in the death of the protagonist."
      - "B) Tragedy follows from a character's flaw or circumstance toward irreversible loss, producing grief and reflection."
      - "C) Tragedy requires no player agency."
      - "D) Tragedy is defined by a sorrowful musical score."
    answer: "B"
    explanation: "Tragedy is a structure in which flaw or circumstance leads to irreversible loss; sadness alone is a mood, not a tragic form."
  - id: 6
    type: "multiple-choice"
    question: "Which design choice most directly engineers empathy?"
    options:
      - "A) Showing a cutscene in which a character explains their sadness."
      - "B) Requiring the player to perform the character's constrained actions and share their limited options."
      - "C) Giving the player extra power and freedom."
      - "D) Adding a narrator who describes the character's feelings."
    answer: "B"
    explanation: "Empathy is strongest when the player occupies the character's constraints and acts through them, not when they are told how to feel."
  - id: 7
    type: "short-answer"
    question: "Explain why 'fun' is an insufficient goal for emotional design and name two other aesthetic targets."
    options: []
    answer: "Fun names only a narrow band of positive engagement and excludes experiences defined by tension, grief, awe, or empathy. Two alternatives are horror (fear and dread) and the sublime or awe (being small before something vast)."
    explanation: "A strong answer notes that fun is one aesthetic among many and names two distinct emotional targets beyond it."
  - id: 8
    type: "short-answer"
    question: "Define ludonarrative consonance and explain how it differs from its opposite."
    options: []
    answer: "Ludonarrative consonance is when mechanics and narrative reinforce the same meaning, so play and story amplify each other. Its opposite, ludonarrative dissonance, is when the rules argue against the fiction, weakening or complicating the intended meaning."
    explanation: "The answer should define both states and contrast alignment with contradiction."
  - id: 9
    type: "applied"
    question: "A team wants players to feel the guilt of a wartime decision. They plan a cutscene in which a general explains that the choice was tragic. Evaluate this approach and propose a stronger one."
    options: []
    answer: "A cutscene telling players the choice was tragic asks them to accept an emotion rather than produce it. A stronger approach makes the player author the decision and then confront its visible consequences — a named character missing, a town changed, resources lost — so the guilt is a response to something they did."
    explanation: "The scenario tests whether the designer engineers emotion through player action and consequence instead of instruction."
  - id: 10
    type: "applied"
    question: "A horror game's players report boredom after the first hour: the monster is scary but the tension keeps resetting. Diagnose the problem and suggest two systemic changes."
    options: []
    answer: "The tension resets because there is no accumulating cost or uncertainty, so fear has no trajectory. Two changes: introduce a resource or condition that degrades under pressure (so mistakes persist), and vary the threat's behavior or withholding so players cannot fully predict when safety returns."
    explanation: "The answer should connect sustained dread to accumulating stakes and persistent uncertainty rather than momentary scares."
---

# Week 28 — Emotional Design Beyond Fun

## Why This Matters

If you have ever shipped a feature that was technically correct and felt wrong, you already understand the gap emotional design addresses. "It works" is not the specification. The specification is what the player should feel, and everything — pacing, scarcity, sound, failure, even the length of a walk back to a checkpoint — is a parameter toward that feeling. This week widens your target set from a single vague word, "fun," to the full palette, including the emotions most engineers instinctively treat as bugs.

## Learning Objectives

- Define emotional design and explain why fun is only one aesthetic among many.
- Distinguish tension, catharsis, horror, tragedy, awe, and empathy as designable emotional targets.
- Explain how negative emotions function as tools rather than as design failures.
- Analyze how a horror game manufactures dread through its systems, not only its art.
- Design a short emotional arc that deliberately deploys a negative emotion.

## Lesson

### Beyond fun: the full palette

**Emotional design** is the deliberate targeting of specific feelings as design outcomes. It treats emotion as a specification rather than a byproduct. The MDA framework from Week 2 made this point structurally: aesthetics are the top layer of the design, the thing players actually feel, and mechanics exist to produce them. "Fun" is only one entry in that catalogue.

A fuller palette includes tension, relief, dread, grief, guilt, wonder, awe, melancholy, triumph, intimacy, and empathy. *Journey* targets awe and companionship. *This War of Mine* targets despair and moral exhaustion. *Papers, Please* targets complicity and bureaucratic dread. *That Dragon, Cancer* targets grief. None of these would be improved by being "more fun." Their emotional specificity is the product.

The practical starting point is to name the target before choosing systems. Ask what the player should feel in the first minute, in the middle, and at the end, and write those three words down. Then treat them as acceptance criteria: every mechanic, sound, and scene either serves the target or is dead weight. This is the same discipline as defining a performance budget before optimizing — without a stated number, you cannot tell whether you succeeded. A game that claims to target "excitement and fun" but never specifies the arc will drift toward whatever is easiest to build.

### Negative emotions as tools

The instinct of a systems thinker is to eliminate unpleasant states. In emotional design, that instinct is wrong. A **negative emotion** — fear, grief, guilt, despair — is a tool when it is the intended meaning. Horror that does not frighten has failed. A tragedy that leaves you comfortable has failed. The design question is not "is this feeling negative?" but "is this feeling the one I specified, and is it earned?"

What matters is *authorial intent plus player consent*. Negative emotion works when the player understands it as the point. *Darkest Dungeon* builds a stress system that makes your heroes break down, and the game is transparent about it — the misery is the contract. When players feel bad without having agreed to that experience, the result is not catharsis but resentment. This is where content warnings, difficulty options, and clear framing matter: they let players opt into the emotional contract, which paradoxically makes the difficult feeling more effective rather than less, because the player chose to be there.

There is also a difference between a negative emotion that carries meaning and one that merely frustrates. Frustration without purpose is usually a control or feedback failure from earlier in the course; grief, dread, or guilt with a purpose is narrative design. The test is whether the feeling points at something the work is saying. If it does not, you are inflicting, not designing.

### Tension and catharsis

**Tension** is the felt anticipation of possible loss or harm. It accumulates from uncertainty, scarcity, and the threat of consequence. Mechanically, tension is potential energy: stored, waiting. **Catharsis** is the release that follows sustained tension, and it is the payoff the tension was for.

The design discipline is to manage the accumulator. *Silent Hill* controls where safety is sparse; *Resident Evil* controls how many saves and bullets you have; *Frostpunk* controls how much time you have before a fatal cold snap. In each case the designer sets a tension budget, holds it, and then releases it — the relief of reaching a save room works only because the walk there was terrifying. A common failure is a system that resets tension to zero every encounter; dread requires accumulation, and accumulation requires that mistakes persist.

### Horror design

**Horror design** produces fear and dread through pacing, vulnerability, sound, and the deliberate withholding of safety and information. Its most important insight is that fear is about powerlessness, not visuals. *Amnesia: The Dark Descent* makes you unable to fight, so the monster is a problem you can only flee; *Outlast* removes even the ability to look away through a camera. The player's capacities are the design surface.

Concretely, horror is engineered through:

- **Vulnerability** — remove or degrade the player's ability to defend.
- **Scarcity** — limit resources so every choice costs something.
- **Information withholding** — let the player hear what they cannot see.
- **Persistent cost** — make failures leave marks, so dread accumulates.
- **Unpredictability** — vary the threat's timing so safety never becomes certain.

*Silent Hill 2* layers theme onto all of this: its monsters are psychological symbols, so fear and meaning are the same event. That is horror functioning as narrative rather than set dressing. When horror is designed this way, dread is not a mood laid over the mechanics; the mechanics are the dread.

### Tragedy

**Tragedy** is a narrative form in which a character's flaw or circumstance leads to irreversible loss, inviting grief and reflection. It differs from a merely sad ending by structure: the loss is caused, not suffered at random, and it cannot be undone. *Shadow of the Colossus* asks the player to kill magnificent creatures for a stated good purpose, then reveals what that killing cost. *Spec Ops: The Line* builds tragedy out of the player's own compliance. Games have an advantage here: when the player performed the fatal choice, the grief is partly self-directed, which is why mechanical tragedy can hit harder than the same story watched.

### Awe and the sublime

**Awe** is the feeling of being small before something vast, beautiful, or incomprehensible. It is produced by scale, sound, silence, and perspective — by the deliberate mismatch between the player's size and the world's. *Journey* stages awe with dunes, light, and a swelling score. *Outer Wilds* does it with a solar system operating on a timer, so the cosmos is both beautiful and indifferent. *Death Stranding* uses traversal and landscape to make distance itself emotional. *Shadow of the Colossus* builds awe from scale and music, then turns it into grief when the player realizes what the scale was for. Awe is one of the few aesthetics that scales well with production budget, and one of the easiest to undercut by over-explaining — the moment you name the sublime, it shrinks.

### Empathy and ludonarrative consonance

**Empathy** is the player's capacity to feel with a character or another player. Games engineer it most effectively by giving the player the character's actions and constraints. *Hellblade: Senua's Sacrifice* uses binaural audio and a protagonist's psychosis to place the player inside an experience they cannot see from outside. *Undertale* makes empathy mechanical: sparing enemies is harder and requires reading them, so compassion becomes a skill. *That Dragon, Cancer* asks the player to inhabit a father's helplessness. In each case the emotion is not asserted but exercised — the player performs care, fear, or grief, and the feeling follows from the doing rather than from being told.

The unifying concept is **ludonarrative consonance**: the state in which mechanics and narrative reinforce the same meaning, so play and story amplify each other. Emotional design is largely the practice of building consonance around a chosen feeling. When the systems and the story both point at dread, or grief, or awe, the player does not merely observe the emotion — they perform it, and **narrative payoff** lands as release rather than as information. That is the mature form of the craft: not making players happy, but making them feel exactly what you meant.

## Key Takeaways

- Emotional design treats feelings as specifications; fun is one aesthetic among many, not the default goal.
- Negative emotions are tools when they are the intended meaning and the player has consented to the experience.
- Tension accumulates through persistent uncertainty and cost; catharsis is its release, and it requires prior accumulation.
- Horror is engineered through vulnerability, scarcity, withheld information, and persistent stakes, not through visuals alone.
- Tragedy is structural — flaw or circumstance causing irreversible loss — and games can make the player complicit in it.
- Awe comes from scale, sound, and perspective; empathy comes from giving the player a character's actions and constraints.
- Ludonarrative consonance is the goal: mechanics and story reinforcing one emotion so the payoff is performed, not explained.

## Vocabulary

| Term | Definition |
|---|---|
| Emotional design | The deliberate targeting of specific feelings as design outcomes, treating emotion as a specification rather than a byproduct. |
| Catharsis | The emotional release that follows sustained tension or grief, typically achieved when a build-up is finally resolved or acknowledged. |
| Tension | The felt anticipation of possible loss or harm, accumulated by uncertainty, scarcity, and the threat of consequence. |
| Horror design | The craft of producing fear and dread through pacing, vulnerability, sound, and the deliberate withholding of safety and information. |
| Tragedy | A narrative form in which a character's flaw or circumstance leads to irreversible loss, inviting grief and reflection rather than comfort. |
| Awe | The feeling of being small before something vast, beautiful, or incomprehensible, often produced by scale, sound, and perspective. |
| Empathy | The player's capacity to feel with a character or another player, which games can engineer by giving the player that character's actions and constraints. |
| Negative emotion | An unpleasant feeling such as fear, grief, guilt, or despair that can be deliberately deployed to create meaning rather than treated as a defect. |
| Narrative payoff | The satisfying release of meaning or emotion when a setup, mystery, or tension is finally resolved or reframed. |
| Ludonarrative consonance | The state in which a game's mechanics and its narrative reinforce the same meaning, so that play and story amplify each other. |

## Quiz

1. **Multiple choice.** Which statement best captures emotional design as a discipline?
   - A) It means making games cheerful so players feel good.
   - B) It means treating specific feelings as design targets and choosing systems to produce them.
   - C) It means removing any content that could upset a player.
   - D) It is a synonym for graphics quality.

2. **Multiple choice.** Why can a negative emotion be a design success rather than a failure?
   - A) Because players cannot tell the difference.
   - B) Because unpleasant feelings can be the intended meaning, as when horror makes fear the point.
   - C) Because negative emotions are easier to produce than positive ones.
   - D) Because all games must include suffering.

3. **Multiple choice.** In design terms, what is the relationship between tension and catharsis?
   - A) They are unrelated; either can occur alone.
   - B) Catharsis is the release that follows sustained tension.
   - C) Tension is caused by catharsis.
   - D) Both describe pacing of rewards only.

4. **Multiple choice.** Which is the clearest example of horror produced by systems rather than only by art?
   - A) A monster with detailed textures.
   - B) A light source and sanity meter that force the player to choose between seeing and staying calm.
   - C) A scary title screen.
   - D) A trailer with a jump cut.

5. **Multiple choice.** What distinguishes tragedy from a game merely having a sad ending?
   - A) Tragedy always ends in the death of the protagonist.
   - B) Tragedy follows from a character's flaw or circumstance toward irreversible loss, producing grief and reflection.
   - C) Tragedy requires no player agency.
   - D) Tragedy is defined by a sorrowful musical score.

6. **Multiple choice.** Which design choice most directly engineers empathy?
   - A) Showing a cutscene in which a character explains their sadness.
   - B) Requiring the player to perform the character's constrained actions and share their limited options.
   - C) Giving the player extra power and freedom.
   - D) Adding a narrator who describes the character's feelings.

7. **Short answer.** Explain why "fun" is an insufficient goal for emotional design and name two other aesthetic targets.

8. **Short answer.** Define ludonarrative consonance and explain how it differs from its opposite.

9. **Applied/scenario.** A team wants players to feel the guilt of a wartime decision. They plan a cutscene in which a general explains that the choice was tragic. Evaluate this approach and propose a stronger one.

10. **Applied/scenario.** A horror game's players report boredom after the first hour: the monster is scary but the tension keeps resetting. Diagnose the problem and suggest two systemic changes.

## Answer Key

1. **B.** Emotional design treats emotion as a specification — a chosen outcome that mechanics, pacing, and presentation are selected to produce.
2. **B.** Fear, grief, or guilt can be exactly what a work is about; unpleasantness is a problem only when unintended.
3. **B.** Tension accumulates through uncertainty and threat, and catharsis is the payoff when that build-up is released.
4. **B.** Horror lives in vulnerability, resource tension, and withheld safety — systemic pressures the player must manage under fear.
5. **B.** Tragedy is a structure in which flaw or circumstance leads to irreversible loss; sadness alone is only a mood.
6. **B.** Empathy is strongest when the player occupies the character's constraints and acts through them.
7. **Model answer:** Fun names only a narrow band of positive engagement and excludes experiences defined by tension, grief, awe, or empathy. Two alternatives are horror (fear and dread) and awe or the sublime. (Credit naming fun as one aesthetic among many plus two distinct targets.)
8. **Model answer:** Ludonarrative consonance is when mechanics and narrative reinforce the same meaning so play and story amplify each other. Its opposite, dissonance, is when the rules argue against the fiction, weakening the intended meaning. (Credit defining both and contrasting alignment with contradiction.)
9. **Model answer:** A cutscene telling players the choice was tragic asks them to accept an emotion rather than produce it. A stronger approach has the player make the decision and then confront visible consequences — a named character gone, a town changed — so guilt responds to their own act. (Credit engineering emotion through action and consequence rather than instruction.)
10. **Model answer:** Tension resets because there is no accumulating cost or uncertainty, so fear has no trajectory. Changes: add a resource or condition that degrades under pressure so mistakes persist, and vary the threat so safety never becomes certain. (Credit sustained dread tied to accumulating stakes and persistent uncertainty.)

## Exercises

1. **Emotional spec (hands-on).** Choose one negative emotion and write a one-page emotional specification for a five-minute scene: the target feeling, the tension source, how it accumulates, what releases or refuses to release it, and the one moment of player action that makes the feeling theirs. Then name the system that carries it.
2. **Horror teardown.** Play twenty minutes of a horror game. Log every time you felt fear, and for each instance identify the systemic cause (vulnerability, scarcity, withheld information, persistent cost, or unpredictability). Note which cause appears most and how the game paces its release.
3. **Consonance check.** Take a game and write one sentence for its intended emotion and one for what its mechanics reward. If they differ, propose the smallest mechanical change that would align them, and describe how that change would alter the player's felt arc.

## Further Study

- *Silent Hill 2* (Team Silent, 2001), for horror as psychological and thematic meaning, not only fright.
- *Journey* (thatgamecompany, 2012), for awe and companionship built from scale, sound, and anonymous cooperation.
- *Hellblade: Senua's Sacrifice* (Ninja Theory, 2017), for empathy engineered through audio design and constraint.
- *Papers, Please* (Lucas Pope, 2013), for complicity, dread, and moral exhaustion produced by routine systems.
