function draw() {
  const canvas = document.getElementById('canvas')
  let ctx
  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  }

  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50)

  const circle = new Path2D()
  circle.moveTo(125, 35)
  circle.arc(100, 35, 25, 0, 2 * Math.PI)

  ctx.stroke(rectangle)
  ctx.fill(circle)
}
