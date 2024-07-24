import { scrollChecker } from  './scrollChecker'

export const addTypewriterEffect = () => {

  const pElements = document.querySelectorAll("p");

  pElements.forEach((parr) => {

    parr.classList.add("hidden");

    const body = document.querySelector("body");

    window.addEventListener("resize", () => {

      // const breakPoints = [1200, 1000, 780, 600, 500, 400]

      // breakPoints.forEach((breakpoint)=> {
      //   if(window.innerWidth > breakpoint && window.innerWidth<(breakpoint-15)){
      //     location.reload(true)
      //     parr.classList.remove("typed")
      //     scrollChecker(parr)
      //   }        
      // })

      parr.removeAttribute('style')
      console.log(window.innerWidth)
      if(window.innerWidth > 1200 && window.innerWidth<1215){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } else if(window.innerWidth > 1000 && window.innerWidth<1015){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } else if(window.innerWidth > 780 && window.innerWidth<795){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } else if(window.innerWidth >600  && window.innerWidth<615){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } else if(window.innerWidth >500  && window.innerWidth<515){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } else if(window.innerWidth >400  && window.innerWidth<415){
        location.reload(true)
        parr.classList.remove("typed")
        scrollChecker(parr)
      } 
    });
    window.addEventListener("scroll", () => {
      scrollChecker(parr);
    });

  });

};

