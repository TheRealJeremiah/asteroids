(function () {
  if (typeof window.Asteroids == "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(vecLength) {
    var size = 10;
    var vec = [];
    for(var i=0; i<vecLength; i++) {
      vec.push( ((size * (Math.random() - 0.5))) );
    }
    return vec;
  }
})()
