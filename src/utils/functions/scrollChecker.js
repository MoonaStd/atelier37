import { addHlSpans } from "./add-hl-spans"
import { addNumberSpans } from "./add-number-spans"
import { speed, typewriter } from "./typewriter"


export const scrollChecker = (element) => {
if(!(element.classList.contains("typed"))){

  const {top, height, width} = element.getBoundingClientRect()
 
  const timeToCheck = element.innerText.length * (speed*2.5)
  
  element.style.width=width + "px"
  element.style.height=height + "px"
  const scroll = window.innerHeight/2

  if(top < scroll){

    element.classList.add("typed")
    element.classList.remove("hidden")
    

    typewriter(element)

    setTimeout(() => {
      addNumberSpans(element)
      addHlSpans(element)
      setTimeout(() => {
        const hideBgEl = document.querySelectorAll(".hide-bg")
        hideBgEl.forEach((item)=> {
          item.classList.remove("hide-bg")
        })
        const hideBgNoEl = document.querySelectorAll(".hide-bg-no")
        hideBgNoEl.forEach((item)=> {
          item.classList.remove("hide-bg-no")
        })
      }, 50);
    }, timeToCheck);
    window.removeEventListener("scroll", ()=> {scrollChecker(parr, timeToFinish)}) 
    }
}
}