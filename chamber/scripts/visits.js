// Retrieve last visit date from local storage
const lastVisit = localStorage.getItem('lastVisit');

// Get current date
const currentDate = new Date();

// Check if last visit date exists
if (lastVisit) {
    const daysSinceLastVisit = Math.floor((currentDate - new Date(lastVisit)) / (1000 * 60 * 60 * 24));

    // Display days since last visit
    if (daysSinceLastVisit === 0) {
        document.getElementById('last-visit-info').textContent = `Welcome back!`;
    } else {
        document.getElementById('last-visit-info').textContent = `Days since your last visit: ${daysSinceLastVisit}`;
    }
} else {
    // Display message for first visit
    document.getElementById('last-visit-info').textContent = "Welcome! This is your first visit.";
}

// Save current date as last visit date in local storage
localStorage.setItem('lastVisit', currentDate);





