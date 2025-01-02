
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', 
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


document.querySelector('#Our_Service_button').addEventListener('click', () => {
  const target = document.querySelector('#page2')
  lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })
})
document.querySelector('#Our_About_button').addEventListener('click', () => {
  console.log("click")
  const target = document.querySelector('#page3')
  lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })
})

document.querySelector('#Our_Team_button').addEventListener('click', () => {
  console.log("click")
  const target = document.querySelector('#page4')
  lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })
})

document.querySelector('#contact-us-Button').addEventListener('click', () => {
  console.log("click")
  const target = document.querySelector('#page5')
  lenis.scrollTo(target, { offset: 0, immediate: false,duration: 1 })
})

