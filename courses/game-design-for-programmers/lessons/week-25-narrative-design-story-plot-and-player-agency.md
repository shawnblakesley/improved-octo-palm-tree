---
week: 25
title: "Narrative Design: Story, Plot, and Player Agency"
unit: 7
unitTitle: "Narrative & Emotion"
estimatedMinutes: 90
prerequisites:
  - "Weeks 1-24"
objectives:
  - "Distinguish story from plot and identify each in a game you have played."
  - "Explain ludonarrative and diagnose ludonarrative dissonance in a specific title."
  - "Compare embedded and emergent narrative, including the authoring cost of each."
  - "Evaluate cutscenes and other delivery methods by how much player agency they preserve."
  - "Analyze how a game paces narrative beats against its mechanical pacing."
vocabulary:
  - term: "Narrative design"
    definition: "The craft of deciding how a game's story is authored, delivered, and shaped by play, including pacing, delivery method, and the player's role in it."
  - term: "Story"
    definition: "The complete set of events in a fictional world in chronological order, including material the player may never see."
  - term: "Plot"
    definition: "The arrangement and order in which story events are revealed to the player, which in games is often partly under player control."
  - term: "Ludonarrative"
    definition: "The combined meaning produced by a game's mechanics (ludus) and its story (narrative) interacting with one another."
  - term: "Ludonarrative dissonance"
    definition: "A conflict in which what the mechanics reward contradicts what the story asserts, weakening or complicating the work's meaning."
  - term: "Player agency"
    definition: "The player's capacity to take meaningful actions and observe their consequences, making the player a participant rather than only an audience."
  - term: "Embedded narrative"
    definition: "Story content authored in advance and fixed by the designer, such as cutscenes, scripted sequences, and environmental storytelling."
  - term: "Emergent narrative"
    definition: "Story that arises at runtime from interacting systems and player choices rather than from pre-written content."
  - term: "Cutscene"
    definition: "A non-interactive authored sequence that advances the plot by temporarily removing player control."
  - term: "Narrative delivery"
    definition: "The chosen method for conveying story to the player, such as cutscenes, in-engine sequences, dialogue, environmental detail, or systemic play."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "A player discovers a family's history by reading notes in any order they choose. Which distinction best describes what the player controls?"
    options:
      - "A) The story, because the events themselves change."
      - "B) The plot, because the order of revelation changes."
      - "C) Neither; both story and plot are fixed by the developer."
      - "D) The theme, because interpretation overrides events."
    answer: "B"
    explanation: "The underlying events (story) stay the same, but the player controls the sequence in which they encounter them, which is plot."
  - id: 2
    type: "multiple-choice"
    question: "Which example best illustrates ludonarrative dissonance?"
    options:
      - "A) A game's music swells during a dramatic boss fight."
      - "B) A game whose story condemns violence while its mechanics reward killing everything."
      - "C) A game with no cutscenes that tells its story through environment."
      - "D) A game whose sequel continues the previous plot."
    answer: "B"
    explanation: "Ludonarrative dissonance is a contradiction between what the mechanics reward and what the narrative asserts."
  - id: 3
    type: "multiple-choice"
    question: "What is the primary trade-off when a designer relies heavily on emergent narrative?"
    options:
      - "A) It costs far more to author than cutscenes."
      - "B) It guarantees a polished, legible story every session."
      - "C) It produces personal, unscripted stories but no guarantee of quality or coherence."
      - "D) It removes the need for any worldbuilding."
    answer: "C"
    explanation: "Emergent narrative generates unique player stories from systems, but the designer cannot guarantee that any given run is dramatic or legible."
  - id: 4
    type: "multiple-choice"
    question: "A cutscene hands the designer total control of pacing and performance. What is the main cost?"
    options:
      - "A) It is always cheaper than systemic delivery."
      - "B) It removes player agency and interrupts the play rhythm."
      - "C) It cannot convey dialogue."
      - "D) It prevents any later player choice."
    answer: "B"
    explanation: "Cutscenes are efficient and controlled, but they suspend the player's ability to act, which is the medium's distinctive narrative power."
  - id: 5
    type: "multiple-choice"
    question: "An 'in-engine walk-and-talk' sequence in which the player keeps moving while dialogue plays is best understood as which kind of design move?"
    options:
      - "A) A rejection of all authored narrative."
      - "B) A delivery method that preserves some agency while still authoring the beat."
      - "C) A form of emergent narrative."
      - "D) A procedural generation technique."
    answer: "B"
    explanation: "Walk-and-talk sequences remain authored and embedded, but they keep the player in control of movement, softening the agency cost of the beat."
  - id: 6
    type: "multiple-choice"
    question: "Which statement about story and plot is correct?"
    options:
      - "A) Story is the order of revelation; plot is the chronological events."
      - "B) Story and plot are synonyms in narrative design."
      - "C) Story is the full chronological event set; plot is how those events are arranged for the player."
      - "D) Plot includes only events the player never sees."
    answer: "C"
    explanation: "Story is the complete chronological set of events; plot is the arrangement and order in which the audience encounters them."
  - id: 7
    type: "short-answer"
    question: "Define ludonarrative in your own words and explain why it is a useful lens for a designer."
    options: []
    answer: "Ludonarrative is the meaning created by the interaction of a game's mechanics and its story. It is useful because it forces the designer to ask whether the rules and the fiction agree with each other rather than treating them as separate departments."
    explanation: "A strong answer names both mechanics and story as co-authors of meaning and treats their alignment as a design question."
  - id: 8
    type: "short-answer"
    question: "Explain the difference between embedded and emergent narrative, and give one design cost of each."
    options: []
    answer: "Embedded narrative is authored and fixed, costing large amounts of content work and offering no personalization; emergent narrative arises from systems, costing designer control and guaranteeing neither coherence nor dramatic quality."
    explanation: "The answer should pair each mode with its characteristic cost: authoring expense for embedded, loss of control and legibility for emergent."
  - id: 9
    type: "applied"
    question: "You are designing a linear action game. The story claims the hero avoids harming innocents, but combat rewards maximum casualties with a score multiplier. Players report the story feels false. What is the problem and one fix?"
    options: []
    answer: "This is ludonarrative dissonance: the mechanics reward behavior the narrative condemns, so the fiction loses credibility. A fix is to make the score or resources reward restraint (nonlethal takedowns, avoiding civilian casualties) so the rules argue the same thing the story does."
    explanation: "The scenario requires recognizing a mechanics/narrative contradiction and proposing an alignment fix rather than changing only the dialogue."
  - id: 10
    type: "applied"
    question: "A story-driven game gives the player a crucial emotional beat only through a long cutscene right after a demanding boss fight. Players skip it or feel restless. Diagnose the pacing issue and suggest an alternative delivery."
    options: []
    answer: "The problem is stacking an authored, control-removing exposition beat immediately after peak mechanical intensity, when players are still in an action mindset. A fix is to deliver the beat during low-intensity traversal (walk-and-talk), through environmental detail, or immediately during play while the player processes the fight."
    explanation: "The answer should connect narrative pacing to the player's recent mechanical state and choose a delivery method that matches their readiness to absorb story."
