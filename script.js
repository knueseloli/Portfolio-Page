
window.addEventListener("load", (event) => 
    {
          console.log("page is fully loaded");
          var map = L.map('map').setView([47.08975551894657, 7.446401887035676], 15);
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
          L.marker([47.08975551894657, 7.446401887035676]).addTo(map)     .bindPopup('Die Mehrzweckhalle in Messen:<br> Heimat des Turnverein Messen.')     .openPopup();
        });