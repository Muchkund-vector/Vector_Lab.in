var popup = document.querySelectorAll("#popup");
var popup1 = document.querySelectorAll("#popup-1");


gsap.from(popup, {
    scrollTrigger: {
        trigger: "#page3",
        start: "top center",
        end: "bottom center",
        // markers: true,
        // scrub: 3,
    },
    scale : 0 ,
    rotate:  30,
    duration: 1,
    ease: "power3",
    stagger: 0.2,
});


gsap.from(popup1, {
    scrollTrigger: {
        trigger: "#page4",
        start: "top center",
        end: "bottom center",
        // markers: true,
        // scrub: 3,
    },
     y: 50,
     opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.1,
});



var tl = gsap.timeline({ paused: true }); // Create a paused timeline

popup.forEach((val, index) => {
    val.addEventListener("mouseenter", () => {
        tl.clear(); // Clear previous animations in the timeline
        tl.to(popup[index], {
            rotate: 2,
            duration: 0.1, // Short duration for a quick shake
            ease: "power3.inOut",
            yoyo: true, // Enables back-and-forth motion
            repeat: 3, // Shake 3 times
        });
        tl.play(); // Play the timeline
    });
});
