
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.car-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const link = image.closest('a').href; // Get the href from the closest anchor
            window.location.href = link;
        });
    });
});