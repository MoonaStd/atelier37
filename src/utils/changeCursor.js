const cursor = document.createElement("div")
cursor.setAttribute("id", "cursor")
// cursor.innerHTML = `
// <img src="./cursor_2.svg">
// `


const body = document.querySelector("body")
body.append(cursor)
body.append(cursor)

if(window.innerWidth <=500){
  cursor.style.display = "none"
  }


const moveCursor = (e)=> {

    const mouseY = e.clientY;
    const mouseX = e.clientX;
  
    const offsetX = -7
    const offsety = -7
     
    cursor.style.position = "fixed";
    cursor.style.left = mouseX + offsetX + "px"
    cursor.style.top = mouseY + offsety + "px"
}



export const changeCursor = () => {
  window.addEventListener('mousemove', moveCursor)
}