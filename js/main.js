const $header = document.querySelector(".header");
const $searchBtn = document.querySelector(".btn-loupe");
const $closed_search = document.querySelector(".closed__search-btn");
const $header__burger_btn = document.querySelector(".header__burger-btn");
const $menuLinks = document.querySelectorAll(".nav__link");

// БУРГЕР МЕНЮ
$header__burger_btn.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav--open");
  document.body.classList.toggle("stop-scroll");
});

$menuLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    document.querySelector(".header").classList.remove("nav--open");
    document.body.classList.remove("stop-scroll");
  });
});

// ПОИСК

$searchBtn.addEventListener("click", () => {
  $header.classList.add("searh--open");
});

$closed_search.addEventListener("click", () => {
  $header.classList.remove("searh--open");
});

// СВАЙПЕР HERO
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

// ТАБЫ HOW
const tabsBtn = document.querySelectorAll(".tabs-nav__btn");
const tabsItem = document.querySelectorAll(".tab-item");

tabsBtn.forEach((element) => {
  element.addEventListener("click", (e) => {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach((btn) => {
      btn.classList.remove("tabs-nav__btn--activate");
      e.currentTarget.classList.add("tabs-nav__btn--activate");
    });

    tabsItem.forEach((item) => {
      item.classList.remove("tab-item--activate");
      document
        .querySelector(`[data-target='${path}']`)
        .classList.add("tab-item--activate");
    });
  });
});

// Акардеон
const $acordionItems = document.querySelectorAll(".accordion-item");

$acordionItems.forEach((acItem) => {
  acItem.addEventListener("click", () => {
    acItem.classList.toggle("accordion-item--show");
    let children = acItem.childNodes;
    if (acItem.classList.contains("accordion-item--show")) {
      // если класс активный
      children[3].style.maxHeight = children[3].scrollHeight + "px"; // открываем контент
    } else {
      // в противном случае
      children[3].style.maxHeight = 0; // скрываем контент
    }
  });
});
