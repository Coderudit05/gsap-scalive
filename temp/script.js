document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // ─── Lenis Smooth Scroll Setup ────────────────────────────
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // ─── Elements ─────────────────────────────────────────────
  const galleryItems = gsap.utils.toArray(".gallery-item");
  const imageContent = document.querySelector(".wrapper-image img");
  const containerHorizontal = document.querySelector(".list-gallery");

  // ─── Horizontal Scroll Tween ──────────────────────────────
  const calculateXPercent = 50 + window.innerWidth / 50;

  const tweenContainer = gsap.to(containerHorizontal, {
    xPercent: -calculateXPercent,
    ease: "none",
    scrollTrigger: {
      trigger: ".scrolling",
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  // ─── Gallery Item Triggers ────────────────────────────────
  galleryItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: "left center",
      end: "right center",
      containerAnimation: tweenContainer,
      invalidateOnRefresh: true,
      onEnter: () => {
        const src = item.querySelector("img").getAttribute("src");
        imageContent.setAttribute("src", src);
      },
      onEnterBack: () => {
        const src = item.querySelector("img").getAttribute("src");
        imageContent.setAttribute("src", src);
      },
    });
  });
});