const navbarHeight = document.querySelector('nav').offsetHeight;

document.querySelector('#start').addEventListener('click', function(event) {
  event.preventDefault();
  
  const formTop = document.querySelector('#form').getBoundingClientRect().top + window.pageYOffset;
  const scrollPosition = formTop - navbarHeight;

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth'
  });
});

const burgerMenu = document.querySelector('.burger');
const dropdownMenu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  dropdownMenu.classList.toggle('active');
});
