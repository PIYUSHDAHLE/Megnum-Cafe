
$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(4000, 20, "alphabet", true);
  });
  
  
  var tl = gsap.timeline();
  tl.to(".box", {
    opacity: 0,
    delay: 4,
  })
  
    .to(".loader", {
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })

    .to(".loader",
      {
        y: "-100%",
        duration: 1,
      })