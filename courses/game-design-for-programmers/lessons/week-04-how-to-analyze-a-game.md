---
week: 4
title: "How to Analyze a Game: Critical Vocabulary and Lenses"
unit: 1
unitTitle: "Foundations of Game Design"
estimatedMinutes: 90
prerequisites:
  - "Week 1 — What Game Design Is (and Isn't)"
  - "Week 2 — Games as Systems: MDA and Formal Elements"
  - "Week 3 — The Player's Experience: Fun, Flow, and Engagement"
objectives:
  - "Distinguish critique from review and explain why design analysis favors the former."
  - "Apply Schell's lens approach to analyze a game from multiple deliberate perspectives."
  - "Separate formal, dramatic, and systemic analysis and use each to explain a concrete game element."
  - "Articulate cause and effect in a design argument, moving from an observable player reaction to the rule responsible for it."
vocabulary:
  - term: "lens"
    definition: "A deliberate perspective or question through which a designer examines a game, in the manner of Jesse Schell's 'lenses'; each lens reveals what the others hide."
  - term: "genre"
    definition: "A set of shared conventions, expectations, and player skills that groups games together and shapes how players read a new one."
  - term: "critique"
    definition: "A reasoned analysis of how a game works and why, aimed at understanding rather than at a purchase recommendation."
  - term: "review"
    definition: "An evaluation aimed at advising an audience whether to spend time or money on a game; useful, but not the same activity as design critique."
  - term: "formal analysis"
    definition: "Analysis focused on rules, structures, procedures, and systems — the machine of the game independent of its fiction."
  - term: "dramatic analysis"
    definition: "Analysis focused on story, character, emotion, pacing, and the player's felt experience of the game's fictional world."
  - term: "systemic analysis"
    definition: "Analysis focused on how parts interact over time — economies, feedback loops, emergence, and long-term behavior."
  - term: "deconstruction"
    definition: "Taking a game apart into its components to understand how the whole produces its effect, often by isolating one variable."
  - term: "player-centric design"
    definition: "Design or analysis that starts from the player's perspective, goals, and experience rather than from the designer's intent or the game's content."
  - term: "design pillar"
    definition: "A short, memorable statement of a game's core intentions that guides decisions and resolves trade-offs; pillars are the criteria a critique can measure against."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What is the primary difference between a critique and a review as defined in this lesson?"
    options:
      - "A) A critique is longer than a review."
      - "B) A critique aims to explain how and why a game works; a review aims to advise an audience whether to play it."
      - "C) A review is written by professionals and a critique by players."
      - "D) A critique is positive and a review can be negative."
    answer: "B"
    explanation: "The distinction is purpose: understanding versus recommendation. Length and tone are not the defining factors."
  - id: 2
    type: "multiple-choice"
    question: "What is the value of Schell's 'lenses' approach to analysis?"
    options:
      - "A) Each lens is a single correct answer about a game."
      - "B) Each lens is a deliberate perspective that reveals something the others miss, and using several produces a fuller account."
      - "C) Lenses replace the need to play the game."
      - "D) Lenses only apply to narrative games."
    answer: "B"
    explanation: "A lens is a thinking tool, not a verdict; the point is to look from multiple deliberate angles and combine the insights."
  - id: 3
    type: "multiple-choice"
    question: "Analyzing how *Civilization*'s tech costs, production, and AI behavior create strategic tension over hundreds of turns is primarily which kind of analysis?"
    options:
      - "A) Dramatic analysis"
      - "B) Systemic analysis"
      - "C) Formal analysis of a single rule"
      - "D) Genre analysis"
    answer: "B"
    explanation: "The subject is how interacting parts behave over time — economies, loops, and long-term dynamics — which is systemic analysis."
  - id: 4
    type: "multiple-choice"
    question: "Which of these is a design pillar, as the term is used here?"
    options:
      - "A) 'The game will ship in Q4.'"
      - "B) 'Every encounter should feel like a tense conversation with a readable opponent.'"
      - "C) 'The game runs at 60 frames per second.'"
      - "D) 'The art style is cel-shaded.'"
    answer: "B"
    explanation: "A pillar is a short statement of core intent that guides decisions and resolves trade-offs. Schedule, performance targets, and art style are constraints or choices, not pillars."
  - id: 5
    type: "multiple-choice"
    question: "A critic writes that *Dark Souls*' difficulty 'makes victory feel earned, because the game never hides the fact that your death was your mistake.' This is best described as what?"
    options:
      - "A) A cause-and-effect design argument"
      - "B) A purchase recommendation"
      - "C) A formal syntax error"
      - "D) A genre definition"
    answer: "A"
    explanation: "The statement links a design property (readable, fair failure) to an experiential result (earned victory), which is the structure of a design argument."
  - id: 6
    type: "multiple-choice"
    question: "Why is genre literacy useful to a designer analyzing a game?"
    options:
      - "A) It guarantees the game will be good."
      - "B) Genres carry conventions and player expectations, so understanding them helps explain why a game's choices read as familiar, surprising, or subversive."
      - "C) It lets the designer ignore the game's actual rules."
      - "D) It replaces playtesting."
    answer: "B"
    explanation: "Genres are shared conventions and expectations; knowing them explains how players decode a game and why deviations land as they do."
  - id: 7
    type: "short-answer"
    question: "Explain, in two or three sentences, what it means to analyze a game from a player-centric perspective rather than a designer-centric one, and why that shift matters."
    options: []
    answer: "Player-centric analysis starts from what the player actually perceives, understands, and feels rather than from what the designer intended. It asks whether the player can read the state, predict outcomes, and form goals, not whether the correct rules exist in the design document. The shift matters because intent is invisible to players; a mechanic that is elegant on paper but unreadable in play is a failure regardless of the designer's reasoning."
    explanation: "Look for the intent-versus-perception distinction and the recognition that only the player's experience counts."
  - id: 8
    type: "short-answer"
    question: "Describe how you would deconstruct one mechanic of a game you know. Name the mechanic and the variable you would isolate first, and say what you would look for."
    options: []
    answer: "Example: take Hades' dash, which grants brief invulnerability. Isolate the invulnerability duration as the variable, hold everything else constant, and observe how dash timing and enemy threat change the player's risk decisions. Deconstruction means pulling one component out to see what it is actually contributing to the whole."
    explanation: "A strong answer names a specific mechanic, one isolated variable, and an observable effect to look for."
  - id: 9
    type: "applied"
    question: "A friend says, 'Portal is great because the writing is funny.' Using at least two analytical lenses, write a short critique that goes beyond this claim and explains a cause-and-effect relationship between *Portal*'s design and its effect on the player."
    options: []
    answer: "A strong answer might use formal analysis to note that Portal's puzzles teach each mechanic in isolation before combining them, so the player builds a mental model and experiences the 'aha' as their own insight rather than the game's. Dramatic analysis could note that GLaDOS's commentary reframes the same puzzle space as a test with a hostile observer, adding tension to a calm activity. Systemic analysis could note that the consistent portal rules let players form reliable predictions. The causal claim is that the humor lands partly because the player feels competent and slightly controlled — the writing and the puzzle structure reinforce each other."
    explanation: "Look for two distinct lenses and a stated cause-and-effect link between a design property and a player experience."
  - id: 10
    type: "applied"
    question: "Choose a game you consider flawed and write a three-part critique: one formal observation, one dramatic observation, and one systemic observation. Then identify which single change would most improve the player's experience, and justify it in cause-and-effect terms."
    options: []
    answer: "No single answer. Credit is given for separating the three analytical modes cleanly, grounding each observation in a specific element of the game, and justifying the improvement by tracing a proposed change through play to an expected change in experience. A bare opinion without a causal chain is not a critique."
    explanation: "The exercise tests whether the writer can move between lenses and then argue for a change with a cause-and-effect structure rather than a preference."
