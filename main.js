document.addEventListener('DOMContentLoaded', function () {
  const burger_btn = document.getElementById("burger-btn")
  const header = document.getElementById("header")
  burger_btn.addEventListener("click", function () {
    header.classList.toggle('open')
  })
})
