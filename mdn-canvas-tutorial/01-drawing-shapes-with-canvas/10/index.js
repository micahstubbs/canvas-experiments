function draw() {
  const canvas = document.getElementById('canvas')
  let ctx
  if (canvas.getContext) {
    ctx = canvas.getContext('2d')
  }

  // construct a Path2D from SVG path data
  const p = new Path2D('M10 10 h 80 v 80 h -80 Z')

  ctx.stroke(p)
}
