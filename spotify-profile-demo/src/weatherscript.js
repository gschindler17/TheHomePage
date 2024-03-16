const api_key = "e3e429b24ea148c88ed220203240903";
const location = "Arden Hills, MN";


const receivedWeather = fetchNewWeather(api_key, location);
// populateUI(receivedWeather);



function fetchNewWeather(api_key, location) {
    var pulledWeather1 = "None String";
    var pulledWeather = fetch("http://api.weatherapi.com/v1/forecast.json?key=e3e429b24ea148c88ed220203240903&q=Arden Hills&days=3&aqi=no&alerts=no")
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            //console.log(response.json());
            return response.json();
        })
        .then(data => {
            console.log(data)
            var dataJSON = data;
            // console.log("dataJSON = " + dataJSON);
            // document.getElementById("weather1").innerText = dataJSON.current.temp_f;
            // document.getElementById("weather2").innerText = dataJSON.forecast.forecastday[0].day.maxtemp_f;
            // document.getElementById("weather3").innerText = dataJSON.forecast.forecastday[0].day.mintemp_f;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function populateUI(receivedWeather) {
    
    // document.getElementById("weather1").innerText = receivedWeather.forcast;
    // document.getElementById("weather2").innerText = receivedWeather.forcast.forcastday[1];
    // document.getElementById("weather3").innerText = receivedWeather.forcast.forcastday[2];

    
    // document.getElementById("song1").innerText = topFiveSongs.items[0].name;
    // document.getElementById("song2").innerText = topFiveSongs.items[1].name;
    // document.getElementById("song3").innerText = topFiveSongs.items[2].name;
    // document.getElementById("song4").innerText = topFiveSongs.items[3].name;
    // document.getElementById("song5").innerText = topFiveSongs.items[4].name;
}