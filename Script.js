// Mobile Menu Toggle
const menuIcon = document.getElementById("menuIcon")
const closeIcon = document.getElementById("closeIcon")
const navMenu = document.getElementById("navMenu")

menuIcon.addEventListener("click", () => {
  navMenu.classList.add("active")
  menuIcon.style.display = "none"
  closeIcon.style.display = "block"
})

closeIcon.addEventListener("click", () => {
  navMenu.classList.remove("active")
  closeIcon.style.display = "none"
  menuIcon.style.display = "block"
})

// Education Toggle
const educationToggle = document.getElementById("educationToggle")
const educationContent = document.getElementById("educationContent")

educationToggle.addEventListener("click", () => {
  educationContent.classList.toggle("active")
  educationToggle.classList.toggle("active")
})

// Skills Toggle
const skillsToggle = document.getElementById("skillsToggle")
const skillsContent = document.getElementById("contain")

skillsToggle.addEventListener("click", () => {
  skillsContent.style.display = skillsContent.style.display === "flex" ? "none" : "flex"
  skillsToggle.classList.toggle("active")
})

// Certifications Toggle
const certificationsToggle = document.getElementById("certificationsToggle")
const certificationsContent = document.getElementById("certificationsContent")

certificationsToggle.addEventListener("click", () => {
  certificationsContent.style.display = certificationsContent.style.display === "block" ? "none" : "block"
  certificationsToggle.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll("nav ul li a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    closeIcon.style.display = "none"

    // Only show menu icon on mobile screens
    if (window.innerWidth <= 768) {
      menuIcon.style.display = "block"
    }
  })
})

