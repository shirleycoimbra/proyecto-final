document.addEventListener('DOMContentLoaded', function() {
    const abrir = document.getElementById('abrir');
    const cerrar = document.getElementById('cerrar');
    const nav = document.getElementById('nav');
    
    abrir.addEventListener('click', () => {
        nav.classList.add('visible');
        abrir.style.display = 'none';
        cerrar.style.display = 'block';
    });
    
    cerrar.addEventListener('click', () => {
        nav.classList.remove('visible');
        cerrar.style.display = 'none';
        abrir.style.display = 'block';
    });
});

    // Lightbox Gallery
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");
    const lightboxPrev = document.getElementById("lightboxPrev");
    const lightboxNext = document.getElementById("lightboxNext");
    const galleryItems = document.querySelectorAll('.galeria_item');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        return item.querySelector('.galeria_img').src;
    });

    // Abrir lightbox al hacer clic en una imagen
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            updateLightboxImage();
            lightbox.classList.add('active');
            body.style.overflow = 'hidden';
        });
    });



    // Navegación entre imágenes
    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    });

    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightboxImage();
    });

    // Actualizar imagen en el lightbox
    function updateLightboxImage() {
        lightboxImg.src = images[currentImageIndex];
    }
    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });