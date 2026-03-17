document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const inner = card.querySelector('.card-inner');
      if(!inner.classList.contains('flipped')){
        inner.style.transform = 'rotateY(180deg)';
        inner.classList.add('flipped');
      }
    });
  });
});
