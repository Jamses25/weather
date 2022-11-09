window.addEventListener("load",(initial()));
function initial(){
    let cityName = document.querySelector(".search-area").value;
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&units=metric&appid=68faf8ac7783eda3c4f2a33db7dcaa0b";
    fetch (api)
    .then((response) => {
        return response.json();
    })
    .then ((data) => {
        displayWeather (data);
    })
    };
function displayWeather(data){
    const {name} = data;
    const {description, icon} = data.weather[0];
    const {temp, temp_min, temp_max, pressure, humidity} = data.main;
    const {speed} = data.wind;
    document.querySelector(".city").textContent = "Weather in " + name;
    document.querySelector(".temp").textContent = temp + "℃";
    document.querySelector(".wind").textContent ="Wind speed: "+ speed + "m/s";
    document.querySelector(".humidity").textContent = "Humidity: "+humidity + " %";
    document.querySelector(".pressure").textContent = "Pressure: " + pressure +" hPa";
    document.querySelector(".min-tem").textContent = "Min Temp: " +temp_min +"℃";
    document.querySelector(".max-tem").textContent = "Max Temp: " +temp_max +"℃";
    document.querySelector(".image-icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").textContent = description
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?/landscape/" + name + "')";
};
let searchInput = document.querySelector(".search-area");
searchInput.addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    initial();
  }
});                                          