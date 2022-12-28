const $header = document.querySelector(".header");
const $search = document.querySelector(".btn-loupe");
const $closed_search = document.querySelector(".closed__search");
const $header__burger_btn = document.querySelector(".header__burger-btn");

// $search.addEventListener("click", () => {
//   document.querySelector(".searh").classList.remove("display-none");
//   setTimeout(() => {
//     document.querySelector(".header").classList.add("searh--open");
//   }, 300);
// });

// $closed_search.addEventListener("click", () => {
//   document.querySelector(".header").classList.remove("searh--open");
//   setTimeout(() => {
//     document.querySelector(".searh").classList.add("display-none");
//   }, 200);
// });

$header__burger_btn.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav--open");
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
