const BLACK = 'rgb(0, 0, 0)';
const WHITE = 'rgb(255, 255, 255)';
const DEFAULT_SIZE = 5;
const MIN_SIZE = 5;
const MAX_SIZE = 50;
const DEFAULT_PALETTE = [BLACK, 'rgb(255, 0, 0)', 'rgb(0, 128, 0)', 'rgb(0, 0, 255)'];

const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const randomButton = document.getElementById('button-random-color');
const clearButton = document.getElementById('clear-board');
const sizeInput = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

// ----- Paleta de cores -----

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  // a cor preta é fixa na primeira posição, então evitamos repeti-la
  if (color === BLACK) return getRandomColor();
  return color;
}

function loadPalette() {
  const saved = JSON.parse(localStorage.getItem('colorPalette'));
  if (saved && saved.length === DEFAULT_PALETTE.length) return saved;
  return DEFAULT_PALETTE;
}

function savePalette() {
  const colors = [...document.querySelectorAll('.color')]
    .map((color) => color.style.backgroundColor);
  localStorage.setItem('colorPalette', JSON.stringify(colors));
}

function createPalette(colors) {
  palette.innerHTML = '';
  colors.forEach((color, index) => {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = color;
    if (index === 0) div.classList.add('selected'); // preto começa selecionado
    palette.appendChild(div);
  });
}

function randomizePalette() {
  const colors = document.querySelectorAll('.color');
  colors.forEach((color, index) => {
    // a primeira cor é sempre preta
    color.style.backgroundColor = index === 0 ? BLACK : getRandomColor();
  });
  savePalette();
}

function getSelectedColor() {
  const selected = document.querySelector('.color.selected');
  return selected ? selected.style.backgroundColor : BLACK;
}

palette.addEventListener('click', (event) => {
  if (!event.target.classList.contains('color')) return;
  document.querySelectorAll('.color').forEach((color) => color.classList.remove('selected'));
  event.target.classList.add('selected');
});

randomButton.addEventListener('click', randomizePalette);

// ----- Quadro de pixels -----

function savePixelBoard() {
  const colors = [...document.querySelectorAll('.pixel')]
    .map((pixel) => pixel.style.backgroundColor || WHITE);
  localStorage.setItem('pixelBoard', JSON.stringify(colors));
}

function createBoard(size, savedColors) {
  board.innerHTML = '';
  board.style.width = `${size * 42}px`; // 40px de conteúdo + 1px de borda de cada lado
  for (let i = 0; i < size * size; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = savedColors && savedColors[i] ? savedColors[i] : WHITE;
    board.appendChild(pixel);
  }
}

board.addEventListener('click', (event) => {
  if (!event.target.classList.contains('pixel')) return;
  event.target.style.backgroundColor = getSelectedColor();
  savePixelBoard();
});

clearButton.addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    pixel.style.backgroundColor = WHITE;
  });
  savePixelBoard();
});

// ----- Tamanho do quadro (bônus) -----

function getValidSize(value) {
  let size = Number(value);
  if (size < MIN_SIZE) size = MIN_SIZE;
  if (size > MAX_SIZE) size = MAX_SIZE;
  return size;
}

generateButton.addEventListener('click', () => {
  if (sizeInput.value === '') {
    alert('Board inválido!');
    return;
  }
  const size = getValidSize(sizeInput.value);
  createBoard(size);
  localStorage.removeItem('pixelBoard');
  localStorage.setItem('boardSize', JSON.stringify(size));
});

// ----- Inicialização -----

function init() {
  createPalette(loadPalette());

  const savedSize = JSON.parse(localStorage.getItem('boardSize'));
  const size = savedSize || DEFAULT_SIZE;

  const savedBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  const colors = savedBoard && savedBoard.length === size * size ? savedBoard : null;

  createBoard(size, colors);
}

init();
