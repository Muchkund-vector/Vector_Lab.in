const Team = [
  {
    name: "Akanksha Dhole",
    linkedin: "",
    github: "",
    image: "./assets/default profile picture.jpeg",
  },
  {
    name: "Aditya Janrao",
    linkedin: "",
    github: "",
    image: "./assets/Aditya Janrao.jpg",
  },
  {
    name: "Priyanshu Kayarkar",
    linkedin: "",
    github: "",
    image: "./assets/Priyanshu.jpg",
  },

  {
    name: "Akshata Parghane",
    linkedin: "",
    github: "",
    image: "./assets/default profile picture.jpeg",
  },
  {
    name: "Chirayu Patle",
    linkedin: "",
    github: "",
    image: "./assets/Screenshot 2024-12-31 135847.png",
  },
  {
    name: "Prerna Rahangdale",
    linkedin: "",
    github: "",
    image: "./assets/default profile picture.jpeg",
  },
  {
    name: "Muchkundraje Thote",
    linkedin: "",
    github: "",
    image: "./assets/IMG_20240307_214811_459.png",
  },
];

var team = document.querySelector(".Team-wrapper");

Team.forEach((member) => {

    team.innerHTML += `

        <div id="popup-1" class="h-80 w-72  rounded-xl ">
              
                <div class="h-64 w-72 bg-green-100 rounded-xl overflow-hidden border-2 relative">
                  <img class="h-full w-full object-cover" src="${member.image}" alt="">
                </div>
            
        
              <div class="p-2 flex items-center justify-between">
              <h3 class="text-base">${member.name}</h3>
              <div class="flex ">
                <i class="ri-linkedin-box-fill text-2xl"></i>
                <i class="ri-github-fill text-2xl"></i>
              </div>
              </div>
           </div>

    
    
    `;
   





});

