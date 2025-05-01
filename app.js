const apiKey = "4e7f59a98b7c4921b6f353a3fa574a9e";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found! Please try again.");
            }
            return response.json();
        })
        .then(data => {
            const name = data.name;
            const temp = data.main.temp;
            const condition = data.weather[0].main;

            result.innerHTML = `
                <h2>${name}</h2>
                <p>🌡️ Temperature: ${temp}°C</p>
                <p>⛅ Condition: ${condition}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = error.message;
        });
}
