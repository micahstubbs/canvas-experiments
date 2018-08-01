function draw() {
  const canvas = document.getElementById('canvas')
  let ctx
  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  }

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      ctx.beginPath()

      const x = 25 + j * 50 // x coordinate
      const y = 25 + i * 50 // y coordinate
      const radius = 20 // arc radius
      const startAngle = 0 // starting point on circle
      // end point on a circle
      const endAngle = Math.PI + (Math.PI * j) / 2
      // clockwise or anticlockwise
      const anticlockwise = i % 2 !== 0

      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)

      if (i > 1) {
        ctx.fill()
      } else {
        ctx.stroke()
      }
    }
  }
}
