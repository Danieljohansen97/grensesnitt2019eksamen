
// DOMContentLoaded function
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded.");
});

// Doing this again because there are additional buttons ofr the modals
// Get the modals and buttons
var userModal = document.getElementById("userModal");
var userModalBtn = document.getElementById("userModalBtn");
var loginModal = document.getElementById("loginModal");
var loginModalBtn = document.getElementById("loginModalBtn");
var loginModalBtn2 = document.getElementById("loginModalBtn2");
var registerModal = document.getElementById("registerModal");
var registerModalBtn = document.getElementById("registerModalBtn");

// Get the <span> element that closes the modal
var userClose = document.getElementsByClassName("close")[0];
var loginClose = document.getElementsByClassName("close")[1];
var registerClose = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
userModalBtn.onclick = function() {
  userModal.style.display = "block";
  loginModal.style.display = "none";
  registerModal.style.display = "none";
}

loginModalBtn.onclick = function() {
  loginModal.style.display = "block";
  registerModal.style.display = "none";
  userModal.style.display = "none";
}

registerModalBtn.onclick = function() {
  registerModal.style.display = "block";
  loginModal.style.display = "none";
  userModal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
userClose.onclick = function() {
  userModal.style.display = "none";
}
loginClose.onclick = function() {
  loginModal.style.display = "none";
}
registerClose.onclick = function() {
  registerModal.style.display = "none";
}
