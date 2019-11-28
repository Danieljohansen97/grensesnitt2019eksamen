// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openEdit() {
  console.log("Hei");
}

// Add patient
document.querySelector("#addBtn").addEventListener("click", (e) => {
  e.preventDefault();
  
  let patient = {
    fName: document.querySelector("#fName").value,
    lName: document.querySelector("#lName").value,
    email: document.querySelector("#epost").value
  };
  let patientList = document.querySelector("#patientList");
  let html = `
    <tr>
      <td>${patient.fName}</td>
      <td>${patient.lName}</td>
      <td>${patient.email}</td>
      <td onclick="openEdit()"><img style="width: 20px;" src="/public/pictures/blackpen.png"></th>
    </tr>
  `;
  patientList.innerHTML += html;

});