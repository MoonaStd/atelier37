const stringsToFind = []

for (let i = 0; i < 10; i++) {
  stringsToFind.push(i.toString())
}

export const addNumberSpans = (p)=> {
  const innerText = p.innerHTML
  const strToPrint = ""
  stringsToFind.forEach((string)=>{
    if(innerText.includes(string.toUpperCase())){
      const pInnerHTML = p.innerHTML
      const uppercaseString = string.toUpperCase()
      const modP = pInnerHTML.replace(uppercaseString, `<span class="project-no hide-bg-no">${string}</span>`)
      p.innerHTML = modP
    }
  })
}