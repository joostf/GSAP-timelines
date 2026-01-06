import { els } from './elements.js'

const tlChapterThree = gsap.timeline({ defaults: {duration: 1 }, paused: true })
const laserSound = new Audio('./static/js/laser.mp3')

/* main timeline */
export function chapterThree() {
  tlChapterThree
    .pause()
    .add(tlAlien(), .25)

  return tlChapterThree;
}

/* child timelines */

// Alien
function tlAlien() {
  const tl = gsap.timeline({})

  const emojis = els.gun.querySelectorAll('#emojis text');
  
  tl.set(els.alien, {opacity:1, xPercent:150, yPercent:65, transformOrigin:'50% 0'})
    .to(els.ch3Trigger, .5, {opacity:0, yPercent:200})
    .to(els.alien, .5, {opacity:1})
    .to(els.alien, 1, {scale:.1, y:'-=12.5', x:'-=10', rotate:'-=15', onComplete:stackToTop(els.alien, els.topOfStack)},'+=.5')
    .to(els.spaceNerd, 1, {x:'-110', y:'+=70'},'-=.5')
    .to(els.alien, 1, {x:'-=10', y:'+=25', scale:'+=0.25', rotate:'+=7.5'},'+=.1')
    .to(els.gun, 1, {rotate:'+=65', transformOrigin:'0 100%'},'+=.5')
    .set(els.gun.querySelectorAll('text'), {x: 0, y: '+=20', scale: 2, transformOrigin: '0% 50%', transformBox:'fill-box'})
    .to(els.gun.querySelectorAll('text'), {duration: 2, x: '+=60', y:'-=360', rotate:110, opacity: 1, stagger: { each: 0.5, onStart: playSound }, onStart:playSound, ease: 'power3.out'}, '<')
    .to(els.gun.querySelectorAll('text'), {duration: .5, opacity: 0, ease: 'power3.out', transformOrigin:'100% 100%'})
    .set(els.alienEmoji, {x:'+=100', yPercent:'+=1170'})
    .to(els.alienEmoji, .25, {opacity:.3}, '+=.25')
    
  return tl 
}

function stackToTop(element, parent) {
  return function() {
    if (parent) parent.appendChild(element)

    element.parentNode.appendChild(element)
  }
}

function playSound() {
  laserSound.currentTime = 0;
  laserSound.play()
}
