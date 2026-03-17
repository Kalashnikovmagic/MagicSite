// Анимация появления текста на Hero при загрузке
window.addEventListener('load', () => {
  document.getElementById('hero').classList.add('visible');
});

// Переворот карт один раз при наведении
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const inner = card.querySelector('.card-inner');
    if(!inner.classList.contains('flipped')) {
      inner.style.transform = 'rotateY(180deg)';
      inner.classList.add('flipped');
    }
  });
});
