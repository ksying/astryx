---
'@astryxdesign/core': patch
---

[fix] Toasts stay visible and clickable while a native modal is open. The `ToastViewport` from `LayerProvider` (or the one `useToast` mounts on its own) now moves into the latest open Dialog, Lightbox, MobileNav, or scrim BottomSheet, and back when it closes. Before, any modal opened after the viewport mounted painted over it, and clicking a toast's close button hit the backdrop and closed the modal. Moving the viewport does not reset visible toasts or their timers. A viewport rendered with `isTopLayer={false}` keeps rendering in place.

@ksying
