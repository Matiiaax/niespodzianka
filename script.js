document.getElementById('revealBtn').addEventListener('click', function () {
  const screen1 = document.getElementById('screen1');
  const screen2 = document.getElementById('screen2');
  const music = document.getElementById('bg-music');

  screen1.style.animation = 'slideOutRight 0.8s forwards';

  setTimeout(() => {
    screen1.style.display = 'none';
    screen2.classList.remove('hidden');
    screen2.style.animation = 'slideInFromRight 1s forwards';
    screen2.classList.add('blurred');
    document.body.classList.add('message-visible');
    music.volume = 0.2;
    music.play().catch(() => {});
  }, 800);
});

document.getElementById('unblurBtn').addEventListener('click', function () {
  const screen2 = document.getElementById('screen2');
  screen2.classList.add('blur-clear');
  screen2.classList.remove('blurred');
  this.style.display = 'none';
  let smile = document.getElementById("smileBtn");
  smile.style.display = 'block';
});

document.getElementById('smileBtn').addEventListener('click', function () {
  for (let i = 0; i < 40; i++) {
    let emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = '🥰';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDelay = (Math.random() * 2) + 's';
    document.getElementById('emojis').appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }
});
