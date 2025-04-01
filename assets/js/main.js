/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Innovate.", "Design.", "Code.", "Analyze.", "Program."],
  loop: true,
  typeSpeed: 60,
  backSpeed: 45,
  backDelay: 2000,
});

/* ----- SCROLL REVEAL ANIMATION ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// Home section animations
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

// Project box animations
sr.reveal(".project-box", { interval: 200 });

// Headings animations
sr.reveal(".top-header", {});

/* ----- SCROLL REVEAL LEFT/RIGHT ANIMATION ----- */

// Left animations
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

// Right animations
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- INITIALIZE PARTICLES JS ----- */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ff6e15",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ff6e15",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
    console.log("particles.js initialized directly");
  } else {
    console.error("particles.js library not loaded");
  }
});

/* ----- DARK MODE FUNCTIONALITY ----- */
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeIcon = darkModeToggle.querySelector("i");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeIcon.classList.remove("uil-moon");
    darkModeIcon.classList.add("uil-sun");
  }

  darkModeToggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      darkModeIcon.classList.remove("uil-sun");
      darkModeIcon.classList.add("uil-moon");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      darkModeIcon.classList.remove("uil-moon");
      darkModeIcon.classList.add("uil-sun");
    }
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";

      if (!localStorage.getItem("theme")) {
        if (newColorScheme === "dark") {
          document.documentElement.setAttribute("data-theme", "dark");
          darkModeIcon.classList.remove("uil-moon");
          darkModeIcon.classList.add("uil-sun");
        } else {
          document.documentElement.removeAttribute("data-theme");
          darkModeIcon.classList.remove("uil-sun");
          darkModeIcon.classList.add("uil-moon");
        }
      }
    });

  if (
    !savedTheme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeIcon.classList.remove("uil-moon");
    darkModeIcon.classList.add("uil-sun");
  }
});

/* ----- CUSTOM CURSOR FUNCTIONALITY ----- */
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  // Remove default cursor
  document.body.style.cursor = "none";

  document.addEventListener("mousemove", (e) => {
    requestAnimationFrame(() => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  });

  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });

  // Check if dark mode is enabled
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  // Set cursor style based on theme
  cursor.style.borderColor = isDarkMode ? "white" : "orange";

  // On theme toggle, update cursor style
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    cursor.style.borderColor = currentTheme === "dark" ? "white" : "orange";
  });

  // Pulse effect on hover over links and buttons
  const interactiveElements = document.querySelectorAll("a, button");
  interactiveElements.forEach((element) => {
    element.style.cursor = "none"; // Remove default cursor
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("pulse");
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("pulse");
    });
  });
});
