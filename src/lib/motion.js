import { useLayoutEffect } from "react";
import { animate, stagger, utils } from "animejs";

// One entrance on load, Anime.js: children marked data-enter fade up 12px, 80ms apart.
// Reduced motion, or no script: the content simply stands as written.
export function useEnter(ref) {
  useLayoutEffect(() => {
    const targets = ref.current?.querySelectorAll("[data-enter]");
    if (!targets?.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    utils.set(targets, { opacity: 0, y: 12 });
    const entrance = animate(targets, {
      opacity: 1,
      y: 0,
      duration: 600,
      ease: "outExpo",
      delay: stagger(80),
    });
    return () => entrance.cancel();
  }, [ref]);
}
