import "./project-04.css"

import { printNavBar } from "../../../elements/navbar/navbar"
import "../../../../../style.css"
import { printFooter } from "../../../elements/footer/footer"
import { changeCursor} from "../../../../utils/changeCursor"
import { addTypewriterEffect } from "../../../../utils/functions/addTypewriterEffect"
import { handleCarouselHover, moveCarousel } from "../../../../utils/functions/carousels"
import { handleMouseleavePrjectsImages, handleMouseoverProjectsImages } from "../../../../utils/functions/handleHoverProjectsImages"



printNavBar()
printFooter()
changeCursor()
addTypewriterEffect()

const carousels = document.querySelectorAll(".project-carousel")
// const carousel = document.querySelector(".project-carousel")


const interval = 120
carousels.forEach((carousel)=>{
  if(window.screen.width > 1440){
    carousel.innerHTML = carousel.innerHTML + carousel.innerHTML + carousel.innerHTML + carousel.innerHTML + carousel.innerHTML
    moveCarousel(carousel, interval)
  } else {
    carousel.innerHTML += carousel.innerHTML + carousel.innerHTML
    moveCarousel(carousel, interval)
  }
})


carousels.forEach(item => {
  // const images = item.querySelectorAll ("img")
  const images = item.querySelectorAll (".carousel-img")
  images.forEach(image => {
      // image.style.width = "480px"
      image.style.height = "30rem"
      image.addEventListener("mouseover", (e)=>{handleMouseoverProjectsImages(e)})
      image.addEventListener("mouseleave", (e)=>{handleMouseleavePrjectsImages(e)})
      
  });
});