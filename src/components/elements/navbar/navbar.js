import "./navbar.css"
import "../../../../style.css"
export const printNavBar = (locationHome, locationAbout, locationContact) => {
  const body = document.querySelector("body")


  const navbar = `
    <nav class="navbar">
        <ul class="nav_ul">
            <li class="nav_li">AVAILABLE FOR NEW PROJECTS</li>
            <li class="nav_li">HELLO@ATELIER37.COM</li>
            <li class="nav_li">+44 48947590842</li>
        </ul>
        <ul class="nav_ul">
            <li class="nav_li">Mood-board, mind-map, concept</li>
            <li class="nav_li">3D RENDERING</li>
            <li class="nav_li">Detailing floorplans and layout</li>
            <li class="nav_li li_red"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
            </svg>MORE SERVICES</li>
        </ul>
        <ul class="nav_ul">
            <li class="nav_li">instagram</li>
            <li class="nav_li">linkedin</li>
            <li class="nav_li">X</li>
        </ul>
        <ul class="nav_ul">
        
            <li class="nav_li "><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
            </svg>INDEX</li>

            <li class="nav_li "><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
            </svg>OUR WORK</li>

            <li class="nav_li "><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
            </svg><a href="/src/components/pages/about/about.html">about us</a></li>

            <li class="nav_li li_red"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
            </svg> <a href="/src/components/pages/contact/contact.html">get in touch</a></li>

        </ul>
    </nav>
`


  const navbarElement = document.createElement("nav")
  navbarElement.classList.add("main-nav")

  navbarElement.innerHTML = navbar

  body.prepend(navbarElement)
  console.log(`navbar printed`)
}
