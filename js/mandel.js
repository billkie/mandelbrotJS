var x, y, i, xt;
var cx, cy;
var color;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var maxIterations = 255;
var xmin=-2,ymin=-2,scale=200;
var xRes = 800, yRes = 800;


canvas.addEventListener("mousedown", zoom, false);

mandeldraw();

function zoom(event){
  console.log("clicked " + event.pageX + " " + event.pageY)
  xmin = xmin + Math.floor(event.pageX / 4) / scale;
  ymin = -Math.floor(event.pageY / 4) / scale + 400 / scale + ymin;
  scale = scale * 2;
  mandeldraw();
}
function mandeldraw(){
  for(x = 0; x < xRes; x++){
    for(y = 0; y < yRes; y++){
      i = 0;
      cx = xmin + x / scale;
      cy = ymin + y / scale;
      zx = 0;
      zy = 0;
      absolute = 0;

      do{
        xt = zx * zy;
        zx = zx * zx - zy * zy + cx;
        zy = 2 * xt + cy;
        absolute = (zx * zx + zy * zy);
        i++;
      }
      while(i < maxIterations && absolute < 4);

      color = i.toString(16);
      context.beginPath();
      context.rect(x, y, 1, 1);
      context.fillStyle = '#' + color + color + color;
      context.fill();
    }
  }
}