---

# Week 4 — How to Analyze a Game: Critical Vocabulary and Lenses

## Why This Matters

You have spent three weeks building a vocabulary. This week you learn to use it on something you did not make. Analysis is the designer's equivalent of code review and profiling: a disciplined way to look at a working system, name what it is doing, and explain why. The skill compounds. Every game you play carefully from now on becomes free education, and every design argument you make becomes testable instead of a matter of taste.

## Learning Objectives

- Distinguish critique from review and explain why design analysis favors the former.
- Apply Schell's lens approach to analyze a game from multiple deliberate perspectives.
- Separate formal, dramatic, and systemic analysis and use each to explain a concrete game element.
- Articulate cause and effect in a design argument, moving from a player reaction to the responsible rule.

## Lesson

### Critique is not review

A **review** answers a consumer question: should you spend your time and money on this? It weighs fun, length, polish, and price against an audience, and it ends with a verdict. A **critique** answers a design question: how does this game work, and why does it produce the effect it does? It may reach a negative conclusion, but its purpose is understanding, not recommendation.

The distinction matters because reviews optimize for the reader's decision and critiques optimize for the reader's model of games. A review can say "the difficulty is punishing and I bounced off it" and be entirely correct. A critique has to go further: which rules produce that punishment, at what point does it stop teaching, and would a different tuning preserve the challenge while restoring the learning? Only the second kind of writing makes you a better designer.

