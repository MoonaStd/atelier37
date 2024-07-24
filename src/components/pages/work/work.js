import { printNavBar } from "../../elements/navbar/navbar"
import "./work.css"
import "./../../../../style.css"
import { printFooter } from "../../elements/footer/footer"
import { moveCursor } from "../../../utils/changeCursor"


printNavBar()
printFooter()

window.addEventListener('mousemove', moveCursor)
