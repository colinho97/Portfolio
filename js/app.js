
// //Preloader JS
const preloader = document.querySelector('.preloader');
const content = document.querySelector('.allSectionsWrapper');

function preload() {
  setTimeout(() => {
    preloader.style.opacity = 0;
    preloader.style.display = 'none';

    content.style.display = 'block';
    setTimeout(() => content.style.opacity = 1, 10);
  }, 1000);
}

preload();

//Particles
tsParticles.load("tsparticles", {
  /* options here */
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

});

(async () => {
  await tsParticles.load("tsparticles", {
    preset: "stars",
  });
})();



//Ensuring the scroll wheel starts at the top of the page on refresh
window.onbeforeunload = function () {
  window.scrollTo(0,0);
};

// Initializing AOS library
  AOS.init();

// Particle library settings
// particlesJS('particles-js',
  
//   {
//     "particles": {
//       "number": {
//         "value": 100,
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "color": {
//         "value": "#ffffff"
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 5
//         },
//         "image": {
//           "src": "img/github.svg",
//           "width": 100,
//           "height": 100
//         }
//       },
//       "opacity": {
//         "value": 1,
//         "random": true,
//         "anim": {
//           "enable": true,
//           "speed": 1,
//           "opacity_min": 0,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 3,
//         "random": true,
//         "anim": {
//           "enable": false,
//           "speed": 4,
//           "size_min": 0.3,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": false,
//         "distance": 150,
//         "color": "#ffffff",
//         "opacity": 0.4,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 1,
//         "direction": "none",
//         "random": true,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 600
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": false,
//           "mode": "bubble"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "repulse"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 250,
//           "size": 0,
//           "duration": 2,
//           "opacity": 0,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 400,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   }

// );