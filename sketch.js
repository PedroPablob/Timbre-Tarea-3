let x, y; // Posición del timbre de goma
let colors = []; // Arreglo de colores
let currentColorIndex = 0; // Índice del color actual
let trail = []; // Arreglo para almacenar la estela

function setup() {
  createCanvas(1680, 1050);
  x = width / 2;
  y = height / 2;

  // Llena el arreglo de colores con tonos azules verdosos
  for (let i = 0; i < 10; i++) {
    let c = color(random(100, 150), random(150, 255), random(100, 150));
    colors.push(c);
  }
}

function draw() {
  // Dibuja la estela
  for (let i = 1; i < trail.length; i++) {
    stroke(trail[i].c);
    line(trail[i - 1].x, trail[i - 1].y, trail[i].x, trail[i].y);
  }

  // Dibuja el timbre de goma con el color actual
  fill(colors[currentColorIndex]);
  ellipse(x, y, 50, 50);

  // Parpadeo: cambia el color cada 30 frames
  if (frameCount % 30 === 0) {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  // Agrega la posición actual a la estela
  trail.push({ x: x, y: y, c: colors[currentColorIndex] });

  // Limita la longitud de la estela para evitar que sea demasiado larga
  if (trail.length > 50) {
    trail.shift(); // Elimina el primer elemento para mantener la longitud máxima
  }
}

function mousePressed() {
  // Cuando se hace clic o toque, actualiza la posición del timbre de goma
  x = mouseX;
  y = mouseY;
}
