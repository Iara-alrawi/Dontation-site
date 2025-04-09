// Hanterar meny toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active'); // Lägg till eller ta bort 'active' klassen
    });
});
