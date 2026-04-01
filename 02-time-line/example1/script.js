// Create one timeline to run tweens in the exact order we define.
const tl = gsap.timeline();

// Timeline vs stagger:
// - stagger is great for evenly offset starts across a group.
// - timeline is great when we want full control over custom sequence.

// Custom sequence: odd boxes first (1, 3, 5), then even boxes (2, 4, 6).
tl.to("#box1", {
  x: 500,
  duration: 2,
});

tl.to("#box3", {
  x: 500,
  duration: 2,
});

tl.to("#box5", {
  x: 500,
  duration: 2,
});

tl.to("#box2", {
  x: 500,
  duration: 2,
});

tl.to("#box4", {
  x: 500,
  duration: 2,
});

tl.to("#box6", {
  x: 500,
  duration: 2,
});