export const handleMouseoverProjectsImages = (e) => {
  // console.log(e.target)
  // console.log(e.target.clientWidth)
  // e.target.style.width = e.target.clientWidth + "px"
  e.target.style.height = 30 + 10 + "rem"

}
export const handleMouseleavePrjectsImages = (e) => {
  e.target.style.height = 30 +  "rem"
}