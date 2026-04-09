function cursorAnimation() {
  const cursorElement = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.clientX,
      y: e.clientY,
      duration: 1,
      ease: "power2.out",
    });
  });
}

function animateNavbar() {
  const tl = gsap.timeline();

  tl.from(
    ".logo",
    {
      y: -200,
      duration: 0.5,
      delay: 0.3,
      opacity: 0,
    },
    "start",
  )
    .from("#nav-links li", {
      y: -200,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    })
    .from(
      "#nav-btn",
      {
        y: -200,
        duration: 0.5,
        opacity: 0,
      },
      "-=0.5",
    );

  tl.from(".hero p.gradient", {
    opacity: 0,
    y: -20,
    duration: 0.8,
    ease: "power2.out",
  })

    // ── 2. MAIN HEADING ("Night Live 2026") ─────────────────
    .from(
      ".hero h1.gradient",
      {
        opacity: 0,
        rotateX: 25,
        rotateZ: -4,
        y: 60,
        transformOrigin: "left center",
        transformPerspective: 1000,
        duration: 1.4,
        ease: "power4.out",
      },
      "-=0.3",
    )

    // ── 3. BUTTON ────────────────────────────────────────────
    .from(
      ".hero-btn",
      {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.7,
        ease: "back.out(1.7)",
      },
      "-=0.8",
    )

    // ── 4. STATUS BAR ITEMS (stagger — ek ek karke aayenge) ──
    .from(
      ".status p",
      {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15, // har p ke beech 0.15s delay
      },
      "-=0.4",
    );
}

function animateHero() {
  const tl = gsap.timeline();

  tl.from(".hero p.gradient", {
    y: -20,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out" /* for more easing functions, check out https://greensock.com/docs/v3/Eases */,
  });

  tl.from(".hero h1.gradient", {
    opacity: 0,
    rotateX: 60,
    rotateZ: -90,
    y: 60,
    duration: 1.5,
    ease: "power4.out",
  });

  tl.from(".hero-btn", {
    y: -20,
    duration: 0.7,
    yoyo: true,
    repeat: -1,
  });
}

// Animating the hero heading text
function animateHeroHeading() {
  const headingElement = document.getElementById("heading");
  const headingText = headingElement.textContent;

  let newText = "";
  const textArray = headingText.split("");
  const length = textArray.length;
  console.log(length);

  const halfLength = length / 2;

  textArray.forEach((elem, id) => {
    // directly I will not the concatenate the string I will add condition for animation on the text from left and right both side
    // newText = newText + `<span class=${id}>${elem}</span>`;

    if (id <= halfLength) {
      newText = newText + `<span class='left-span'>${elem}</span>`;
    } else {
      newText = newText + `<span class='right-span'>${elem}</span>`;
    }
  });

  //   console.log(newText)
  headingElement.innerHTML = newText;

  //   gsap.from("#heading span", {
  //     y: 100,
  //     duration: 1,
  //     stagger: 0.1 /* here stagger means  */,
  //     yoyo: true,
  //     repeat: -1,
  //   }); -> we don't need to do this

  gsap.from("#heading .left-span", {
    delay: 1,
    y: 100,
    duration: 0.6,
    stagger: 0.1,
  });
  gsap.from("#heading .right-span", {
    delay: 1,
    y: 100,
    duration: 0.6,
    stagger: -0.1,
  });
}

function aboutImageAnimation() {
  const aboutImage = document.getElementById("about-img");

  aboutImage.addEventListener("mouseenter", (e) => {});
  aboutImage.addEventListener("mouseleave", (e) => {});
}

function animateAbout() {
  gsap.from(".about .left h2", {
    opacity: 0,
    scale: 0,
    x: -300,
    y: -100,
    duration: 0.5,
    ease: "power.out",
    scrollTrigger: {
      trigger: ".about .left",
      scrub: 0.5,
      // markers: true,
      start: "top 80%",
      end: "top 30%",
    },
  });

  gsap.from(".about .left h3, .about .left p", {
    opacity: 0,
    x: -50,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".about .left p",
      scrub: 1,
      start: "top 80%",
      end: "top 30%",
    },
  });

  gsap.from(".about .right img", {
    opacity: 0,
    x: 80,
    scale: 0.95,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about .right",
      scrub: 1,
      start: "top 80%",
    },
  });

  gsap.from(".about-card", {
    opacity: 0,
    y: 40,
    scale: 0.9,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".about-card",
      start: "top 90%",
      scrub: 1,
      start: "top 90%",
    },
  });
}

function animateAboutImage() {
  const aboutImage = document.getElementById("about-img");
  const cursor = document.getElementById("cursor");

  aboutImage.addEventListener("mouseenter", () => {
    gsap.to("#cursor", {
      width: 180,
      height: 220,
      borderRadius: "12px",
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
    cursor.classList.add("show-img");
  });

  aboutImage.addEventListener("mouseleave", () => {
    gsap.to("#cursor", {
      width: 40,
      height: 40,
      borderRadius: "50%",
      duration: 0.6,
      ease: "power2.in",
    });
    cursor.classList.remove("show-img");
  });
}

function animateArtist() {
  // remove the cursor box when I enter into the artist section
  const cursor = document.getElementById("cursor");
  const artistSection = document.getElementById("artist-section");

  artistSection.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
  });
  artistSection.addEventListener("mouseleave", () => {
    cursor.style.display = "flex";
  });

  gsap.from(".artists .section-title", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".artists .section-title",
      scrub: 1,
      start: "top 80%",
    },
  });

  gsap.to(".left-artist", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".left-artist",
      scrub: true,
      start: "top 50%",
    },
  });
}

