document.addEventListener("DOMContentLoaded", () => {
    init();
  });
  
  function init() {
    animateSections();
    fetchServices();
  }
  
  // 🎯 1. Animate sections on scroll (basic DOM manipulation)
  function animateSections() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = 0;
  
      // Trigger animation once DOM is loaded
      setTimeout(() => {
        section.style.transition = "opacity 0.6s ease-in-out";
        section.style.opacity = 1;
      }, 100);
    });
  }
  
  // 🎯 2. Simulate fetching services from a server (using fetch & rendering to DOM)
  function fetchServices() {
    // Normally you'd use fetch like:
    // fetch('http://localhost:3000/services')
    // For demo, we’ll simulate it
  
    const services = [
      "Legal Consultation",
      "Medical Consultation",
      "IT & Tech Support",
      "Education & Tutoring",
      "Engineering & Architecture",
      "Financial & Investment Advice",
      "Psychological Counseling",
      "Business & Entrepreneurship Guidance",
      "Marketing & Branding Strategy",
      "Interior Design",
      "Fitness & Nutrition Coaching",
      "Career & Resume Consulting",
    ];
  
    const servicesList = document.querySelector("#services ul");
    servicesList.innerHTML = "";
  
    services.forEach((service) => {
      const li = document.createElement("li");
      li.textContent = service;
      servicesList.appendChild(li);
    });
  }