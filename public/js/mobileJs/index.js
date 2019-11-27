// Get the modals and buttons
var userModal = document.getElementById("userModal");
var userModalBtn = document.getElementById("userModalBtn");
var loginModal = document.getElementById("loginModal");
var loginModalBtn2 = document.getElementById("loginModalBtn2");
var registerModal = document.getElementById("registerModal");

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

loginModalBtn2.onclick = function() {
  loginModal.style.display = "block";
  registerModal.style.display = "none";
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


// Logged in or logged out setup
const loggedOutContent = document.querySelectorAll(".loggedOut");
const loggedInContent = document.querySelectorAll(".loggedIn");
const userDetails = document.querySelector("#userDetails");

const setupUI = (user) => {
    if (user) {
        // Show user info
        db.collection("users").doc(user.uid).get().then(doc => {
            html = `
            <h3 style="color: red;">${doc.data().name}</h3>
            <p>${user.email}</p>
            <p>${doc.data().comment}</p>
            `;
            userDetails.innerHTML = html;
        });

        // Toggle UI elements
        loggedInContent.forEach(item => item.style.display = "block");
        loggedOutContent.forEach(item => item.style.display = "none");
    } else {
        // Hide user info
        userDetails.innerHTML = "";
        // Toggle UI elements
        loggedInContent.forEach(item => item.style.display = "none");
        loggedOutContent.forEach(item => item.style.display = "block");
    }
}

// Hamburgermenu overlay
function openOverlay() {
    document.getElementById("myNav").style.width = "40%";
}
  
function closeOverlay() {
    document.getElementById("myNav").style.width = "0%";
}
