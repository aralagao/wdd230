const baseURL = "hhttps://aralagao.github.io/wdd230/";
const linksURL = "hhttps://aralagao.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
  const linksContainer = document.getElementById('linksContainer');

  weeks.forEach(week => {
      const weekDiv = document.createElement('div');
      weekDiv.classList.add('week');

      const weekHeader = document.createElement('h2');
      weekHeader.textContent = `Week ${week.lesson}`;

      const linksList = document.createElement('ul');

      week.links.forEach(link => {
          const listItem = document.createElement('li');
          const linkAnchor = document.createElement('a');
          linkAnchor.href = baseURL + link.url;
          linkAnchor.textContent = link.title;
          listItem.appendChild(linkAnchor);
          linksList.appendChild(listItem);
      });

      weekDiv.appendChild(weekHeader);
      weekDiv.appendChild(linksList);
      linksContainer.appendChild(weekDiv);
  });
}