function Player (startX, startY) {
  this.x = startX
  this.y = startY
  this.scale = 1
  this.height = 15
  this.width = 15
}

Player.prototype.draw = function (ctx) {
  ctx.fillStyle = RED
  ctx.fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale)
}

Player.prototype.grow = function () {
  this.scale++
}

Player.prototype.shrink = function () {
  if (this.scale !== 1) {
    this.scale--
  }
}

Player.prototype.moveLeft = function () {
  if (this.x > 0) {
    this.x -= MOVE_WEIGHT
  }
}

Player.prototype.moveUp = function () {
  if (this.y > 0) {
    this.y -= MOVE_WEIGHT
  }
}

Player.prototype.moveRight = function () {
  if (this.x < WIDTH - (this.width * this.scale)) {
    this.x += MOVE_WEIGHT
  }
}

Player.prototype.moveDown = function () {
  if (this.y < HEIGHT - (this.height * this.scale)) {
    this.y += MOVE_WEIGHT
  }
}
