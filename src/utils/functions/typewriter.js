import { addHlSpans } from "./add-hl-spans"

export const speed = 2
export const typewriter = (p) => {
  let pArr = p.innerText.split("")
  p.innerHTML = ""
  let i = 0
  let pJoint = pArr.join("")
  
    const typewriterIn = () => {      
      if(i<pJoint.length) {
        setTimeout(() => {
          p.innerHTML += `${pJoint.charAt(i)}`
          i++
          setTimeout(typewriterIn, speed)
        }, speed);
      } else {
          addHlSpans(p)
          setTimeout(() => {
            const spans= p.querySelectorAll("span")
            spans.forEach((span)=>{
              if(!(span.classList.toString().includes("project-no"))){
                span.style.backgroundColor="#D9EB0F"
              }
            })
          }, 0);
      }
    }
    typewriterIn()  

}
