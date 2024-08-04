export const getMousePosition = (e) => {
  const mouseX = e.clientX
  const mouseY = e.clientY

  return {
    x: mouseX,
    y:mouseY
  }
}