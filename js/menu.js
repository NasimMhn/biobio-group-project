
const dropdownCities = () => {
  document.getElementById("myCityDropdown").classList.toggle("show");
}

const dropdownLogin = () => {
  document.getElementById("myLoginDropdown").classList.toggle("show");
}

const closeSearch = () => {
  const mainNav = document.getElementById("main-nav")
  mainNav.style.display = "flex"

  const searchNav = document.getElementById("search-nav")
  searchNav.style.display = "none"

  const searchInput = document.getElementById("search-input")
  searchInput.value = ""

  const hamburger = document.getElementById("hamburger")
  hamburger.style.display = "flex"

}

const openSearch = () => {

  const mainNav = document.getElementById("main-nav")
  mainNav.style.display = "none"

  const searchNav = document.getElementById("search-nav")
  searchNav.style.display = "flex"

  const hamburger = document.getElementById("hamburger")
  hamburger.style.display = "none"

}

window.onclick = function (event) {
  let loginDropdowns = document.getElementsByClassName("login-dropdown-content")
  let cityDropdowns = document.getElementsByClassName("city-dropdown-content")


  if (event.target.innerText == "Stockholm") {
    loginDropdowns[0].classList.remove('show')

    if (!event.target.matches('.city-dropbtn')) {
      let i
      for (i = 0; i < cityDropdowns.length; i++) {
        let openDropdown = cityDropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  if (event.target.innerText == "Logga in") {
    cityDropdowns[0].classList.remove('show')
    if (!event.target.matches('.login-dropbtn')) {

      let i
      for (i = 0; i < loginDropdowns.length; i++) {
        let openDropdown = loginDropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }
}


