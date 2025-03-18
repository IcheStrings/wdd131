document.addEventListener("DOMContentLoaded", function () {
    // Set current year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
});
