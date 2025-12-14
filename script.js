// Highlight the active page in the navbar

// Get all navigation links
const navLinks = document.querySelectorAll(".navbar a");

// Get the current page filename (ex: "education.html")
let currentPage = window.location.pathname.split("/").pop();

// If user opens index without filename (localhost/), set it manually
if (currentPage === "" || currentPage === " ") {
    currentPage = "index.html";
}

// Add active class to the correct link
navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
