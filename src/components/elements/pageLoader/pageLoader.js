import './pageLoader.css'

export const printLoader = () => {
  const loaderContainer = document.createElement("div")
  loaderContainer.classList.add("loader-container")
  loaderContainer.style.top = "0%"

  const title = document.createElement("h1")
  title.innerText = "atelier 37"
  loaderContainer.append(title)

  const subtitle = document.createElement("p")
  subtitle.classList.remove("hidden")
  subtitle.innerText = "24.3241° n 110.3212° w"
  loaderContainer.append(subtitle)

  const body = document.querySelector("body")
  body.prepend(loaderContainer)

  const progressBarDiv = document.createElement("div")
  progressBarDiv.classList.add("progress-bar-container")
  loaderContainer.append(progressBarDiv)

  const zero = document.createElement("p")
  zero.innerText = "0%"
  zero.classList.add("zero")
  progressBarDiv.append(zero)
  
  const progressBar = document.createElement("div")
  progressBar.classList.add("progress-bar")
  progressBarDiv.append(progressBar)
  progressBar.style.width = "0px"
  
  setTimeout(() => {
  }, 200);
  
  const hundred = document.createElement("p")
  hundred.classList.add("hundred")
  hundred.innerText = "100%"
  progressBarDiv.append(hundred)
  
  body.style.overflow = "hidden"

  
  let i = 0
  setInterval(() => {
    if(i<100){
      i++
      hundred.innerText = i + "%"
      progressBar.style.width = i*2.5 + "px"
    }
  }, 10);

  setTimeout(() => {
    loaderContainer.style.top = "-100%"
    setTimeout(() => {
      loaderContainer.remove()
      // body.style.overflow = "scroll"
    }, 1000);
  }, 1500);
}

