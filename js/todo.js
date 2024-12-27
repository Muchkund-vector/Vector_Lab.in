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