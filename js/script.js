window.getWeather = function () {
    // event.preventDefault()
    let cityName = document.querySelector("#cityName").value;
    let API_KEY = "bd30503813924350feea847416d7bff9";
    //   if (cityName == "") {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector("#name").innerHTML = `Today's Weather of, ${response.data.name} ${response.data.sys["country"]}`;
            document.querySelector("#celsius").innerHTML = `${response.data.main.temp}°C`;
            document.querySelector("#frenhiet").innerHTML = `${((response.data.main.temp * 9 / 5) + 32).toFixed(2)}°F`;
            document.querySelector("#humadity").innerHTML = `Humidity: ${response.data.main.humidity}%`
            document.querySelector("#feels_like").innerHTML = `Feels Like: ${response.data.main.feels_like}°C`
            let status = response.data.weather[0].description;
            document.querySelector("#status").innerHTML = status;

            let info = document.querySelector(".info");
            info.style.padding = "10px 0px"
            let name = document.querySelector("#name");
            name.style.padding = "20px 0px"
            let temp = document.querySelector(".temp");
            temp.style.padding = "20px 0px"
            temp.style.rowGap = ".2em"
            let otherInfo = document.querySelector(".otherInfo");
            otherInfo.style.padding = "20px 0px"
            otherInfo.style.rowGap = ".8em"
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#name").innerHTML = "Please Enter Correct Name"
            document.querySelector("#celsius").innerHTML = "error in getting weather data";
        })
}