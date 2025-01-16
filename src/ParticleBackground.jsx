// ParticleBackground.jsx
import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = (main) => {
    // You can initialize particles here
  };

  const particlesLoaded = (container) => {
    // Callback when particles are loaded
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#000', // background color
            },
          },
          particles: {
            color: {
              value: 'white', // particle color
            },
            links: {
              color: '#ffffff', // link color
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'out',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // number of particles
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 40,
                minimumValue: 0.1,
              },
            },
          },
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
            },
          },
        }}
      />
      
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
        <h1></h1>
      </div>
    </div>
  );
};

export default ParticleBackground;
