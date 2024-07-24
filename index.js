import "./style.css"

import { printFooter } from "./src/components/elements/footer/footer"
import { printNavBar } from "./src/components/elements/navbar/navbar"
import { changeCursor} from "./src/utils/changeCursor"
import { addTypewriterEffect } from "./src/utils/functions/addTypewriterEffect"


const locationHome = "./index.html"
const locationContact = "./src/components/pages/contact/contact.html"
const locationAbout = "./src/components/pages/about/about.html"

printNavBar(locationHome, locationAbout, locationContact)
printFooter()
changeCursor()
addTypewriterEffect()


