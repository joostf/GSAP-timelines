import { el } from './elements.js'

const tlChapterOne = gsap.timeline({ defaults: {duration: 1 } })

// child timelines

// Introduction
const tlIntro = () => {
  const tl = gsap.timeline({})
  
  tl.from(el.introTitle, .5, {opacity:0})
    .staggerFrom([el.introText, el.introCTA], .5, {opacity:0, y:'-2.5vh', delay:10, stagger:.75})
    .to(el.introText, .5, {opacity:0, y:'-2.5vh', delay:8})
    .to(el.introText, .5, {height:0, delay:.25})
    
  return tl 
}

// space welder
const tlSpaceWelder = () => {
  let floatingX =  Math.floor(Math.random() * 15) + 7
  let floatingY = Math.floor(Math.random() * 10) + 5
  const tl = gsap.timeline({})
  
  tl.from(el.spaceWelder, 3, {opacity:0, scale:0})
    .to(el.spaceWelder, 3, {x: floatingX, y: floatingY })
    .to(el.spaceWelder, 5, {scale:.5, x:'-5vw', y:'-12vh', transformOrigin: 'center center', onComplete:sparks}, '+=2')
  
  return tl
}

// space nerd
const tlSpaceNerd = () => {
  let floatingX =  Math.floor(Math.random() * 5) + 3
  let floatingY = Math.floor(Math.random() * 10) + 5
  const tl = gsap.timeline({})
  
  tl.from(el.spaceNerd, 3, {opacity:0, scale:0})
    .to(el.spaceNerd, 3, {x: floatingX, y: -floatingY,onComplete:coding})
    .to(el.spaceNerd, 5, {scale:.5, y:'10vh', x:'40vw', transformOrigin: 'center center'}, '-=2')
  
    return tl
}

// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})

  tl.to(el.rocket, 1, {opacity:1, onComplete:flames})
    .to(el.rocket, 2, {x:'5vw', y:'-5vh' })
    .to(el.rocket, 2, {x:'50vw', y:'-45vh', scale: .8, rotate: -100 })
    .to(el.rocket, 1, {y:'-30vh', ease: 'elastic.out(1, 0.3)'}, '+=2')
    .to(el.rocketFlames, 3, {opacity:0}, '-=1.5')
  
  return tl 
} 

// rocket
const tlPlanet = () => {
  const tl = gsap.timeline({})
  
  tl.to(el.planet, 1,  {opacity:1})
    .to(el.planet, 2, {attr:{viewBox:'0 0 200 300'}})

  return tl 
}

// master timeline
export const chapterOne = () => {
  tlChapterOne
          .pause()
          .add(tlIntro(), .25)
          .add(tlPlanet(), .5)
          .add(tlSpaceWelder(),1)
          .add(tlSpaceNerd(), .75)
          .add(tlRocket(),1)

  return tlChapterOne;
}

// Wrapping infinite tweens in callbacks preventing them from blocking the master timeline
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


