document.addEventListener("DOMContentLoaded", function() {
    const lastVisitElement = document.querySelector("#last-modification");
  
    if (!lastVisitElement) {
        console.error("Could not find element to display last visit information.");
        return;
    }
  
    const currentDate = new Date();
    const storedVisitDate = localStorage.getItem("lastVisit");
  
    if (storedVisitDate === null) {
        lastVisitElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        try {
            const previousVisitDate = new Date(storedVisitDate);
            const timeDifference = currentDate.getTime() - previousVisitDate.getTime();
            const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  
            if (daysDifference < 1) {
                lastVisitElement.textContent = "Back so soon! Awesome!";
            } else {
                const message = (daysDifference === 1) ? "day" : "days";
                lastVisitElement.textContent = `You last visited ${daysDifference} ${message} ago.`;
            }
        } catch (error) {
            console.error("Error occurred while calculating time difference:", error);
            lastVisitElement.textContent = "Error retrieving last visit information.";
        }
    }
  
    try {
        localStorage.setItem("lastVisit", currentDate);
    } catch (error) {
        console.error("Error occurred while storing last visit date in localStorage:", error);
    }
  });
  