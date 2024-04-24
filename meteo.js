// Charger les données de configuration de config.json
fetch("config.json")
    .then(response => response.json()) // Convertir la réponse en objet JSON
    .then(config => {
        // Extraire les données de configuration
        const apiKey = config.apiKey;
        const defaultCity = config.defaultCity;
        const units = config.units;
        const apiBaseUrl = config.apiBaseUrl;

        // éléments DOM
        const cityElement = document.getElementById('cityy');
        const temperatureElement = document.getElementById('temperature');
        const feellikeElement = document.getElementById('feellike');
        const humidityElement = document.getElementById('humidity');
        const descriptionElement = document.getElementById('description');
        const windElement = document.getElementById('wind');
        const iconElement = document.getElementById('weather-icon');
        const searchBar = document.getElementById('city');
        const searchButton = document.getElementById('button');

        // Fonction pour afficher les données météo
        function afficherDonneesMeteo(weatherData) {
            cityElement.textContent = `Ville : ${weatherData.name}`;
            temperatureElement.textContent = `Température : ${weatherData.main.temp}°C`;
            feellikeElement.textContent = `Ressenti : ${weatherData.main.feels_like}°C`;
            humidityElement.textContent = `Humidité : ${weatherData.main.humidity} %`;
            descriptionElement.textContent = `Conditions : ${weatherData.weather[0].description}`;
            windElement.textContent = `Vent : ${weatherData.wind.speed} km/h`;

            // Construire l'URL de l'icône météo
            const iconBaseUrl = "https://openweathermap.org/img/wn/";
            const iconUrl = `${iconBaseUrl}${weatherData.weather[0].icon}@2x.png`;

            // MAJ élément img pour afficher l'icône météo
            iconElement.src = iconUrl;
        }

        // Fonction pour effectuer une requête à l'API météo pour une ville spécifique
        function rechercherVille(ville) {
            const apiUrl = `${apiBaseUrl}?q=${ville}&appid=${apiKey}&units=${units}`;
            fetch(apiUrl)
                .then(response => response.json())
                .then(weatherData => {
                    // Afficher les données météo de la ville
                    afficherDonneesMeteo(weatherData);
                    console.log(weatherData); // Afficher sur la console
                })
                .catch(error => {
                    console.error("Erreur lors de la requête à l'API météo :", error);
                });
        }

        // Effectuer une recherche initiale avec la ville par défaut
        rechercherVille(defaultCity);

        // MAJ automatique des données météorologique
        const intervalMillis = 60 * 60 * 1000; // 1h
        setInterval(() => {
            rechercherVille(defaultCity);
        }, intervalMillis);
        
    })
    .catch(error => {
        console.error("Erreur lors du chargement ou de l'analyse de config.json:", error);
    });
        