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
