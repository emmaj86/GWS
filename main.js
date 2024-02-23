$(document).ready(function () {
  console.log($("#carouselwithIndicators").css("height")); // check the initial height of the carousel;

  // now apply this height as a max-height on all the image items; css will handle the rest;
  $("#carouselwithIndicators")
    .find(".carousel-item img")
    .css("max-height", $("#carouselwithIndicators").css("height"));
});

function Calculate() {
  // Extracting value in the amount
  // section in the variable
  const amount = document.querySelector("#amount").value;

  // Extracting value in the interest
  // rate section in the variable
  const rate = 14;

  // Extracting value in the months
  // section in the variable
  const months = document.querySelector("#months").value;

  // Calculating interest per month
  const interest = (amount * (rate * 0.01)) / months;

  // Calculating total payment
  const total = (amount / months + interest).toFixed(2);

  document.querySelector("#total").innerHTML =
    "Estimated monthly payment £" + total;
}

/**************************************************************
 * collapsable
 ***********************************************************/

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//image transition - projects

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//carousel - home page
$(".carousel").carousel();
