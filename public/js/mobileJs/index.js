const loggedOutContent = document.querySelectorAll(".loggedOut");
const loggedInContent = document.querySelectorAll(".loggedIn");

const setupUI = (user) => {
    if (user) {
        // Toggle UI elements
        loggedInContent.forEach(item => item.style.display = "block");
        loggedOutContent.forEach(item => item.style.display = "none");
    } else {
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
