// Plain-file kit modules must see React's committed DOM before their automatic initialization.
export function mountKit() {
  return Promise.all(["system.js", "motion/motion.js", "layout/layout.js"].map(path =>
    import(/* @vite-ignore */ new URL(`/assets/${path}`, window.location.origin).href)
  ));
}