The strongest critiques share a structure borrowed from debugging: an observation, a proposed cause, and a test that would confirm or falsify it. "Players quit at the third boss" is an observation. "The boss has a move with no telegraph" is a proposed cause. "Restore the tell and watch whether completion rates rise" is a test. If your analysis cannot be wrong, it is not analysis.

### Schell's lenses

Jesse Schell's *The Art of Game Design* proposes that designers examine a game through many **lenses**: the Lens of the Player, the Lens of Essential Experience, the Lens of the Puzzle, the Lens of Unification, and dozens more. Each lens is a question — "what does the player want right now?" "does this feel like one coherent thing?" — and each reveals something the others hide.

The metaphor is exact: a lens is not a verdict, it is a way of looking. Designers get attached to a single perspective — usually the systemic one, if they come from engineering — and then miss everything that perspective cannot see. The lenses force you to rotate the object. A combat system viewed through the Lens of the Player ("can I read this threat?") looks very different from the same system viewed through the Lens of Unification ("does this belong in this game?").

A practical method: pick three lenses that pull in different directions, write one paragraph from each, and then look for where they disagree. Disagreement is where the interesting design tension lives.

### Formal, dramatic, and systemic analysis

Three modes of analysis cover most of the territory.

**Formal analysis** looks at rules, structures, procedures, and systems, deliberately setting aside fiction. *Tetris* formally is a grid, seven piece types, a rotation rule, a gravity timer, and a line-clear condition. Formal analysis is where you find balance problems, dominant strategies, and feedback loops.

**Dramatic analysis** looks at story, character, emotion, pacing, and the felt texture of the fiction. It asks what the player is supposed to feel and how the game's dramatic elements deliver it. *The Last of Us* is rich ground here: the relationship between Joel and Ellie is carried through mechanics (escort, protection, scarcity) as much as through dialogue.

**Systemic analysis** looks at how parts interact over time — economies, emergence, long-term dynamics, and the behavior of the whole. *Civilization*'s tension across hundreds of turns, the way a strong economy compounds into technological dominance, is a systemic subject. So is the way *Hades*' meta-progression turns repeated failure into forward motion.

