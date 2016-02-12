'use strict';
(function(argument){
  const C_VECTORCOLOR = [150, 170, 220, 255];
  window.jestEngine = window.jestEngine || {};
  // takes a space of verticals and renders an image data
  jestEngine.render = function(space, width, height, defaultColor) {
    function hasVector(pixelNum){
      const x = Math.floor(pixelNum / width) - (width / 2);
      const y = pixelNum % height - (height / 2);
      return space.hasVector(x, y);
    }

    const pixelsLength = 4 * width * height;
    const uintc8 = new Uint8ClampedArray(pixelsLength);
    for (let i = 0; i < pixelsLength; i+=4) {
      const pixelNum = Math.floor(i / 4);
      const color = hasVector(pixelNum) ? C_VECTORCOLOR : defaultColor;
      uintc8[i] = color[0];
      uintc8[i + 1] = color[1];
      uintc8[i + 2] = color[2];
      uintc8[i + 3] = color[3];
    }
    return new ImageData(uintc8, width, height);
  };
})();
