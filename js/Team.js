const Team = [
  {
    name: "Akanksha Dhole",
    linkedin: "",
    github: "",
    image: "./assets/default profile picture.jpeg",
    Num : false,
  },
  {
    name: "Aditya Janrao",
    linkedin: "https://www.linkedin.com/in/aditya-janrao-2579542b9/",
    github: "https://github.com/adijan2204",
    image: "./assets/Aditya Janrao.jpg",
    Num : true,
    
  },
  {
    name: "Priyanshu Kayarkar",
    linkedin: "https://www.linkedin.com/in/priyanshu-li/",
    github: "https://github.com/Priyanshudotdev",
    image: "./assets/Priyanshu.jpg",
    Num : false,
  },

  {
    name: "Akshata Parghane",
    linkedin: "https://www.linkedin.com/in/akshataparghane/",
    github: "https://github.com/Akshataparghane",
    image: "./assets/Akshata Parghane.jpg",
    Num : true,
  },
  {
    name: "Chirayu Patle",
    linkedin: "https://www.linkedin.com/in/chirayu-patle-a78502290/",
    github: "https://github.com/ChirayuPatle",
    image: "./assets/chirayu.png",
    Num : true,
  },
  {
    name: "Prerna Rahangdale",
    linkedin: "https://www.linkedin.com/in/prerna-rahangdale-b2b7ab281",
    github: "https://github.com/Prernarahangdale05 ",
    image: "./assets/prena101.jpg",
    Num : true,
  },
  {
    name: "Muchkundraje Thote",
    linkedin: "https://www.linkedin.com/in/muchkund-thote/",
    github: "https://github.com/MUCHKUNDRAJE",
    image: "./assets/Muchkund.jpg",
    Num : true,
  },
];

var team = document.querySelector(".Team-wrapper");

Team.forEach((member) => {


 
 if( member.Num)
 {
  team.innerHTML += `

<div id="popup-1" class="position  h-80 w-72  rounded-xl ">
        
          <div class="h-64 w-72 bg-green-100 rounded-xl overflow-hidden border-2 relative">
            <img class="h-full w-full object-cover object-top " src="${member.image}" alt="">
          </div>
      
  
        <div class="p-2 flex items-center justify-between">
        <h3 class="text-base">${member.name}</h3>
        <div class="flex ">
                  <a href="${member.linkedin}"> <i class="ri-linkedin-box-fill text-2xl"></i></a>   
                  <a href="${member.github}"><i class="ri-github-fill text-2xl"></i></i></a>  
        </div>
        </div>
     </div>


  `;

 }else{

  
  team.innerHTML += `

  <div id="popup-1" class="h-80 w-72  rounded-xl ">
        
          <div class="h-64 w-72 bg-green-100 rounded-xl overflow-hidden border-2 relative">
            <img class="h-full w-full object-cover" src="${member.image}" alt="">
          </div>
      
  
        <div class="p-2 flex items-center justify-between">
        <h3 class="text-base">${member.name}</h3>
        <div class="flex ">
        <a href="${member.linkedin}"> <i class="ri-linkedin-box-fill text-2xl"></i></a>   
         <a href="${member.github}"><i class="ri-github-fill text-2xl"></i></i></a>     
  
        </div>
        </div>
     </div>



`;

 }

});

