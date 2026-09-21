---
schema_version: 3
template_version: 2
kind: module
id: module:Dialog/DialogHeader
authority: current
archive_reason: null
superseded_by: null
approved_by: cixzhang
approved_at: 2026-09-14
owners: [cixzhang, imdreamrunner]
review_triggers: [theming, layout]
verified_by:
  [
    packages/core/src/Dialog/DialogHeader.test.tsx,
    packages/core/src/theme/themingTargets.test.ts,
    packages/cli/foundation/discovery/theming-targets.test.mjs,
    scripts/check-knowledge.mjs,
  ]
parent_component: component:Dialog
references: [architecture:component-theming-surface]
---

# DialogHeader module contract

## Contract at a glance

| Area | Contract |
| --- | --- |
| Public contract | Five stable targets cover the header row, start-content slot, title block, end-content slot, and close icon; component props are unchanged. |
| Behavior | Each slot target renders only with its existing wrapper; the end-content slot continues to contain optional end content and the optional close action. |
| End-user impact | Default layout, paint, interaction, and accessibility are unchanged. |
| Builder impact | Themes may style either content-slot wrapper directly; existing callers and themes require no migration. |
| Compatibility/readiness | Additive theme targets only; exact-head owner approval is required before landing. |
| Review checks | Reject added wrappers, default styles, prop changes, target-placement drift, or mismatched runtime, docs, discovery, and probe inventories. |
| Governing rules | `architecture:component-theming-surface`; `module:Dialog/DialogHeader/DEC-1`; `module:Dialog/DialogHeader/DEC-2`. |

This table is a review projection; the body below is authoritative.

## Intent

`DialogHeader` presents the title region of a Dialog and its optional close
control. This record owns the stable header-row, title-block, start-content,
end-content, and close-icon anatomy and their public theming targets.

## Compatibility and migration

- Released default preserved: `yes`
- Compatibility class: additive theme targets only; default layout, paint,
  interaction, accessibility, and public props remain unchanged
- Migration decision: none

Consumer migration instructions belong in consumer docs and release notes.

## Ownership boundary

**Owns**

- The header row that arranges title content and controls.
- The start-content wrapper for optional leading content.
- The title block that groups the title and optional subtitle.
- The end-content wrapper that groups optional trailing content with the close
  control.
- The close icon rendered for the optional close action.
- The `dialog-header`, `dialog-header-start-content`,
  `dialog-header-title-block`, `dialog-header-end-content`, and
  `dialog-header-close-icon` targets.

**Does not own / non-goals**

- Dialog modality, dismissal policy, or focus lifecycle — owned by
  `component:Dialog` and its linked system records.
- Generic Button or Icon presentation outside this module — owned by those
  components.
- New public props or default visual changes.

## Public API and concepts

No component prop changes. This contract adds five public theming surfaces for
existing anatomy.

| Concept | Closed values or states | Meaning | Default | Owner | Stability |
| --- | --- | --- | --- | --- | --- |
| Header row target | present | Styles the row that arranges title content and controls | Existing row visuals | `module:Dialog/DialogHeader` | stable |
| Start-content target | present when start content renders | Styles the wrapper for optional leading content | Existing start-content layout | `module:Dialog/DialogHeader` | stable |
| Title block target | present | Styles the title/subtitle grouping element | Existing title stack visuals | `module:Dialog/DialogHeader` | stable |
| End-content target | present when end content or the close action renders | Styles the wrapper that groups trailing content with the close action | Existing end-content layout | `module:Dialog/DialogHeader` | stable |
| Close icon target | present when close action renders | Styles the close glyph itself | Existing medium Icon visuals | `module:Dialog/DialogHeader` | stable |

## Behavioral contract

