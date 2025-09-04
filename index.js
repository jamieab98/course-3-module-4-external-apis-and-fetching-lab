// index.js
let weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!



function getData() {
    const state = document.getElementById("state-input").value;
    const target = document.getElementById("testing");
    const displayTarget = document.getElementById("alerts-display");
    weatherApi = `https://api.weather.gov/alerts/active?area=${state}`;
    //displayTarget.textContent = weatherApi;
    fetch(weatherApi)
        .then(response => response.json())
        .then(data => {
            const dataTitle = data.title;
            const alerts = data.features;
            const numAlerts = alerts.length;
            displayTarget.textContent = `${dataTitle}: ${numAlerts}`;
        })
}

document.getElementById("fetch-alerts").addEventListener('click', getData);