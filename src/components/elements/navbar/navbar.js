const navbar = `

                    <ul class="nav_ul">
                        <li>AVAILABLE FOR NEW PROJECTS</li>
                        <li>ATELIER37@GMAIL.COM</li>
                        <li>+44 088847463929</li>
                    </ul>

                    <ul class="nav_ul none">
                        <li>MOOD-BOARD, MIND-MAP, CONCEPT</li>
                        <li>3D RENDERING</li>
                        <li>DETAILING FLOORPLANS AND LAYOUT</li>
                        <li class="nav_li_cta"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
                            </svg><a href="/index.html#services">MORE SERVICES</li></a>
                    </ul>

                    <ul class="nav_ul none">
                        <li>SOCIAL</li>
                        <li>
                            <a class="li_social" href="#">IG</a> <a class="li_social" href="#">X</a>  <a class="li_social" href="#">LI</a>
                        </li>
                    </ul>

                    <ul class="nav_ul">
                        <li><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#C3BCAC" stroke-width="1.06667"/>
                            </svg><a href="/index.html">HOME</li></a>
                        <li><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#C3BCAC" stroke-width="1.06667"/>
                            </svg><a href="index.html#work">OUR WORK</li></a>
                        <li><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 4.66602H16M16 4.66602L11.6364 0.666016M16 4.66602L11.6364 8.66602" stroke="#C3BCAC" stroke-width="1.06667"/>
                            </svg><a href="/about.html">ABOUT US</li></a>
                        <li class="nav_li_cta"><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.33398H16M16 5.33398L11.6364 1.33398M16 5.33398L11.6364 9.33398" stroke="#B30000" stroke-width="1.06667"/>
                            </svg><a href="/contact.html">GET IN TOUCH</li></a>
                    </ul>

`

export const printNavBar = () => {
  const body = document.querySelector("body")

  const navbarElement = document.createElement("nav")
  navbarElement.classList.add("main_nav")

  navbarElement.innerHTML = navbar

  body.prepend(navbarElement)
}

