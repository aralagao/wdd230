// Fetch the JSON data
fetch('members.json')
  .then(response => response.json())
  .then(data => {
    // Filter members with silver or gold status
    const filteredMembers = data.members.filter(member => member.membershipLevel === "Silver Membership" || member.membershipLevel === "Gold Membership");
    
    // Shuffle the filtered members array
    const shuffledMembers = shuffleArray(filteredMembers);
    
    // Select two to three random members
    const selectedMembers = shuffledMembers.slice(0, Math.floor(Math.random() * 2) + 2);
    
    // Update spotlight section HTML
    const spotlightContainer = document.querySelector('.spotlights');
    selectedMembers.forEach(member => {
      const spotlightDiv = document.createElement('div');
      spotlightDiv.classList.add('spots');
      spotlightDiv.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phoneNumber}</p>
        <p>${member.website}</p>
        <p>${member.email}</p>
        <img src="${member.imageurl}" alt="${member.name}" width="200">
      `;
      spotlightContainer.appendChild(spotlightDiv);
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
