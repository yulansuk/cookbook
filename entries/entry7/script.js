console.log("JavaScript is linked and working!")

// Select all the foreground images
const images = document.querySelectorAll('.spam, .soysauce, .rice, .sugar, .seaweed');

// Add event listener to each image to add the "visible" class on first hover
images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.classList.add('visible'); // Add the "visible" class once
    });
});