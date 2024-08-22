
$(document).ready(function () {
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
      },
      "up"
    )

      .to(
        ".home",
        {
          opacity: 1,
          delay: -1.7,
          ease: "Expo.easeInOut",
        },
        "logo-0"
      )
      .to(
        "#layout",
        {
          opacity: 1,
          delay: -1.8,
          ease: "Expo.easeInOut",
        },
        "logo-0"
      )
      .to(
        "#logo-0",
        {
          opacity: 1,
          scale: 2,
          delay: -1.4,
          ease: "Expo.easeInOut",
          rotationY: "+=15",
          duration: 3,
          rotationX: "+=15",
          rotationZ: "+=15",
        },
        "up"
      )
    
      .from(
        "#megnum-1, #megnum-2,#megnum-3, #megnum-4,#megnum-5, #megnum-6 ",
        {
          opacity: 0,
          duration: 1,
          scale: 0,
          top: "40%",
          left: "47%",
        },
        "up"
      );
    
    var tl2 = gsap.timeline();
    
    document.querySelectorAll("#explore").forEach(function (elem) {
      elem.addEventListener("click", function () {
        tl2
          .to(
            "#megnum-1",
            {
              left: "-15%",
              top: "-15%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to(
            "#megnum-2",
            {
              top: "-20%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to(
            "#megnum-3",
            {
              left: "115%",
              top: "-20%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to(
            "#megnum-4",
            {
              left: "115%",
              top: "110%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to(
            "#megnum-5",
            {
              left: "35%",
              top: "120%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to(
            "#megnum-6",
            {
              left: "-15%",
              top: "80%",
              scale: "2",
              rotate: "25deg",
              ease: "ease.out",
              duration: 1,
              opacity: 0,
            },
            "sw"
          )
          .to("#logo-0", {
            width: "80vw",
            top: "-10%",
            rotate: "360deg",
            ease: "ease.out",
            duration: 1,
            opacity: 0,
            delay: "-1",
          })
          .to(
            "#layout",
            {
              opacity: 0,
            },
            "sw"
          )
          .to(".home", {
            opacity: 0,
          });
      });
    });
         
    function example() {
      window.location.href = "again.html";
    }
    