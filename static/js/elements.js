import { $, $$ } from './utils.js'

export const DOM = {
   main: $('main'),
   introTitle: $('h1'),
   introTexts: $$('main  p'),
   scene2Trigger: $('#to-scene2'),
   scene3Trigger: $('#to-scene3'),
   spaceNerd: $('#space-nerd'),
   spaceNerdArm: $('#space-nerd-arm'),
   spaceWelder: $('#space-welder'),
   sparkes1: $$('.spark-1'),
   sparkes2: $$('.spark-2'),
   rocket: $('#rocket'),
   rocketFlames: $('#rocket-flames'),
   planet: $('#planet'),
   alien:$('#alien'),
   gun:$('#gun'),
   rings:$('.rings'),
   topOfStack:$('.top-of-stack'),
   alienEmoji:$('#alien-emoji'),
}
