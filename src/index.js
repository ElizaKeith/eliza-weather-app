function refreshWeather(response){
    let temperatureElement=document.querySelector("#temperature");
let temperature= response.data.temperature.current;
  let cityElement=document.querySelector("#city");
  let descriptionElement= document.querySelector("#description");
  let humidityElement= document.querySelector("#humidity");
  let windSpeedElement= document.querySelector("#wind-speed");
  let timeElement= document.querySelector("#time");
  let date=new Date (response.data.time * 1000);
let iconElement=document.querySelector("#icon");

  cityElement.innerHTML=response.data.city;
  timeElement.innerHTML = formatDate (date);
  descriptionElement.innerHTML=response.data.condition.description;
  humidityElement.innerHTML=` ${response.data.temperature.humidity}% `;
  windSpeedElement.innerHTML= ` ${response.data.wind.speed} km/h`;
temperatureElement.innerHTML=Math.round(temperature);
iconElement.innerHTML=`<img src="${response.data.condition.icon_url}"  class="weather-app-icon"  />`;
}

function formatDate(date) {

let minuets=date.getMinutes();
let hour=date.getHours();
let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[date.getDay()];
if (minuets<10) {minuets= `0${minuets}`};
return `${day} ${hour}:${minuets}`
}


function searchCity(city){
let apiKey="o0bta765574648ffe02e8d81539be096";
apiUrl= `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}
function handleSearch (event){
    event.preventDefault();
autocomplete="off";
    let searchInput= document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
}

function displayfahrenheitTemperature(event){
  event.preventDefault();
  let fahrenheitTemperature= (celsiusTemperature * 9 /5 ) +32;











  
  let temperatureElement=document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  temperatureElement.innerHTML=Math.round (celsiusTemperature);
}

function displaycelsiusTemperature(event){
  event.preventDefault();
  let temperatureElement=document.querySelector ("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove ("active");
  temperatureElement.innerHTML=Math.round(celsiusTemperature);
}

celsiusTemperature=null;
let form=document.querySelector("#search-form");
form.addEventListener("submit", handleSearch)

let fahrenheitLink=document.querySelector ("#fahrenheit-link");
fahrenheitLink.addEventListener ("click", displayfahrenheitTemperature);

let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displaycelsiusTemperature);









let searchFormElement = document.querySelector ("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
searchCity("Midlothian");