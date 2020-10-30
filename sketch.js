

function setup() {
  createCanvas(1590, 700, WEBGL);

}

function draw() {
  background(0);

  let radius = width * 1.5;

  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for (let i = 0; i <= 12; i++) {
    for (let j = 0; j <= 12; j++) {
      push();
      let a = (j / 12) * PI;
      let b = (i / 12) * PI;
      translate(
        sin(2 * a) * radius * sin(b),
        (cos(b) * radius) / 2,
        cos(2 * a) * radius * sin(b)
      );
      if (j % 2 === 0) {
        sphere(50, 50, 50);
      } else {
        sphere(30, 30, 30);
      }
      pop();
    }
  }

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(255);
  directionalLight(255, 25, 0, 0.25, 0.25, 0);
  pointLight(0, 0, 255, locX, locY, 255);

  push();
  translate(-width / 4, 0, 0);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
  box(100, 100, 100);
  pop();

  translate(width / 4, 0, 0);
  ambientMaterial(250);
  box(100, 100, 100);
}
