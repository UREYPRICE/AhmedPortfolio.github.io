const projectsSection = document.getElementById('portfolio');
const docBody = document.querySelector('body');
const popupContainer = document.querySelector('.details');

const projects = [
  {
    img: {
      src: './img/project-1-desktop.png',
      alt: 'tonic project preview',
    },
    title: 'Tonic',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: './img/project-2-desktop.png',
      alt: 'Multi-Post Stories project preview',
    },
    title: 'Multi-Post Stories',
    type: ['FACEBOOK', 'Full Stack Dev', '2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: './img/project-3-desktop.png',
      alt: 'Facebook 360 project preview',
    },
    title: 'Facebook 360',
    type: ['CANOPY', 'BACKEND DEV', '2015'],
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    img: {
      src: './img/project-4-desktop.png',
      alt: 'Uber Navigation project preview',
    },
    title: 'Uber Navigation',
    type: ['UBER', 'Lead Developer', '2018'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['HTML', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
];

const generateList = (arr) => arr.reduce((elements, element) => `${elements}<li>${element}</li>`, '');

const generatePopupSection = (project) => `
    <section class="parent-div-section-detail">
      <article class="section-info">
        <div class="parent-flexed section-info-title">
          <h1>${project.title}</h1>
          <img class="close-detail" src="./img/close-detail.svg" alt="Close project details" />
        </div>
        <ul class="parent-flexed project-info">
         ${generateList(project.type)}
        </ul>
        <img src=${project.img.src} alt=${project.img.alt} />
        <div class="project_description__container">
          <p>${project.description}</p>
          <div>
            <ul class="parent-flexed project-languages">
              ${generateList(project.technologies)}
            </ul>
            <div class="parent-flexed gap">
              <button class="button-primary button-state-outline project_details_btn">
                <span>See live</span>
                <img src="./img/liveArrow.svg" alt="link to live demo" />
              </button>
              <button class="button-primary button-state-outline project_details_btn">
                <span>See source</span>
                <img src="./img/github.svg" alt="link to github code" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>`;

const generateCard = (project, id) => `
    <section class="card parent-flexed bg-white">
      <img class="desktop-bg" src="${project.img.src}" alt="${project.img.alt}" />
      <article>
        <h3>${project.title}</h3>
        <ul class="parent-flexed project-info">
          ${generateList(project.type)}
        </ul>
        <p>${project.description}</p>
        <ul class="parent-flexed project-languages">
          ${generateList(project.technologies)}
        </ul>
        <button id=${id} class="project-detail button-primary button-state-outline">See Project</button>
      </article>
    </section>`;

window.onload = () => {
  projects.forEach((project, index) => {
    const card = generateCard(project, index);
    projectsSection.insertAdjacentHTML('beforeend', card);
  });

  const projectBtns = document.querySelectorAll('.project-detail');

  projectBtns.forEach((expandCardBtn) => {
    expandCardBtn.addEventListener('click', () => {
      popupContainer.classList.toggle('show');
      docBody.classList.toggle('dropout-filler_details');
      docBody.style.overflowY = 'hidden';

      popupContainer.replaceChildren('');

      const popupSection = generatePopupSection(projects[expandCardBtn.id]);
      popupContainer.insertAdjacentHTML('beforeend', popupSection);

      const closeIcon = document.querySelector('.close-detail');

      // below code will close Popup if user clicked outside it.
      popupContainer.addEventListener('click', (ev) => {
        if (ev.target !== popupContainer) return;
        docBody.classList.remove('dropout-filler_details');
        popupContainer.classList.remove('show');
        docBody.style.overflowY = 'scroll';
      });

      closeIcon.addEventListener('click', () => {
        docBody.classList.toggle('dropout-filler_details');
        popupContainer.classList.toggle('show');
        docBody.style.overflowY = 'scroll';
      });
    });
  });

  window.onresize = () => {
    docBody.classList.remove('dropout-filler_details');
    popupContainer.classList.remove('show');
    docBody.style.overflowY = 'scroll';
  };
};
