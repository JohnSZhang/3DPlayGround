(function(argument){
  window.jestEngine = window.jestEngine || {};
  // A vector is a point with x y z values
  jestEngine.Vector = function(options){
    var _this = this;
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
})();
var vectorA = new jestEngine.Vector([-10, -10, -10]);
var vectorB = new jestEngine.Vector([10, 10, 10]);
var vectorC = new jestEngine.Vector([-10, 10, 10]);
var vectorD = new jestEngine.Vector([-10, 10, -10]);
var vectorE = new jestEngine.Vector([-10, -10, 10]);
var vectorF = new jestEngine.Vector([10, -10, 10]);
var vectorG = new jestEngine.Vector([10, 10, -10]);
var vectorH = new jestEngine.Vector([10, -10, -10]);
