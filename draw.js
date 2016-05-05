'use strict'

const canvas = document.querySelector('canvas')
canvas.style.backgroundColor = '#eee'
const ctx = canvas.getContext('2d')

// ctx.fillStyle = '#FF0000'
// ctx.fillRect(0, 0, 100, 100)

let dragging = false
let lastMouse = {}

canvas.addEventListener('mousedown', e => {
  dragging = true
  lastMouse.x = e.clientX
  lastMouse.y = e.clientY
  console.log(e)
})

canvas.addEventListener('mousemove', e => {
  if (dragging) {
    ctx.beginPath()
    ctx.fillStyle = '#FF0000'
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.moveTo(lastMouse.x, lastMouse.y)
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
    lastMouse.x = e.clientX
    lastMouse.y = e.clientY
    console.log(e)
  }
})

canvas.addEventListener('mouseup', e => {
  dragging = false
  console.log(e)
})
