import { printNavBar } from "../../elements/navbar/navbar"
import "./about.css"
import "../../../../style.css"
import { printFooter } from "../../elements/footer/footer"

console.log("choripanes")

const locationHome = "../../../../index.html"
const locationAbout = "./about.html"
const locationContact = "../contact/contact.html"
printNavBar(locationHome, locationAbout, locationContact)
printFooter()