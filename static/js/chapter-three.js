import { el } from './elements.js'

const tlChapterThree = gsap.timeline({ defaults: {duration: 1 } })

/* main timeline */
export const chapterThree = () => {
  tlChapterThree
          .pause()
          .add(tlAlien(), .25)

  return tlChapterThree;
}

/* functions */
/* child timelines */
function tlAlien() {
  const tl = gsap.timeline({})
  
  tl.to(el.alien, .5, {opacity:1})
    
  return tl 
}




