/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// Initializing AOS library
  AOS.init();

// Particle library settings


 // All options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
      // The slim version doesn't have the following plugins:
      // Absorbers, Emitters, PolygonMask, Interactivity Trail
      const options = {
        background: {
          color: "#000", // the canvas background color
        },
        interactivity: {
          events: {
            onClick: {
              // this handles the mouse click event
              enable: true,
              mode: "push", // this adds particles
            },
            onHover: {
              // this handles the mouse hover event
              enable: true,
              mode: "repulse", // this make particles move away from the mouse
            },
          },
          modes: {
            push: {
              quantity: 6, // number of particles to add
            },
            repulse: {
              distance: 100, // the distance of the particles from the mouse
            },
          },
        },
        particles: {
          links: {
            enable: true, // this enables links between particles
            opacity: 0.3,
            distance: 200,
          },
          move: {
            enable: true, // this makes particles move
            speed: { min: 1, max: 3 }, // this is the speed of the particles
          },
          opacity: {
            value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
          },
          size: {
            value: { min: 1, max: 3 }, // this sets the size of the particles
          },
        },
      };

      // tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
      tsParticles.load("tsparticles", options);