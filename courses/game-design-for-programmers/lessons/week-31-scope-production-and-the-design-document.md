---
week: 31
title: "Scope, Production, and the Design Document"
unit: 8
unitTitle: "Production, Ethics & Players"
estimatedMinutes: 90
prerequisites:
  - "Weeks 29–30"
objectives:
  - "Define a project's scope and defend it as a design decision."
  - "Write design pillars that function as tie-breakers for production choices."
  - "Draft a living game design document and explain how it differs from a frozen specification."
  - "Map a production pipeline and place milestones, feature complete, and content complete on it."
  - "Build a prioritized cut list and apply risk management to the highest-uncertainty work."
vocabulary:
  - term: "Scope"
    definition: "The total amount of work a project commits to — features, content, polish, and platforms — which must fit inside fixed time and budget."
  - term: "Feature creep"
    definition: "The gradual, unplanned growth of a project's feature set, each addition appearing reasonable on its own while collectively exceeding the budget."
  - term: "Game design document (GDD)"
    definition: "The written communication of the game's vision, rules, and pillars; a living document that evolves, not a frozen contract."
  - term: "Design pillar"
    definition: "A short, memorable statement of what the game is fundamentally about, used as a tie-breaker when two good options conflict."
  - term: "Milestone"
    definition: "A scheduled checkpoint that marks a specific state of the project, such as prototype, feature complete, or content complete, used to judge progress and risk."
  - term: "Vertical slice"
    definition: "A small section of the game built to final quality across every discipline, used to prove the team can hit the target and to define the standard for the rest."
  - term: "Cut list"
    definition: "A prioritized list of features and content that can be removed, written in advance so that cuts are made deliberately rather than in a panic."
  - term: "Risk management"
    definition: "Identifying what could sink the project, assessing likelihood and impact, and attacking the highest-uncertainty work earliest and cheapest."
  - term: "Production pipeline"
    definition: "The ordered stages a project moves through — concept, pre-production, production, post-production, launch, and live operation — and the tools that move assets along it."
  - term: "Minimum viable product"
    definition: "The smallest version of the game that delivers real value to players and can ship; the floor of scope, not the ceiling."
