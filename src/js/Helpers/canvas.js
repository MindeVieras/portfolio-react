
// draw pica canvas
export function drawPicaCanvas(canvas) {

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')

    console.log(ctx)
    ctx.fillRect(0,0, 100, 100)
  }
}
