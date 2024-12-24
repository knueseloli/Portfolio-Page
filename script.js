
window.addEventListener("load", (event) => 
    {
          console.log("page is fully loaded");
          var map = L.map('map').setView([47.08975551894657, 7.446401887035676], 15);
          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19,attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
          L.marker([47.08975551894657, 7.446401887035676]).addTo(map)     .bindPopup('Die Mehrzweckhalle in Messen:<br> Heimat des Turnverein Messen.')     .openPopup();
        });

// Wähle alle Links in der Navigation aus
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Verhindert das Standardspringen

        // Ziel-Element basierend auf dem href-Attribut finden
        const target = document.querySelector(this.getAttribute('href'));

        // Sanft zu dem Ziel-Element scrollen
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.querySelectorAll('.home-box').forEach(box => {
    box.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('data-target'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const scrollToTopButton = document.getElementById('scrollToTop');

// Zeigt den Button an, wenn der Benutzer nach unten scrollt
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scrollt nach oben, wenn der Button geklickt wird
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
