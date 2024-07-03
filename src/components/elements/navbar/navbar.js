import "./navbar.css"
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
            <li class="nav_li">Detailing floorplans and layout</li>
            <li class="nav_li"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#FCFBF9" stroke-width="1.06667"/>
                </svg>MORE SERVICES</li>
        </ul>
        <ul class="nav_ul">
            <li class="nav_li">instagram</li>
            <li class="nav_li">linkedin</li>
            <li class="nav_li">X</li>
        </ul>
        <ul class="nav_ul">
            <li class="nav_li"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#FCFBF9" stroke-width="1.06667"/>
                </svg>OUR WORK</li>
            <li class="nav_li"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#FCFBF9" stroke-width="1.06667"/>
                </svg>about us</li>
            <li class="nav_li"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#FCFBF9" stroke-width="1.06667"/>
                </svg>get in touch</li>
        </ul>
    </nav>
`


  const navbarElement = document.createElement("nav")
  navbarElement.classList.add("main-nav")

  navbarElement.innerHTML = navbar

  body.prepend(navbarElement)
  console.log(`navbar printed`)
}
