// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});

// LIGHTBOX (simple)
const images = document.querySelectorAll(".gallery-img");
images.forEach(img => {
  img.addEventListener("click", () => {
    const popup = window.open("", "_blank");
    popup.document.write(`<img src="${img.src}" style="width:100%">`);
  });
});
