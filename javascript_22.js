document.getElementById('button1').onclick = () => {
  const btn = document.getElementById('button2');
  btn.classList.toggle('blue');
  btn.classList.toggle('red');
  btn.textContent = btn.classList.contains('blue') ? 'I am Blue' : 'I am Red';
};
