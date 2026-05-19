const lat = 39.368;
const lon = -94.352;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var weatherData;

async function getWeather() {
  await fetch(apiUrl, { method: "GET", cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(`%c${days[new Date().getDay()]}`, "color:green");
      weatherData = data;
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

async function populateDOM() {
  await getWeather();

  const weatherIcon = document.getElementsByClassName("icon-img")[0];
  const theTemp = document.getElementsByClassName("the-temp")[0];
  const weather = document.getElementsByClassName("what-weather")[0];
  const windSpeed = document.getElementsByClassName("wind")[0];

  const tomorrowDay = document.getElementsByClassName("tomorrow")[0];
  const tomorrowWeatherIcon = document.getElementsByClassName("tomorrow-icon")[0];
  const tomorrowHi = document.getElementsByClassName("future-row-1")[0].getElementsByClassName("hi")[0];
  const tomorrowLo = document.getElementsByClassName("future-row-1")[0].getElementsByClassName("lo")[0];

  const dayAfterTomorrowDay = document.getElementsByClassName("day-after-tomorrow")[0];
  const dayAfterTomorrowIcon = document.getElementsByClassName("day-after-tomorrow-icon")[0];
  const dayAfterTomorrowHi = document.getElementsByClassName("future-row-2")[0].getElementsByClassName("hi")[0];
  const dayAfterTomorrowLo = document.getElementsByClassName("future-row-2")[0].getElementsByClassName("lo")[0];

  const threeDaysFromTodayDay = document.getElementsByClassName("three-days-from-today")[0];
  const threeDaysFromTodayIcon = document.getElementsByClassName("three-days-from-today-icon")[0];
  const threeDaysFromTodayHi = document.getElementsByClassName("future-row-3")[0].getElementsByClassName("hi")[0];
  const threeDaysFromTodayLo = document.getElementsByClassName("future-row-3")[0].getElementsByClassName("lo")[0];

  const current = weatherData.current;
  const iconPath = assignIcon(current.weathercode);
  weatherIcon.src = `./assets/images/icons/${iconPath}.png`;
  theTemp.innerHTML = Math.ceil(current.temperature_2m);
  weather.innerHTML = getWeatherDescription(current.weathercode);
  windSpeed.innerHTML = Math.ceil(current.windspeed_10m);

  const daily = weatherData.daily;

  const setDay = (dayEl, iconEl, hiEl, loEl, idx) => {
    dayEl.innerHTML = days[new Date(daily.time[idx] + "T00:00:00").getDay()];
    iconEl.src = `./assets/images/icons/${assignIcon(daily.weathercode[idx])}.svg`;
    hiEl.innerHTML = Math.ceil(daily.temperature_2m_max[idx]);
    loEl.innerHTML = Math.ceil(daily.temperature_2m_min[idx]);
  };

  setDay(tomorrowDay, tomorrowWeatherIcon, tomorrowHi, tomorrowLo, 1);
  setDay(dayAfterTomorrowDay, dayAfterTomorrowIcon, dayAfterTomorrowHi, dayAfterTomorrowLo, 2);
  setDay(threeDaysFromTodayDay, threeDaysFromTodayIcon, threeDaysFromTodayHi, threeDaysFromTodayLo, 3);
}

populateDOM();

const assignIcon = function (code) {
  if (code === 0) return "sun";
  if (code === 1) return "sun";
  if (code === 2) return "part-cloud";
  if (code === 3) return "cloudy";
  if (code === 45 || code === 48) return "foggy";
  if (code >= 51 && code <= 67) return "rain";
  if (code >= 71 && code <= 77) return "snow";
  if (code >= 80 && code <= 82) return "rain";
  if (code === 85 || code === 86) return "snow";
  if (code >= 95) return "rain";
  return "sun";
};

const getWeatherDescription = function (code) {
  if (code === 0) return "Clear Sky";
  if (code === 1) return "Mostly Clear";
  if (code === 2) return "Partly Cloudy";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Foggy";
  if (code === 51 || code === 53 || code === 55) return "Drizzle";
  if (code === 61 || code === 63 || code === 65) return "Rain";
  if (code === 66 || code === 67) return "Freezing Rain";
  if (code === 71 || code === 73 || code === 75) return "Snow";
  if (code === 77) return "Snow Grains";
  if (code === 80 || code === 81 || code === 82) return "Rain Showers";
  if (code === 85 || code === 86) return "Snow Showers";
  if (code === 95) return "Thunderstorm";
  if (code === 96 || code === 99) return "Thunderstorm with Hail";
  return "Unknown";
};
