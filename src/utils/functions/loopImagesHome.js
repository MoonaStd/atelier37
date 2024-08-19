const images = [ "https://res.cloudinary.com/dgrhbsilh/image/upload/v1724066848/A37/bdyftb1fapz0abfsnxnt.png", "https://res.cloudinary.com/dgrhbsilh/image/upload/v1724066848/A37/tobi07pw3qt99qzzbpdd.jpg", "https://res.cloudinary.com/dgrhbsilh/image/upload/v1724066848/A37/onjnaqccniwb5fkwfany.jpg", "https://res.cloudinary.com/dgrhbsilh/image/upload/v1724066848/A37/iw5vuvy16xjwsrptanun.jpg" ]
const divToPrint = document.querySelector(".esaku-image")


let i = 0

export const printHomeImages = () =>  {
  divToPrint.innerHTML = `<img class="esaku-image-content" src="${images[i]}" alt="image">`
  if(i<images.length -1){
    setTimeout(() => {
      i++;    
      printHomeImages()
    }, 1000);
  } else {
    i=0
    printHomeImages()
  }
}
