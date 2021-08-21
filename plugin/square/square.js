var canvas = document.getElementById('square');
var ctx = canvas.getContext('2d');


function drawStuff () {
  // clears old drawings (otherwise you get an afterimage)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // redraw all the shapes in the scene
  ctx.shadowBlur = 50;
  ctx.shadowColor = 'black';
  ctx.fillStyle = 'indigo';
  ctx.fillRect(x, y, 150, 150);
}

var x = 180;
var y = -50;

drawStuff();
setInterval(function () {
  y += 1.5;
  drawStuff();

  // move the box back to the top if it falls offscreen
  if (y > canvas.height + 50) {
    y = -50;
  }
}, 1000 / 60);
// 60 frames a second
