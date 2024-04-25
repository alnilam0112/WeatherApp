<hr>
<h1>Application Météo</h1>
<hr>

Cette application affiche la météo d'une ville sur une interface dynamique pour les utilisateurs des transports en commun.
<br>

<hr>
<h2>Technologies Utilisées</h2>
<hr>

- HTML
- CSS
- JavaScript
- JSON

<hr>
<h2>Instructions pour l'utilisateur</h2>
<hr>

<h3>Modifier la ville</h3>
Pour changer la ville affichée dans l'application, suivez les étapes ci-dessous :

1. Ouvrez le fichier `config.json`.
2. Modifiez la valeur de `"defaultCity"` pour la ville de votre choix (par défaut, elle est définie sur "Lacanau").

<h3>Changer les fonds d'écran</h3>
Pour remplacer les fonds d'écran de l'interface météo :

1. Ouvrez le fichier `style.css`.
2. Dans l'élément `<body>`, modifiez l'URL de l'image de fond (`background-image`).
3. Pour ajouter de nouvelles images, téléchargez-les dans le dossier `/images` et mettez à jour l'URL de l'image dans `style.css`.

<h3>Changer la couleur du fond du contenu informatif</h3>
Pour changer la couleur de fond du contenu informatif :

1. Ouvrez le fichier `style.css`.
2. Dans l'élément `.weather-container`, modifiez la couleur de fond en changeant les valeurs de `rgba`.
3. Pour changer la couleur de la bordure, suivez les mêmes étapes, en modifiant la valeur de `border`.

<hr>
<h2>API</h2>
<hr>

L'application utilise l'API libre d'accès de [OpenWeatherMap](https://openweathermap.org/), qui permet de rechercher les données météorologiques par nom de ville et couvre un large choix de localisations. Les données météorologiques sont mises à jour automatiquement toutes les heures via JavaScript.

<div style="text-align: center;">
<br>
.
<br>
.
<br>
.
<br>
.
<br>
.
<br>

:)
</div>
