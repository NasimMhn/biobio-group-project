if (localStorage.showmodal != 1) {
  setTimeout(function () {

    document.getElementById("feedbackForm").style.display = "block"
    localStorage.showmodal = 1;
  }, 10000);

}

function openForm() {
  document.getElementById("customerForm").style.display = "block";
}

function closeForm() {
  document.getElementById("thumb-icons").style.display = 'none'
  document.getElementById("thanks-message").style.display = "block"

  setTimeout(function () {
    document.getElementById("feedbackForm").style.display = "none"
  }, 2500);
}