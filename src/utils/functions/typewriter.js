export const typewriter = (p) => {
  const speed = 6
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

const stringsToFind = ["rustic charm with ocean views", "tranquility amidst nature's beauty", "minimalist elegance", "clean lines and contemporary design,", "mid-century art", "serenity and elegance", "the integration of natural light"]

export const addHlSPans = (p)=> {
  const innerText = p.innerHTML
  const strToPrint = ""
  stringsToFind.forEach((string)=>{
    if(innerText.includes(string.toUpperCase())){
      const pInnerHTML = p.innerHTML
      const uppercaseString = string.toUpperCase()
      const modP = pInnerHTML.replace(uppercaseString, `<span class="project-hl hide-bg">${string}</span>`)
      p.innerHTML = modP
    }
  })
}