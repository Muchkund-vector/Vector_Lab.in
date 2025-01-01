var menu_button_slider = document.querySelector("#menu-button")
var menu_slider = document.querySelector("#sliding-window")
var menu_button_close = document.querySelector(".ri-close-large-fill")
var Our_Service_button_mobile = document.querySelector("#Our_Service_button-mobile")
var Our_About_button_mobile = document.querySelector("#Our_About_button-mobile")
var Our_Team_button_mobile = document.querySelector("#Our_Team_button-mobile")
var main = document.querySelector("#main")





menu_button_slider.addEventListener("click", () => { 
   gsap.to(menu_slider, {
       x: 0,
       duration: 1,
       delay:0.2,
       ease: "power4",
   });
   gsap.to(main, {
    opacity: 0.5,
    duration: 1,
    delay:0.2,
    ease: "power4",
});
main.style.pointerEvents = "none";

});



menu_button_close.addEventListener("click", () => {   
   gsap.to(menu_slider, {
       x:"100%",
       duration: 1,
       delay:0.2,
       ease: "power4",
   });
     gsap.to(main, {
    opacity: 1,
    duration: 1,
    delay:0.2,
    ease: "power4",
});
main.style.pointerEvents = "auto";
});




Our_Service_button_mobile.addEventListener("click", () => {

    gsap.to(menu_slider, {
        x:"100%",
        duration: 1,
        // delay:0.2,
        ease: "power4",
    });
    gsap.to(main, {
        opacity: 1,
        opacity: 1,
        duration: 1,
        delay:0.2,
        ease: "power4",
       });
       main.style.pointerEvents = "auto";
    const target = document.querySelector('#page2')
    lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })

 });


 Our_About_button_mobile.addEventListener("click", () => {

    gsap.to(menu_slider, {
        x:"100%",
        duration: 1,
        // delay:0.2,
        ease: "power4",
    });
    gsap.to(main, {
        opacity: 1,
        opacity: 1,
        duration: 1,
        delay:0.2,
        ease: "power4",
       });
       main.style.pointerEvents = "auto";
    const target = document.querySelector('#page3')
    lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })

 });

 Our_Team_button_mobile.addEventListener("click", () => {

    gsap.to(menu_slider, {
        x:"100%",
        duration: 1,
        // delay:0.2,
        ease: "power4",
    });
    gsap.to(main, {
        opacity: 1,
        opacity: 1,
        duration: 1,
        delay:0.2,
        ease: "power4",
       });
       main.style.pointerEvents = "auto";
    const target = document.querySelector('#page4')
    lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })

 });