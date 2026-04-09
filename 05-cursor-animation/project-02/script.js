const tl = gsap.timeline({
  delay: 0.5,
  onComplete: () => {
    gsap.to("#nav-btn", {
      y: -6,
      duration: 0.6,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.to(".hero-scroll-hint", {
      y: 8,
      ease: "bounce.out",
      yoyo: true,
      repeat: -1,
      duration: 0.8,
    });
  },
});

tl.from(".nav-logo", {
  x: -300,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
})
  .from(
    "#nav-btn",
    {
      x: 300,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.5",
  )
  .from(
    ".nav-links li",
    {
      y: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.4",
  )
  .from("#text-1", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
  .from(
    "#text-2",
    {
      x: 800,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.6",
  )
  .from(
    "#text-3",
    {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    },
    "-=0.6",
  )
  .from(
    ".hero-sub",
    {
      opacity: 0,
      scale: 0.2,
      duration: 1,
      ease: "back.out(1.7)", // ✅ "back" ease gives a nice pop feel for scale
    },
    "-=0.4",
  )
  .from(
    "#hero-btn1",
    {
      x: -200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.4",
  )
  .from(
    "#hero-btn2",
    {
      x: 200,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "<",
  ) // ✅ same time as btn1
  .from(
    ".hero-scroll-hint",
    {
      opacity: 0,
      scale: 0.2,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.2",
  );

// this is for the cursor animation

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  let X = e.clientX;
  let Y = e.clientY;

  gsap.to("#cursor", {
    x: X,
    y: Y,
  });
});

// Making the cursor animation while hovering on the image

const imgBox = document.querySelectorAll(".img-box");
const cursorText = document.getElementById("cursor-text");

imgBox.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    cursorText.style.display = "flex";
    gsap.to("#cursor", {
      width: 90, // ← grow the circle
      height: 90, // ← instead of scale
      backgroundColor: "#c8f04d",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

imgBox.forEach((box) => {
  box.addEventListener("mouseleave", () => {
    cursorText.style.display = "none";
    gsap.to("#cursor", {
      width: 30, // ← shrink back
      height: 30,
      backgroundColor: "white",
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
