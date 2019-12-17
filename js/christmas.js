const header = document.getElementsByTagName("header")[0]
const footer = document.getElementsByTagName("footer")[0]


const giveMeChristmas = () => {

  if (localStorage.startsnow == 1) {
    // STOP CHRISTMAS
    localStorage.startsnow = 0
    stopSnow()
    header.style.backgroundColor = "#0E0F0F";
    footer.style.backgroundColor = "#0E0F0F";
  }
  else {
    // START CHRISTMAS
    localStorage.startsnow = 1
    initSnow()
    header.style.backgroundColor = "#310101";
    footer.style.backgroundColor = "#310101";


  }
}

if (localStorage.startsnow == 1) {
  initSnow()
  header.style.backgroundColor = "#310101";
  footer.style.backgroundColor = "#310101";
}