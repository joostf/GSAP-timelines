import { DOM } from './elements.js'

/* main timeline */
export function createSceneTwo() {
   return gsap.timeline({ defaults: { duration: 1 }, paused:true})
      .pause()
      .staggerTo(DOM.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:-.25})
      .add(tlPlanet(), .5)
      .add(tlRocket(), 1)
      .add(tlSpaceNerd(), 2)
      .add(tlSpaceWelder(), 2)
}

/* child timelines */
function tlPlanet() {
   return gsap.timeline({})
      .to(DOM.planet, 1, { scale: 6, yPercent: 120 })
      .to(DOM.scene2Trigger, .25, {opacity:0, yPercent:200})
}

function tlRocket() {
   return gsap.timeline({})
      .to(DOM.rocket, 1, { scale: .3, transformOrigin: '50% 100%' })
      .to(DOM.rocket, 1, { yPercent: 120, ease: 'elastic.out(1, 0.3)' }, '+=0')
      .to(DOM.rocketFlames, 1, { display: 'none' })
}

function tlSpaceNerd() {
   return gsap.timeline({})
      .to(DOM.spaceNerd, 1, { opacity: 1, xPercent:20, yPercent: -20, scale: .1 })
      .to(DOM.spaceNerdArm, .05, { rotate: 6, repeat: -1, yoyo: true })
   
   return tl
}

function tlSpaceWelder () {
   return gsap.timeline()
      .set(DOM.spaceWelder, {xPercent: '62.5'})
      .to(DOM.spaceWelder, 1, { yPercent:25, x: '+=10', scale: .05, opacity: 1, }, '+=1')
      .to(DOM.sparkes1, .1, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, stagger: .025 }, 2)
      .to(DOM.sparkes2, .15, { opacity: 1, x: -10, y: -10, repeat: -1, yoyo: false, delay: .5, stagger: .025 }, 2)
      .to(DOM.scene3Trigger, .25, {opacity:1, yPercent:0})
}




