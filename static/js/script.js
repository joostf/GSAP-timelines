import { createSceneOne } from './scene-one.js'
import { createSceneTwo } from './scene-two.js'
import { createSceneThree } from './scene-three.js'
import { createSceneFour } from './scene-four.js'
import { DOM } from './elements.js'

// initialize scenes
const scene1 = createSceneOne()
const scene2 = createSceneTwo()
const scene3 = createSceneThree()
const scene4 = createSceneFour()

// start scene 1
scene1.play()

// add scene triggers
DOM.scene2Trigger.addEventListener('click', () =>{ scene2.restart() }) 
DOM.scene3Trigger.addEventListener('click', () => { scene3.restart() })
DOM.scene4Trigger.addEventListener('click', () => { scene4.restart() })

// automatically start scene 2
// scene1.then(() => { scene2.play() })

