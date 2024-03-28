fetch(`https://api.openweathermap.org/data/2.5/forecast?q=cozumel&appid=e54077e64ebbe9df11cc59c0b0eaeb5e`)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const currentTemperatureKelvin = data.list[0].main.temp;
    const currentTemperatureCelsius = currentTemperatureKelvin - 273.15;
    const currentHumidity = data.list[0].main.humidity;
    const nextDayTemperatureKelvin = data.list.find(item => item.dt_txt.includes('15:00')).main.temp;
    const nextDayTemperatureCelsius = nextDayTemperatureKelvin - 273.15;
    const weatherDescription = data.list[0].weather[0].description;
    const weatherIcon = data.list[0].weather[0].icon;


    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
    <p>Current Temperature: ${currentTemperatureCelsius.toFixed(1)}°C</p>
    <p>Current Humidity: ${currentHumidity}%</p>
    <p>Next Day's Forecasted Temperature at 15:00: ${nextDayTemperatureCelsius.toFixed(1)}°C</p>
    <p>Weather Description: ${weatherDescription}</p>
    <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="Weather Icon">
  `;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=cozumel&appid=e54077e64ebbe9df11cc59c0b0eaeb5e`)
  .then(response => response.json())
  .then(data => {
    const today = new Date().getDate();
    let maxTempKelvin = 0;

    data.list.forEach(item => {
      const date = new Date(item.dt_txt);
      if (date.getDate() === today && item.main.temp_max > maxTempKelvin) {
        maxTempKelvin = item.main.temp_max;
      }
    });

    if (maxTempKelvin !== 0) {
      const maxTempCelsius = maxTempKelvin - 273.15;
      const highTempMessage = document.getElementById('high-temp-message');
      const highTempValue = document.getElementById('high-temp-value');
      highTempValue.textContent = maxTempCelsius.toFixed(1);

      highTempMessage.style.display = 'block';
    } else {
      console.error('No valid temperature data found for today.');
    }
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });


  function closeMessage() {
    const highTempMessage = document.getElementById('high-temp-message');
    if (highTempMessage) { // Ensure highTempMessage exists
      highTempMessage.style.display = 'none';
    } else {
      console.error('High temperature message element not found.');
    }
  }
  

