gsap.registerPlugin(ScrollTrigger);

// ================================
// 1. STICKY NAVBAR
// ================================
function initNavbar() {
  const airpodsNav = document.getElementById("airpods-nav");
  ScrollTrigger.create({
    trigger: airpodsNav,
    start: "top top",
    onEnter: () => {
      airpodsNav.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "backdrop-blur-md",
        "bg-black/70",
        "z-50",
      );
    },
    onLeaveBack: () => {
      airpodsNav.classList.remove(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "backdrop-blur-md",
        "bg-black/70",
        "z-50",
      );
    },
  });
}

// ================================
// 2. HERO CANVAS
// ================================
function initHeroCanvas() {
  const heroCanvas = document.getElementById("hero-canvas");
  const heroContext = heroCanvas.getContext("2d");

  heroCanvas.width = 1158;
  heroCanvas.height = 770;
  heroCanvas.style.width = "80vw";
  heroCanvas.style.maxWidth = "900px";
  heroCanvas.style.height = "80vh";
  heroCanvas.style.marginBottom = "50px";

  const heroFrameCount = 147;
  const heroObj = { frame: 0 };

  const getHeroFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${String(index + 1).padStart(4, "0")}.jpg`;

  const heroImageArray = [];
  for (let i = 0; i < heroFrameCount; i++) {
    const img = new Image();
    img.src = getHeroFrame(i);
    heroImageArray.push(img);
  }

  function renderHero() {
    heroContext.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    heroContext.drawImage(heroImageArray[heroObj.frame], 0, 0);
  }

  heroImageArray[0].onload = renderHero;

  gsap.to(heroObj, {
    frame: heroFrameCount - 1,
    snap: "frame",
    ease: "none",
    onUpdate: renderHero,
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "+=4000",
      scrub: 1,
      pin: true,
    },
  });
}

// ================================
// 3. HERO TEXT
// ================================
function initHeroText() {
  const heroText = document.getElementById("hero-text");
  const mgs1 = document.getElementById("msg-1");
  const mgs2 = document.getElementById("msg-2");
  const mgs3 = document.getElementById("msg-3");
  const mgs4 = document.getElementById("msg-4");

  gsap.set([mgs1, mgs2, mgs3, mgs4], { opacity: 0 });
  gsap.set(mgs1, { x: -200 });
  gsap.set(mgs2, { x: 200 });
  gsap.set(mgs3, { x: -200 });
  gsap.set(mgs4, { x: 200 });

  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "+=4000",
      scrub: 0.5,
    },
  });

  heroTl
    .to(heroText, { y: -200, opacity: 0, duration: 1 })
    .to(mgs1, { opacity: 1, x: 0, y: -200, duration: 1 })
    .to(mgs1, { opacity: 0, x: -200, y: -200, duration: 1 })
    .to(mgs2, { opacity: 1, x: 0, y: -50, duration: 1 })
    .to(mgs2, { opacity: 0, x: 200, y: -200, duration: 1 })
    .to(mgs3, { opacity: 1, x: 0, y: -50, duration: 1 })
    .to(mgs3, { opacity: 0, x: -200, y: -200, duration: 1 })
    .to(mgs4, { opacity: 1, x: 0, y: -50, duration: 1 })
    .to(mgs4, { opacity: 0, x: 200, y: -200, duration: 1 });
}

// ================================
// 4. COMFORT
// ================================
function initComfort() {
  const comfortCanvas = document.getElementById("comfort-canvas");
  const comfortContext = comfortCanvas.getContext("2d");

  comfortCanvas.width = 1458;
  comfortCanvas.height = 820;
  comfortCanvas.style.height = "100vh";
  comfortCanvas.style.width = "auto";

  const comfortFrameCount = 131;
  const comfortObj = { frame: 0 };

  const getComfortFrame = (index) =>
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/02-head-bob-turn/${String(index + 1).padStart(4, "0")}.jpg`;

  const comfortImagesArray = [];
  for (let i = 0; i < comfortFrameCount; i++) {
    const img = new Image();
    img.src = getComfortFrame(i);
    comfortImagesArray.push(img);
  }

  function renderComfort() {
    comfortContext.clearRect(0, 0, comfortCanvas.width, comfortCanvas.height);
    comfortContext.drawImage(comfortImagesArray[comfortObj.frame], 0, 0);
  }

  comfortImagesArray[0].onload = renderComfort;

  gsap.to(comfortObj, {
    frame: comfortFrameCount - 1,
    snap: "frame",
    ease: "none",
    onUpdate: renderComfort,
    scrollTrigger: {
      trigger: "#comfort",
      start: "top top",
      end: "+=3000",
      scrub: 1,
      pin: true,
    },
  });

  const comfortText = document.getElementById("comfort-text");
  const comfortMsg1 = document.getElementById("comfort-msg-1");
  const comfortMsg2 = document.getElementById("comfort-msg-2");
  const comfortMsg3 = document.getElementById("comfort-msg-3");
  const comfortMsg4 = document.getElementById("comfort-msg-4");
  const comfortMsg5 = document.getElementById("comfort-msg-5");

  gsap.set(
    [
      comfortText,
      comfortMsg1,
      comfortMsg2,
      comfortMsg3,
      comfortMsg4,
      comfortMsg5,
    ],
    { opacity: 0 },
  );
  gsap.set(comfortText, { x: 0 });
  gsap.set(comfortMsg1, { x: 200 });
  gsap.set(comfortMsg2, { x: -200 });
  gsap.set(comfortMsg3, { x: 200 });
  gsap.set(comfortMsg4, { x: -200 });
  gsap.set(comfortMsg5, { x: 200 });

  const comfortTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#comfort",
      start: "top top",
      end: "+=4000",
      scrub: 1,
    },
  });

  comfortTl
    .to(comfortText, { opacity: 1, x: 0, y: -50, duration: 1 })
    .to(comfortText, { opacity: 0, y: -200, duration: 1 })
    .to(comfortMsg1, { opacity: 1, x: 0, duration: 1 })
    .to(comfortMsg1, { opacity: 0, x: -200, y: -200, duration: 1 })
    .to(comfortMsg2, { opacity: 1, x: 0, duration: 1 })
    .to(comfortMsg2, { opacity: 0, x: 200, y: -200, duration: 1 })
    .to(comfortMsg3, { opacity: 1, x: 0, duration: 1 })
    .to(comfortMsg3, { opacity: 0, x: -200, y: -200, duration: 1 })
    .to(comfortMsg4, { opacity: 1, x: 0, duration: 1 })
    .to(comfortMsg4, { opacity: 0, x: 200, y: -200, duration: 1 })
    .to(comfortMsg5, { opacity: 1, x: 0, duration: 1 })
    .to(comfortMsg5, { opacity: 0, x: -200, y: -200, duration: 1 });
}

