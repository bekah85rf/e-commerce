function openMenu() {
  document.body.classList.add("menu--open")
}

function closeMenu() {
  document.body.classList.remove("menu--open")
}

const menuButton = document.querySelector(".btn__menu")
const closeMenuButton = document.querySelector(".btn__menu--close")

if (menuButton) {
  menuButton.addEventListener("click", openMenu)
}

if (closeMenuButton) {
  closeMenuButton.addEventListener("click", closeMenu)
}