export const speed = 10
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
      }
    }
    typewriterIn()  

}
