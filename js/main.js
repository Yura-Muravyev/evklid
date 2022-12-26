const $header = document.querySelector(".header");
const $search = document.querySelector(".btn-loupe");
const $closed_search = document.querySelector(".closed__search");

$search.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("searh--open");
});

$closed_search.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("searh--open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  a11y: {
    paginationBulletMessage: "Слайд {{index}}",
  },
});
