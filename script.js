function myFunction() {
  var x = document.querySelector(".mobile-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let workSection = document.querySelector(".work-section-js");

console.log(workSection);

workSection.innerHTML = ` <div id="portfolio-id" class="desktop-project-container">
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
<article class="hide card flex white-back">
  <div class="desktop-wrok-img">
    <img
      src="images/desktop-Snapshoot1.svg"
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

<article class="desktop-post card flex white-back">
  <div class="desktop-wrok-img">
    <img
      src="images/desktop-Snapshoot3.svg"
      alt="tonic project preview"
    />
  </div>
  <img
    class="mobile-work-img"
    src="./images/project_2.png"
    alt="Multi-Post project preview"
  />
  <div class="desktop-work-detail">
    <h3>FACEBOOK 360</h3>
    <ul class="flex project_details">
      <li>FACEBOOK</li>
      <li>FULL Stack DEV</li>
      <li>2015</li>
    </ul>
    <p>
      Exploring the future of media in Facebook's first Virtual
      Reality app; a place to discover and enjoy 360 photos and
      videos on Gear VR.
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

<article class="desktop-post reverse-work card flex white-back">
  <div class="desktop-wrok-img">
    <img
      src="images/desktop-Snapshoot4.svg"
      alt="tonic project preview"
    />
  </div>
  <img
    class="mobile-work-img"
    src="./images/project_2.png"
    alt="Multi-Post project preview"
  />
  <div class="desktop-work-detail">
    <h3>Uber Navigation</h3>
    <ul class="flex project_details">
      <li>Uber</li>
      <li>Lead Developer</li>
      <li>2018</li>
    </ul>
    <p>
      A smart assistant to make driving more safe, efficient, and
      fun by unlocking your most expensive computer: your car.
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

<article class="hide card flex white-back">
  <div class="desktop-wrok-img">
    <img
      src="images/desktop-Snapshoot3.svg"
      alt="tonic project preview"
    />
  </div>
  <img
    class="mobile-work-img"
    src="./images/project_3.png"
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
<article class="hide reverse-work-2 card flex white-back">
  <div class="desktop-wrok-img">
    <img
      src="images/desktop-Snapshoot4.svg"
      alt="tonic project preview"
    />
  </div>
  <img
    class="mobile-work-img"
    src="./images/project_4.png"
    alt="tonic project preview"
  />
  <div class="desktop-work-detail">
    <h3>Multi-Post Stories</h3>
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
</div> ` 