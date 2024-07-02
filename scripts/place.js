const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const today = new Date();
year.innerHTML = today.getFullYear();
lastModified.innerHTML = new Date(document.lastModified);

const temperature = document.querySelector("#temperature");
const temperatureUnit= document.querySelector("#temperatureUnit");

if(temperatureUnit=="F"){
    temperature = (temperature - 32) * (5 / 9);
}

const wind = document.querySelector("#wind");
const windChillFactor = document.querySelector("#windChillFactor");

if (temperature <= 10 && wind > 4.8) {
    windChillFactor.innerHTML = calculateWindChill(temperature, wind);
}else{
    windChillFactor.innerHTML="N/A";
}


function calculateWindChill(temperature, windSpeed) {
    // Check if temperature is in Celsius; if not, convert it


    // Calculate wind chill index
    let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

    // Round wind chill to nearest integer
    windChill = Math.round(windChill);

    return windChill;
}