(function () {
  if (typeof window.Asteroids == "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Ship = function (game, pos) {
    Asteroids.movingObject.call(this, game, pos, [0, 0], 20, "#FF0000");
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.movingObject);
})();
