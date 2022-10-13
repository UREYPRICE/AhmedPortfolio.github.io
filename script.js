const navBar = document.getElementById('navbar');
const navIcon = document.getElementById('nav-icon');
const navMenuLinks = document.getElementById('nav-menu-links');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav_menu__container a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1) navBar.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2)';
  else navBar.style.boxShadow = 'none';
});

function handler() {
  if (window.innerWidth > 820) return;
  if (navIcon.firstElementChild.id === 'hamburger-icon') {
    body.style.overflowY = 'hidden';
    navIcon.firstElementChild.src = './img/close-icon.svg';
    navIcon.firstElementChild.id = 'close-icon';
  } else {
    body.style.overflowY = 'scroll';
    navIcon.firstElementChild.src = './img/hamburger-icon.svg';
    navIcon.firstElementChild.id = 'hamburger-icon';
  }

  navMenuLinks.classList.toggle('links-on-clicked');
  navBar.classList.toggle('nav-on-clicked');
  body.classList.toggle('dropout-filler');
}

links.forEach((link) => {
  link.addEventListener('click', handler);
});

navIcon.addEventListener('click', handler);

window.addEventListener('resize', () => {
  links.forEach((link) => {
    link.removeEventListener('click', handler);
  });

  links.forEach((link) => {
    link.addEventListener('click', handler);
  });

  navMenuLinks.classList.remove('links-on-clicked');
  navBar.classList.remove('nav-on-clicked');
  body.classList.remove('dropout-filler');
  navIcon.firstElementChild.src = './img/hamburger-icon.svg';
  navIcon.firstElementChild.id = 'hamburger-icon';
  body.style.overflowY = 'scroll';
});

const emailValue = document.querySelector('.email-value');

const submitButton = document.querySelector('.button-email');

const validationMessage = document.querySelector('.error');

submitButton.addEventListener('submit', (event) => {
  const emailValueContents = emailValue.value;
  function UpperCaseChecker() {
    const upperCaseCharaters = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    return upperCaseCharaters.test(emailValueContents);
  }

  if (UpperCaseChecker() === true) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    // validationMessage.classList.add("shake");
    event.preventDefault();
  }
});

document.addEventListener('input', () => {
  const Data = {
    FullName: document.querySelector('.full-name').value,
    EmailAdress: document.querySelector('.email-address').value,
    TextArea: document.querySelector('.textarea').value,
  };
  localStorage.setItem('LocalFormStorage', JSON.stringify(Data));
});

const StoredData = JSON.parse(localStorage.getItem('LocalFormStorage'));
document.querySelector('.full-name').value = StoredData.FullName;
document.querySelector('.email-address').value = StoredData.EmailAdress;
document.querySelector('.textarea').value = StoredData.TextArea;
