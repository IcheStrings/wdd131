document.addEventListener("DOMContentLoaded", () => {
    // Update Footer Year and Last Modified Date
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#last-modified");
    
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Hamburger Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open");
            menuToggle.textContent = menu.classList.contains("open") ? "✖" : "☰";
        });
    }
});