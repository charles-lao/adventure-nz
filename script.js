// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission feedback
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  document.getElementById("form-feedback").style.display = "block"; // Show feedback message
  form.reset(); // Reset form fields
});

// Enlarge image on click
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".image-card img").forEach((img) => {
  img.addEventListener("click", function () {
    lightboxImg.src = this.src; // Set the clicked image source in lightbox
    lightbox.style.display = "flex"; // Show the lightbox
  });
});

// Close lightbox when clicked
lightbox.addEventListener("click", function () {
  lightbox.style.display = "none"; // Hide lightbox on click
});
