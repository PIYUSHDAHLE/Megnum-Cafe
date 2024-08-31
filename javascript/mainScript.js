function smoothScrolling() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

smoothScrolling();
// page1

var tl = gsap.timeline();
tl.to(".img1", {
  opacity: 1,
  duration: 0.7,
  y: "10%",
})

  .to(".img2", {
    opacity: 1,
    duration: 0.7,
    y: "10%",
  })
  .to(".img3", {
    opacity: 1,
    duration: 0.7,
    y: "10%",
  })
  .to(".page1 .right h1", {
    opacity: 1,
    duration: 0.35,
   scale:"1.2"
  })
  .to(".page1 .right p", {
    opacity: 1,
    duration: 0.35,
    x:"1%",
    stagger:0.5,
    ease: "power2.out"
  })


  // page 2

  gsap.to(".page2 video",{
    width:'100%',
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      start:"top 0",
      end:'top -70%',
      scrub:2,
      pin:true,
      markers:false
    }
  })

  // page 3
  
  gsap.to(".page3 h1",{
    transform:'translateX(-110%)',
    scrollTrigger:{
      trigger:".page3",
      scroller:"body",
      start:"top 0",
      end:"top -150%",
      scrub:3,
      pin:true,
      markers:false
    }
  })

  // page4

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: "body",
      start: "top -13%",
      end: "top -80%",
      scrub: 1,
      pin: true,
    },
  });

  tl.to(".page4-heading", {
    gap: "500px",
    duration: 0.6,
  });
  tl.to(".page4 .page4-video", {
    opacity: 1,
    duration: 0.5,
  });
  tl.to(".page4 .page4-video", {
    scale: 3,
    top: "45%",
    left: "35%",
    duration: 1,
  });

// page 5

gsap.from(".page5 h1",{
  scale:1.3,
  opacity:0,
  duration:0.6,
  scrollTrigger:{
    trigger:".page5 h1",
    scroller:"body",
    markers:false,
    start:"top 50%",
    end:"top 40%",
    scrub:2
  }
})

gsap.from(".page5 .cards-section .card",{
  y:130,
  opacity:0,
  duration:0.8,
  stagger:0.3,
  scrollTrigger:{
    trigger:".cards-section .card",
    scroller:"body",
    markers:false,
    start:"top 70%",
    end:"top 40%",
    scrub:2
  }
})

// page6

gsap.from(".page6 > h1",{
  scale:1.3,
  opacity:0,
  duration:0.6,
  scrollTrigger:{
    trigger:".page6 > h1",
    scroller:"body",
    markers:false,
    start:"top 50%",
    end:"top 40%",
    scrub:2
  }
})


var ab = gsap.timeline({
  stagger:0.6,
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start: "top -13%",
    end: "top -80%",
    scrub: 2,
    pin: true,
  },
});

ab.to(".page6 .star", {
   opacity :1,
   scale: 1.5,
   rotate:"350deg",
  duration: 0.6,
});
ab.to(".content1, .pic1", {
   opacity :1,
   scale: 1,
  duration: 0.6,
});
ab.to(".content2, .pic2", {
   opacity :1,
   scale: 1,
  duration: 0.6,
});
ab.to(".content3, .pic3", {
   opacity :1,
   scale: 1,
  duration: 0.6,
});
ab.to(".content4, .pic4", {
   opacity :1,
   scale: 1,
  duration: 0.6,
});
