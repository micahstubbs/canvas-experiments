function draw() {
  const canvas = document.getElementById('canvas')
  let ctx
  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  }

  // drawing straight lines

  // draw two triangles
  // one filled
  // one outlined

  // filled triangle
  ctx.beginPath()
  ctx.moveTo(25, 25)
  ctx.lineTo(105, 25)
  ctx.lineTo(25, 105)
  ctx.fill()

  // stroked triangle
  ctx.beginPath()
  ctx.moveTo(125, 125)
  ctx.lineTo(125, 45)
  ctx.lineTo(45, 125)
  ctx.closePath()
  ctx.stroke()
}
