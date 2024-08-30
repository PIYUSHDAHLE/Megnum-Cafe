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
      markers:true
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
      markers:true
    }
  })