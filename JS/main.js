import { gsap } from "/node_modules/gsap/index.js";


// Create timeline and pause it by default
const tl = gsap.timeline({ defaults: { ease: "none" } });

// Step 1: Q drops onto dot
tl.fromTo("#q",
    { y: -100, x: 0, rotation: 0 },
    {
        y: 82,
        duration: 0.5,
        rotation: -5,
        ease: "bounce"
    }
);

// Step 2: Q wiggles / slips off
tl.to("#q", {
  rotation: -50,
  y: 225,
  x: 75,
  duration: 0.3
});

// Step 3+4: Q slides and falls in one smooth motion
tl.to("#q", {
  rotation: -270,
  x: 130,
  y: 900,
  duration: 0.9,
  ease: "power2"
});

// Step 5: Q reappears from top and bounces into place
tl.fromTo("#q",
  { y: -900, x: 0, rotation: 0 },
  {
    y: 0,
    x: 0,
    rotation: 0,
    duration: 1.1,
    ease: "bounce.out"
  }
);

// Trigger on hover
const trigger = document.querySelector("#q"); // or a wrapper element like #logo-container

trigger.addEventListener("mouseenter", () => {
  tl.restart();
});

