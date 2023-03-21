import ApiContent from "./js/content-api";


const apiKey = "";


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

      fetchWeather(latitude, longitude, apiKey);
  }, error => console.log(error));
} else {
    console.log("Geolocation is not supported by this browser.");
    const latitude = 40.778793;
    const longitude = -73.966587;  
    fetchWeather(latitude, longitude, apiKey);
}

function fetchWeather(latitude, longitude, apiKey) { 


    // Make the API request
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Extract relevant weather information
          console.log(data);
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius and round to the nearest integer
        const cloud = data.weather[0].main;

        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png?&alpha=1&background=FFFFFF`;
          
        const weekday = new Date().toLocaleString('en-US', {weekday: 'long'});
        const day = new Date().toLocaleString('en-US', {day: 'numeric'});
        const month = new Date().toLocaleString('en-US', { month: 'short'});
        const year = new Date().toLocaleString('en-US', {year: 'numeric'});

        const weatherLayout = `<div class = \"weather__header\">cloud
        <div class = \"weather__degree\">${temperature} &#8451; </div>
        <div class = \"weather__description\">
            <div class = \"weather__cloud\">
                ${cloud}
            </div>
            <div class = \"weather__location\">
                ${cityName}
            </div>
        </div>
        </div>
        <div class = \"weather__image\"><img src="${iconUrl}" alt="${description}"></div>
        <div class = \"weather__time\">${weekday}<br />${day} ${month} ${year}</div>`;
        document.querySelector('#weather').innerHTML=weatherLayout;

    })
    .catch(error => console.log(error));

}
