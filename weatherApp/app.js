const apiKey ="256a140818afdf97ff87847f82818297";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".inputbox");
const searchButton = document.querySelector(".btn");

async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
        //checking reposnse status
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-box").style.display="none";
    }else{
    let data = await response.json();
    console.log(data);
//Updating the weather details in the UI
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    //update images according to weather
    if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }else if(data.weather[0].main =="Rain"){
        document.querySelector(".weather-icon").src = "images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "images/snow.png";
    }else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }

    //displaying the weather box
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather-box").style.display="block";
}

}

//search box event listener
searchButton.addEventListener("click", ()=>{checkWeather(searchBox.value)})