function animateGallery() {
  // ── 1. INTRO TEXT ────────────────────────────────────────
  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery-intro",
      scrub: 1,
      start: "top 80%",
    },
  });

  introTl
    .from(".intro-top", {
      opacity: 0,
      y: -100,
      duration: 0.7,
      ease: "power2.out",
    })
    .from(
      ".intro-heading",
      {
        opacity: 0,
        x: -400,
        duration: 2,
        ease: "power4.out",
      },
      "start",
    )
    .from(
      ".intro-sub",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      },
      "start",
    )
    .from(
      ".intro-scroll-hint",
      {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
      },
      "start",
    );

  // ── 2. HORIZONTAL SCROLL SETUP ───────────────────────────
  const wrapper = document.querySelector("#gallery-img-wrapper");
  const images = document.querySelectorAll("#gallery-img-wrapper img");
  const totalScrollWidth = wrapper.scrollWidth - window.innerWidth;

  // Gallery tween — variable me store kara taaki images isko reference kar sakein
  const galleryTween = gsap.to(wrapper, {
    x: -totalScrollWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".gallery-wrapper",
      start: "top 10%",
      end: () => `+=${totalScrollWidth + 200}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  // ── 3. EACH IMAGE ANIMATION ───────────────────────────────
  images.forEach((img, i) => {
    gsap.from(img, {
      opacity: 0,
      scale: 0.8,
      // Alternating direction — even images neeche se, odd images upar se
      y: i % 2 === 0 ? 80 : -80,
      rotation: i % 2 === 0 ? -5 : 5, // thoda tilt bhi
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: img,
        containerAnimation: galleryTween, // horizontal scroll ke andar trigger
        start: "left 85%", // jab image viewport ke 85% pe aaye
        toggleActions: "play none none none",
      },
    });
  });
}

function animateTextSection() {
  const textElement = document.getElementById("anim-big");
  const textArray = textElement.textContent.split("");
  console.log(textArray);

  let newText = "";
  const arrayLength = textArray.length;
  console.log(arrayLength);

  textArray.forEach((char, index) => {
    newText = newText + `<span>${char}</span>`;
  });

  textElement.innerHTML = newText;

  gsap.to("#anim-big span", {
    y: -50,
    duration: 0.6,
    ease: "sine.inOut",
    stagger: {
      each: 0.05,
      repeat: -1,
      yoyo: true,
    },
    repeat: -1,
  });
}
function animateTextSection_SVG() {
  const section = document.getElementById("animation-text-section");

  const cursor = document.getElementById("cursor");
  section.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
  });

  section.addEventListener("mousemove", (e) => {
    gsap.to("#blob", {
      x: e.clientX - 60,
      y: e.clientY - 60,
      duration: 0.3,
    });
  });
  section.addEventListener("mouseleave", (e) => {
    cursor.style.display = "flex";
    gsap.to("#blob", {
      x: 0,
      y: 0,
    });
  });
}

function animateFooter() {
  const footer = document.getElementById("footer");
  const cursor = document.getElementById("cursor");
  const logo = document.getElementById("footer-logo");
  const image = document.getElementById("footer-logo-img");

  // ── Cursor hide/show ──────────────────────────────────────
  footer.addEventListener("mouseenter", () => {
    cursor.style.display = "none";
  });
  footer.addEventListener("mouseleave", () => {
    cursor.style.display = "flex";
  });

  // ── Logo hover — image follow karo ───────────────────────
  logo.addEventListener("mouseenter", () => {
    gsap.to(image, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  });

  logo.addEventListener("mousemove", (e) => {
    gsap.to(image, {
      x: e.clientX - footer.getBoundingClientRect().left - 150, // footer ke relative
      y: e.clientY - footer.getBoundingClientRect().top - 300,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  logo.addEventListener("mouseleave", () => {
    gsap.to(image, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
    });
  });

  // ── ScrollTrigger Animations ──────────────────────────────
  gsap.from(".footer-logo", {
    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-tagline", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-divider", {
    scaleY: 0,
    transformOrigin: "top center",
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-nav-item", {
    opacity: 0,
    x: -30,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-newsletter", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".social-icon", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 95%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-event-info, .footer-copy", {
    opacity: 0,
    y: 20,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top 95%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".footer-ghost-text", {
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
}
cursorAnimation();
animateHeroHeading();
animateNavbar();
animateHero();
animateAbout();
animateAboutImage();
animateArtist();
animateGallery();
animateTextSection();
animateTextSection_SVG();
animateFooter();
footerLogoAnimation();
