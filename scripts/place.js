document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");
    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    
    if (yearSpan) yearSpan.textContent = currentYear;
    if (lastModifiedSpan) lastModifiedSpan.textContent = lastModified;

    // Static weather values
    const temperature = 10; // °C
    const windSpeed = 5; // km/h

    // Calculate and display wind chill
    const windChillElement = document.getElementById("wind-chill");
    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    }
});

// Function to calculate wind chill factor
function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C";
    }
    return "N/A";
}
