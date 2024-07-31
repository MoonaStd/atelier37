import { printNavBar } from "../../elements/navbar/navbar"
import "./work.css"
import "./../../../../style.css"
import { printFooter } from "../../elements/footer/footer"
import { changeCursor } from "../../../utils/changeCursor"
import { addTypewriterEffect } from "../../../utils/functions/addTypewriterEffect"
import { handleCarouselHover, moveCarousel } from "../../../utils/functions/carousels"


printNavBar()
printFooter()
changeCursor()
addTypewriterEffect()


const carousels = document.querySelectorAll(".project-carousel")
// const carousel = document.querySelector(".project-carousel")


const interval = 30
carousels.forEach((carousel)=>{
  carousel.innerHTML += carousel.innerHTML
     moveCarousel(carousel, interval)
})
