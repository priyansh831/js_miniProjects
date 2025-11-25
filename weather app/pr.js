
const btn = document.getElementById("btn");   
const input = document.getElementById("input");
const output = document.getElementById("output");

btn.addEventListener("click", getWeather);

async function getWeather() {
    const API_KEY = "1234567890abcdef1234567890abcdef";
    const city = input.value.trim();

    if (city === "") {
        alert("Enter a valid city name");
        return;
    }

    output.textContent = "Loading...";

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Invalid City");
        }

        const data = await response.json();

        output.innerHTML = `
            <strong>${data.name}</strong><br><br>
            🌡 Temperature: ${data.main.temp}°C <br>
            💧 Humidity: ${data.main.humidity}% <br>
            ☁ Condition: ${data.weather[0].description}
        `;
    } 
    catch (error) {
        output.textContent = "City not found or API Error!";
    }
}
