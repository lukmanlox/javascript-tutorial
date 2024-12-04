document.getElementById('toggleBtn').onclick = () => {
  const btn = document.getElementById('colorBtn');
  btn.classList.toggle('blue');
  btn.classList.toggle('red');
  btn.textContent = btn.classList.contains('blue') ? 'I am Blue' : 'I am Red';
};
