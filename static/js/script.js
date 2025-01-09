import { chapterOne } from './chapter-one.js'
import { chapterTwo } from './chapter-two.js'
import { chapterThree } from './chapter-three.js'
import { el } from './elements.js' // this is overengineerd 💩

// initialize chapters
const ch1 = chapterOne()
const ch2 = chapterTwo()
const ch3 = chapterThree()

// start chapter 1
ch1.play()

el.ch2Trigger.addEventListener("click", startCh2);
el.ch3Trigger.addEventListener("click", startCh3);

function startCh2() {
   ch2.play()
}

function startCh3() {
   ch3.play()
}

// when chapter 1 completes, start chapter 2 
// ch1.then(startCh2)