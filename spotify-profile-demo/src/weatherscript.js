const api_key = "c179e6203e8842d0a85182147240903";
const location = "Arden Hills, MN";


const receivedWeather = await fetchNewWeather(api_key, location);



function fetchNewWeather(api_key, location) {
    var pulledWeather = fetch("http://api.weatherapi.com/v1/forecast.json?key=c179e6203e8842d0a85182147240903&q=Arden Hills&days=3&aqi=no&alerts=no")
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            pulledWeather = data
        })
        .catch(error => {
            console.error('Error:', error);
        });
    
    console.log("PulledWeather" + pulledWeather)
}

function populateUI(receivedWeather) {
    
    
    // document.getElementById("song1").innerText = topFiveSongs.items[0].name;
    // document.getElementById("song2").innerText = topFiveSongs.items[1].name;
    // document.getElementById("song3").innerText = topFiveSongs.items[2].name;
    // document.getElementById("song4").innerText = topFiveSongs.items[3].name;
    // document.getElementById("song5").innerText = topFiveSongs.items[4].name;
}