let path = "M 20 200 Q 700 20 1515 200";

let finalPath = "M 20 200 Q 700 200 1515 200";

let canvas = document.getElementById("canvas");

canvas.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  console.log(x);
  console.log(y);

  path = `M 20 200 Q ${x} ${y} 1515 200`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 1,
    ease: "power1.out",
  });
});

canvas.addEventListener('mouseleave', () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1,
    ease: "elastic.out(1,0.1)",
  });
});