---

# Week 25 — Narrative Design: Story, Plot, and Player Agency

## Why This Matters

You already think in systems, state, and interfaces. Narrative is one more system — but it is the one system whose interface is the player's sense of authorship. A rule that produces a moment of brilliance in a strategy game can, in a story game, produce the feeling that the fiction just lied. This week gives you the vocabulary to see story and mechanics as two arguments being made at the same time, and to decide when they should agree, when they should clash on purpose, and who should be driving.

## Learning Objectives

- Distinguish story from plot and identify each in a game you have played.
- Explain ludonarrative and diagnose ludonarrative dissonance in a specific title.
- Compare embedded and emergent narrative, including the authoring cost of each.
- Evaluate cutscenes and other delivery methods by how much player agency they preserve.
- Analyze how a game paces narrative beats against its mechanical pacing.

## Lesson

### Story, plot, and the order of revelation

Narrative designers borrow two distinct terms from literary theory, and confusing them causes real design mistakes. **Story** is the complete chronological set of events in the fiction — everything that happened, including backstory the player never sees. **Plot** is the arrangement of those events as the audience encounters them. The novelist E. M. Forster's classic example: "The king died and then the queen died" is a story; "The king died, and then the queen died of grief" is a plot, because the second arranges events into cause and effect.

Games complicate this in one specific way: the player often controls plot order. In *Gone Home*, the *story* is a fixed family history. The *plot* is the sequence in which you, the player, open drawers and read notes. Nothing you do changes the history, but your wandering determines the order of revelation — and therefore which revelations land while you are still confused and which land after you have guessed the truth. The designer authored a story but handed part of the plot to the player.

