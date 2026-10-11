
const refreshBtn = document.querySelector("#refreshBtn");
const display = document.querySelector("#display");

async function getWeather() {
    display.textContent = "Loading temperature...";

    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=31.558&longitude=74.3507&current=temperature_2m&timezone=Asia%2FKarachi"
        );

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();
        const temperature = data.current.temperature_2m;

        display.textContent =
            "Current Temperature: " + temperature + "°C";

    } catch (error) {
        display.textContent = "Unable to load temperature";
        console.log("Error:", error.message);
    }
}

getWeather()

setInterval(getWeather, 20000);
// getWeather();

refreshBtn.addEventListener("click", function () {
    getWeather();
});