The modes overlap, and the best analysis moves between them. A weapon in *Doom* can be analyzed formally (damage, ammo, fire rate), dramatically (the fantasy of unstoppable force), and systemically (how ammo scarcity shapes the player's route through a level). Each mode answers a different question; together they approach a whole account.

A quick test for which mode you are in: if the sentence contains no reference to the fiction, it is probably formal; if it explains a felt emotion or a story beat, it is dramatic; if it describes behavior that changes over many sessions, it is systemic. Many arguments that go in circles are two people using different modes without realizing it. Naming the mode aloud — "formally, the issue is X; dramatically, Y" — resolves more design disagreements than re-arguing the conclusion ever does.

### Genre literacy

A **genre** is a set of shared conventions, expectations, and player skills. Genres are not laws, but they are load-bearing: a player entering a first-person shooter already knows that the left trigger aims, that cover matters, and that health regenerates behind a corner. Designers rely on that literacy constantly, and analysis that ignores it will misread a game.

Genre literacy does two things for a critic. It lets you explain why a choice reads the way it does — the same mechanic is conservative in one genre and radical in another — and it lets you see subversion. *Undertale*'s turn-based combat is legible precisely because players know the genre it is borrowing from; the game's twists only land against that expectation. The mistake is treating genre as a quality label. "It's just another roguelike" is a category, not a critique.

### Player-centric analysis

The hardest discipline in analysis is staying **player-centric**: reasoning from what the player perceives, understands, and feels, rather than from what the designer intended. Intent is invisible. A rule can be elegant, balanced, and thoroughly documented and still be unreadable in the moment — in which case, from the player's perspective, it does not exist.

The question to ask repeatedly is: *what information does the player have, and what can they do with it?* If a boss's attack is telegraphed by a subtle sound a player cannot hear, the designer's careful timing is irrelevant. If a resource is crucial but buried in a menu, players will ignore it and the economy will behave as though it were never there. Player-centric analysis is the antidote to designing for the design document instead of for the person holding the controller.

A useful habit is to write the player's knowledge state at each moment as if it were a debug overlay: what can they see, what do they know, what have they been told, and what will they predict? Most "unfair" complaints resolve into a gap in that overlay — information the designer had in abundance and the player never received.

### Deconstruction and cause and effect

**Deconstruction** means taking a game apart to understand how the whole produces its effect. The most useful form isolates one variable. If you want to know what coyote time contributes to *Super Mario Bros.*, remove it mentally and imagine the same level: the forgiving feel collapses into precision punishment. That thought experiment is a deconstruction, and it produces a testable claim.

This is where analysis matures into **cause-and-effect argument**. Vague reactions — "it feels good," "it's too hard," "the pacing drags" — are starting points, not conclusions. The critique's job is to trace a line from an observable effect back to the rule that causes it: *the pacing drags because the mid-game introduces three resource types without teaching any of them, and players stop making decisions.* Now the claim is specific, the responsible mechanism is named, and a change can be proposed and tested.

If you have ever debugged a subtle bug, you already have the muscles: gather the symptom, form a hypothesis about the mechanism, isolate the variable, and verify. Game analysis is the same loop with a human being in the loop instead of a process. The vocabulary from the last three weeks is your debugger.

## Key Takeaways

- Critique seeks understanding; review seeks a recommendation. Designers need the former.
- Schell's lenses are deliberate perspectives, not verdicts; rotating the object reveals what one view hides.
- Formal, dramatic, and systemic analysis answer different questions and are strongest when combined.
- Genre literacy explains why choices read as familiar or subversive, but genre is not a quality judgment.
- Player-centric analysis reasons from what the player perceives, not from what the designer intended.
- Deconstruction isolates a variable; a real critique traces an observable effect back to the rule that causes it and proposes a test.

## Vocabulary

| Term | Definition |
|---|---|
| lens | A deliberate perspective or question through which a designer examines a game, in the manner of Jesse Schell's "lenses"; each lens reveals what the others hide. |
| genre | A set of shared conventions, expectations, and player skills that groups games together and shapes how players read a new one. |
| critique | A reasoned analysis of how a game works and why, aimed at understanding rather than at a purchase recommendation. |
| review | An evaluation aimed at advising an audience whether to spend time or money on a game; useful, but not the same activity as design critique. |
| formal analysis | Analysis focused on rules, structures, procedures, and systems — the machine of the game independent of its fiction. |
| dramatic analysis | Analysis focused on story, character, emotion, pacing, and the player's felt experience of the game's fictional world. |
| systemic analysis | Analysis focused on how parts interact over time — economies, feedback loops, emergence, and long-term behavior. |
| deconstruction | Taking a game apart into its components to understand how the whole produces its effect, often by isolating one variable. |
| player-centric design | Design or analysis that starts from the player's perspective, goals, and experience rather than from the designer's intent or the game's content. |
| design pillar | A short, memorable statement of a game's core intentions that guides decisions and resolves trade-offs; pillars are the criteria a critique can measure against. |

## Quiz

**1. (Multiple choice)** What is the primary difference between a critique and a review as defined in this lesson?

A) A critique is longer than a review.
B) A critique aims to explain how and why a game works; a review aims to advise an audience whether to play it.
C) A review is written by professionals and a critique by players.
D) A critique is positive and a review can be negative.

**2. (Multiple choice)** What is the value of Schell's "lenses" approach to analysis?

A) Each lens is a single correct answer about a game.
B) Each lens is a deliberate perspective that reveals something the others miss, and using several produces a fuller account.
C) Lenses replace the need to play the game.
D) Lenses only apply to narrative games.

**3. (Multiple choice)** Analyzing how *Civilization*'s tech costs, production, and AI behavior create strategic tension over hundreds of turns is primarily which kind of analysis?

A) Dramatic analysis
B) Systemic analysis
C) Formal analysis of a single rule
D) Genre analysis

**4. (Multiple choice)** Which of these is a design pillar, as the term is used here?

A) "The game will ship in Q4."
B) "Every encounter should feel like a tense conversation with a readable opponent."
C) "The game runs at 60 frames per second."
D) "The art style is cel-shaded."

