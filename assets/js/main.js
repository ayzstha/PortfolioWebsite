/**
 * Portfolio Website JavaScript
 *
 * This file contains all interactive functionality for the portfolio website including:
 * - Navigation menu toggle and effects
 * - Scroll animations and effects
 * - Typing animation
 * - Particles background
 * - Dark mode functionality
 * - Custom cursor effects
 *
 * @author Portfolio Owner
 * @version 1.0
 */

// Main code starts below

/**
 * Toggles the responsive navigation menu on mobile devices
 * Changes navigation menu class to toggle visibility
 */
function myMenuFunction() {
  const menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/**
 * Adds shadow effect to navigation bar when scrolling
 * Attaches scroll event to window object with throttle for performance
 */
window.onscroll = function () {
  headerShadow();
};

/**
 * Modifies header appearance based on scroll position
 * Adds box shadow and adjusts size when scrolled past threshold
 */
function headerShadow() {
  const navHeader = document.getElementById("header");
  const scrollPosition =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition > 50) {
    // Compact header style when scrolled
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    // Default header style at the top of the page
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/**
 * Animated typing effect using Typed.js library
 * Displays a sequence of action words with typewriter animation
 * @type {Typed} Instance of Typed.js for managing the animation
 */
const typingEffect = new Typed(".typedText", {
  strings: ["Innovate.", "Design.", "Code.", "Analyze.", "Program."],
  loop: true,
  typeSpeed: 60, // Speed of typing (in milliseconds)
  backSpeed: 45, // Speed of deleting (in milliseconds)
  backDelay: 2000, // Time before starting to backspace (in milliseconds)
});

/**
 * Scroll Reveal Animation Configuration
 * Controls the animation of elements as they enter the viewport
 * @see https://scrollrevealjs.org/
 */
const sr = ScrollReveal({
  origin: "top", // Animation starts from the top
  distance: "80px", // Distance elements move during animation
  duration: 2000, // Animation duration in milliseconds
  reset: true, // Elements will animate each time they enter the viewport
});

/**
 * Home Section Animations
 * Staggers the reveal of home section elements for a pleasing visual effect
 */
sr.reveal(".featured-text-card", {}); // No delay for card
sr.reveal(".featured-name", { delay: 100 }); // Slight delay for name
sr.reveal(".featured-text-info", { delay: 200 }); // Medium delay for text info
sr.reveal(".featured-text-btn", { delay: 200 }); // Medium delay for buttons
sr.reveal(".social_icons", { delay: 200 }); // Medium delay for social icons
sr.reveal(".featured-image", { delay: 300 }); // Longer delay for featured image

/**
 * Project Section Animations
 * Animates project boxes with interval between each reveal
 */
sr.reveal(".project-box", {
  origin: "bottom", // Animation starts from bottom
  distance: "40px", // Distance elements move
  duration: 1500, // Animation duration in milliseconds
  delay: 200, // Base delay
  interval: 150, // Staggered delay between items
  easing: "cubic-bezier(0.5, 0, 0, 1)", // Smooth easing function
  reset: false, // Don't repeat animation on re-entry
  opacity: 0, // Start fully transparent
  scale: 0.9, // Start slightly smaller
}); // Enhanced animation configuration

/**
 * Heading Animations
 * Animates section headings
 */
sr.reveal(".top-header", {});

/**
 * Directional Scroll Reveal Animations
 * Configures animations from left and right directions
 */

/**
 * Left-side Animations
 * Elements enter the viewport from the left side
 */
const srLeft = ScrollReveal({
  origin: "left", // Animation starts from the left
  distance: "80px", // Distance elements move
  duration: 2000, // Animation duration in milliseconds
  reset: true, // Repeat animation on re-entry
});

// Apply left-side animations
srLeft.reveal(".about-info", { delay: 100 }); // About section content
srLeft.reveal(".contact-info", { delay: 100 }); // Contact information

/**
 * Right-side Animations
 * Elements enter the viewport from the right side
 */
const srRight = ScrollReveal({
  origin: "right", // Animation starts from the right
  distance: "80px", // Distance elements move
  duration: 2000, // Animation duration in milliseconds
  reset: true, // Repeat animation on re-entry
});

// Apply right-side animations
srRight.reveal(".skills-box", { delay: 100 }); // Skills boxes
srRight.reveal(".form-control", { delay: 100 }); // Form elements

/**
 * Project Cards Animation
 * Creates a staggered entrance effect for project cards
 * Note: Using enhanced configuration instead of the simpler version above
 */

/**
 * Navigation Active Link Highlighting
 * Updates the active navigation link based on scroll position
 */

// Get all sections with an ID attribute
const sections = document.querySelectorAll("section[id]");

/**
 * Updates active navigation link based on current scroll position
 * Adds/removes 'active-link' class to show which section is currently in view
 */
function scrollActive() {
  const scrollY = window.scrollY;

  // Check each section to determine if it's in the viewport
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // Adjust offset to trigger active state slightly before section top
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // Select corresponding navigation link for this section
    const navLink = document.querySelector(
      ".nav-menu a[href*=" + sectionId + "]"
    );

    // If link exists and section is in view, add active class; otherwise remove it
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

// Add scroll event listener with throttling for better performance
let scrollTimeout;
window.addEventListener("scroll", function () {
  if (!scrollTimeout) {
    scrollTimeout = setTimeout(function () {
      scrollActive();
      scrollTimeout = null;
    }, 100); // Throttle to run at most every 100ms
  }
});

/**
 * Particles.js Background Animation
 * Creates interactive animated particle background
 * @see https://vincentgarreau.com/particles.js/
 *
 * Note: This configuration was previously in a separate file (particles-config.js)
 * and has been merged here for better performance and maintainability
 */
document.addEventListener("DOMContentLoaded", function () {
  // Check if particles.js library is loaded before initializing
  if (typeof particlesJS !== "undefined") {
    // Particles.js configuration - define globally for potential reuse
    window.particlesConfig = {
      particles: {
        number: {
          value: 80, // Number of particles
          density: {
            enable: true, // Enable density control
            value_area: 800, // Area each particle takes
          },
        },
        color: {
          value: "#ff6e15", // Branded orange color
        },
        shape: {
          type: "circle", // Circle-shaped particles
          stroke: {
            width: 0, // No stroke
            color: "#000000",
          },
          polygon: {
            nb_sides: 5, // Polygon sides (if shape is polygon)
          },
        },
        opacity: {
          value: 0.3, // Reduced base opacity for more subtle effect
          random: true, // Randomize opacity for more natural look
          anim: {
            enable: true, // Enable opacity animation for subtle movement
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3, // Base particle size
          random: true, // Randomize sizes
          anim: {
            enable: false, // No size animation
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true, // Enable connections
          distance: 150, // Maximum connection distance
          color: "#ff6e15", // Line color matches particles
          opacity: 0.25, // Reduced opacity for connections
          width: 1, // Line thickness
        },
        move: {
          enable: true, // Enable movement
          speed: 3, // Movement speed
          direction: "none", // Random direction
          random: false, // Not randomized
          straight: false, // Not straight lines
          out_mode: "out", // Out of canvas behavior
          bounce: false, // No bounce at edges
          attract: {
            enable: true, // Enable attraction
            rotateX: 600, // X-axis rotation
            rotateY: 1200, // Y-axis rotation
          },
        },
      },
      interactivity: {
        detect_on: "window", // Detect on entire window for better detection (was "canvas")
        events: {
          onhover: {
            enable: true, // Enable hover effects
            mode: "grab", // Connect particles on hover (changed from "repulse" for more interactive effect)
          },
          onclick: {
            enable: true, // Enable click effects
            mode: "push", // Add particles on click
          },
          resize: true, // Responsive to window resize
        },
        modes: {
          grab: {
            distance: 140, // Increased interaction distance
            line_linked: {
              opacity: 1, // Full opacity for hover connections
            },
          },
          bubble: {
            distance: 400, // Bubble effect distance
            size: 40, // Bubble size
            duration: 2, // Effect duration
            opacity: 8, // Bubble opacity
            speed: 3, // Animation speed
          },
          repulse: {
            distance: 200, // Repulsion distance
            duration: 0.4, // Effect duration
          },
          push: {
            particles_nb: 4, // Add 4 particles on click
          },
          remove: {
            particles_nb: 2, // Remove 2 particles
          },
        },
      },
      retina_detect: true, // Enable retina display support
    }; // Initialize particles with the configuration
    particlesJS("particles-js", window.particlesConfig);
    console.log("particles.js initialized successfully");
  } else {
    console.error(
      "particles.js library not loaded - background effects disabled"
    );
  }
});

/**
 * Dark Mode Functionality
 * Manages theme switching with user preference persistence
 */
document.addEventListener("DOMContentLoaded", function () {
  // Cache DOM elements
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Fix for the double circle issue when toggling dark mode
  if (darkModeToggle) {
    // Remove any browser default focus styling after click
    darkModeToggle.addEventListener("click", function () {
      // Remove focus after click to avoid the double circle
      setTimeout(() => {
        this.blur();
      }, 100);
    });

    // Remove focus styling on mousedown to prevent focus ring during mouse usage
    darkModeToggle.addEventListener("mousedown", function (e) {
      e.preventDefault();
      this.style.outline = "none";
    });
  }

  // Theme toggle functionality continues
  const darkModeIcon = darkModeToggle.querySelector("i");
  const htmlElement = document.documentElement;

  // Theme constants
  const THEME_DARK = "dark";
  const THEME_LIGHT = "light";

  /**
   * Updates UI elements to match the current theme
   * @param {string} theme - The current theme ("dark" or "light")
   */
  function updateThemeUI(theme) {
    if (theme === THEME_DARK) {
      htmlElement.setAttribute("data-theme", THEME_DARK);
      darkModeIcon.classList.remove("uil-moon");
      darkModeIcon.classList.add("uil-sun");
    } else {
      htmlElement.removeAttribute("data-theme");
      darkModeIcon.classList.remove("uil-sun");
      darkModeIcon.classList.add("uil-moon");
    }
  }

  // Get user's saved theme preference from localStorage
  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme if it exists
  if (savedTheme === THEME_DARK) {
    updateThemeUI(THEME_DARK);
  }

  // Toggle theme when user clicks the theme toggle button
  darkModeToggle.addEventListener("click", function () {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;

    // Update localStorage with user's choice
    localStorage.setItem("theme", newTheme);

    // Update UI to match new theme
    updateThemeUI(newTheme);
  });

  // Listen for system theme preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const systemTheme = e.matches ? THEME_DARK : THEME_LIGHT;

      // Only apply system preference if user hasn't explicitly chosen a theme
      if (!localStorage.getItem("theme")) {
        updateThemeUI(systemTheme);
      }
    });

  // Initially respect system preference if user hasn't made an explicit choice
  if (
    !savedTheme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    updateThemeUI(THEME_DARK);
  }
});

/**
 * Custom Cursor Functionality
 * Creates a custom cursor that follows mouse movement and has interactive effects
 */
document.addEventListener("DOMContentLoaded", () => {
  // Skip custom cursor for mobile/touch devices where it's unnecessary
  if (window.matchMedia("(pointer: fine)").matches) {
    initCustomCursor();
  }
});

/**
 * Initializes the custom cursor and all its related functionality
 * Handles cursor movement, theme integration, and interactive states
 */
function initCustomCursor() {
  // Create the custom cursor element
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  // Theme-specific colors
  const CURSOR_COLORS = {
    dark: "white",
    light: "orange",
  };

  // Hide the default cursor
  document.body.style.cursor = "none";

  // Optimize cursor movement with requestAnimationFrame for better performance
  let cursorX = 0;
  let cursorY = 0;
  let rafId = null;

  /**
   * Updates cursor position using animation frame for smoother performance
   */
  function updateCursorPosition() {
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    rafId = null;
  }

  // Track mouse movement and update cursor position with RAF
  document.addEventListener("mousemove", (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;

    if (!rafId) {
      rafId = requestAnimationFrame(updateCursorPosition);
    }
  });

  // Scale effect on mouse press
  document.addEventListener("mousedown", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
  });

  // Return to normal size on mouse release
  document.addEventListener("mouseup", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
  });

  /**
   * Updates cursor color based on current theme
   */
  function updateCursorColor() {
    const isDarkMode =
      document.documentElement.getAttribute("data-theme") === "dark";
    cursor.style.borderColor = isDarkMode
      ? CURSOR_COLORS.dark
      : CURSOR_COLORS.light;
  }

  // Set initial cursor style based on theme
  updateCursorColor();

  // Update cursor color when theme changes
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", updateCursorColor);
  }

  // Apply interactive effects to clickable elements
  const interactiveElements = document.querySelectorAll(
    "a, button, input[type=submit], input[type=button], .interactive"
  );
  interactiveElements.forEach((element) => {
    // Hide default cursor on interactive elements
    element.style.cursor = "none";

    // Add pulse effect on hover
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("pulse");
    });

    // Remove pulse effect when leaving element
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("pulse");
    });
  });

  // Handle cursor visibility when leaving/entering window
  document.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });

  document.addEventListener("mouseenter", () => {
    cursor.style.display = "block";
  });
}
