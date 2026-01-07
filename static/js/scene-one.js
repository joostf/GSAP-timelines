import { DOM } from './elements.js'

/* main timeline */
export function createSceneOne() {
  return gsap.timeline({ defaults: {duration: 1 }, paused:true })
    .add(tlIntro(), .25)
    .add(tlPlanet(), .25)
    .add(tlRocket(), .5)
}

/* child timelines */
function tlIntro() {
  return gsap.timeline({})
    .from(DOM.introTitle, .5, {opacity:0})
    .staggerFrom(DOM.introTexts, .25, {opacity:0, y:'-2.5vh', stagger:.25})
}

function tlPlanet() {
  return gsap.timeline({})
    .set(DOM.planet, {xPercent:100, x:'120%', scale: 0.15,  transformOrigin:'50% 0'})
    .to(DOM.planet, 1,  {opacity:1}, '+=.25')
    .to(DOM.planet, 3,  {xPercent:10, yPercent:50, scale: 1, ease: 'elastic.out(1, 0.3)'})
}

function tlRocket() {
  return gsap.timeline({})
    .set(DOM.rocket, {xPercent:-20, yPercent:80, rotate:-20, transformOrigin:'50% 50%'})
    .to(DOM.rocket, 1, {opacity:1, onComplete:flames(true)}, '+=1.5')
    .to(DOM.rocket, 2, {xPercent:70, yPercent:45, scale:.1, rotate:-100, ease: 'elastic.out(.5, 0.3)'})
    .to(DOM.scene2Trigger, .25, {opacity:1, yPercent:0})  
} 

function tlRocketFlames() {
  return gsap.timeline({repeat: -1, yoyo:true})
    .to(DOM.rocketFlames, .1, { opacity:0})
} 

/* helper functions */

// Wrapping infinite tweens in callbacks preventing them blocking the master timeline
function flames(burning) {
  return function() {
    tlRocketFlames().paused(!burning);

    if(!burning) {
      tlRocketFlames().addPause(0);
    }
  }
}


