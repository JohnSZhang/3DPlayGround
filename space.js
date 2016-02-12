'use strict';
(function(argument){
  window.jestEngine = window.jestEngine || {};
  // A vector space is a collection of vectors
  jestEngine.Space= function(options){
    var _this = this;
    this.vectors = {};

    if (options && options.legnth) {
      options.forEach(function (vector) {
        _this.addVector(vector);
      });
    }
    return this;
  };

  jestEngine.Space.prototype.addVector = function(vector){
    this.vectors[vector.toKey()] = vector;
  };

  jestEngine.Space.prototype.hasVector = function(x, y){
    return this.getVectorsList().find((vector) => {
      if (vector.x === x && vector.y === y) {
        //console.log('found vector');
      }
      return vector.x === x && vector.y === y;
    });
  };
  jestEngine.Space.prototype.getVectorsList = function(){
    return Object.keys(this.vectors).map((vectorName) => {
      return this.vectors[vectorName];
    });
  };
  jestEngine.Space.prototype.rotate = function (theta, axis, point) {
    let newSpace = new jestEngine.Space();
    let u = axis.x;
    let v = axis.y;
    let w = axis.z;
    point = point || new jestEngine.Vector([0,0,0]);
    let a = axis.x;
    let b = axis.y;
    let c = axis.z;

    this.getVectorsList().forEach((vector) => {
      let x = vector.x;
      let y = vector.y;
      let z = vector.z;
      let sinT = Math.sin(theta);
      let cosT = Math.cos(theta);
      const newX = Math.round((a * (v * v + w * w)
      - u * (b * v + c * w - u * x - v * y - w * z)) * (1 - cosT)
      + x * cosT + (-1 * c * v + b * w - w * y + v * z) * sinT);

      const newY = Math.round((b * (u * u + w * w)
      - v * (a * u + c * w - u * x - v * y - w * z)) * (1 - cosT)
      + y * cosT + (c * u - a * w + w * x - u * z) * sinT);

      const newZ = Math.round((c * (u * u + v * v)
      - w * (a * u + b * v - u * x - v * y - w * z)) * (1 - cosT)
      + z * cosT + (-1 * b * u + a * v - v * x + u * y) * sinT);

      newSpace.addVector(new jestEngine.Vector([newX, newY, newZ]));
    })
    return newSpace;
  }

})();
// create a space and add the 8 points of the cube
var spaceA = new jestEngine.Space();
spaceA.addVector(vectorA);
spaceA.addVector(vectorB);
spaceA.addVector(vectorC);
spaceA.addVector(vectorD);
spaceA.addVector(vectorE);
spaceA.addVector(vectorF);
spaceA.addVector(vectorG);
spaceA.addVector(vectorH);
