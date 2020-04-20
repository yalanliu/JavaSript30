const startButton = document.querySelector('#start');
const clearButton = document.querySelector('#clear');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

ctx.globalCompositeOperation = 'lighten';

startButton.addEventListener('click', startDrawing);
clearButton.addEventListener('click', () => ctx.clearRect(0, 0, 500, 500));

function startDrawing() {
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  // canvas.addEventListener('mouseout', () => isDrawing = false);

  function draw(e) {
    if (!isDrawing) return; 
    ctx.strokeStyle = `hsl(${hue}, 80%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
    hue++;
    if (hue >= 360){
      hue = 0;
    }
    if(ctx.lineWidth >= 50 || ctx.lineWidth < 10){
      direction = !direction;
    }
    if (direction){
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
  } 
}
