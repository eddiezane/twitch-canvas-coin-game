'use strict'

const canvas = document.querySelector('canvas')
const HEIGHT = canvas.height
const WIDTH = canvas.width

canvas.style.backgroundColor = '#eee'
const context = canvas.getContext('2d')

const player = new Player(200, 200)

let gameOver = false
let gameWon = false

let baddies = [
  new Baddie(Math.random() * 300, Math.random() * 300),
  new Baddie(Math.random() * 300, Math.random() * 300),
  new Baddie(Math.random() * 300, Math.random() * 300),
  new Baddie(Math.random() * 300, Math.random() * 300),
]

let coins = [
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300),
  new Coin(Math.random() * 300, Math.random() * 300)
]

const coinCounter = new CoinCounter(coins.length)

window.addEventListener('keydown', e => {
  // for (let i = 0; i < baddies.length; i++) {
    // if (checkCollision(player, baddies[i])) {
      // return
    // }
  // }

  switch (e.keyCode) {
  case LEFT:
    player.moveLeft()
    break
  case UP:
    player.moveUp()
    break
  case RIGHT:
    player.moveRight()
    break
  case DOWN:
    player.moveDown()
    break
  case SPACE:
    break
  default:
    break
  }
})

function checkCollision (player, entity) {
  if (player.x < entity.x + entity.width &&
      player.x + (player.width * player.scale) > entity.x &&
      player.y < entity.y + entity.height &&
      (player.height * player.scale) + player.y > entity.y) {
    return true
  } else {
    return false
  }
}

function clear (ctx) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT)
}

function main (ctx) {
  function gameLoop (time) {
    clear(ctx)

    if (gameOver) {
      // TODO: Show different screen
      ctx.strokeText('GAME OVER', 175, 200, 100)
      return
    }

    if (gameWon) {
      ctx.strokeText('YOU WON!', 175, 200, 100)
      ctx.strokeText('YOU SCORED ' + (player.scale - 1), 175, 250, 100)
      return
    }

    player.draw(ctx)

    baddies.forEach(baddie => {
      baddie.draw(ctx, time)
      if (checkCollision(player, baddie)) {
        if (player.scale === 1) {
          gameOver = true
        }
        player.shrink()
      }
    })

    coinCounter.draw(ctx)

    coins.forEach((coin, index) => {
      coin.draw(ctx, time)
      if (checkCollision(player, coin)) {
        coins.splice(index, 1)
        coinCounter.decrement()
        player.grow()
      }
    })

    if (coins.length === 0) {
      gameWon = true
    }

    main(ctx)
  }
  window.requestAnimationFrame(gameLoop)
}

main(context)
