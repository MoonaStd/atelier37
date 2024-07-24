import "./style.css"

import { printFooter } from "./src/components/elements/footer/footer"
import { printNavBar } from "./src/components/elements/navbar/navbar"
import { moveCursor } from "./src/utils/changeCursor"

const locationHome = "./index.html"
const locationContact = "./src/components/pages/contact/contact.html"
const locationAbout = "./src/components/pages/about/about.html"

printNavBar(locationHome, locationAbout, locationContact)
printFooter()


window.addEventListener('mousemove', moveCursor)
