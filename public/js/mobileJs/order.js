var treatment = {};


// Functional components
const orderBtn1 = document.querySelector("#completeStepOne");
const endOrder1 = document.querySelector("#endOrderOne");
const orderBtn2 = document.querySelector("#completeStepTwo");
const endOrder2 = document.querySelector("#endOrderTwo");
const orderBtn3 = document.querySelector("#completeStepThree");
const endOrder3 = document.querySelector("#endOrderThree");
const orderBtn4 = document.querySelector("#completeStepFour");
const endOrder4 = document.querySelector("#endOrderFour");

const stepTwoModal = document.querySelector("#stepTwoModal");
const stepThreeModal = document.querySelector("#stepThreeModal");
const stepFourModal = document.querySelector("#stepFourModal");

// Other components
const showEmail = document.querySelector("#showEmail");
if (showName !== "") {
    // Step 1 
    endOrder1.addEventListener("click", () => {
        stepOneModal.style.display = "none";

        // Clear form and order details if they exist
        treatment.type = "";
        document.querySelector("#stepOneForm").reset();
    });

    orderBtn1.addEventListener("click", (e) => {
        e.preventDefault();
        treatment.type = document.querySelector("#treatmentType").value;

        stepOneModal.style.display = "none";
        stepTwoModal.style.display = "block";
    });
    
    // Step 2
    endOrder2.addEventListener("click", () => {
        stepTwoModal.style.display = "none";
        
        // clear order details
        treatment.type = "";
        document.querySelector("#stepOneForm").reset();
    });
    
    orderBtn2.addEventListener("click", (e) => {
        e.preventDefault();
        
        stepTwoModal.style.display = "none";
        stepThreeModal.style.display = "block";
    });
    
    // Step 3 
    endOrder3.addEventListener("click", () => {
        stepThreeModal.style.display = "none";
    
        // Clear form and order details if they exist
        treatment.type = "";
        treatment.date = "";
        treatment.time = "";
        document.querySelector("#stepOneForm").reset();
    });
    
    orderBtn3.addEventListener("click", (e) => {
        e.preventDefault();

        treatment.date = document.querySelector("#treatmentDate").value;
        treatment.time = document.querySelector("#treatmentTime").value;

        stepThreeModal.style.display = "none";
        stepFourModal.style.display = "block";
    });
    
    // Step 4 
    endOrder4.addEventListener("click", () => {
        stepThreeModal.style.display = "none";
    
        // Clear form and order details if they exist
        treatment.type = "";
        treatment.date = "";
        treatment.time = "";
        document.querySelector("#stepOneForm").reset();
        document.querySelector("#stepFourForm").reset();
    });
    
    orderBtn4.addEventListener("click", (e) => {
        e.preventDefault();
        treatment.comment = document.querySelector("#treatmentComment").value;
        db.collection("bookings").add({
            treatment: treatment.type,
            patient: showEmail.innerHTML,
            date: treatment.date,
            time: treatment.time,
            comment: treatment.comment
        });
        
        // Confirmation info
        document.querySelector("#bookingConfirmation").innerHTML = "Timebestilling sendt!" +
        "<br><br>" + 
        "Behandling: " + treatment.type +
        "<br>" +
        "Pasient e-post: " + showEmail.innerHTML +
        "<br>" +
        "Tidspunkt: " + treatment.date + ", " + treatment.time +
        "<br>" +
        "Kommentar: " + treatment.comment;
        document.querySelector("#startBookingBtn").style.display = "none";
        stepFourModal.style.display = "none";
        document.querySelector("#returnBtn").style.display = "block";
    });
}