A useful systems analogy: the story is the full set of facts in the database; the plot is a query with an ORDER BY clause. When the narrative is fully authored, the plot is effectively a directed acyclic graph — events point forward to later events with no cycles, because time and causality only move one way. When the player controls exploration, the same graph is traversed in different orders. This is why narrative designers obsess over *what the player knows at each moment*; the graph of knowledge, not the graph of events, is what the player actually experiences.

### Ludonarrative: when mechanics and story argue

**Ludonarrative** is the combined meaning produced by a game's mechanics (the *ludus*) and its story. The term exists because games make meaning through two channels at once. A film's themes live in its images, dialogue, and structure. A game's themes live in those *plus* what its rules reward and punish.

Clint Hocking coined **ludonarrative dissonance** in a 2007 essay about *BioShock*. The game's story critiques Ayn Rand's philosophy of selfish individualism, while its mechanics reward the player for harvesting the vulnerable Little Sisters — the most self-interested act available. The story says one thing; the rules say another. Players felt the contradiction even when they could not name it.

Dissonance is not automatically a flaw. *Spec Ops: The Line* is a competent cover shooter whose narrative is a sustained indictment of cover shooters and of the player who keeps pulling the trigger. The dissonance is the point; the discomfort is the thesis. The design question is never "is there dissonance?" but "is this dissonance deliberate, and does the game mean it?"

The practical lesson: audit mechanics and fiction as one artifact. Rules are testimony the player experiences directly, while dialogue is only testimony they are told. When the two conflict, the experienced one usually wins.

### Embedded vs. emergent narrative

Two modes of narrative production run along a spectrum of authorial control.

**Embedded narrative** is authored in advance and fixed by the designer: cutscenes, voiced dialogue, scripted set pieces, and environmental storytelling. It delivers polish, pacing, and guaranteed legibility — the designer decides exactly what the player learns and when. Its cost is content: every variation must be written, voiced, animated, and tested, and the player cannot surprise it.

**Emergent narrative** arises at runtime from systems. *Dwarf Fortress*, *Crusader Kings*, *RimWorld*, and *The Sims* generate stories no one wrote: the loyal vassal who betrays you because your harvest failed and his province starved. These stories feel personally meaningful precisely because they are yours. The cost is control and quality — the systems may produce a legendary saga or forty minutes of nothing, and the designer cannot promise either.

Most commercial games blend them. *The Last of Us* is overwhelmingly embedded: a linear, authored story told with cinematic precision, with combat encounters providing only local variation. *Battlefield* is overwhelmingly emergent: the "only in Battlefield" moments are player-made, and the authored content is mostly the rules and the maps. Neither is more advanced; they are different contracts with the player.

### Player agency and the delivery problem

**Player agency** is the player's capacity to take meaningful action and observe its consequences. It is the medium's unique narrative power: you are not watching a character decide, you are deciding. The tension in narrative design is that most big story beats still arrive through methods that suspend agency.

The **cutscene** is the blunt instrument: an authored, non-interactive sequence. It is efficient, controllable, and cinematic, and it asks the player to put the controller down. Every cutscene is a small contract negotiation — how long, how often, and how much is revealed. Games that overuse cutscenes train players to disengage until control returns.

**Narrative delivery** is the designer's choice among alternatives, each with a different agency cost:

- **Cinematic cutscene** — maximum authorial control, maximum agency interruption.
- **In-engine scripted sequence** — similar control, slightly less seam between cut and play.
- **Walk-and-talk** — dialogue continues while the player keeps moving (*Half-Life 2*, *God of War* 2018). The beat is still authored, but the player never stops acting.
- **Environmental storytelling** — the player reads the story from the space itself; zero interruption, high inference required.
- **Systemic delivery** — the rules themselves communicate, as when *Undertale* lets you spare or kill and remembers which you chose.

The designer's rule of thumb: the more you need to control timing and performance, the more agency you must spend, so spend it where the payoff is highest.

