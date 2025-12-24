function nextScreen(n) {
  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));

  document.getElementById('screen' + n)
    .classList.add('active');
}
