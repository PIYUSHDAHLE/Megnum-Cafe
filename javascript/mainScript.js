var tl = gsap.timeline();
tl.to(".img1", {
  opacity: 1,
  duration: 1,
  y: "10%",
})

  .to(".img2", {
    opacity: 1,
    duration: 1,
    y: "10%",
  })
  .to(".img3", {
    opacity: 1,
    duration: 1,
    y: "10%",
  })
  .to(".page1 .right h1", {
    opacity: 1,
    duration: 1,
   scale:"1.2"
  })
  .to(".page1 .right p", {
    opacity: 1,
    duration: 1,
    x:"1%",
    stagger:1,
    ease: "power2.out"
  })