import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const Particle = () => {

  const options = useMemo(() => {
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 15,
          },
          repulse: {
            distance: 150,
          }
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 100,
          color: "#808080",
        },
        move: {
          enable: true,
          speed: {min: 1, max: 3},
        },
        opacity: {
          value: {min: 0.3, max: 0.7},
        },
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 700,
          }
        },
        size: {
          value: {min: 1.5, max: 3},
        },
      }
    }
  }, []);
  
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  },[]);

  return (
    <Particles init={particlesInit} options={options}/>
  );
};

export default Particle;