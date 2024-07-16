import { printNavBar } from "../../elements/navbar/navbar"
import "./work.css"
import "./../../../../style.css"
import { printFooter } from "../../elements/footer/footer"


const locationHome = "index.html"
const locationAbout = "src/components/pages/about/about.html"
const locationContact = "src/components/pages/contact/contact.html"
printNavBar(locationHome, locationAbout, locationContact)
printFooter()