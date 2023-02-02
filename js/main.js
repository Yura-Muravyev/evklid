const $header = document.querySelector(".header");
const $search = document.querySelector(".btn-loupe");
const $closed_search = document.querySelector(".closed__search");
const $header__burger_btn = document.querySelector(".header__burger-btn");

// БУРГЕР МЕНЮ
$header__burger_btn.addEventListener("click", () => {
  document.querySelector(".header").classList.toggle("nav--open");
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

$acordionItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const element = e.currentTarget;
    const children = element.childNodes;

    element.classList.toggle("accordion-item--open");

    if (element.classList.contains("accordion-item--open")) {
      for (let i = 0; i < children.length; i++) {
        if (
          children[i].nodeName != "#text" &&
          children[i].classList.contains("accordion-item__descr")
        ) {
          children[i].style.height = children[i].scrollHeight + "px";
        }
      }
    }
    if (!element.classList.contains("accordion-item--open")) {
      for (let i = 0; i < children.length; i++) {
        if (
          children[i].nodeName != "#text" &&
          children[i].classList.contains("accordion-item__descr")
        ) {
          children[i].style.height = 0;
        }
      }
    }
  });
});
