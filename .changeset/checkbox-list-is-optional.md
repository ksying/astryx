---
'@astryxdesign/core': patch
---

[feat] `CheckboxList` takes `isOptional`, as `RadioList` and `CheckboxInput` do. It shows the optional indicator after the group label, so an optional checkbox group can say so, including as the exception in a `FormLayout` with `defaultOptionality="required"`. Under `defaultOptionality="optional"` the indicator stays hidden, as for every field. It adds no `aria-required` or native `required`: a checkbox group has neither.

@ksying