quiz:
  - id: 1
    type: "multiple-choice"
    question: "What does it mean to say that scope is a design decision?"
    options:
      - "A) Only producers decide what features exist, and designers must accept it"
      - "B) Choosing what to build and what to omit is itself a creative choice that shapes the game"
      - "C) Scope is set by the engine and cannot be changed"
      - "D) Larger scope always produces a better game"
    answer: "B"
    explanation: "What you include and exclude determines the experience. Scope is not mere logistics; it is an expression of priorities, and more scope frequently makes a game worse by diluting focus."
  - id: 2
    type: "multiple-choice"
    question: "Feature creep is best described as…"
    options:
      - "A) a single large feature that developers underestimate"
      - "B) the gradual, unplanned growth of features, each reasonable alone but collectively over budget"
      - "C) a bug that spreads between systems"
      - "D) the planned expansion of a game after launch"
    answer: "B"
    explanation: "Creep is incremental and often individually justified; the damage comes from accumulation. Planned post-launch content is not creep."
  - id: 3
    type: "multiple-choice"
    question: "What is the primary practical function of design pillars?"
    options:
      - "A) To describe the control scheme in detail"
      - "B) To act as tie-breakers when two good options conflict"
      - "C) To estimate the schedule in person-weeks"
      - "D) To satisfy legal requirements before release"
    answer: "B"
    explanation: "Pillars encode what the game is fundamentally about, so a team can decide between competing ideas without relitigating the vision."
  - id: 4
    type: "multiple-choice"
    question: "A game design document is best understood as…"
    options:
      - "A) a frozen contract that must never change after approval"
      - "B) a living communication tool that evolves as the team learns"
      - "C) a marketing brochure aimed at players"
      - "D) a replacement for prototyping"
    answer: "B"
    explanation: "A GDD aligns the team and records decisions, but design is discovered through iteration, so the document must be revised rather than enforced against new evidence."
  - id: 5
    type: "multiple-choice"
    question: "At which milestone is the game said to be 'feature complete'?"
    options:
      - "A) When every piece of content, such as every level and asset, exists"
      - "B) When all planned systems and features are implemented, even if content and polish remain"
      - "C) When the game has shipped and is being patched"
      - "D) When the first playable prototype is demonstrated"
    answer: "B"
    explanation: "Feature complete means the mechanics and systems exist. Content complete means all levels, assets, and text are in. The first is followed by the second, then by polish and bug fixing."
  - id: 6
    type: "multiple-choice"
    question: "The main purpose of writing a cut list in advance is to…"
    options:
      - "A) guarantee that nothing will be cut"
      - "B) make cuts deliberately, in priority order, instead of in a late panic"
      - "C) list the bugs that will not be fixed"
      - "D) document features that were already cancelled"
    answer: "B"
    explanation: "A pre-written, prioritized list lets a team remove the least essential work first when reality intrudes, preserving the pillars and the core experience."
  - id: 7
    type: "short-answer"
    question: "Define 'design pillar' and give one example, real or invented, of how a pillar resolves a conflict."
    answer: "A design pillar is a short, memorable statement of what the game is fundamentally about, used as a tie-breaker. Example: a pillar of 'the camera never cuts' would resolve a conflict between a dramatic cutscene and a continuous in-world sequence in favor of the continuous sequence."
    explanation: "A pillar earns its keep only when it makes a decision that would otherwise stall, which is why vague aspirations make poor pillars."
  - id: 8
    type: "short-answer"
    question: "What does 'kill your darlings' mean in production, and why is it necessary?"
    answer: "It means cutting features or content you personally love when they do not serve the pillars, the schedule, or the core experience. It is necessary because sunk cost and authorial pride push teams to keep expensive work that makes the game worse or later."
    explanation: "A feature can be well made and still not belong. Judgment about fit, not effort spent, should decide what stays."
  - id: 9
    type: "applied"
    question: "A four-person team keeps adding features, and its vertical-slice milestone has slipped twice. Describe a concrete process for regaining control."
    answer: "Freeze the feature set, re-derive the pillars, and build an explicit cut list ranked by how much each feature serves those pillars. Then attack the highest-risk remaining assumption with the cheapest prototype, reduce scope to what fits the schedule, and re-baseline milestones. Every new feature request must trade against the cut list rather than being added on top."
    explanation: "Scope is a fixed budget being spent; regaining control means making omissions explicit and reversible, not merely working harder."
  - id: 10
    type: "applied"
    question: "Write one design pillar for a small game of your choosing, then describe a production decision it would resolve and a feature it would justify cutting."
    answer: "Example pillar: 'Every encounter is solvable by observation, never by luck.' It resolves a decision about whether to add random critical hits (cut them, because they undercut observation) and justifies cutting a flashy damage-number system that rewards grinding over reading enemy tells."
    explanation: "A useful pillar must point both ways: it should endorse some decisions and veto others, otherwise it is decoration."
---

# Week 31 — Scope, Production, and the Design Document

## Why This Matters

Software engineers already live inside the iron triangle: scope, time, and quality, with cost usually driving whichever of the three gives first. Game production is the same problem with worse information, because the design is discovered while you build it. The engineering instinct is to write a specification, freeze it, and execute — and that instinct will sink a game. The design cannot be fully known in advance, so the professional move is the opposite: keep the document alive, make scope an explicit design choice, attack the riskiest assumptions first, and decide in advance what you will cut. This is the week your production habits stop being merely useful and start being decisive.

## Learning Objectives

- Define a project's scope and defend it as a design decision.
- Write design pillars that function as tie-breakers for production choices.
- Draft a living game design document and explain how it differs from a frozen specification.
- Map a production pipeline and place milestones, feature complete, and content complete on it.
- Build a prioritized cut list and apply risk management to the highest-uncertainty work.

## Lesson

### Scope is a design decision

**Scope** is the total amount of work a project commits to: features, content, polish, platforms, and everything else. Teams often treat scope as a logistics number handed down by a producer, but it is really a creative instrument. The games you know and admire are defined as much by what they excluded as by what they contain. A tight, replayable roguelike excludes the sprawling story campaign another team might have attempted, and that exclusion is why its systems get the attention they do.

