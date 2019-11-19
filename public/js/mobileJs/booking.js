// DOMContentLoaded function
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded.");
});

// Hamburgermenu and overlay
function openOverlay() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeOverlay() {
    document.getElementById("myNav").style.width = "0%";
}
