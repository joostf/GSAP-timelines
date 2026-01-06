import { els } from './elements.js'

const tlChapterOne = gsap.timeline({ defaults: {duration: 1 }, paused:true })

/* main timeline */
export function chapterOne() {
  tlChapterOne
    .add(tlIntro(), .25)
    .add(tlPlanet(), .25)
    .add(tlRocket(), .5)
    
  return tlChapterOne;
}

/* child timelines */
// intro
function tlIntro() {
  const tl = gsap.timeline({})
  
  tl.from(els.introTitle, .5, {opacity:0})
    .staggerFrom(els.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:.25})
  return tl 
}

// planet
function tlPlanet() {
  const tl = gsap.timeline({})
  
  tl.set(els.planet, {xPercent:100, x:'120%', scale: 0.15,  transformOrigin:'50% 0'})
    .to(els.planet, 1,  {opacity:1}, '+=.25')
    .to(els.planet, 3,  {xPercent:10, yPercent:50, scale: 1, ease: 'elastic.out(1, 0.3)'})

  return tl 
}

// rocket
function tlRocket() {
  const tl = gsap.timeline({})
  
  tl.set(els.rocket, {xPercent:-20, yPercent:80, rotate:-20, transformOrigin:'50% 50%'})
    .to(els.rocket, 1, {opacity:1, onComplete:flames(true)}, '+=1.5')
    .to(els.rocket, 2, {xPercent:70, yPercent:45, scale:.1, rotate:-100, ease: 'elastic.out(.5, 0.3)'})
    .to(els.ch2Trigger, .25, {opacity:1, yPercent:0})
    
  return tl 
} 

// rocket flames
function tlRocketFlames() {
  const tl = gsap.timeline({repeat: -1, yoyo:true})

  tl.to(els.rocketFlames, .1, { opacity:0})
  
  return tl 
} 

// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function flames(burning) {
  return function() {
    tlRocketFlames().paused(!burning);

    if(!burning) {
      tlRocketFlames().addPause(0);
    }
  }
}


