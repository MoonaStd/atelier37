import { getMousePosition } from "./getMousePosition"

export const handleHoverImages = (e) => {
  const imageDiv = e.target.parentElement
  printLine(imageDiv, e)
  // console.log(e.target)
  
}


const printLine = (container, e) => {
  let lastLine = container.querySelector(".line-div")



  const lineDiv = document.createElement("div")
  container.style.position = "relative"

  let rect = container.getBoundingClientRect()

  lineDiv.classList.add("line-div")
  lineDiv.style.width = "0px"
  lineDiv.style.height = "100%"
  lineDiv.style.zIndex = 99
  lineDiv.style.position = "absolute"
  lineDiv.style.top = "00px"
  lineDiv.style.left = getMousePosition(e).x - rect.left + "px"
  lineDiv.style.backgroundColor = "var(--a37-var-color-beige-0)"
  lineDiv.style.transition = ".1s ease-in-out"
  lineDiv.style.pointer = "none"

  if(!lastLine){
    container.prepend(lineDiv)
  } else { 
    let newLeft = lineDiv.style.left
    let lastLineLeft = lastLine.style.left

    let lastLineLeftN = Number(lastLineLeft.replace("px", ""))
    let newLineLeftN = Number(newLeft.replace("px", ""))

    if(Math.abs(lastLineLeftN - newLineLeftN) > 20){
      container.prepend(lineDiv)
      
    }
  }
  

  setTimeout(() => {
    lineDiv.style.width = "15px"
    setTimeout(() => {
      lineDiv.style.width = "0px"
      setTimeout(() => {
        lineDiv.remove()
      }, 100); 
    }, 250);
  }, 10);
  
}