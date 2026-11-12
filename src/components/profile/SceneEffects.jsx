import { useEffect, useRef } from "react";
import { animate, createScope, stagger, svg, utils } from "animejs";

const CYCLE = 3200; // the kit's --m-cycle: every loop here runs on it or a multiple

// Three small constellations as line figures in a 200x160 box: two in the side gutters, one under the sidebar.
const CONSTELLATIONS = [
  { name: "dipper", style: { left: 0, top: 140, width: 120, height: 96 }, lines: ["15,40 45,28 78,32 108,48 150,44 160,86 118,96 108,48"] },
  { name: "cassiopeia", style: { right: 0, top: 560, width: 120, height: 96 }, lines: ["20,90 55,40 95,80 135,35 175,70"] },
  { name: "orion", style: { left: "calc(50% - 520px)", top: 1470, width: 200, height: 160 }, lines: ["60,20 85,80 55,150", "140,30 115,92 150,140", "85,80 100,86 115,92"] },
];
const points = lines => [...new Set(lines.join(" ").split(" "))].map(p => p.split(",").map(Number));

// Every star loops on its own, offset from its neighbours, so none sits still waiting for a shared stagger.
const twinkle = (targets, props) => Array.from(utils.$(targets)).map(($s, i) =>
  animate($s, { ...props, duration: CYCLE, delay: (i * 530) % CYCLE, loop: true, alternate: true, ease: "inOutSine", autoplay: false }));

export default function SceneEffects() {
  const root = useRef(null);

  useEffect(() => {
    const scope = createScope({
      root: root.current.closest(".myspace-page"),
      mediaQueries: { reducedMotion: "(prefers-reduced-motion: reduce)" },
    }).add(({ matches }) => {
      if (matches.reducedMotion) return;
      const animations = [
        ...twinkle(".scene-star", { opacity: [.25, .85], scale: [.8, 1.12] }),
        ...twinkle(".constellation circle", { opacity: [.35, 1], r: [1.4, 2.2] }),
      // The lines draw in once on load; the figures then drift a few pixels, slowly.
        animate(svg.createDrawable(".constellation polyline"), { draw: ["0 0", "0 1"], duration: 2400, delay: stagger(300), ease: "inOutSine", autoplay: false }),
        animate(".constellation", { translateY: [0, -6], duration: 14000, loop: true, alternate: true, ease: "inOutSine", autoplay: false }),
      ];
      animations.forEach(animation => animation.resume());
    });
    return () => scope.revert();
  }, []);

  return <div ref={root} className="scene-effects">
    <div className="scene-atmosphere" aria-hidden="true"><div className="background-haze"/></div>
    <div className="scene-stars" aria-hidden="true">
      {Array.from({ length: 18 }, (_, i) => <span className="scene-star" key={i} style={{
        left: `${2 + (i * 37) % 96}%`, top: `${2 + (i * 17) % 96}%`,
        fontSize: `${12 + (i * 7) % 24}px`,
      }}>{i % 3 === 0 ? "\u2727" : "\u2726"}</span>)}
      {CONSTELLATIONS.map(c => <svg className="constellation" key={c.name} style={c.style} viewBox="0 0 200 160" focusable="false">
        {c.lines.map(l => <polyline key={l} points={l}/>)}
        {points(c.lines).map(([x, y]) => <circle key={`${x},${y}`} cx={x} cy={y} r="1.8"/>)}
      </svg>)}
    </div>
  </div>;
}
