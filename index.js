'use strict';
const C_WIDTH = 400;
const C_HEIGHT = 400;
// default color of background pixel, RGBA
const C_DEFAULTBACKGROUND = [0, 0, 0, 255];
const MAX_FRAMECOUNT = null;
let currentFrameCount = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  initializeContext();
});

function initializeContext(options) {
  const canvas = document.getElementById('canvas');
  const canvasContext = canvas.getContext('2d');
  const use_random = false
  window.requestAnimationFrame(drawFrame.bind(window, canvasContext, C_WIDTH, C_HEIGHT));
};

function drawFrame(canvasContext, width, height) {
  currentFrameCount+=1;
  const newImage = jestEngine.render(spaceA, width, height, C_DEFAULTBACKGROUND);
  canvasContext.putImageData(newImage, 0, 0);
  spaceA = spaceA.rotate(0.05, new jestEngine.Vector([1, 1, 0]), new jestEngine.Vector([0, 0, 0]))
  if (!MAX_FRAMECOUNT || currentFrameCount <= MAX_FRAMECOUNT) {
    window.requestAnimationFrame(drawFrame.bind(window, canvasContext, width, height));
  }
}