// ================================
// 5. EARTIPS
// ================================
function initEartips() {
  gsap.from("#eartip-card1", {
    x: -500,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: "#eartip-card1",
      start: "top 80%",
      end: "top 30%",
    },
  });
  gsap.from("#eartip-card2", {
    x: 500,
    opacity: 0,
    duration: 2.5,
    scrollTrigger: {
      trigger: "#eartip-card2",
      start: "top 80%",
      end: "top 30%",
    },
  });
  gsap.from("#eartip-card3", {
    y: 500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#eartip-card3",
      start: "top 80%",
      end: "top 30%",
    },
  });
}

// ================================
// 6. NOISE TEXT
// ================================
function initNoiseText() {
  const noiseCancellationText = document.getElementById(
    "noise-cancellation-text",
  );
  const charsArray = noiseCancellationText.innerText.split("");
  noiseCancellationText.innerHTML = "";

  charsArray.forEach((char) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = char;
    spanElement.style.opacity = "0.15";
    spanElement.style.display = "inline-block";
    noiseCancellationText.appendChild(spanElement);
  });

  const chars = noiseCancellationText.querySelectorAll("span");
  gsap.to(chars, {
    opacity: 1,
    stagger: 0.01,
    ease: "none",
    scrollTrigger: {
      trigger: "#noise-text",
      start: "top 60%",
      end: "bottom 60%",
      scrub: 1,
    },
  });
}

