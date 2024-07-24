import { typewriter } from "./typewriter"

export const scrollChecker = (element) => {

if(element.classList.contains("typed")){
  // element.removeAttribute('style') 
}


if(!(element.classList.contains("typed"))){
  const {top, height, width} = element.getBoundingClientRect()
  
  element.style.width=width + "px"
  element.style.height=height + "px"
  const scroll = window.innerHeight/2
  if(top < scroll){
    element.classList.add("typed")
    element.classList.remove("hidden")
    typewriter(element)
    window.removeEventListener("scroll", ()=> {scrollChecker(parr)}) 
    }
}
}