# HCBL handoff for Linc(d)

**Status:** Proposed design for the Context Inbox. This document can be used as a cross-model review brief. The prototype does not import burst logs or send them to models.

**Question:** When a creative observation recurs across projects, what evidence and permission should travel with it?

The Human Creative Burst Log (HCBL) records observations and revisits them as new evidence appears. A retrospective surfaced a recurring design choice across local-history experiments and a visual conversation archive: give a person a visible object to enter, then let them inspect the source behind it. That is a candidate connection. Similarity alone leaves the history of influence unresolved.

## Connections across the studio

| Project | Application |
| --- | --- |
| **HCBL Observatory** | Record when an observation appeared, where it recurred, and what changed the original interpretation. Preserve the earlier reading when a correction arrives. |
| **WITNESS / MULTIPLE** | Keep separate witness accounts and disagreements. A model that reads a handoff should describe it as inherited evidence. [Project repository](https://github.com/Simple-Minds-Studios/witness-multiple) |
| **Linc(d)** | Show a possible HCBL connection as a ContextCore proposal with source, witness, relationship, and review state. Use the Session Contract to decide what an external model may receive. |
| **robotOS** | Apply the same distinction between context and permission to a physical task. In a hypothetical home repair, the owner’s preference, the robot’s observed condition, and a human’s permission to proceed are separate inputs. A preference or historical precedent conveys no authority to act. |
| **Thinking Clearer with Lincoln** | Develop an episode or workshop question around the same example: “What did I see, what was I told, and what did I conclude?” This follows the published themes of *Borrowed Thoughts* and *The Discipline of Not Knowing*. [Podcast repository](https://github.com/Simple-Minds-Studios/thinking-clearer) |

## First prototype

1. Present one fictional burst in a local Context Inbox. Include the source reference, date, witness, observation, interpretation, and any counterevidence.
2. Let the reviewer classify the relationship as **recurrence**, **possible influence**, **documented inheritance**, or **unknown**. Require evidence of reuse for documented inheritance. Preserve meaningful disagreements as separate accounts.
3. Reuse ContextCore’s confirmation, reconsideration, dismissal, and deletion controls. Confirmation records the person’s review of a claim. A separate Session Contract must allow that item and the receiving model before any future handoff.
4. Preview the permitted record before export. Include the relevant evidence, the uncertainty, and a readable reference the receiving model is authorized to access. Apply the existing deletion controls to locally stored records and exclude deleted items from future handoffs.

## Fictional test case

A museum prototype uses a floor-plan marker to open a catalog record. Later, an audio archive uses a timeline marker to open its source recording. A model proposes **recurrence** because both interfaces expose a source through a visual marker. A second model points out that the teams could have arrived at the pattern independently. The reviewer keeps the recurrence, records the objection, and leaves influence unknown.

Expected behavior:

- An unreviewed proposal stays outside the handoff.
- A confirmed proposal still stays outside the handoff until the receiving model and record are allowed by the Session Contract.
- A permitted handoff shows the counterevidence and marks the relationship as recurrence with influence unknown.
- A model receiving the record can distinguish the original observation from the later interpretation and ask for the evidence that would change the classification.

## Review question for another model

Using the fictional case, identify which claims are observations and which are interpretations. Give one plausible alternative explanation for the recurrence, state what evidence would change your reading, and identify the minimum information a receiving model needs. Cite this brief as your source if it is the only material you received.
