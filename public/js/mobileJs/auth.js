// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
        if (document.querySelector("#showEmail")) {
            showEmail.innerHTML = user.email;
        }
    } else {
        setupUI();
    }
});

// Signup
const signupForm = document.querySelector("#signupForm");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Get user info from form
    const email = signupForm["signupEmail"].value;
    const password = signupForm["signupPassword"].value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection("users").doc(cred.user.uid).set({
            name: signupForm["signupName"].value,
            email: signupForm["signupEmail"].value,
            comment: signupForm["signupComment"].value
        });
    }).then(() => {
        // Close modal and reset form
        const modal = document.getElementById("registerModal");
        modal.style.display = "none";
        signupForm.reset();
        signupForm.querySelector(".error").innerHTML = "";
    }).catch(err => {        
        if (err.message == "Password should be at least 6 characters") {
            signupForm.querySelector(".error").innerHTML = "Passordet er for kort";
        } else if (err.message == "The email address is already in use by another account.") {
            signupForm.querySelector(".error").innerHTML = "E-post adressen er allerede i bruk";
        } else {
            signupForm.querySelector(".error").innerHTML = err.message;
        }
    });
});

// Logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
    auth.signOut();
});

// Login
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get user info
    const email = loginForm["loginEmail"].value;
    const password = loginForm["loginPassword"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // Close modal and reset form
        const modal = document.getElementById("loginModal");
        modal.style.display = "none";
        loginForm.reset();
        loginForm.querySelector(".error").innerHTML = "";
    }).catch(err => {
        if (err.message == "The email address is badly formatted.") {
            loginForm.querySelector(".error").innerHTML = "Feil e-post";
        } else if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
            loginForm.querySelector(".error").innerHTML = "Ingen bruker funnet med denne e-posten.";
        } else if (err.message == "The password is invalid or the user does not have a password.") {
            loginForm.querySelector(".error").innerHTML = "Feil passord";
        } else {
            loginForm.querySelector(".error").innerHTML = err.message;
        }
    });
});