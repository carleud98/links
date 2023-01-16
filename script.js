const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
  glow.style.top = `${e.pageY}px`;
  glow.style.left = `${e.pageX}px`;
});