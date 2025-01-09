import { el } from './elements.js'

const tlChapterThree = gsap.timeline({ defaults: {duration: 1 } })

/* main timeline */
export const chapterThree = () => {
  tlChapterThree
    .pause()
    .add(tlAlien(), .25)
    //.timeScale(5)

  return tlChapterThree;
}

/* functions */
/* child timelines */
function tlAlien() {
  const tl = gsap.timeline({})
  
  tl.set(el.alien, {opacity:1, xPercent:150, yPercent:65, transformOrigin:'50% 0'})
    .to(el.ch3Trigger, .5, {opacity:0, yPercent:200})
    .to(el.alien, .5, {opacity:1})
    .to(el.alien, 1, {scale:.1, y:'-=15', x:'-=10', rotate:'-=15', onComplete:stackAlien},'+=.5')
    .to(el.alien, 1, {x:'+=10', y:'+=15', scale:'+=.05', rotate:'+=7.5'},'+=.5')
    .to(el.planet, 5, {rotate:360, repeat: 3, transformOrigin:"50% 50%"})
    
  return tl 
}

function stackAlien() {
  el.alien.parentNode.appendChild(el.alien)
}
//el.alien.parentNode.appendChild(el.alien);
