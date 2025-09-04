// index.js
let weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!



function getData() {
    const state = document.getElementById("state-input").value;
    const displayTarget = document.getElementById("alerts-display");
    weatherApi = `https://api.weather.gov/alerts/active?area=${state}`;
    fetch(weatherApi)
        .then(response => response.json())
        .then(data => {
            const dataTitle = data.title;
            const alerts = data.features;
            const numAlerts = alerts.length;
            displayTarget.textContent = `${dataTitle}: ${numAlerts}`;
            const alertList = document.createElement("ul");
            displayTarget.appendChild(alertList);
            alerts.forEach(alert => {
                const li = document.createElement("li");
                li.textContent = alert.properties.headline;
                alertList.appendChild(li);
            });
        })
    
}

document.getElementById("fetch-alerts").addEventListener('click', getData);