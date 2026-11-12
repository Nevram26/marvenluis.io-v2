import { useEffect, useId, useRef, useState } from "react";
import { animate, createScope, createTimer } from "animejs";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export default function TvImage({ src, alt, href, label, channel = 0, portrait = false }) {
  const root = useRef(null);
  const grain = useRef(null);
  const pointer = useRef({ x: 50, y: 50 });
  const signal = useRef({ x: 50, y: 50 });
  const noiseId = `tv-noise-${useId().replace(/:/g, "")}`;
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
      const screen = root.current.querySelector(".tv-screen");
      // Reduced motion retains gentle grain, without a moving band or branch animation.
      const reception = createTimer({
        autoplay: false,
        frameRate: reducedMotion ? 8 : 18,
        onUpdate: () => {
          grain.current?.setAttribute("seed", String(Math.floor(Math.random() * 1000)));
          signal.current.x += (pointer.current.x - signal.current.x) * .45;
          signal.current.y += (pointer.current.y - signal.current.y) * .45;
          screen.style.setProperty("--signal-x", `${signal.current.x.toFixed(1)}%`);
          screen.style.setProperty("--signal-y", `${signal.current.y.toFixed(1)}%`);
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
    };
  }, [active, portrait, reducedMotion]);

  const trackPointer = event => {
    const rect = root.current.querySelector(".tv-screen").getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.current = {
      x: Math.max(0, Math.min(100, (event.clientX - rect.left) / rect.width * 100)),
      y: Math.max(0, Math.min(100, (event.clientY - rect.top) / rect.height * 100)),
    };
  };

  const Tag = href ? "a" : "div";
  return <Tag ref={root}
    className={`${portrait ? "portrait-frame" : "project-tv friend__image"}${active ? " is-receiving" : ""}${hovered ? " is-hovered" : ""}`}
    {...(href ? { href, "aria-label": label, target: "_blank", rel: "noreferrer" } : {})}
    onPointerEnter={() => setHovered(true)} onPointerMove={trackPointer}
    onPointerLeave={() => { setHovered(false); pointer.current = { x: 50, y: 50 }; }}
    onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}>
    <div className="tv-screen">
      <img className={portrait ? "profile-art" : "tv-screen__image"} src={src} alt={alt}/>
      <svg className="tv-screen__static" aria-hidden="true" focusable="false" width="100%" height="100%">
        <defs><filter id={noiseId} x="0" y="0" width="100%" height="100%">
          <feTurbulence ref={grain} type="fractalNoise" baseFrequency=".7" numOctaves="1" seed="7" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter></defs>
        <rect width="100%" height="100%" filter={`url(#${noiseId})`}/>
      </svg>
      <span className="tv-screen__scanlines" aria-hidden="true"/>
      <span className="tv-screen__roll" aria-hidden="true"/>
      <span className="tv-screen__signal" aria-hidden="true"/>
    </div>
    {portrait && <img className="tv-branches" src="/images/withered-frame.png" alt="" aria-hidden="true"/>}
    {!portrait &&
      <div className="project-tv__panel" aria-hidden="true"><span className="project-tv__speaker"/><span className="project-tv__channel">CH {String(channel).padStart(2, "0")}</span><span className="project-tv__light"/><span className="project-tv__dial"/></div>}
  </Tag>;
}
