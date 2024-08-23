const hamburger = document.querySelector('.hamburger');
const hamburgerContent = document.querySelector('.hamburger-content');

hamburger.addEventListener('click', () => {
  hamburgerContent.classList.toggle('show');
});