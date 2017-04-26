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




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}