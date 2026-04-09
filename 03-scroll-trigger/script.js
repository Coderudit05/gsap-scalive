/*
const tl = gsap.timeline();

gsap.from('.box',{
  scale : 0,
  duration : 3,
  rotate : 360,
  backgroundColor : 'blue',
  
  })
  
  
  
  Note : As we can see here is one major issue which is we are not able to show the animation on scrolling time on page loading the animation is happening so what we want is we need to add .....
  
  Event we cannot give the delay because we don't know when anyone will come on that specefic page 
  
  */

gsap.from("#box1", {
  scale: 0,
  duration: 3,
  backgroundColor: "blue",

  // We don't need for the first section/first page
  // scrollTrigger: {
  //   trigger: ".page #box1",
  //   scroller: "body",
  //   markers: true,
  // },
});

gsap.from("#box2", {
  scale: 0,
  duration: 3,
  backgroundColor: "blue",
  scrollTrigger: {
    trigger: ".page #box2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 20%",
    // scrub: true,
    scrub: 2,
    pin: true,
  },
});

gsap.from("#box3", {
  scale: 0,
  duration: 3,
  backgroundColor: "blue",
  scrollTrigger: {
    trigger: ".page #box3",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 20%",
    // scrub: true,
    scrub: 2,
    pin: true,
  },
});

gsap.from("#box4", {
  scale: 0,
  duration: 3,
  backgroundColor: "blue",
  scrollTrigger: {
    trigger: ".page #box4",
    scroller: "body",
    markers: true,
    // start: "top 80%",
    // end: "top 20%",
    // scrub: true,
  },
});