**Feature creep** is the enemy of scope, and it is dangerous precisely because it arrives wearing a reasonable face. Each addition, considered alone, is small and justified: one more enemy type, one more crafting tier, one more camera behavior. Collectively they exceed the budget, and the game ships late, unfinished, or not at all. *Duke Nukem Forever* became an industry cautionary tale by spending well over a decade in development, repeatedly rebuilt as ambition outran the team's ability to finish. The lesson is not that ambition is bad; it is that ambition without scope discipline is how projects die.

### Design pillars

**Design pillars** are three to five short statements of what the game is fundamentally about. Their practical purpose is to act as tie-breakers. When two good options conflict — and they always do — the pillar decides without re-litigating the whole vision.

The 2018 *God of War* is a well-known example: a central pillar was that the camera would never cut, presenting the entire journey as one continuous shot. That single pillar rippled through level design, combat readability, and narrative staging, and it gave the team a rule for resolving a hundred smaller conflicts. Weak pillars sound like aspirations ("immersive," "epic") and decide nothing. Strong pillars are specific enough to veto work.

### The game design document

The **game design document (GDD)** is the written communication of the vision, rules, and pillars. Its size varies from a one-page pitch to a wiki of hundreds of pages, but its function is constant: align a team and record decisions so people do not relitigate them.

The classic mistake is treating the GDD as a frozen specification in the waterfall sense. Game design is discovered through play, so a document that refuses to change becomes fiction. The healthy version is a living document with clear ownership, a changelog, and enough structure that no section silently contradicts another. Write down the decision *and its rationale*, so that when the evidence changes you know what a revision invalidates. The lightweight one-page version — pillars, core loop, target aesthetic, references — is often more useful than a sprawling tome, because a team can actually read and remember it.

### The document is not the game

A document cannot tell you whether the loop is fun, and no amount of specification substitutes for a playable artifact. This is why the strongest teams write just enough to align everyone, then prototype, then rewrite. The GDD's job is coordination, not prediction, and its value is highest exactly when the team is large, distributed, or working with external partners. On a two-person team, a wall of text can often be replaced by a shared prototype and a paragraph of pillars. Match the documentation to the coordination problem, not to a template.

### The production pipeline and milestones

A **production pipeline** is the ordered set of stages a project moves through, plus the tools that carry work along it:

1. **Concept** — the pitch and the pillars.
2. **Pre-production** — prototyping, technical groundwork, and defining the target.
3. **Production** — building the actual content at scale.
4. **Post-production** — polish, balance, bug fixing, and certification.
5. **Launch and live operation** — release, patches, and ongoing content.

**Milestones** are checkpoints that mark a specific state, and they exist to expose risk early rather than to punish teams. The most useful pair to understand is the difference between feature complete and content complete. At **feature complete**, every system exists — combat, save, progression, menus — though content may be thin and bugs abundant. At **content complete**, every level, asset, line of dialogue, and audio cue is in the build. Polish and bug fixing come after both. Teams that confuse the two routinely discover that a "nearly finished" game is missing entire systems with no time left to build them.

Think of it as a build pipeline: pre-production is the proof of concept, feature complete is a successful integration build, content complete is all artifacts present, and post-production is hardening before release.

### The vertical slice as production proof

A **vertical slice** is a small section of the game built to final quality across every discipline. It is not a prototype — it is the opposite of disposable. Its job is to prove the team can hit the target and to show everyone what "done" looks like. Publishers frequently require one before funding a full production, because a slice exposes the real cost per minute of finished game far better than a document can. If your slice took six weeks for five minutes, you now know what the full game implies, and you can make a scope decision with your eyes open.

### The cut list and killing your darlings

A **cut list** is a prioritized list of features and content that can be removed, written in advance. The list should be ordered by how little each item serves the pillars, so that when time runs short — and it will — the first things to go are the things the game is least about. Deciding this on a calm afternoon is far better than deciding it in a panic at month thirty.

This is where "kill your darlings" becomes concrete. Feature cut from *Half-Life 2*, such as the Hydra enemy and several weapons, were well along before being removed because they did not serve the game. *No Man's Sky* is a different kind of case: it launched with an enormous, procedurally generated scope but without the depth players expected, and the studio spent years of live updates earning trust back. Some of that gap was scope promised faster than it could be built. A cut list is the mechanism that makes such a gap visible before launch.

