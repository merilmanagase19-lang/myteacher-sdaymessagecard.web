// Flip card on click
const card = document.getElementById('teacherCard');

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

// Theme switcher
const themeBtn = document.getElementById('themeBtn');
let currentTheme = 0;

const themes = [
  {
    background: 'linear-gradient(45deg, #1e3c72, #2a5298, #3498db)',
    color: '#fff'
  },
  {
    background: 'linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4)',
    color: '#333'
  },
  {
    background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
    color: '#fff'
  },
  {
    background: 'linear-gradient(45deg, #f7ff00, #db36a4)',
    color: '#fff'
  },
  {
    background: 'linear-gradient(45deg, #4facfe, #00f2fe)',
    color: '#333'
  }
];

themeBtn.addEventListener('click', () => {
  currentTheme = (currentTheme + 1) % themes.length;
  const theme = themes[currentTheme];
  document.body.style.background = theme.background;
  document.body.style.color = theme.color;
});