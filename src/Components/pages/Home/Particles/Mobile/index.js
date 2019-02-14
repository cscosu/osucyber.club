export default {
  particles: {
    number: {
      value: 40,
      density: {
        enable: false
      }
    },

    shape: {
      type: ["images", "circle"],
      images: [
        {
          src: "/img/logo.png",
          height: 20,
          width: 20
        }
      ]
    },
    move: {
      direction: "none",
      speed: 1.5
    },
    color: {
      value: ["#000000", "#BB0300"]
    },
    size: {
      value: 20,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#000000",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        particles_nb: 3
      }
    }
  },
  retina_detect: true
};
