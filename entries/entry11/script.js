const button = document.getElementById('changeBackgroundButton');
const backgrounds = ['background-1', 'background-2', 'background-3', 'background-4', 'background-5', 'background-6', 'background-7', 'background-8', 'background-9',] 

let currentIndex = 0;

button.addEventListener('click', () => {
    // Remove the current background class
    document.body.classList.remove(backgrounds[currentIndex]);
    
    // Update the index
    currentIndex = (currentIndex + 1) % backgrounds.length;
    
    // Add the new background class
    document.body.classList.add(backgrounds[currentIndex]);
});