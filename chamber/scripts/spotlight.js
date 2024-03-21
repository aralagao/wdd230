// Fetch the JSON data
fetch('data/members.json') // Adjusted path to reflect the location of the JSON file
  .then(response => response.json())
  .then(data => {
    // Filter members with silver or gold status
    const filteredMembers = data.members.filter(member => member.membershipLevel === "Silver Membership" || member.membershipLevel === "Gold Membership");
    
    // Shuffle the filtered members array
    const shuffledMembers = shuffleArray(filteredMembers);
    
    // Select two to three random members
    const selectedMembers = shuffledMembers.slice(0, Math.min(3, shuffledMembers.length)); // Ensure at most three members are selected
    
    // Update spotlight section HTML
    const spotlightContainers = document.querySelectorAll('.spots');
    spotlightContainers.forEach((spotlightContainer, index) => {
      if (selectedMembers[index]) { // Check if a member exists for this index
        const member = selectedMembers[index];
        const spotlightDiv = document.createElement('div');
        spotlightDiv.innerHTML = `
          <img src="${member.imageurl}" alt="${member.name}" width="200">
          <div class="spotlight-info">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phoneNumber}</p>
            <p>${member.website}</p>
            <p>${member.email}</p>
            <p>${member.membershipLevel}</p> <!-- Display membership level -->
          </div>
        `;
        // Append the generated member info to the respective .spots div
        spotlightContainer.appendChild(spotlightDiv);
      }
    });
  })
  .catch(error => console.error('Error fetching members data:', error));

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


