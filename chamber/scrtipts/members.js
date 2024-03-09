const url = 'https://aralagao.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');
async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.members);

}

getMemberData();

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let portrait = document.createElement('img');
    
    name.textContent = `${member.name}`;
    address.textContent = `Address: ${member.address}`;
    phoneNumber.textContent = `Phone Number: ${member.phoneNumber}`;

    portrait.setAttribute('src', member.imageurl);
    portrait.setAttribute('alt', `Portrait of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}