Agency is not binary. *Undertale* offers almost no spatial freedom yet enormous narrative agency, because it remembers who you spared and addresses you, the player, directly. *The Last of Us* deliberately restricts choice, because its story is about a man making decisions the player cannot prevent. Agency is a dial, and where you set it is a story decision in its own right.

### Narrative pacing

**Narrative pacing** is the sequencing of story intensity against mechanical intensity. The most common failure is stacking them: dropping a dense exposition scene immediately after a climactic boss fight, when the player is still in an action mindset and will skip or resent it. Good pacing alternates — high mechanical intensity, then low mechanical intensity with high narrative intensity, and back. *Journey* paces almost entirely through this rhythm without words. *Disco Elysium* front-loads dense reading but paces it against investigation and dialogue choices so the player is always doing something. The clock the player actually feels is the mechanical one; narrative is scheduled around it, not against it.

Pacing also has a global shape. Early narrative establishes a question the player wants answered; middle narrative complicates it; late narrative answers it while opening a final emotional cost. *The Last of Us* spends its opening hours establishing Joel's loss, its middle complicating his relationship with Ellie, and its final scene reframing everything as a choice he makes for himself rather than for her. Each beat is scheduled against a mechanical milestone — a new weapon, a new enemy, a new traversal ability — so that progress in play and progress in story advance together. When they drift apart, players feel either bored or unmoored, which is why keeping the two curves roughly in phase is one of the most reliable habits a narrative designer can build.

## Key Takeaways

- Story is the full chronological event set; plot is the order in which the player encounters it, and games frequently hand plot order to the player.
- Ludonarrative is the combined meaning of rules and fiction; dissonance is a conflict between them and can be a flaw or a deliberate thesis.
- Embedded narrative buys control and polish with authoring cost; emergent narrative buys personal, unscripted stories with a loss of control and guaranteed quality.
- Player agency is the medium's distinctive narrative asset, and every cutscene spends some of it.
- Narrative delivery methods differ mainly in how much control they remove; choose them by matching the beat to the player's mechanical state.
- Pace narrative intensity against mechanical intensity — do not stack the two peaks.

## Vocabulary

| Term | Definition |
|---|---|
| Narrative design | The craft of deciding how a game's story is authored, delivered, and shaped by play, including pacing, delivery method, and the player's role in it. |
| Story | The complete set of events in a fictional world in chronological order, including material the player may never see. |
| Plot | The arrangement and order in which story events are revealed to the player, which in games is often partly under player control. |
| Ludonarrative | The combined meaning produced by a game's mechanics (ludus) and its story (narrative) interacting with one another. |
| Ludonarrative dissonance | A conflict in which what the mechanics reward contradicts what the story asserts, weakening or complicating the work's meaning. |
| Player agency | The player's capacity to take meaningful actions and observe their consequences, making the player a participant rather than only an audience. |
| Embedded narrative | Story content authored in advance and fixed by the designer, such as cutscenes, scripted sequences, and environmental storytelling. |
| Emergent narrative | Story that arises at runtime from interacting systems and player choices rather than from pre-written content. |
| Cutscene | A non-interactive authored sequence that advances the plot by temporarily removing player control. |
| Narrative delivery | The chosen method for conveying story to the player, such as cutscenes, in-engine sequences, dialogue, environmental detail, or systemic play. |

## Quiz

1. **Multiple choice.** A player discovers a family's history by reading notes in any order they choose. Which distinction best describes what the player controls?
   - A) The story, because the events themselves change.
   - B) The plot, because the order of revelation changes.
   - C) Neither; both story and plot are fixed by the developer.
   - D) The theme, because interpretation overrides events.

2. **Multiple choice.** Which example best illustrates ludonarrative dissonance?
   - A) A game's music swells during a dramatic boss fight.
   - B) A game whose story condemns violence while its mechanics reward killing everything.
   - C) A game with no cutscenes that tells its story through environment.
   - D) A game whose sequel continues the previous plot.

3. **Multiple choice.** What is the primary trade-off when a designer relies heavily on emergent narrative?
   - A) It costs far more to author than cutscenes.
   - B) It guarantees a polished, legible story every session.
   - C) It produces personal, unscripted stories but no guarantee of quality or coherence.
   - D) It removes the need for any worldbuilding.

