const stringsToFind = ["rustic charm with ocean views", "tranquility amidst nature's beauty", "minimalist elegance", "clean lines and contemporary design,", "mid-century art", "serenity and elegance", "the integration of natural light", "exceptional architectural projects", "we combine our expertise", "wabi-sabi principles", "corporate", "workspace", "beauty of imperfection and simplicity", "mid-century", "classic", "elegance", "minimalist", "interior", "clean lines", "neutral", "dynamic duo"]

export const addHlSpans = (p)=> {
  console.clear()
  console.log("addHlSpans executed")
  console.log(p)
  const innerText = p.innerHTML
  const strToPrint = ""
  stringsToFind.forEach((string)=>{
    if(innerText.includes(string.toUpperCase())){
      const pInnerHTML = p.innerHTML
      const uppercaseString = string.toUpperCase()
      // const modP = pInnerHTML.replace(uppercaseString, `<span class="hide-bg highlight-bg">${string}</span>`)
      const modP = pInnerHTML.replace(uppercaseString, `<span>${string}</span>`)
      p.innerHTML = modP
    }
  })
}