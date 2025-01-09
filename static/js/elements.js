import { $, $$ } from './utils.js'

export const el = {
   main: $('main'),
   introTitle: $('h1'),
   introTexts: $$('main  p'),
   ch2Trigger: $('#to-chapter2'),
   ch3Trigger: $('#to-chapter3'),
   spaceNerd: $('#space-nerd'),
   spaceNerdArm: $('#space-nerd-arm'),
   spaceWelder: $('#space-welder'),
   sparkes1: $$('.spark-1'),
   sparkes2: $$('.spark-2'),
   rocket: $('#rocket'),
   rocketFlames: $('#rocket-flames'),
   planet: $('#planet'),
   alien:$('#alien')
}
