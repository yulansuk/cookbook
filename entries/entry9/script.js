// Gallery items with their associated background colors
const items = [
    { src: 'imgs/blue.png', bgColor: '#266Ca9', textColor: '#ADE1FB', altText: 'Juneberry Redbull' },
    { src: 'imgs/green.png', bgColor: '#2fff05', textColor: '#d3ffb3', altText: 'Elderberry Redbull' },
    { src: 'imgs/red.png', bgColor: '#A90011', textColor: '#E53C38', altText: 'Permission Redbull' }
];

const galleryImages = document.querySelectorAll('.gallery img');

// Function to update the background color based on the clicked can
function updateBackgroundColor(index) {
    // Change the background color based on the can clicked
    document.body.style.backgroundColor = items[index].bgColor;
    // Optionally update text color
    document.getElementById('gallery-text').style.color = items[index].textColor;
}

// Add event listeners for each image to trigger the color change
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateBackgroundColor(index); // Update the background color based on the clicked can
    });
});