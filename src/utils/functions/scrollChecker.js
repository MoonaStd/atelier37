import { addHlSPans, typewriter } from "./typewriter"

export const scrollChecker = (element, timeToFinish) => {
  console.log(timeToFinish)

if(!(element.classList.contains("typed"))){
  const {top, height, width} = element.getBoundingClientRect()
  
  element.style.width=width + "px"
  element.style.height=height + "px"
  const scroll = window.innerHeight/2

  if(top < scroll){

    element.classList.add("typed")
    element.classList.remove("hidden")

    typewriter(element)

    setTimeout(() => {
      addHlSPans(element)
      setTimeout(() => {
        const hideBgEl = document.querySelectorAll(".hide-bg")
        hideBgEl.forEach((element)=> {
          console.log(element)
          element.classList.remove("hide-bg")
        })
      }, 100);
    }, 7000);
    window.removeEventListener("scroll", ()=> {scrollChecker(parr, timeToFinish)}) 
    }
}
}