// ================================
// 7. CURSOR
// ================================
function initCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const cursorText = document.getElementById("cursor-text");

  let mouseX = 0,
    mouseY = 0;
  let ringX = 0,
    ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
    cursorText.style.left = mouseX + "px";
    cursorText.style.top = mouseY + "px";
  });

  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
  });

  const navElements = document.querySelectorAll(
    "#apple-nav a, #airpods-nav a, #airpods-nav button",
  );
  navElements.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
      cursorText.textContent = "CLICK";
    });
    elem.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
      cursorText.textContent = "";
    });
  });

  const cards = document.querySelectorAll(".group");
  cards.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-card");
      cursorText.textContent = "VIEW";
    });
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-card");
      cursorText.textContent = "";
    });
  });
}

// ================================
// 8. PAGE LOADER
// ================================

// ================================
// INIT — We are calling all the function
// ================================

initNavbar();
initHeroCanvas();
initHeroText();
initComfort();
initEartips();
initNoiseText();
initCursor();

function init_SVGAnimation() {
  const canvas = document.getElementById("svg-canvas");
  const svg = document.getElementById("svg");

  // SVG ki actual width dynamically lo
  let W = svg.getBoundingClientRect().width;

  // Teeno lines ke final paths
  let finalPath1 = `M 20 200 Q ${W / 2} 200 ${W - 20} 200`;
  let finalPath2 = `M 20 150 Q ${W / 2} 150 ${W - 20} 150`;
  let finalPath3 = `M 20 250 Q ${W / 2} 250 ${W - 20} 250`;

  // Initial paths set karo
  gsap.set("#svg-path-1", { attr: { d: finalPath1 } });
  gsap.set("#svg-path-2", { attr: { d: finalPath2 } });
  gsap.set("#svg-path-3", { attr: { d: finalPath3 } });

  // Mouse move
  canvas.addEventListener("mousemove", (e) => {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    // Main line — exactly mouse follow kare
    let path1 = `M 20 200 Q ${mouseX} ${mouseY} ${W - 20} 200`;

    // Line 2 — thoda kam bend ho
    let path2 = `M 20 150 Q ${mouseX} ${mouseY - 30} ${W - 20} 150`;

    // Line 3 — aur kam bend ho
    let path3 = `M 20 250 Q ${mouseX} ${mouseY + 30} ${W - 20} 250`;

    // Main line animate
    gsap.to("#svg-path-1", {
      attr: { d: path1 },
      duration: 0.3,
      ease: "power1.out",
    });

    // Line 2 — thoda lag ke follow kare
    gsap.to("#svg-path-2", {
      attr: { d: path2 },
      duration: 0.5,
      ease: "power1.out",
    });

    // Line 3 — aur zyada lag
    gsap.to("#svg-path-3", {
      attr: { d: path3 },
      duration: 0.7,
      ease: "power1.out",
    });

    // Dot — mouse X pe, main line pe
    gsap.to("#svg-dot", {
      attr: { cx: mouseX, cy: mouseY },
      duration: 0.3,
      ease: "power1.out",
    });
  });

  // Mouse leave — wapas straight
  canvas.addEventListener("mouseleave", () => {
    gsap.to("#svg-path-1", {
      attr: { d: finalPath1 },
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to("#svg-path-2", {
      attr: { d: finalPath2 },
      duration: 1.8,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to("#svg-path-3", {
      attr: { d: finalPath3 },
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to("#svg-dot", {
      attr: { cx: W / 2, cy: 200 },
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
    });
  });

  // ================================
  // Heading scroll animation
  // ================================
  gsap.from("#svg-heading", {
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#svg-section",
      start: "top 80%",
      end: "top 40%",
    },
  });

  // Window resize pe width update karo
  window.addEventListener("resize", () => {
    W = svg.getBoundingClientRect().width;
    finalPath1 = `M 20 200 Q ${W / 2} 200 ${W - 20} 200 `;
    finalPath2 = `M 20 150 Q ${W / 2} 150 ${W - 20} 150`;
    finalPath3 = `M 20 250 Q ${W / 2} 250 ${W - 20} 250`;
    gsap.set("#svg-path-1", { attr: { d: finalPath1 } });
    gsap.set("#svg-path-2", { attr: { d: finalPath2 } });
    gsap.set("#svg-path-3", { attr: { d: finalPath3 } });
  });
}

init_SVGAnimation();
