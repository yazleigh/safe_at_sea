let film;

function setup() {
  createCanvas(windowWidth, windowHeight);
  film = createVideo('sea3.mp4');
  film.size(windowWidth, windowHeight);
  film.loop();
  film.hide();
  noStroke();
  fill(0);
}

function draw() {
  background('white');
  film.loadPixels();
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - film.pixels[i * 4]) / 255;
      const radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}
