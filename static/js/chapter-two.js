import { els } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: { duration: 1 }, paused:true})

/* main timeline */
export function chapterTwo() {
   tlChapterTwo
      .pause()
      .staggerTo(els.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:-.25})
      .add(tlPlanet(), .5)
      .add(tlRocket(), 1)
      .add(tlSpaceNerd(), 2)
      .add(tlSpaceWelder(), 2)
      
   return tlChapterTwo
}

/* child timelines */
// planet 
function tlPlanet() {
   const tl = gsap.timeline({})

   tl.to(els.planet, 1, { scale: 6, yPercent: 120 })
      .to(els.ch2Trigger, .25, {opacity:0, yPercent:200})

   return tl
}

// rocket
function tlRocket() {
   const tl = gsap.timeline({})
   tl.to(els.rocket, 1, { scale: .3, transformOrigin: '50% 100%' })
      .to(els.rocket, 1, { yPercent: 120, ease: 'elastic.out(1, 0.3)' }, '+=0')
      .to(els.rocketFlames, 1, { display: 'none' })

   return tl
}

// space nerd
function tlSpaceNerd() {
   const tl = gsap.timeline({})

   tl.to(els.spaceNerd, 1, { opacity: 1, xPercent:20, yPercent: -20, scale: .1 })
      .to(els.spaceNerdArm, .05, { rotate: 6, repeat: -1, yoyo: true })
   
   return tl
}

// space welder
function tlSpaceWelder () {
   const tl = gsap.timeline()

   tl.set(els.spaceWelder, {xPercent: '62.5'})
      .to(els.spaceWelder, 1, { yPercent:25, x: '+=10', scale: .05, opacity: 1, }, '+=1')
      .to(els.sparkes1, .1, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, stagger: .025 }, 2)
      .to(els.sparkes2, .15, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, delay: .5, stagger: .025 }, 2)
      .to(els.ch3Trigger, .25, {opacity:1, yPercent:0})
      
   return tl
}




