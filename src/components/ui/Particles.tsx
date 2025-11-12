'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Container, Engine } from '@tsparticles/engine';
import { useTheme } from 'next-themes';

interface ParticlesComponentProps {
  id: string;
  intensity?: 'high' | 'medium' | 'low';
}

const ParticlesComponent = ({ id, intensity = 'medium' }: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

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
    const isDark = theme === 'dark';
    const particleColors = isDark ? ["#00b4ff","#0ea5e9","#60a5fa"] : ["#0b63d6","#7aaefc","rgba(11,18,32,0.06)"];
    const linkColor = isDark ? '#0ea5e9' : '#0077ff';
    const opacity = isDark ? 0.18 : 0.10;
    const density = isDark ? 60 : 45;

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
          value: particleColors,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: opacity,
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
          value: density,
        },
        opacity: {
          value: opacity,
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