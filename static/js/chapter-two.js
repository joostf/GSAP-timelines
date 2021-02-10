import { el } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: {duration: 1 } })

const tlIntro = () => {
    const tl = gsap.timeline()
    
    tl.to(el.planet, 1, {attr:{viewBox:'90 150 110 50'}})
    
    return tl 
  }

export const chapterTwo = () => {
    tlChapterTwo
          .pause()
          .add(tlIntro(), .25)

  return tlChapterTwo;
}