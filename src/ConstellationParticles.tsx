import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ConstellationParticles: React.FC = () => {
  const particlesInit = async (main: any) => {
    // Initialize tsparticles with full options
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000", // Background color
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Interaction mode (repulse, attract, etc.)
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#ffffff", // Particle color
          },
          links: {
            color: "#ffffff", // Line color
            distance: 150, // Max distance to connect particles
            enable: true, // Enable linking
            opacity: 0.5, // Line opacity
            width: 1, // Line width
          },
          move: {
            enable: true,
            speed: 1.5, // Speed of particle movement
            direction: "none",
            random: false,
            straight: false,
            outMode: "bounce", // Particles bounce on edges
            attract: {
              enable: false,
            },
          },
          number: {
            density: {
              enable: true,
              area: 800, // Number of particles relative to area
            },
            value: 80, // Total number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle", // Shape of particles (circle, square, etc.)
          },
          size: {
            random: true,
            value: 3, // Size of particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ConstellationParticles;
