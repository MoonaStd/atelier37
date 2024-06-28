const footer = `

        <div class="footer_main_hero_logo">
            <h1 class="footer_logo_h1">ATELIER37</h1>
            <h3 class="footer_logo_h3">24.3241° n 110.3212° w</h3>
        </div>

        <nav class="footer_nav">
            <ul class="nav_ul">
                <li>AVAILABLE FOR NEW PROJECTS</li>
                <li>ATELIER37@GMAIL.COM</li>
                <li>+44 088847463929</li>
            </ul>

            <ul class="nav_ul">
                <li>MOOD-BOARD, MIND-MAP, CONCEPT</li>
                <li>3D RENDERING</li>
                <li>DETAILING FLOORPLANS AND LAYOUT</li>
                <li class="nav_li_cta">MORE SERVICES</li>
            </ul>

            <ul class="nav_ul">
                <li>SOCIAL</li>
                <li>
                    <a class="li_social" href="#">IG</a> <a class="li_social" href="#">X</a>  <a class="li_social" href="#">LI</a>
                </li>
            </ul>

            <ul class="nav_ul">
                <li><a href="index.html"></a>HOME</li>
                <li>OUR WORK</li>
                <li><a href="/about.html">ABOUT US</li]></a>
                <li class="nav_li_cta"><a href="/contact.html">GET IN TOUCH</li></a>
            </ul>
        </nav>

`

export const printFooter = () => {
  const body = document.querySelector("body")
  const footerElement = document.createElement("footer")
  footerElement.classList.add("footer")

  footerElement.innerHTML = footer

  body.append(footerElement)
  
}