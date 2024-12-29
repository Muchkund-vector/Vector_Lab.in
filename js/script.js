var loader = document.querySelector('#loader-page');

var tl =  gsap.timeline();

tl.to(loader, {
    opacity: 0,
    display: 'none',
    duration: 0.8,
    delay: 1,
    ease: 'power3'
})
tl.from('#landing-page-left-content1', { 
    y: 10,
    opacity: 0,
    duration: 1,
    ease: 'power3'

  },"same")
  tl.from('#landing-page-left-content2', { 
    y: 10,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'power3'

  }, "same")




gsap.from("#Service-div", {
    scrollTrigger: {
        trigger: "#page2",
        start: "top center",
        end: "bottom center",
        // markers: true,
        scrub: 3,
    },
    y: 40,
    ease: "power4 ",
});

var services = document.querySelectorAll("#Service-div")

gsap.from( services, {
    scrollTrigger: {
        trigger: "#page2",
        start: "top center",
        end: "bottom center",
        stagger: 0.7,
        // markers: true,
       
    },
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power4",
});



