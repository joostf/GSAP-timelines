import { chapterOne } from './chapter-one.js'
import { chapterTwo } from './chapter-two.js'

//start chapterOne
const ch1 = chapterOne()
const ch2 = chapterTwo()

ch1.play()

ch1.then(ch1Completed)

function ch1Completed () {
    console.log('Chapter 1 completed')
    setTimeout(function(){
        ch2.play()
    }, 2000)
}
