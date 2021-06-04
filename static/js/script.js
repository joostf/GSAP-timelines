import { chapterOne } from './chapter-one.js'
import { chapterTwo } from './chapter-two.js'
import { el } from './elements.js'

// initialize chapters
const ch1 = chapterOne()
const ch2 = chapterTwo()

// start chapter 1
ch1.play()

// when chapter 1 completes, start chapter 2
//ch1.then(startCh2)
el.ch2Trigger.addEventListener("click", startCh2);

function startCh2 () {
    // fake delay, solve this in ch2 timeline later
    setTimeout(function(){
        ch2.play()
    }, 2000)
}
