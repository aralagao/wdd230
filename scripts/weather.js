const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.77&lon=-122.42&appid=e54077e64ebbe9df11cc59c0b0eaeb5e&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data); // Call the displayResults function here
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = '';
  data.weather.forEach((weatherEvent, index) => {
    if (index > 0) desc += ', '; // Add comma separator for multiple weather events
    desc += weatherEvent.description.replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
  });
  weatherIcon.setAttribute('src', iconsrc);
  captionDesc.textContent = desc;
}


