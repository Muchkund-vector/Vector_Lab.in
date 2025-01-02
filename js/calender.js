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

const year = 2025;
const month = new Date().getMonth()  ; // December
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


const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.querySelector(".date-week h3").innerHTML += Month[month] + " " + year;