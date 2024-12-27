
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

  var tasks = document.querySelectorAll("#task");
var icons = document.querySelectorAll("#task i");
var h4s = document.querySelectorAll("#task h4");

tasks.forEach((val, index) => {
    let button = 0;

    val.addEventListener("click", () => {
        if (button == 0) {
            h4s[index].style.opacity = 0.5;
            icons[index].className = "ri-checkbox-circle-fill";
            icons[index].style.color = "green";
            console.log("click");
            button++;
        } else {
            h4s[index].style.opacity = 1;
            icons[index].className = "ri-checkbox-circle-line";
            icons[index].style.color = "black";
            console.log("click");
            button = 0;
        }
    });
});

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

//   tl.from('#landing-page-left-content1', { 
//     x: 10,
//     duration: 0.8,
//     delay: 1,
//     ease: 'power3'

//   })

// color:#ABF0FF #FEEDD1


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

const calendarContainer = document.querySelector("#calender");
const weekHeader = document.querySelector("#week");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Add week headers
daysOfWeek.forEach((day) => {
  weekHeader.innerHTML += `<div>${day}</div>`;
});

// Function to get dates and days of the week
function getDatesAndWeeks(year, month) {
  const datesAndWeeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  for (let date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
    datesAndWeeks.push({
      date: date.getDate(), // Get day of the month
      day: daysOfWeek[date.getDay()], // Get day of the week
    });
  }

  return datesAndWeeks;
}

const currentDate = new Date();
const dayOfMonth = currentDate.getDate(); // Extract the day of the month (1-31)
console.log(dayOfMonth);

const year = 2024;
const month = 11; // December
const calendarData = getDatesAndWeeks(year, month);

// Add empty divs for days before the first day of the month
const firstDayOfWeek = new Date(year, month, 1).getDay();
for (let i = 0; i < firstDayOfWeek; i++) {
  calendarContainer.innerHTML += `<div></div>`;
}

// Add dates to the calendar
calendarData.forEach((entry) => {
  if (entry.date == dayOfMonth) {
    calendarContainer.innerHTML += `
        <div class="h-10 w-10 flex items-center justify-center mt-1 bg-blue-300 rounded ">
            ${entry.date}
        </div>`;
  } else if (entry.date == 4) {
    calendarContainer.innerHTML += `
        <div class="clicked h-10 w-10 flex items-center justify-center mt-1 bg-red-300 rounded-3xl relative cursor-pointer ">
            ${entry.date}
            <div class="div absolute top-10  bg-[#D6D5FF] rounded-xl p-1 opacity-0 whitespace-nowrap border-2 "> <p> Maths Test </p> </div>
        </div>
    
        `;
  } else if (entry.date == 29) {
    calendarContainer.innerHTML += `
        <div class="clicked h-10 w-10 flex items-center justify-center mt-1 bg-red-300 rounded-3xl relative cursor-pointer ">
            ${entry.date}
            <div class="div absolute top-10  bg-[#D6D5FF] rounded-xl p-1 opacity-0 whitespace-nowrap border-2 pointer-event-none "> <p> English Revision </p> </div>
        </div>
    
        `;
  } else {
    calendarContainer.innerHTML += `
            <div class="days h-10 w-10 flex items-center justify-center mt-1 rounded">
                ${entry.date}
            </div>`;
  }
});


