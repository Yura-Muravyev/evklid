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

let gg = document.getElementsByClassName("hero-btn");

gg.btn.addEventListener("click", () => {
  console.log("object");
});