4. **Multiple choice.** A cutscene hands the designer total control of pacing and performance. What is the main cost?
   - A) It is always cheaper than systemic delivery.
   - B) It removes player agency and interrupts the play rhythm.
   - C) It cannot convey dialogue.
   - D) It prevents any later player choice.

5. **Multiple choice.** An "in-engine walk-and-talk" sequence in which the player keeps moving while dialogue plays is best understood as which kind of design move?
   - A) A rejection of all authored narrative.
   - B) A delivery method that preserves some agency while still authoring the beat.
   - C) A form of emergent narrative.
   - D) A procedural generation technique.

6. **Multiple choice.** Which statement about story and plot is correct?
   - A) Story is the order of revelation; plot is the chronological events.
   - B) Story and plot are synonyms in narrative design.
   - C) Story is the full chronological event set; plot is how those events are arranged for the player.
   - D) Plot includes only events the player never sees.

7. **Short answer.** Define ludonarrative in your own words and explain why it is a useful lens for a designer.

8. **Short answer.** Explain the difference between embedded and emergent narrative, and give one design cost of each.

9. **Applied/scenario.** You are designing a linear action game. The story claims the hero avoids harming innocents, but combat rewards maximum casualties with a score multiplier. Players report the story feels false. What is the problem and one fix?

10. **Applied/scenario.** A story-driven game gives the player a crucial emotional beat only through a long cutscene right after a demanding boss fight. Players skip it or feel restless. Diagnose the pacing issue and suggest an alternative delivery.

## Answer Key

1. **B.** The events are fixed but the order of revelation changes, which is plot; story is the underlying chronological event set.
2. **B.** Ludonarrative dissonance is precisely a mechanics-versus-fiction contradiction, as when rules reward what the story condemns.
3. **C.** Emergent systems produce unique personal stories but cannot guarantee that any particular run is dramatic or coherent.
4. **B.** The cutscene's control is bought at the price of suspending the player's ability to act, which interrupts play rhythm.
5. **B.** Walk-and-talk stays authored and embedded but keeps the player moving, so it spends less agency than a full cutscene.
6. **C.** Story is chronological totality; plot is the arrangement and order of revelation.
7. **Model answer:** Ludonarrative is the meaning created by the interaction of a game's mechanics and its story. It is useful because it asks whether the rules and the fiction agree rather than treating them as separate departments. (Credit answers that name both channels and treat their alignment as a design question.)
8. **Model answer:** Embedded narrative is authored and fixed, costing heavy content work and offering no personalization; emergent narrative arises from systems, costing designer control and guaranteeing neither coherence nor dramatic quality. (Credit both modes plus a plausible cost each.)
9. **Model answer:** This is ludonarrative dissonance — mechanics reward behavior the narrative condemns, so the fiction loses credibility. A fix is to make score or resources reward restraint, aligning the rules with the story. (Credit identifying the contradiction and proposing a mechanical fix, not only a dialogue change.)
10. **Model answer:** The problem is stacking an authored, control-removing beat immediately after peak mechanical intensity. A fix is to deliver it during low-intensity traversal, through environmental detail, or while the player is still in play. (Credit connecting pacing to the player's recent mechanical state.)

## Exercises

1. **Story/plot map.** Choose a narrative game you know. Write one paragraph describing its *story* chronologically, then a numbered list showing the *plot* order in which you actually encountered events. Mark one place where player-controlled exploration changed the plot order and describe how that changed the impact of a revelation.
2. **Dissonance audit.** Pick a game and write down three things its mechanics reward and three things its story claims. Identify any contradiction and argue whether it is accidental or deliberate. Then propose a mechanical change that would remove the contradiction and note what it would cost.
3. **Delivery redesign (hands-on).** Take a key scene from a game and re-deliver it three ways: as a cinematic cutscene, as a walk-and-talk, and as environmental storytelling. For each, list what the player learns, what control they keep, and what the designer loses. Choose the one you would ship and justify it in two sentences.

## Further Study

- *BioShock* (2K, 2007) and Clint Hocking's essay "Ludonarrative Dissonance in BioShock," for the origin of the term.
- *Gone Home* (Fullbright, 2013), a compact study in player-controlled plot order.
- *Spec Ops: The Line* (Yager, 2012), for deliberate ludonarrative dissonance as thesis.
- *Dwarf Fortress* (Bay 12 Games) or *Crusader Kings III* (Paradox), for emergent narrative generated by systems.
