import "./style.css"

import { printFooter } from "./src/components/elements/footer/footer"
import { printNavBar } from "./src/components/elements/navbar/navbar"
import { changeCursor} from "./src/utils/changeCursor"
import { addTypewriterEffect } from "./src/utils/functions/addTypewriterEffect"
import { printHomeImages } from "./src/utils/functions/loopImagesHome"


printNavBar()
printFooter()
changeCursor()
addTypewriterEffect()
printHomeImages()


