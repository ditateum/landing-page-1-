const burgerMenu = document.querySelector(".burger");
burgerMenu.addEventListener("click", toggle);

function toggle() {
  const toggle = document.querySelectorAll(".burger div");
  const navLinks = document.querySelector(".nav-links");
  toggle[0].classList.toggle("line1");
  toggle[1].classList.toggle("line2");
  toggle[2].classList.toggle("line3");
  navLinks.classList.toggle("hide");
}
