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
// use anonymous function
els.ch2Trigger.addEventListener("click", function() { 
   ch2.play()
})

// use arrow function
// els.ch2Trigger.addEventListener("click", () => ch2.play())

// bind context
// this is bound to the DOM element context (els.ch2Trigger) instead of the timeline context (ch2.restart.bind(ch2))
els.ch3Trigger.addEventListener("click", ch3.restart.bind(ch3)) 

// A GSAP timeline returns a Promise
// when chapter 1 completes, start chapter 2:


// ch1.then(() => {
//    ch2.play()
// })


/* MODULES */
// 1.) modules are deferred by default

/*
const body = document.body
*/

// 2.) a module runs code in strict mode

/*
helloWorld = 'Hello World!'
*/

// 3.) modules are scoped by default

/*
const SCOPE = 'this variable is not reachable outside the scope of this module' 
*/

// 4.) modules are async by default

/*
function delay(ms) {
   console.log(this)
   return new Promise(resolve => setTimeout(resolve, ms))
}

await delay(5000)
*/