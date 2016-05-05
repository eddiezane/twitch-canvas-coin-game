function Coin (startX, startY) {
  this.x = startX
  this.y = startY
  this.height = 10
  this.width = 10
}

Coin.prototype.draw = function (ctx, time) {
  ctx.fillStyle = YELLOW

  // if (!this.lastUpdate) {
    // this.lastUpdate = time
  // }

  // if ((time - this.lastUpdate) > 120) {
    // const rand = Math.random()
    // if (rand < 0.25) {
      // this.moveLeft()
    // } else if (rand < 0.5) {
      // this.moveUp()
    // } else if (rand < 0.75) {
      // this.moveRight()
    // } else {
      // this.moveDown()
    // }
    // this.lastUpdate = time
  // }

  ctx.fillRect(this.x, this.y, this.width, this.height)
}

Coin.prototype.moveLeft = function () {
  if (this.x > 0) {
    this.x -= MOVE_WEIGHT
  }
}

Coin.prototype.moveUp = function () {
  if (this.y > 0) {
    this.y -= MOVE_WEIGHT
  }
}

Coin.prototype.moveRight = function () {
  if (this.x < WIDTH - this.width) {
    this.x += MOVE_WEIGHT
  }
}

Coin.prototype.moveDown = function () {
  if (this.y < HEIGHT - this.height) {
    this.y += MOVE_WEIGHT
  }
}
