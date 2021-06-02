import { el } from './elements.js'

const tlChapterOne = gsap.timeline({ defaults: { duration: 1 } })

// child timelines

// Introduction
const tlIntro = () => {
   const tl = gsap.timeline({})

   tl.from(el.introTitle, .5, { opacity: 0 })
      .staggerFrom([el.introText, el.introCTA], .5, { opacity: 0, y: '-2.5vh', delay: 10, stagger: .75 })


   return tl
}


// rocket
const tlRocket = () => {
   const tl = gsap.timeline({})

   tl.to(el.rocket, 1, { opacity: 1, onComplete: flames })
      .to(el.rocket, 2, { x: '5vw', y: '-5vh' })
      .to(el.rocket, 2, { x: '50vw', y: '-45vh', scale: .8, rotate: -100 })
      .to(el.rocket, 1, { y: '-30vh', ease: 'elastic.out(1, 0.3)' }, '+=2')
      .to(el.rocketFlames, 1, { opacity: 0, display: 'none' }, '-=1.5')

   return tl
}

// rocket   
const tlPlanet = () => {
   const tl = gsap.timeline({})

   tl.to(el.planet, 1, { opacity: 1 })
      .to(el.planet, 2, { attr: { viewBox: '0 0 200 300' } })

   return tl
}

// master timeline
export const chapterOne = () => {
   tlChapterOne
      .pause()
      .add(tlIntro(), .25)
      .add(tlPlanet(), .5)
      .add(tlRocket(), 1)

   return tlChapterOne;
}

// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function flames() {
   TweenMax.to(el.rocketFlames, .1, { opacity: 0, repeat: -1, yoyo: true })
}


