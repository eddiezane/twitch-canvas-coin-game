function Baddie (startX, startY) {
  this.x = startX
  this.y = startY
  this.moveWeight = 10
  this.height = 20
  this.width = 20
}

Baddie.prototype.draw = function (ctx, time) {
  ctx.fillStyle = BLACK

  if (!this.lastUpdate) {
    this.lastUpdate = time
  }

  if ((time - this.lastUpdate) > 100) {
    const rand = Math.random()
    if (rand < 0.25) {
      this.moveLeft()
    } else if (rand < 0.5) {
      this.moveUp()
    } else if (rand < 0.75) {
      this.moveRight()
    } else {
      this.moveDown()
    }
    this.lastUpdate = time
  }

  ctx.fillRect(this.x, this.y, this.width, this.height)
}

Baddie.prototype.moveLeft = function () {
  if (this.x > 0) {
    this.x -= this.moveWeight
  }
}

Baddie.prototype.moveUp = function () {
  if (this.y > 0) {
    this.y -= this.moveWeight
  }
}

Baddie.prototype.moveRight = function () {
  if (this.x < WIDTH - this.width) {
    this.x += this.moveWeight
  }
}

Baddie.prototype.moveDown = function () {
  if (this.y < HEIGHT - this.height) {
    this.y += this.moveWeight
  }
}