Loving your work is not the problem. Letting love override judgment about fit is.

### Risk management

**Risk management** means identifying what could sink the project, assessing likelihood and impact, and attacking the highest-uncertainty work earliest and cheapest. A simple risk register — a table of risk, likelihood, impact, mitigation, owner — is enough. The governing principle is the same as prototyping: unknown unknowns on the critical path should be dragged into the light while there is still time to react.

*Cyberpunk 2077*'s troubled launch and *BioShock Infinite*'s heavily revised development, both documented in *Blood, Sweat, and Pixels*, illustrate how late-identified problems compound. The common thread is not failure of talent; it is uncertainty discovered too late to absorb.

### Production is a sequence of risk reduction

Reframe the whole pipeline: pre-production is where you buy information, production is where you spend it, and post-production is where you protect the investment. Every milestone should reduce uncertainty about something that could kill the project. If a milestone reduces no uncertainty — a pretty demo that hides the hard parts — it is theater, and it costs real weeks.

### The programmer's advantage and the small-team reality

Your advantage in production is leverage. You can automate asset validation, build the telemetry pipeline from Week 30, script the content tools that save artists hours per day, and run the automated tests that catch regressions across a long project. That leverage is real and often decisive on small teams.

But tooling is not vision. Automating the production of the wrong feature just produces the wrong feature faster. On small teams the ordering matters even more: pillars first, cheapest risky prototype second, production last, and the cut list maintained continuously. **Minimum viable product** thinking belongs here too — not as a buzzword, but as the discipline of asking what the smallest game that delivers the core value actually is, then treating everything beyond it as optional until proven otherwise.

## Key Takeaways

- Scope is a creative decision; what you exclude shapes the game as much as what you include.
- Feature creep is incremental and individually reasonable, which is exactly why it must be managed with explicit priorities.
- Design pillars are tie-breakers; if a pillar never vetoes anything, it is decoration.
- A GDD is a living communication tool, not a frozen contract, and the one-page version often outperforms the tome.
- Milestones exist to expose risk: feature complete and content complete are different states, and knowing which you are in prevents nasty surprises.
- A pre-written cut list turns a late panic into a planned decision, and "kill your darlings" is the discipline of cutting work that does not serve the pillars.

## Vocabulary

| Term | Definition |
|---|---|
| Scope | The total amount of work a project commits to — features, content, polish, and platforms — which must fit inside fixed time and budget. |
| Feature creep | The gradual, unplanned growth of a project's feature set, each addition appearing reasonable on its own while collectively exceeding the budget. |
| Game design document (GDD) | The written communication of the game's vision, rules, and pillars; a living document that evolves, not a frozen contract. |
| Design pillar | A short, memorable statement of what the game is fundamentally about, used as a tie-breaker when two good options conflict. |
| Milestone | A scheduled checkpoint that marks a specific state of the project, such as prototype, feature complete, or content complete, used to judge progress and risk. |
| Vertical slice | A small section of the game built to final quality across every discipline, used to prove the team can hit the target and to define the standard for the rest. |
| Cut list | A prioritized list of features and content that can be removed, written in advance so that cuts are made deliberately rather than in a panic. |
| Risk management | Identifying what could sink the project, assessing likelihood and impact, and attacking the highest-uncertainty work earliest and cheapest. |
| Production pipeline | The ordered stages a project moves through — concept, pre-production, production, post-production, launch, and live operation — and the tools that move assets along it. |
| Minimum viable product | The smallest version of the game that delivers real value to players and can ship; the floor of scope, not the ceiling. |

## Quiz

**1. What does it mean to say that scope is a design decision?**
A) Only producers decide what features exist, and designers must accept it
B) Choosing what to build and what to omit is itself a creative choice that shapes the game
C) Scope is set by the engine and cannot be changed
D) Larger scope always produces a better game

**2. Feature creep is best described as…**
A) a single large feature that developers underestimate
B) the gradual, unplanned growth of features, each reasonable alone but collectively over budget
C) a bug that spreads between systems
D) the planned expansion of a game after launch

