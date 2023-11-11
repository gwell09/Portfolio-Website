const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const closeButton = document.querySelector('.close-button');

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImage.src = image.src;
    });
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});