| ID | Invariant | Basis | Review state |
| --- | --- | --- | --- |
| FR1 | The header row MUST carry `dialog-header` on the element that applies its row layout and gap. | Current implementation and owner decision | settled |
| FR2 | The title block MUST carry `dialog-header-title-block` on the element that applies its title/subtitle layout and gap. | Current implementation and owner decision | settled |
| FR3 | The leading content wrapper MUST carry `dialog-header-start-content` on the element that wraps optional start content. | Current implementation and owner decision | settled |
| FR4 | The trailing content wrapper MUST carry `dialog-header-end-content` on the element that groups optional end content with the close action. | Current implementation and owner decision | settled |
| FR5 | The rendered close Icon MUST carry `dialog-header-close-icon` on the glyph element that applies icon presentation. | Current implementation and owner decision | settled |
| FR6 | Omitting `onOpenChange` MUST continue to omit the close action and its optional close-icon anatomy. | Released behavior | settled |

### Transformation and precedence order

- The module applies each target to its owning element before normal theme CSS
  resolves through the shared theming pipeline.

### Performance and resources

- The additive class names and metadata introduce no listener, observer, timer,
  measurement, or asynchronous resource.

## Accessibility contract

- Theme targets MUST NOT change the title's role, focus behavior, dialog naming,
  or the close button's accessible name and operation.

## Design relationships

| Anatomy or state | Design requirement | Representation authority | Module contract |
| --- | --- | --- | --- |
| Header row | Owns arrangement and spacing among title content and controls. | This module | FR1 |
| Start content | Owns the leading wrapper for optional start content. | This module | FR3 |
| Title block | Owns title/subtitle grouping and spacing. | This module | FR2 |
| End content | Owns the trailing wrapper containing optional end content and the close action. | This module | FR4, FR6 |
| Close icon | Owns the close glyph's visual box inside the Button-owned action. | This module with Icon rendering | FR5, FR6 |

### Theming anatomy

<!-- anatomy-theming:v1 -->

```json
{
  "Header row": {"target": "dialog-header"},
  "Start content": {"target": "dialog-header-start-content"},
  "Title block": {"target": "dialog-header-title-block"},
  "End content": {"target": "dialog-header-end-content"},
  "Close icon": {"target": "dialog-header-close-icon"}
}
```

## Parent and system relationships

- `component:Dialog` owns modal behavior and the aggregate Dialog contract.
- `component:Layout` owns the composed LayoutHeader region outside the five
  module-owned inner parts.
- `component:Button` owns the close action's control behavior and outer button
  presentation.
- `component:Icon` renders the glyph; this module guarantees a distinct target
  for the close icon's DialogHeader-specific visual contract.
- `architecture:component-theming-surface` owns target qualification, anatomy
  mapping, and the requirement that each target sits on its painter.

## Verification map

| Contract | Verification | Representative states | Mutation or failure expectation |
| --- | --- | --- | --- |
| FR1–FR5 | `DialogHeader.test.tsx`, target inventory, generated probe theme, and source inspection | title only, title/subtitle, start content, end content, close action | A target is missing, undocumented, or moved away from its owning painter. |
| FR6 | Existing close-button presence tests | with and without `onOpenChange` | The optional target renders without the optional close action. |
| Theming anatomy map | `scripts/check-knowledge.mjs` | all five module anatomy entries and targets | Anatomy, docs, runtime targets, and the module map drift. |

## Decision log

### DEC-1 — Header targets follow stable anatomy and visual ownership

**Reference:** `module:Dialog/DialogHeader/DEC-1`
**Decider:** cixzhang, 2026-09-14

Each public target represents documented anatomy and is applied to the element
that owns the corresponding visuals. The header row, title block, and close icon
meet that admission rule and are approved as additive targets.

### DEC-2 — Content-slot wrappers are stable theming surfaces

**Reference:** `module:Dialog/DialogHeader/DEC-2`
**Decider:** pending exact-head owner review

The existing wrapper for optional start content and the existing wrapper that
groups optional end content with the close action qualify as stable visible
anatomy. `dialog-header-start-content` and `dialog-header-end-content` expose
those wrappers without adding structure or changing default layout, paint,
interaction, accessibility, or public props. The end-content name follows the
public prop even though that slot also contains the optional close action.

## Open questions

None.

## Content boundary

This record does not duplicate consumer signatures/examples, parent Dialog
behavior, implementation steps, or shared theming rules. It links to their
canonical owners.
