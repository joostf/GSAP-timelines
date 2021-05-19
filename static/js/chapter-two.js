import { el } from './elements.js'

const tlChapterTwo = gsap.timeline({ defaults: {duration: 1 } })

// child timelines

// Introduction
const tlIntro = () => {
    const tl = gsap.timeline()
    tl.to(el.introText, .5, {opacity:0, y:'-2.5vh'})
      .to(el.introText, .5, {height:0}, '-=.5')
      .to(el.ch2Trigger, .5, {opacity:0}, '-=.5')
      .to(el.chalTrigger, .5, {opacity:0}, '-=.5')
    return tl 
  }

// Planet 
const tlPlanet = () => {
  const tl = gsap.timeline({})

  tl.to(el.planet, 1, {opacity: 0})
    .to(el.planet, 1, {scale:3.7 , x:-800, y:800})
    .to(el.planet, 1, {opacity: 1})
    .to(el.planet, 4, { x:-800, y:560,})

    return tl 
}

// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})
  tl.to(el.rocket, 1, {opacity:0})
    .to(el.rocket, .5, {x:750, y:-1030,scale: 3})
    .to(el.rocket, .5, {opacity:1})
    .to(el.rocketFlames, 1, {opacity:1, display: 'block'}, '-=1.5')
    .to(el.rocket, 4, {y:0})
    .to(el.rocketFlames, .1, {display: 'none'})
  return tl 
} 



// space nerd
const tlSpaceNerd = () => {
  let floatingX =  Math.floor(Math.random() * 5) + 3
  let floatingY = Math.floor(Math.random() * 10) + 5
  const tl = gsap.timeline({})
  
  tl.to(el.spaceNerd, 3, {opacity:1, scale:1.2})
    .to(el.spaceNerd, 3, {x: floatingX, y: -floatingY,onComplete:coding, yoyo: true})  
    return tl
}


// space welder
const tlSpaceWelder = () => {
  const tl = gsap.timeline({})
  
  tl.to(el.spaceWelder, 3, {opacity:1, y: -10 })
    .to(el.spaceWelder, 5, {scale:.8,  transformOrigin: 'center center', onComplete:sparks}, '+=2')
  
  return tl
}


// master timeline
export const chapterTwo = () => {
    tlChapterTwo
          .pause()
          .add(tlIntro(), 0)
          .add(tlPlanet(), .5)
          .add(tlRocket(), .5)
          .add(tlSpaceWelder(), 8)
          .add(tlSpaceNerd(), 8)
  return tlChapterTwo;
}


// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function coding (){
  TweenMax.to(el.spaceNerdArm, 2, {rotate: 2, repeat: -1, yoyo: true })
}

function sparks() {
  TweenMax.staggerTo(el.sparkles1,.1,{opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, stagger:.025})
  TweenMax.staggerTo(el.sparkles2,.15, {opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, delay:.5, stagger:.025})
}

function flames() {
  TweenMax.to(el.rocketFlames, .1, { opacity:0, repeat: -1, yoyo:true})
}

