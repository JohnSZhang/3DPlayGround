'use strict';
const C_WIDTH = 800;
const C_HEIGHT = 600;
// default color of background pixel, RGBA
const C_DEFAULTBACKGROUND = [0, 0, 0, 255];
const RANDOM_COLOR = false;

function randomColorValue() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  return [randomColorValue(), randomColorValue(), randomColorValue(), 255];
}

document.addEventListener("DOMContentLoaded", function(event) {
  initializeContext({ randomColor: RANDOM_COLOR });
});

function initializeContext(options) {
  const canvas = document.getElementById('canvas');
  const canvasContext = canvas.getContext('2d');
  const pixelsLength = 4 * C_WIDTH * C_HEIGHT;
  const use_random =
  window.requestAnimationFrame(drawFrame.bind(window, canvasContext, pixelsLength, options.randomColor));
};

function drawFrame(canvasContext, pixelsLength, randomColor) {
  const uintc8 = new Uint8ClampedArray(pixelsLength);
  for (let i = 0; i < pixelsLength; i+=4) {
    const color = randomColor ? randomColor() : C_DEFAULTBACKGROUND;
    uintc8[i] = color[0];
    uintc8[i + 1] = color[1];
    uintc8[i + 2] = color[2];
    uintc8[i + 3] = color[3];
  }
  canvasContext.putImageData(new ImageData(uintc8, C_WIDTH, C_HEIGHT), 0, 0);
  window.requestAnimationFrame(drawFrame.bind(window, canvasContext, pixelsLength, randomColor));
}
