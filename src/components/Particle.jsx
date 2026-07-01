import { useMemo, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
          },
        },
        links: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          enable: true,
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            startValue: "min",
            minimumValue: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;

  return <Particles id="tsparticles" options={options} />;
}

export default Particle;
