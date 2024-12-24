
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

document.addEventListener("DOMContentLoaded", () => {
    const targetValue = 10.6; // Zielwert
    const duration = 2000; // Zähldauer in Millisekunden
    const interval = 10; // Zeit zwischen Updates in Millisekunden
    const element = document.getElementById("leftHandedCount");

    let currentValue = 0;
    const increment = targetValue / (duration / interval);

    const startCounter = () => {
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue; // Genau abschließen
                clearInterval(counter);
            }
            element.textContent = currentValue.toFixed(1); // Zeigt eine Dezimalstelle an
        }, interval);
    };

    // IntersectionObserver: Startet den Counter, wenn die Box sichtbar wird
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounter();
                observer.disconnect(); // Beobachtung stoppen, nachdem der Counter gestartet ist
            }
        });
    });

    observer.observe(document.querySelector(".counter-box"));
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
