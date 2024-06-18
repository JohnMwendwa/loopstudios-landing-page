const mobileMenuSlider = document.querySelector(".mobile__menu--slider");
const hamburgerBtn = document.querySelector(".btn__menu--hamburger");
const closeBtn = document.querySelector(".btn__menu--close");

hamburgerBtn.addEventListener("click", () => {
  mobileMenuSlider.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenuSlider.classList.remove("active");
});
