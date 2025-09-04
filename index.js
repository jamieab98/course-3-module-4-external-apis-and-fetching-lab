// index.js
let weatherApi = "https://api.weather.gov/alerts/active?area="

// Your code here!



function getData() {
    const state = document.getElementById("state-input").value;
    const displayTarget = document.getElementById("alerts-display");
    displayTarget.textContent = "";
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
            document.getElementById("error-message").classList.add("hidden");
            document.getElementById("error-message").textContent = "";
        })
        .catch(errorObject => {
            displayTarget.textContent = "";
            console.log(errorObject.message);
            const errorContainer = document.getElementById("error-message");
            errorContainer.textContent = errorObject.message;
            errorContainer.classList.remove("hidden");
        })
        document.getElementById("state-input").value = "";
    
}

document.getElementById("fetch-alerts").addEventListener('click', getData);