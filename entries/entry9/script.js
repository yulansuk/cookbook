const items = [
    { src: 'imgs/blue.png', bgColor: '#266Ca9', textColor: '#ADE1FB', altText: 'Juneberry Redbull' },
    { src: 'imgs/green.png', bgColor: '#2fff05', textColor: '#d3ffb3', altText: 'Elderberry Redbull' },
    { src: 'imgs/red.png', bgColor: '#A90011', textColor: '#E53C38', altText: 'Permission Redbull' }
];

const galleryImages = document.querySelectorAll('.gallery img');


function updateBackgroundColor(index) {
 
    document.body.style.backgroundColor = items[index].bgColor;
    document.getElementById('gallery-text').style.color = items[index].textColor;
}


galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateBackgroundColor(index); // Update the background color based on the clicked can
    });
});