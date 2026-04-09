gsap.to("#page2 h1", {
  transform: "translateX(-220%)",
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2",
    markers: true,
    start: "top 0%",
    end: "top -400%",
    pin: true,
    scrub: 2,
  },
});
