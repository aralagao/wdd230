const apiKey = 'e54077e64ebbe9df11cc59c0b0eaeb5e';
const latitude = 14.54;
const longitude = 121.05;
const units = 'imperial';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=14.54&lon=121.05&appid=e54077e64ebbe9df11cc59c0b0eaeb5e&units=imperial`;

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Unable to fetch weather data');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error(error.message);
  }
}

function displayWeather(data) {
  const currentWeather = data.list[0];
  const currentTemp = currentWeather.main.temp;
  const weatherDesc = currentWeather.weather[0].description;
  const forecast = data.list; // Using the entire list

  const currentWeatherDiv = document.getElementById('current-weather');
  currentWeatherDiv.innerHTML = `
    <h2>Current Weather</h2>
    <p>Temperature: ${currentTemp}°F</p>
    <p>Description: ${weatherDesc}</p>
  `;

  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = '<h2>Three-Day Forecast</h2>';
  // Loop through forecast for the next 3 days
  for (let i = 0; i < 3; i++) {
    const item = forecast[i * 8]; // Data for every 24 hours
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const temp = item.main.temp;
    forecastDiv.innerHTML += `
      <div class="forecast-day">
        <p>${day}</p>
        <p>${temp}°F</p>
      </div>
    `;
  }
}


fetchWeather();