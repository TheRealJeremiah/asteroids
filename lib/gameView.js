(function () {
  if (typeof window.Asteroids == "undefined") {
    window.Asteroids = {};
  }

  Asteroids.gameView = function (canvas) {
    this.height = canvas.height;
    this.width = canvas.width;
    this.ctx = canvas.getContext("2d");
    this.game = new Asteroids.Game(this.ctx);
  };

  Asteroids.gameView.prototype.start = function() {
    this.game.addAsteroids();
    this.game.draw();
    setInterval((function () {
      this.ctx.clearRect ( 0 , 0 , this.width, this.height );
      this.game.step();
      this.game.draw();
    }).bind(this), 1000/60)
  };

})()
