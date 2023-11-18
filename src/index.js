// Challenge 1

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hours = date.getHours();
  let minutes = ("0" + date.getMinutes()).slice(-2);

  return `${day} ${hours}:${minutes},`;
}

let now = new Date();
let dayTime = document.querySelector("#day-time");
dayTime.innerHTML = formatDate(now);

// Challenge 2

function updateCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#main-city");
  let enterCity = document.querySelector("#enter-city");
  newCity.innerHTML = enterCity.value;
}

let cityInput = document.querySelector("#city-search");
cityInput.addEventListener("submit", updateCity);
