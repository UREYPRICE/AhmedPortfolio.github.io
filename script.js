function myFunction() {
  var x = document.querySelector(".mobile-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const sectionData = [
  {
    img: {
      src: "images/desktop-Snapshoot1.svg",
      alt: "tonic project preview",
    },
    title: "Tonic",
    type: ["CANOPY", "BACKEND DEV", "2015"],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    img: {
      src: "images/desktop-Snapshoot2.svg",
      alt: "Multi-Post Stories project preview",
    },
    title: "Multi-Post Stories",
    type: ["FACEBOOK", "Full Stack Dev", "2015"],
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript"],
  },
  {
    img: {
      src: "images/desktop-Snapshoot3.svg",
      alt: "Facebook 360 project preview",
    },
    title: "Facebook 360",
    type: ["CANOPY", "BACKEND DEV", "2015"],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript"],
  },
  {
    img: {
      src: "images/desktop-Snapshoot4.svg",
      alt: "Uber Navigation project preview",
    },
    title: "Uber Navigation",
    type: ["UBER", "Lead Developer", "2018"],
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    technologies: ["HTML", "Ruby on Rails", "CSS", "Javascript"],
  },
];


let workSection = document.querySelector("#portfolio-id");

console.log(workSection);

 workSection.innerHTML += `
   <article class="card flex white-back">
     <div class="desktop-wrok-img">
       <img
         src="images/desktop-Snapshoot1.svg"
         alt="tonic project preview"
       />
     </div>
     <img
       class="mobile-work-img"
       src="./images/project_1.png"
       alt="tonic project preview"
     />
     <div class="desktop-work-detail">
       <h3>Tonic</h3>
       <ul class="flex project_details">
         <li>CANOPY</li>
         <li>BACKEND DEV</li>
         <li>2015</li>
       </ul>
       <p>
         A daily selection of privately personalized reads; no accounts
         or sign-ups required.
       </p>
       <ul class="flex project_coding_langs">
         <li>html</li>
         <li>css</li>
         <li>javascript</li>
       </ul>
       <button class="preview_button outlinings">See Project</button>
     </div>
   </article>
   

   <article class="desktop-post reverse-work card flex white-back">
     <div class="desktop-wrok-img">
       <img
         src="images/desktop-Snapshoot2.svg"
         alt="tonic project preview"
       />
     </div>
     <img
       class="mobile-work-img"
       src="./images/project_2.png"
       alt="Multi-Post project preview"
     />
     <div class="desktop-work-detail">
       <h3>Multi-Post Stories</h3>
       <ul class="flex project_details">
         <li>FACEBOOK</li>
         <li>FULL Stack DEV</li>
         <li>2015</li>
       </ul>
       <p>
         Experimental content creation feature that allows users to add
         to an existing story over the course of a day without spamming
         their friends.
       </p>
       <ul class="flex project_coding_langs">
         <li>html</li>
         <li>Ruby on rails</li>
         <li>css</li>
         <li>javascript</li>
       </ul>
       <button class="preview_button outlinings">See Project</button>
     </div>
   </article>
  ` 