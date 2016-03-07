'use strict';
(function(argument){
  window.jestEngine = window.jestEngine || {};
  // A vector is a point with x y z values
  jestEngine.Vector = function(options){
    // if array we map to x y z, else we create object
    if(options.length) {
      this.x = options[0];
      this.y = options[1];
      this.z = options[2];
    } else {
      this.x = options.x;
      this.y = options.y;
      this.z = options.z;
    }
    return this;
  };

  jestEngine.Vector.prototype.toKey = function(){
    return this.x + ',' + this.y + ',' + this.z;
  };

  jestEngine.Vector.prototype.distanceTo = function(dest) {
    const dx2 = Math.pow((this.x - dest.x), 2);
    const dy2 = Math.pow((this.y - dest.y), 2);
    const dz2 = Math.pow((this.z - dest.z), 2);
    return Math.sqrt(dx2 + dy2 + dz2);
  };
})();
// create 8 points of a cube
var vectorA = new jestEngine.Vector([-15, -15, -15]);
var vectorB = new jestEngine.Vector([15, 15, 15]);
var vectorC = new jestEngine.Vector([-15, 15, 15]);
var vectorD = new jestEngine.Vector([-15, 15, -15]);
var vectorE = new jestEngine.Vector([-15, -15, 15]);
var vectorF = new jestEngine.Vector([15, -15, 15]);
var vectorG = new jestEngine.Vector([15, 15, -15]);
var vectorH = new jestEngine.Vector([15, -15, -15]);
