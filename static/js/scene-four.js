import { DOM } from './elements.js'

/* main timeline */
export function createSceneFour() {
  return gsap.timeline({ defaults: {duration: 1 }, paused: true })
    .pause()
    .add(tl(), .25)
}

/* child timelines */
function tl() {
  return gsap.timeline({})
    .to(document.body, .5, { rotation: 10, x: 100, scale:.5}, '+=.8')
    .to(document.body, .5, { rotation: 0, x: 0, scale:1, skewX:0, ease: 'elastic.out(1, 0.3)' }, '+=0.25')
}