**3. What is the primary practical function of design pillars?**
A) To describe the control scheme in detail
B) To act as tie-breakers when two good options conflict
C) To estimate the schedule in person-weeks
D) To satisfy legal requirements before release

**4. A game design document is best understood as…**
A) a frozen contract that must never change after approval
B) a living communication tool that evolves as the team learns
C) a marketing brochure aimed at players
D) a replacement for prototyping

**5. At which milestone is the game said to be "feature complete"?**
A) When every piece of content, such as every level and asset, exists
B) When all planned systems and features are implemented, even if content and polish remain
C) When the game has shipped and is being patched
D) When the first playable prototype is demonstrated

**6. The main purpose of writing a cut list in advance is to…**
A) guarantee that nothing will be cut
B) make cuts deliberately, in priority order, instead of in a late panic
C) list the bugs that will not be fixed
D) document features that were already cancelled

**7. (Short answer) Define "design pillar" and give one example, real or invented, of how a pillar resolves a conflict.**

**8. (Short answer) What does "kill your darlings" mean in production, and why is it necessary?**

**9. (Applied) A four-person team keeps adding features, and its vertical-slice milestone has slipped twice. Describe a concrete process for regaining control.**

**10. (Applied) Write one design pillar for a small game of your choosing, then describe a production decision it would resolve and a feature it would justify cutting.**

## Answer Key

1. **B.** What you include and exclude determines the experience. Scope expresses priorities, and more scope often dilutes focus rather than improving the game.

2. **B.** Creep is incremental and individually justified; the damage comes from accumulation. Planned post-launch content is not creep.

3. **B.** Pillars encode what the game is fundamentally about so a team can decide between competing ideas without relitigating the vision.

4. **B.** A GDD aligns the team and records decisions, but design is discovered through iteration, so it must be revised rather than enforced against new evidence.

5. **B.** Feature complete means the systems exist; content complete means all assets and levels are in. Polish and bug fixing follow both.

6. **B.** A pre-written, prioritized list lets a team remove the least essential work first, preserving the pillars and the core experience.

7. **A design pillar is a short, memorable statement of what the game is fundamentally about, used as a tie-breaker.** Example: a pillar of "the camera never cuts" resolves a conflict between a dramatic cutscene and a continuous in-world sequence in favor of the continuous sequence.

8. **It means cutting features or content you personally love when they do not serve the pillars, the schedule, or the core experience.** It is necessary because sunk cost and authorial pride push teams to keep expensive work that makes the game worse or later.

9. **Freeze the feature set, re-derive the pillars, and build a cut list ranked by how much each feature serves them.** Then attack the highest-risk assumption with the cheapest prototype, reduce scope to fit the schedule, and re-baseline milestones; every new request must trade against the cut list.

10. **Example pillar: "Every encounter is solvable by observation, never by luck."** It resolves whether to add random critical hits (cut them) and justifies cutting a damage-number system that rewards grinding over reading enemy tells.

## Exercises

1. **Pillar writing.** Write three design pillars for a game you want to make. Each must be specific enough to veto something. For each, name one feature you would cut because of it.
2. **Hands-on: write a one-page GDD.** Produce a single page containing the title, pillars, core loop, target aesthetic, target platform, and the three biggest risks with a mitigation for each. Keep it to one page; the constraint is the exercise.
3. **Cut list and risk register.** For that same design, write a ranked cut list of at least six items (most cuttable first) and a risk register of three risks with likelihood, impact, and mitigation. Then mark which risk you would prototype first and why.

## Further Study

- Jason Schreier, *Blood, Sweat, and Pixels* — reported production stories from *No Man's Sky*, *BioShock Infinite*, *Destiny*, and others; the best accessible account of scope colliding with reality.
- Richard Lemarchand, *A Playful Production Process* — a production methodology written specifically for game teams, covering pre-production, pillars, and iteration.
- Clinton Keith, *Agile Game Development* — how iterative development and Scrum-style planning are adapted to game production.
- GDC postmortems and the published design documentation for *God of War* (2018), particularly its single-shot camera pillar, and *Half-Life 2*, whose cut content is well documented.
