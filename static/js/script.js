import { chapterOne } from './chapter-one.js'
import { chapterTwo } from './chapter-two.js'
import { chapterThree } from './chapter-three.js'
import { els } from './elements.js'

// initialize chapters
const ch1 = chapterOne()
const ch2 = chapterTwo()
const ch3 = chapterThree()

// start chapter 1
ch1.play()

// add event listeners
els.ch2Trigger.addEventListener("click", () =>{ ch2.restart() }) //.timeScale(5)
els.ch3Trigger.addEventListener("click", () => { ch3.restart() }) //.timeScale(5)

// automatically start chapter 2
ch1.then(() => { ch2.play() })

