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
    let website = document.createElement('p');
    let membershipLevel = document.createElement('p');
    let email = document.createElement('p');
    
    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phoneNumber.textContent = `${member.phoneNumber}`;
    website.textContent = `${member.website}`
    membershipLevel.textContent = `${member.membershipLevel}`
    email.textContent = `${member.email}`

    portrait.setAttribute('src', member.imageurl);
    portrait.setAttribute('alt', `Portrait of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(membershipLevel);
    card.appendChild(email);

    card.appendChild(portrait);

    cards.appendChild(card);
  });
}