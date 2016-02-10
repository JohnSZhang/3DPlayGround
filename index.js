'use strict';
const C_WIDTH = 200;
const C_HEIGHT = 200;
// default color of background pixel, RGBA
const C_DEFAULTBACKGROUND = [200, 200, 55, 255];

function randomColorValue() {
  return Math.floor(Math.random() * 255);
}

function randomPastal () {
  return [randomColorValue(), randomColorValue(), randomColorValue(), 255];
}

document.addEventListener("DOMContentLoaded", function(event) {
  initializeContext();
});

function initializeContext() {
  const canvas = document.getElementById('canvas');
  const canvasContext = canvas.getContext('2d');
  const pixelsLength = 4 * C_WIDTH * C_HEIGHT;
  window.requestAnimationFrame(drawFrame.bind(window, canvasContext, pixelsLength));
};

function drawFrame(canvasContext, pixelsLength) {
  const uintc8 = new Uint8ClampedArray(pixelsLength);
  for (let i = 0; i < pixelsLength; i+=4) {
    let color = randomPastal();
    uintc8[i] = color[0];
    uintc8[i + 1] = color[1];
    uintc8[i + 2] = color[2];
    uintc8[i + 3] = color[3];
  }
  canvasContext.putImageData(new ImageData(uintc8, C_WIDTH, C_HEIGHT), 0, 0);
  window.requestAnimationFrame(drawFrame.bind(window, canvasContext, pixelsLength));
}
