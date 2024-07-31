const images = [ "src/assets/Esaku/pexels-bruna-crossi-862333624-19934344.jpg", "src/assets/Esaku/pexels-dung-ph-m-694024428-22806874.jpg", "src/assets/Esaku/pexels-hellojoshwithers-17697814.jpg", "src/assets/Esaku/pexels-matreding-18111223.png" ]
const divToPrint = document.querySelector(".esaku-image")


let i = 0

export const printHomeImages = () =>  {
  divToPrint.innerHTML = `<img class="esaku-image-content" src="${images[i]}" alt="image">`
  if(i<3){
    setTimeout(() => {
      i++;    
      printHomeImages()
    }, 1000);
  } else {
    i=0
    printHomeImages()
  }
}
