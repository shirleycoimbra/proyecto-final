document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById("nav");
    const abrir = document.getElementById("abrir");
    const cerrar = document.getElementById("cerrar");
    const body = document.body;
    const capa = document.querySelector('.capa');
    const video = document.querySelector('video');
    const bienvenida = document.querySelector('.bienvenida');

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        body.classList.add("menu-abierto");
        body.style.overflow = 'hidden'; // Evita el scroll
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        body.classList.remove("menu-abierto");
        body.style.overflow = 'auto'; // Restaura el scroll
    });

    // Cerrar el menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("visible");
            body.classList.remove("menu-abierto");
            body.style.overflow = 'auto';
        });
    });
});