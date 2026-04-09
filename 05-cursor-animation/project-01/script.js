// ── Cursor ────────────────────────────────────
const cursor = document.getElementById("cursor");
const dot = document.getElementById("cursor-dot");
const trail = document.getElementById("cursor-trail");

let trailX = 0,
  trailY = 0;
let curX = 0,
  curY = 0;

document.addEventListener("mousemove", (e) => {
  curX = e.clientX;
  curY = e.clientY;

  gsap.to("#cursor", { x: curX, y: curY, duration: 0.15, ease: "power2.out" });
  gsap.to("#cursor-dot", { x: curX, y: curY, duration: 0.04 });
});

// Trailing ghost blob
(function animateTrail() {
  trailX += (curX - trailX) * 0.08;
  trailY += (curY - trailY) * 0.08;
  gsap.set("#cursor-trail", { x: trailX, y: trailY });
  requestAnimationFrame(animateTrail);
})();

// ── Navbar scroll effect ──────────────────────
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = "rgba(240, 237, 230, 0.12)";
  } else {
    navbar.style.borderBottomColor = "rgba(240, 237, 230, 0.07)";
  }
});

// NOTE:
// Always match coordinate system with positioning.
//
// clientX / clientY → viewport based  →  use with position: fixed
// offsetX / offsetY → element based   →  use with position: absolute
//
// For center alignment:
// x = e.clientX - (cursorWidth / 2)  ← handled here via transform: translate(-50%,-50%)
