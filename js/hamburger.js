

const openHamburger = () => {

  const mainNav = document.getElementById("hamburger-menu")

  if (mainNav.style.display === "none" || mainNav.style.display === "") {
    mainNav.style.display = "block"
  } else {
    mainNav.style.display = "none"
  }
}