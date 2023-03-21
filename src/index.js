import ApiContent from "./js/content-api";


const apiKey = "";

// Get the user's current position
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Make the API request
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Extract relevant weather information
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius and round to the nearest integer
        const description = data.weather[0].description;
const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png?&alpha=1&background=FFFFFF`;

const iconImg = `<img src="${iconUrl}" alt="${description}">`;

          
        const date = new Date().toLocaleString('en-US', {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'}).replace(',', '').replace(' ', '<br />');


        // Display the weather information
        console.log(`The current temperature in ${cityName} is ${temperature} degrees Celsius and ${description}.`);

                  console.log(iconImg);
        console.log(`Today is ${date}.`);
      })
      .catch(error => console.log(error));
  }, error => console.log(error));
} else {
  console.log("Geolocation is not supported by this browser.");
}


