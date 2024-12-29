var menu_button_slider = document.querySelector("#menu-button")
var menu_slider = document.querySelector("#sliding-window")
var menu_button_close = document.querySelector(".ri-close-large-fill")

menu_button_slider.addEventListener("click", () => { 
   gsap.to(menu_slider, {
       x: 0,
       duration: 1,
       delay:0.2,
       ease: "power4",
   });
});
menu_button_close.addEventListener("click", () => {   
   gsap.to(menu_slider, {
       x:"100%",
       duration: 1,
       delay:0.2,
       ease: "power4",
   });
});