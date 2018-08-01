function draw() {
  const canvas = document.getElementById('canvas')
  let ctx
  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  }

  // draw a triangle
  ctx.beginPath()
  ctx.moveTo(75, 50)
  ctx.lineTo(100, 75)
  ctx.lineTo(100, 25)
  ctx.fill()
}
