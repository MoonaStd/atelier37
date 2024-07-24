import { printNavBar } from "../../elements/navbar/navbar"
import "./about.css"
import "../../../../style.css"
import { printFooter } from "../../elements/footer/footer"
import { moveCursor } from "../../../utils/changeCursor"

console.log("choripanes")

printNavBar()
printFooter()
window.addEventListener('mousemove', moveCursor)
