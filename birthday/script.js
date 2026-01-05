function celebrate() {
  document.getElementById('candleContainer').classList.add('show');
  createConfetti();
}

function submitWish() {
  const wish = document.getElementById('wishInput').value;
  if (wish.trim() !== '') {
    document.getElementById('candleContainer').style.display = 'none';
    document.getElementById('message').innerHTML = `✨ May your wish, <span class="wish-text">${wish}</span>, come true this year! ✨`;
    document.getElementById('message').classList.add('show');
    createConfetti();
  }
}

function createConfetti() {
  const colors = ['#ff6b6b', '#4ecdc4', '#ffd700', '#ff6bcb', '#6bff6b'];
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'fixed';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.borderRadius = '50%';
      confetti.style.animation = 'fall 3s linear';
      confetti.style.zIndex = '0';
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 3000);
    }, i * 30);
  }
}
