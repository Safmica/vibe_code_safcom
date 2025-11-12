'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';

interface ParticlesComponentProps {
  id: string;
  intensity?: 'high' | 'medium' | 'low';
}

const ParticlesComponent = ({ id, intensity = 'medium' }: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const getOptions = () => {
    const baseOptions = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#0ea5e9',
        },
        links: {
          color: '#0ea5e9',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    };

    if (intensity === 'high') {
      return {
        ...baseOptions,
        particles: {
          ...baseOptions.particles,
          number: { value: 120 },
          move: { ...baseOptions.particles.move, speed: 3 },
        },
      };
    } else if (intensity === 'low') {
      return {
        ...baseOptions,
        particles: {
          ...baseOptions.particles,
          number: { value: 40 },
          move: { ...baseOptions.particles.move, speed: 1 },
          links: { ...baseOptions.particles.links, enable: false },
        },
      };
    }
    return baseOptions;
  };

  if (init) {
    return (
      <Particles
        id={id}
        particlesLoaded={particlesLoaded}
        options={getOptions() as any}
        className="absolute inset-0"
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;