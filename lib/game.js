(function () {
  if (typeof window.Asteroids == "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship(this, this.randomPos());
  };

  Asteroids.Game.DIM_X = window.innerWidth;
  Asteroids.Game.DIM_Y = window.innerHeight;
  Asteroids.Game.NUM_ASTEROIDS = 40;

  Asteroids.Game.prototype.randomPos = function() {
    var x = Math.random();
    var y = Math.random();
    var x = (Asteroids.Game.DIM_X * x) | 0;
    var y = (Asteroids.Game.DIM_Y * y) | 0;
    return [x, y];
  };

  Asteroids.Game.prototype.addAsteroids = function () {
    for(var i = 0; i<Asteroids.Game.NUM_ASTEROIDS; i++) {
      var pos = this.randomPos();
      var asteroid = new Asteroids.Asteroid(this, pos);
      this.asteroids.push(asteroid);
    }
  };

  Asteroids.Game.prototype.draw = function () {
    for(var i=0; i<this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    }
  };

  Asteroids.Game.prototype.wrap = function (pos) {
    var x = pos[0];
    if (x < 0) {
      x += Asteroids.Game.DIM_X;
    } else if (x > Asteroids.Game.DIM_X) {
      x -= Asteroids.Game.DIM_X;
    }
    var y = pos[1];
    if (y < 0) {
      y += Asteroids.Game.DIM_Y;
    } else if (y > Asteroids.Game.DIM_Y) {
      y -= Asteroids.Game.DIM_Y;
    }
    return [x, y]
  };

  Asteroids.Game.prototype.checkCollisions = function () {
    for(var i = 0; i < this.asteroids.length -1; i++) {
      for(var j = i+1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          console.log("collision");
        }
      }
    }
  };

  Asteroids.Game.prototype.remove = function(asteroid) {

  };

  Asteroids.Game.prototype.moveObjects = function () {
    for(var i=0; i<this.asteroids.length; i++) {
      this.asteroids[i].move();
    }
  };

  Asteroids.Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

})()
