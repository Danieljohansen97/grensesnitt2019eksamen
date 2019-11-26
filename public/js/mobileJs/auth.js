// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
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
    const firstName = signupForm["signupFirstName"].value;
    const lastName = signupForm["signupLastName"].value;

    // Sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // Close modal and reset form
        const modal = document.getElementById("registerModal");
        modal.style.display = "none";
        signupForm.reset();
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
    });
});