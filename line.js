'use strict';
(function(argument){
  window.jestEngine = window.jestEngine || {};
  // A vector is a point with x y z values
  jestEngine.Line = function(options){
    const a = options.from.x;
    const b = options.from.y;
    const c = options.from.z;

    const d = options.to.x;
    const e = options.to.y;
    const f = options.to.z;

    const dx = a - b;
    const dy = b - e;
    const dz = e - f;

    this.vectors = [];

    const distance = options.from.distanceTo(options.to);
    const cur = 0;
    const stepSize = 1;

    // first we add the first point
    let lastV = options.from;
    this.vectors.push(options.from);
    for (let i = 1; i < distance / stepSize; i++) {
      const newX = Math.round(i * stepSize + dx);
      const newY = Math.round(i * stepSize + dy);
      const newZ = Math.round(i * stepSize + dz);
      if (newX !== lastV.x || newY !== lastV.y || newZ !== lastV.z) {
          // if this is a new point;
          const newV = new jestEngine.Vector([newX, newY, newZ]);
          lastV = newV;
          this.vectors.push(newV);
      }
    }
    return this;
  };
})();
// create 12 lines of a cube
let lineA = new jestEngine.Line({
  from: vectorB,
  to: vectorF
})
let lineB = new jestEngine.Line({
  from: vectorB,
  to: vectorG
})
let lineC = new jestEngine.Line({
  from: vectorG,
  to: vectorH
})
let lineD = new jestEngine.Line({
  from: vectorF,
  to: vectorH
})
let lineE = new jestEngine.Line({
  from: vectorA,
  to: vectorD
})
let lineF = new jestEngine.Line({
  from: vectorA,
  to: vectorE
})
let lineG = new jestEngine.Line({
  from: vectorE,
  to: vectorC
})
let lineH = new jestEngine.Line({
  from: vectorD,
  to: vectorC
})
let lineI = new jestEngine.Line({
  from: vectorA,
  to: vectorE
})
let lineJ = new jestEngine.Line({
  from: vectorG,
  to: vectorB
})
let lineK = new jestEngine.Line({
  from: vectorC,
  to: vectorD
})
let lineL = new jestEngine.Line({
  from: vectorF,
  to: vectorH
})
