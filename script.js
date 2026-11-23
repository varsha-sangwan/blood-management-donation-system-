// Donor Registration
let registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;

    document.getElementById("registerMsg").innerText =
        "Thank you, " + name + "! Registration successful.";

    register.classList.add("hidden"); /* switch stages */
    eligibility.classList.remove("hidden");
});


// Eligibility Check
function checkEligibility() {

    let q1 = document.getElementById("q1").checked;
    let q2 = document.getElementById("q2").checked;
    let q3 = document.getElementById("q3").checked;
    let q4 = document.getElementById("q4").checked;
    let q5 = document.getElementById("q5").checked;

    let msg = document.getElementById("quizMsg");

    if (q1 && q2 && q3 && q4 && q5) {
        msg.innerText =
            "All checklist conditions are met! Consult medical staff for final eligibility.";
            eligibility.classList.add("hidden"); /* switch stages */
            appointment.classList.remove("hidden");
    } else {
        msg.innerText =
            "Some checklist conditions are not met. Please consult medical staff.";
    }
}


// Appointment Booking
let appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let slot = document.getElementById("slot").value;

    document.getElementById("appointmentMsg").innerText =
        "Thank you " + name + "! Your demo appointment is booked for "
        + date + " at " + slot + ".";

    appointmentForm.reset();
});


// Set Minimum Appointment Date
let today = new Date().toISOString().split("T")[0];

document.getElementById("date").min = today;


// Collection Progress
function updateProgress() {

    let units = 68;
    let goal = 100;

    let percent = (units / goal) * 100;

    document.getElementById("units").innerText = units;
    document.getElementById("bar").style.width = percent + "%";
}

updateProgress();