document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImage = document.querySelector('.lightbox img');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const imageIndex = [];

    // Add click event listener to all images in gallery
    images.forEach(function (image, index) {
        image.addEventListener('click', function () {
            showLightbox(index);
        });

        // Add image to imageIndex array
        imageIndex.push(image.src);
    });

    // Click event listener for close button
    closeButton.addEventListener('click', function () {
        hideLightbox();
    });

    // Click event listener for previous button
    prevButton.addEventListener('click', function () {
        if (imageIndex.indexOf(lightboxImage.src) === 0) {
            showImage(imageIndex.length - 1);
        } else {
            showImage(imageIndex.indexOf(lightboxImage.src) - 1);
        }
    });

    // Click event listener for next button
    nextButton.addEventListener('click', function () {
        if (imageIndex.indexOf(lightboxImage.src) === imageIndex.length - 1) {
            showImage(0);
        } else {
            showImage(imageIndex.indexOf(lightboxImage.src) + 1);
        }
    });

    // Function to show the lightbox
    function showLightbox(index) {
        lightbox.style.display = 'block';
        showImage(index);
    }

    // Function to hide the lightbox
    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    // Function to show image in lightbox
    function showImage(index) {
        lightboxImage.src = imageIndex[index];
    }
});