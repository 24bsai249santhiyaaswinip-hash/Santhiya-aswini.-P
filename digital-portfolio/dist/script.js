// Smooth scroll to Projects section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form "Send" button alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your contact details are saved!");
});