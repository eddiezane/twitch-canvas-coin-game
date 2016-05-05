function CoinCounter (count) {
  this.count = count
}

CoinCounter.prototype.draw = function (ctx) {
  ctx.strokeText(this.count + ' remaining', 345, 15, 50)
}

CoinCounter.prototype.decrement = function () {
  if (this.count - 1 !== -1) {
    this.count--
  }
}
