function setup() {
  createCanvas(400, 400, WEBGL);

  describe('A white triangle spins around on a gray canvas.');
}

function draw() {
  background(2);

  // Rotate around the y-axis.
  rotateY(frameCount * 0.01);

  // Draw the triangle.
  triangle(-50, 75, 35, -50, 136, 125);
}