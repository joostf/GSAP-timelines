import { sceneOne } from './scene-one.js'
import { sceneTwo } from './scene-two.js'
import { sceneThree } from './scene-three.js'
import { DOM } from './elements.js'

// initialize scenes
const scene1 = sceneOne()
const scene2 = sceneTwo()
const scene3 = sceneThree()

// start scene 1
scene1.play()

// add event listeners
DOM.scene2Trigger.addEventListener("click", () =>{ scene2.restart() }) //.timeScale(5)
DOM.scene3Trigger.addEventListener("click", () => { scene3.restart() }) //.timeScale(5)

// automatically start scene 2
// scene1.then(() => { scene2.play() })

