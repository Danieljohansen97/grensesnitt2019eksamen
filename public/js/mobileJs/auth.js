var thisUserEmail = "";
// Listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
        if (bookingList) {
            // Get bookings collection and render orders
            db.collection("bookings").where('patient', '==', user.email).get().then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    renderBooking(doc);
                });
            });
        }
        if (document.querySelector("#showEmail")) {
            showEmail.innerHTML = user.email;
        }
    } else {
        setupUI();
    }
});
// Setup upcoming bookings list
const bookingList = document.querySelector("#bookingList");
function renderBooking(doc) {
    let div = document.createElement("div");
    let treatment = document.createElement("p");
    let patient = document.createElement("p");
    let time = document.createElement("p");
    let comment = document.createElement("p");

    div.setAttribute("data-id", doc.id);
    treatment.textContent = doc.data().treatment;
    patient.textContent = doc.data().patient;
    time.textContent = doc.data().date + ", " + doc.data().time;
    comment.textContent = doc.data().comment;

    div.appendChild(patient);
    div.appendChild(treatment);
    div.appendChild(time);
    div.appendChild(comment);

    bookingList.appendChild(div);
};

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
    // Clear bookingList if the div exists on site
    if (bookingList) {
        bookingList.innerHTML = "";
    }
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