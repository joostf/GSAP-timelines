import { el } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: { duration: 1 } })

// master timeline
export const chapterTwo = () => {
   tlChapterTwo
      .pause()
      .add(tlPlanet(), .5)
      .add(tlRocket(), 1)
      .add(tlSpaceNerd(), 2)
      .add(tlSpaceWelder(), 2)
   return tlChapterTwo;
}

// functions
// child timelines

// planet 
function tlPlanet() {
   const tl = gsap.timeline({})

   tl.to(el.planet, 1, { scale: 6, yPercent: 120 })
      .to(el.ch2Trigger, .5, {opacity:0, yPercent:200})

   return tl
}

// rocket
function tlRocket() {
   const tl = gsap.timeline({})
   tl.to(el.rocket, 1, { scale: .3, transformOrigin: '50% 100%' })
      .to(el.rocket, 1, { yPercent: 120, ease: 'elastic.out(1, 0.3)' }, '+=0')
      .to(el.rocketFlames, 1, { display: 'none' })

   return tl
}

// space nerd
function tlSpaceNerd() {
   const tl = gsap.timeline({})

   tl.to(el.spaceNerd, 1, { opacity: 1, xPercent:20, scale: .1 })
      .to(el.spaceNerdArm, .05, { rotate: 6, repeat: -1, yoyo: true })
   
   return tl
}


// space welder
function tlSpaceWelder () {
   const tl = gsap.timeline()

   tl.to(el.spaceWelder, 1, { yPercent:30, xPercent: 0, scale: .05, opacity: 1, }, '+=1')
      .to(el.sparkes1, .1, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, stagger: .025 }, 2)
      .to(el.sparkes2, .15, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, delay: .5, stagger: .025 }, 2)
      .to(el.ch3Trigger, .5, {opacity:1, yPercent:0})
      
   return tl
}


// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function coding() {
   TweenMax.to(el.spaceNerdArm, 2, { rotate: 2, repeat: -1, yoyo: true })
}



