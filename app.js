const mobileMenuSlider = document.querySelector(".mobile__menu--slider");
const hamburgerBtn = document.querySelector(".btn__menu--hamburger");
const closeBtn = document.querySelector(".btn__menu--close");
const date = document.querySelector(".date");

hamburgerBtn.addEventListener("click", () => {
  mobileMenuSlider.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenuSlider.classList.remove("active");
});

date.textContent = new Date().getFullYear();
