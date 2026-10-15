const apiKey = "YOUR_API_KEY_HERE";
let timer; // Debouncing ke liye timer reference

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");
const errorMsg = document.getElementById("errorMsg");

const cityName = document.getElementById("cityName");
const weatherDesc = document.getElementById("weatherDesc");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    fetchWeatherData(city);
  }
});

// Input field par 'input' event listener lagayein
cityInput.addEventListener("input", () => {
    const city = cityInput.value.trim();

    // Purana timer cancel karein agar user dobara type kare
    clearTimeout(timer);

    if (city.length >= 3) { // Jab kam az kam 3 characters type ho jayein
        // 600ms ka delay set karein
        timer = setTimeout(() => {
            fetchWeatherData(city);
        }, 600);
    } else {
        weatherCard.classList.add("hidden");
        errorMsg.classList.add("hidden");
    }
});

// Enter key press karne par bhi search ho jaye
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city !== "") {
      fetchWeatherData(city);
    }
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherCard.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
}

function displayWeather(data) {
  errorMsg.classList.add("hidden");
  weatherCard.classList.remove("hidden");

  cityName.textContent = `${data.name}, ${data.sys.country}`;
  weatherDesc.textContent = data.weather[0].description;
  temp.textContent = `${Math.round(data.main.temp)}°C`;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
}


