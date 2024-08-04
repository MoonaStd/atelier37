import { printNavBar } from "../../elements/navbar/navbar"
import "./work.css"
import "./../../../../style.css"
import { printFooter } from "../../elements/footer/footer"
import { changeCursor } from "../../../utils/changeCursor"
import { addTypewriterEffect } from "../../../utils/functions/addTypewriterEffect"
import { handleCarouselHover, moveCarousel } from "../../../utils/functions/carousels"
import { getMousePosition } from "../../../utils/functions/getMousePosition"
import { handleHoverImages } from "../../../utils/functions/handleHoverImages"


printNavBar()
printFooter()
changeCursor()
addTypewriterEffect()


const carousels = document.querySelectorAll(".project-carousel")
// const carousel = document.querySelector(".project-carousel")


const interval = 30
carousels.forEach((carousel)=>{
  if(window.screen.width > 1440){
    carousel.innerHTML = carousel.innerHTML + carousel.innerHTML + carousel.innerHTML + carousel.innerHTML
    moveCarousel(carousel, interval)
  } else {
    carousel.innerHTML += carousel.innerHTML
    moveCarousel(carousel, interval)
  }
})


carousels.forEach(item => {
  const images = item.querySelectorAll ("img")
  images.forEach(image => {
    // image.style.zIndex = 99
      image.addEventListener("mousemove", (e)=>{handleHoverImages(e)})
      
  });
});