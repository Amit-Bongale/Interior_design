function headlineAnimation(){
    let Headlines = document.querySelectorAll('.headlineanimation');
    Headlines.forEach(function(Headline) {
        let headlineText = Headline.textContent;
        let splittedText = headlineText.split("");
        let content = "";
        splittedText.forEach(function(element) {
            content += `<span>${element}</span>`;
        });
        Headline.innerHTML = content;

        gsap.from(Headline.querySelectorAll("span"), {
            x:50,
            opacity:0,
            duration:0.5,
            delay:0.2,
            stagger:0.05,
            scrollTrigger:{
                trigger: Headline,
                start:"top 90%",
            },
        })
    });
}

headlineAnimation();


document.querySelectorAll('.count-animation').forEach((function(element){
    gsap.from(element, {
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
            trigger: element,
            start: "top 98%",
        },
    });
}))



document.querySelectorAll('.scale-up').forEach(function(el) {
    gsap.from(el, {
        scale: 0.5,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        stagger: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 100%",
        },
    });
});


document.querySelectorAll('.fade-up').forEach(function(el) {
    gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        stagger: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 100%",
        },
    });
});

document.querySelectorAll('.fade-left').forEach(function(el) {
    gsap.from(el, {
        x: -50,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        stagger: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 100%",
        },
    });
});

document.querySelectorAll('.fade-right').forEach(function(el) {
    gsap.from(el, {
        x: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        stagger: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 100%",
        },
    });
});

document.querySelectorAll('.slide').forEach(function(el) {
    gsap.to(el , {
        y:130,
        scrollTrigger:{
            scrub:1,
            trigger: el,
            start: "top 95%"
        },
    })
})



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  // Only run on md and above
  mm.add("(min-width: 768px)", () => {
    // Animate headline
    gsap.from(".headlineanimation", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".headlineanimation",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Slide effect for each element with .slide
    document.querySelectorAll(".about-slide").forEach((el) => {
      gsap.to(el, {
        y: 130,
        scrollTrigger: {
          scrub: 1,
          trigger: el,
          start: "top 95%"
        }
      });
    });
  });

  // Optional: small screen animations
  mm.add("(max-width: 768px)", () => {
    gsap.from(".headlineanimation", {
      opacity: 0,
      duration: 0.6
    });
    // Skip .slide animation for mobile
  });
});





