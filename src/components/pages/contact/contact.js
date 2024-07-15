import { printNavBar } from "../../elements/navbar/navbar"
import "./contact.css"
import "../../../../style.css"
import { printFooter } from "../../elements/footer/footer"

console.log("choripanes")

const locationHome = "index.html"
const locationAbout = "src/components/pages/about/about.html"
const locationContact = "src/components/pages/contact/contact.html"
printNavBar(locationHome, locationAbout, locationContact)
printFooter()