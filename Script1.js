// JavaScript source code
var date = new Date();
document.getElementById("date").innerHTML = date;

function validateForm() {
    var firstName, lastName, email, comment;

    firstName = document.forms["form"]["firstName"].value;
    lastName = document.forms["form"]["lastName"].value;
    emails = document.forms["form"]["emails"].value;
    comment = document.forms["form"]["comment"].value;

    if (!firstName) {
        alert("First Name field is incomplete.");
        return false;
    }
    if (!lastName) {
        alert("Last Name field is incomplete.");
        return false;
    }

    if (!emails) {
        alert("Email field is incomplete.");
        return false;
    }

    if (!comment) {
        alert("Comment field is incomplete.");
        return false;
    }
}