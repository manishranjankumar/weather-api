let main = document.querySelector(".main")
let input = document.querySelector(".input")
let button = document.querySelector(".button")
let weather_image_src = document.querySelector(".weather_image_src")
let degree = document.querySelector(".degree")
let city_location = document.querySelector(".city_location")
let humadity_para = document.querySelector(".humadity_para")
let wind_speed_para = document.querySelector(".wind_speed_para")


let weather = async (click_data) => {
    let weather_keys = "ed5dbc99564a144bbec851ba791d0fda"
    let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${click_data}&appid=${weather_keys}`)
    let data = await resp.json();
    console.log(data);


    if (data.cod == "404") {
        // main.style.display = "none"
        main.innerHTML = `${data.message}`
    }
    else {
        degree.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
        city_location.innerHTML = `${data.name}`
        humadity_para.innerHTML = `Humadity ${data.main.humidity}%`
        wind_speed_para.innerHTML = `Wind Speed :${data.wind.speed} kmph`


        if (data.weather[0].main == "Mist") {
            weather_image_src.src = "./assets/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            weather_image_src.src = "./assets/rain.png"
        }
        else if (data.weather[0].main == "Clear") {
            weather_image_src.src = "./assets/clear.png"
        }
        else if (data.weather[0].main == "Clouds") {
            weather_image_src.src = "./assets/clouds.png"
        }
        else if (data.weather[0].main == "Snow") {
            weather_image_src.src = "./assets/snow.png"
        }
        else if (data.weather[0].main = "Drizzle") {
            weather_image_src.src = "./assets/drizzle.png"
        }
        return true
    }

}


// weather()
button.addEventListener("click", () => {
    weather(input.value)
})
