document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const mainSection = document.getElementById("main");

  // Fungsi untuk toggle header
  function toggleHeader(show) {
    if (show) {
      header.classList.remove("hidden");
    } else {
      header.classList.add("hidden");
    }
  }

  // Initial state
  toggleHeader(!(window.location.hash === "#main" || !window.location.hash));

  // Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          toggleHeader(entry.target.id !== "main");
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px",
    }
  );

  document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("header a");
  const sections = document.querySelectorAll("section");

  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }

  // Sembunyikan semua section kecuali home saat pertama kali load
  showSection("home");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      showSection(targetId);
    });
  });
});


  // Observe semua section
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Handle hash changes
  window.addEventListener("hashchange", () => {
    toggleHeader(window.location.hash !== "#main");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "repulse" }, // Partikel menjauh saat hover
        onclick: { enable: true, mode: "push" }, // Partikel tertekan saat klik
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
    retina_detect: true,
  });
});
console.log("Script loaded successfully.");

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("button");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
  menu.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});


