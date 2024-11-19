const confettiButton = document.getElementById('confettiButton');
const confettiContainer = document.getElementById('confettiContainer');
const confettiTemplates = document.getElementById('confettiTemplates');


function createConfetti() {
 
  const confettiTypes = confettiTemplates.children;
  const randomIndex = Math.floor(Math.random() * confettiTypes.length);
  const confetti = confettiTypes[randomIndex].cloneNode(true);


  confetti.style.top = `${Math.random() * window.innerHeight}px`;
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  
  const duration = Math.random() * 3 + 2; 
  confetti.style.animation = `fall ${duration}s linear`;

  confettiContainer.appendChild(confetti);


  setTimeout(() => {
    confetti.remove();
  }, duration * 1000);
}


confettiButton.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    setTimeout(createConfetti, i * 100);
  }
});