/*
Lesson 1: Basic gsap.to() tween on a single element.
GSAP reads the current state and animates to the values below.
*/
gsap.to(".box", {
    x: 300, // Move 300px on the X-axis.
    y: 400, // Move 400px on the Y-axis.
    duration: 2, // One cycle duration in seconds.
    delay: 2, // Wait 2 seconds before starting.
    backgroundColor: "yellow", // Animate CSS background color.
    scale: 1.5, // Scale element to 150%.
    rotate: 360, // Rotate one full turn.
    repeat: 4, // Repeat 4 times after first play (total 5 cycles).
    yoyo: true, // Every alternate cycle plays in reverse.
});

/*
Quick note:
- repeat: 0  => no extra repeats
- repeat: -1 => infinite loop
*/

// Uncomment to test gsap.from() (starts from these values and goes to current styles).
// gsap.from(".box", {
//   x: 300,
//   y: 400,
//   duration: 2,
//   delay: 2,
//   backgroundColor: "yellow",
//   scale: 1.5,
// });