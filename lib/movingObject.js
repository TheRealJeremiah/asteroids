(function () {
  if (typeof window.Asteroids == "undefined") {
    window.Asteroids = {};
  }

  var movingObject = Asteroids.movingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  };

  movingObject.prototype.draw = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill()
  };

  movingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

})()
