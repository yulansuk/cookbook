document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

   
    pauseButton.style.display = 'none'; 

    
    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.opacity = '0.5'; 
        pauseButton.style.opacity = '1'; 
    });

    pauseButton.addEventListener('click', () => {
        audio.pause(); 
        pauseButton.style.opacity = '0.5'; 
        playButton.style.opacity = '1'; 
    });

    audio.addEventListener('ended', () => {
        pauseButton.style.opacity = '0.5'; // 
        playButton.style.opacity = '1'; 
    });
});