**5. (Multiple choice)** A critic writes that *Dark Souls*' difficulty "makes victory feel earned, because the game never hides that your death was your mistake." This is best described as what?

A) A cause-and-effect design argument
B) A purchase recommendation
C) A formal syntax error
D) A genre definition

**6. (Multiple choice)** Why is genre literacy useful to a designer analyzing a game?

A) It guarantees the game will be good.
B) Genres carry conventions and player expectations, so understanding them helps explain why a game's choices read as familiar, surprising, or subversive.
C) It lets the designer ignore the game's actual rules.
D) It replaces playtesting.

**7. (Short answer)** Explain, in two or three sentences, what it means to analyze a game from a player-centric perspective rather than a designer-centric one, and why that shift matters.

**8. (Short answer)** Describe how you would deconstruct one mechanic of a game you know. Name the mechanic and the variable you would isolate first, and say what you would look for.

**9. (Applied)** A friend says, "Portal is great because the writing is funny." Using at least two analytical lenses, write a short critique that goes beyond this claim and explains a cause-and-effect relationship between *Portal*'s design and its effect on the player.

**10. (Applied)** Choose a game you consider flawed and write a three-part critique: one formal observation, one dramatic observation, and one systemic observation. Then identify which single change would most improve the player's experience, and justify it in cause-and-effect terms.

## Answer Key

**1. B** — The distinction is purpose: understanding versus recommendation. Length and tone are not the defining factors.

**2. B** — A lens is a thinking tool, not a verdict; the point is to look from multiple deliberate angles and combine the insights.

**3. B** — The subject is how interacting parts behave over time — economies, loops, long-term dynamics — which is systemic analysis.

**4. B** — A pillar is a short statement of core intent that guides decisions and resolves trade-offs. Schedule, performance targets, and art style are constraints or choices, not pillars.

**5. A** — The statement links a design property (readable, fair failure) to an experiential result (earned victory), which is the structure of a design argument.

**6. B** — Genres are shared conventions and expectations; knowing them explains how players decode a game and why deviations land as they do.

**7.** Player-centric analysis starts from what the player actually perceives, understands, and feels rather than from designer intent. Intent is invisible to players, so a mechanic that is elegant on paper but unreadable in play is still a failure.

**8.** Example: take Hades' dash with its brief invulnerability; isolate the invulnerability duration as the variable, hold everything else constant, and observe how dash timing and enemy threat change the player's risk decisions. Deconstruction pulls one component out to see what it contributes.

**9.** A strong answer uses two distinct lenses — for example, formal analysis (each mechanic is taught in isolation before being combined, so the "aha" feels like the player's own insight) and dramatic analysis (GLaDOS reframes a calm puzzle space as a hostile test) — and states a causal link: the humor lands partly because the player feels competent and slightly controlled, so writing and puzzle structure reinforce each other.

**10.** No single answer. Credit requires separating the three analytical modes cleanly, grounding each in a specific game element, and justifying the improvement by tracing a proposed change through play to an expected change in experience. A bare opinion without a causal chain is not a critique.

## Exercises

1. **Lens rotation.** Pick a game and analyze one feature through three lenses from Schell's list — for example, the Lens of Essential Experience, the Lens of the Player, and the Lens of Unification. Write one paragraph per lens. Finish by naming the point where the lenses disagree and what that disagreement reveals.

2. **Cause-and-effect chain.** Choose a moment in a game that frustrates you. Write the observable effect, then a chain of at least three "because" links that ends at a specific rule or number. Finally, propose one change and predict its effect. (If you cannot name a rule at the end, your chain has not reached the mechanism.)

3. **Three-mode critique.** Write a 400–600 word critique of a short, well-known game (for example, *Tetris* or *Portal*) with one paragraph each of formal, dramatic, and systemic analysis. Close with a one-sentence design pillar you infer from the game, and state whether the game honors it.

## Further Study

- Jesse Schell, *The Art of Game Design: A Book of Lenses* — the source of the lens method; the hundred-plus lenses are usable as a checklist for critique.
- Ian Bogost, *How to Do Things with Videogames* — short essays that model careful, argument-driven analysis of specific games.
- *The Legend of Zelda: Breath of the Wild* and *Tetris* — deliberately opposite extremes (open systemic world versus pure formal abstraction); analyze each with the three modes and compare what each mode can and cannot explain.
- GDC Vault talks on game critique and postmortems — practitioner accounts of the same cause-and-effect reasoning applied to shipped games.
