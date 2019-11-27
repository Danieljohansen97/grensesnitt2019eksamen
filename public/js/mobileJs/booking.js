
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

// Get booking buttons and modals
var startBookingBtn = document.getElementById("startBookingBtn");

var stepOneModal = document.getElementById("stepOneModal");

// Get the <span> element that closes the modal
var userClose = document.getElementsByClassName("close")[0];
var loginClose = document.getElementsByClassName("close")[1];
var registerClose = document.getElementsByClassName("close")[2];
var stepOneClose = document.getElementsByClassName("close")[3];

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

startBookingBtn.onclick = function() {
  stepOneModal.style.display = "block";
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

// Setup upcoming bookings list
const bookingList = document.querySelector("#bookingList");

function renderBooking(doc) {
  let div = document.createElement("div");
  let treatment = document.createElement("p");
  let patient = document.createElement("p");

  div.setAttribute("data-id", doc.id);
  treatment.textContent = doc.data().treatment;
  patient.textContent = doc.data().patient;

  div.appendChild(treatment);
  div.appendChild(patient);

  bookingList.appendChild(div);
};

// Get bookings collection
db.collection("bookings").get().then(snapshot => {
  snapshot.docs.forEach(doc => {
      renderBooking(doc);
  });
});