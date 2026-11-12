import { useEffect, useRef, useState } from "react";
import { animate, createAnimatable, createScope, createTimer } from "animejs";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export default function TvImage({ src, alt, href, label, channel = 0, portrait = false }) {
  const root = useRef(null);
  const grain = useRef(null);
  const pointer = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia(REDUCED_MOTION).matches);
  const active = portrait || hovered || focused;

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION);
    const update = () => setReducedMotion(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!active) return;
    let observer;
    let visible = typeof IntersectionObserver === "undefined";
    let sync;
    const scope = createScope({ root }).add(() => {
      pointer.current = createAnimatable(root.current.querySelector(".tv-screen__signal"), {
        x: reducedMotion ? 0 : 100,
        y: reducedMotion ? 0 : 100,
        ease: "out(3)",
      });
      // Move a cached tile on its own layer instead of repainting SVG noise each frame.
      const reception = createTimer({
        autoplay: false,
        frameRate: reducedMotion ? 8 : 12,
        onUpdate: () => {
          if (grain.current) grain.current.style.transform = `translate3d(${Math.floor(Math.random() * 25) - 12}px,${Math.floor(Math.random() * 25) - 12}px,0)`;
        },
      });
      const animations = [reception];
      if (!reducedMotion) animations.push(animate(root.current.querySelector(".tv-screen__roll"), {
        translateY: ["-100%", "500%"], duration: 3200, loop: true, ease: "linear", autoplay: false,
      }));
      if (portrait && !reducedMotion) animations.push(animate(root.current.querySelector(".tv-branches"), {
        opacity: [.82, 1], duration: 6400, alternate: true,
        loop: true, ease: "inOutSine", autoplay: false,
      }));
      sync = () => animations.forEach(animation => {
        if (visible && !document.hidden) animation.play();
        else animation.pause();
      });
      if (typeof IntersectionObserver !== "undefined") {
        observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
        observer.observe(root.current);
      }
      document.addEventListener("visibilitychange", sync);
      sync();
    });
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", sync);
      scope.revert();
      pointer.current = null;
    };
  }, [active, portrait, reducedMotion]);

  const trackPointer = event => {
    if (!pointer.current || document.hidden) return;
    const rect = root.current.querySelector(".tv-screen").getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.current.x(Math.max(0, Math.min(rect.width, event.clientX - rect.left)) - rect.width / 2);
    pointer.current.y(Math.max(0, Math.min(rect.height, event.clientY - rect.top)) - rect.height / 2);
  };

  const Tag = href ? "a" : "div";
  return <Tag ref={root}
    className={`${portrait ? "portrait-frame" : "project-tv friend__image"}${active ? " is-receiving" : ""}${hovered ? " is-hovered" : ""}`}
    {...(href ? { href, "aria-label": label, target: "_blank", rel: "noreferrer" } : {})}
    onPointerEnter={() => setHovered(true)} onPointerMove={trackPointer}
    onPointerLeave={() => setHovered(false)}
    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
    <div className="tv-screen">
      <img className={portrait ? "profile-art" : "tv-screen__image"} src={src} alt={alt}/>
      <span ref={grain} className="tv-screen__static" aria-hidden="true"/>
      <span className="tv-screen__scanlines" aria-hidden="true"/>
      <span className="tv-screen__roll" aria-hidden="true"/>
      <span className="tv-screen__signal" aria-hidden="true"/>
    </div>
    {portrait && <img className="tv-branches" src="/images/withered-frame.png" alt="" aria-hidden="true"/>}
    {!portrait &&
      <div className="project-tv__panel" aria-hidden="true"><span className="project-tv__speaker"/><span className="project-tv__channel">CH {String(channel).padStart(2, "0")}</span><span className="project-tv__light"/><span className="project-tv__dial"/></div>}
  </Tag>;
}
