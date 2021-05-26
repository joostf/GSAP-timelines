import { el } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: {duration: 1 } })

// child timelines

// Introduction
const tlIntro = () => {
  const tl = gsap.timeline()

  tl.to(el.planet, 1, {attr:{viewBox:'90 150 110 50'}})

  return tl 
}

// master timeline
export const chapterTwo = () => {
    tlChapterTwo
          .pause()
          .add(tlIntro(), .25)

  return tlChapterTwo;
}