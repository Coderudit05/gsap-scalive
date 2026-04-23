gsap.registerPlugin(ScrollTrigger);

function splitTextIntoChars(element) {
  const text = element.innerText;

  element.innerHTML = "";

  const chars = text.split("").map((char) => {
    const span = document.createElement("span");

    span.innerHTML = char === "" ? "nbsp;" : char;
    span.style.display = "inline-block";
    span.style.overflow = "hidden";

    element.appendChild(span);
    return span;
  });

  return chars;
}

// console.log(splitTextIntoChars(element));

function initPreloader() {
  const logoEl = document.getElementById("preloader-logo-text");

  const footerEl = document.getElementById("preloader-footer");

  const chars = splitTextIntoChars(logoEl);

  //   console.log(chars);

  gsap.set(chars, {
    yPercent: -200,
  });

  gsap.set("#preloader-bar", {
    scaleX: 0,
    transformOrigin: "left center",
  });

  gsap.set(footerEl, {
    yPercent: 300,
    opacity: 0,
  });

  //   Timeline

  const tl = gsap.timeline({ delay: 0.5 });

  tl.to(chars, {
    yPercent: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power4.inOut",
  })

    .to(
      "#preloader-bar",
      {
        scaleX: 1,
        duration: 2,
      },
      "<",
    )
    .to(
      "#preloader-footer",
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
      "0.5",
    )

    .to("#preloader", {
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    })
    .set("#preloader", { display: "none" });
}

initPreloader();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

// Lenis ko GSAP ke saath sync karna zaroori hai
// requestAnimationFrame - browser har frame pe yeh function call karta hai
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// Pehli baar manually call krenge... - phir woh khud loop karta rahega
requestAnimationFrame(raf);
