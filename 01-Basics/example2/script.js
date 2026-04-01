/*
Lesson 2: Multiple elements with one gsap.to() call.
Instead of writing separate tweens with different delays, stagger handles the timing pattern.
*/
gsap.to(".box", {
  x: 500, // Move each box to the right.
  duration: 1, // Each box takes 1 second.
  repeat: -1, // Infinite loop.
  yoyo: true, // Move forward, then backward.
  stagger: 1, // Next box starts 1 second after the previous one.
});
