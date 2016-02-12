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
})();
var spaceA = new jestEngine.Space();
spaceA.addVector(vectorA);
spaceA.addVector(vectorB);
spaceA.addVector(vectorC);
spaceA.addVector(vectorD);
spaceA.addVector(vectorE);
spaceA.addVector(vectorF);
spaceA.addVector(vectorG);
