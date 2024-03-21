const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const spotlightsDivs = document.querySelectorAll(".spotlights");
const spotlightHeadings = document.querySelectorAll(".spotlight-heading");
const spotsText = document.querySelectorAll(".spots"); // Select spots elements

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌙")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    spotlightsDivs.forEach(div => {
      div.style.background = "#000";
    });
    spotlightHeadings.forEach(heading => {
      heading.style.color = "#fff";
    });
    spotsText.forEach(spot => {
      spot.style.color = "#000"; // Set text color to black for spots elements
    });
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    spotlightsDivs.forEach(div => {
      div.style.background = "#fff";
    });
    spotlightHeadings.forEach(heading => {
      heading.style.color = "#000";
    });
    spotsText.forEach(spot => {
      spot.style.color = "#000"; // Set text color to black for spots elements
    });
    modeButton.textContent = "🌙";
  }
});




