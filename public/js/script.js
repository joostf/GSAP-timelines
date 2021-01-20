const tlMaster = gsap.timeline({ defaults: {duration: 1 } })

// elements
const spaceNerd = $('#space-nerd')
const spaceNerdArm = $('#space-nerd-arm')
const spaceWelder = $('#space-welder')
const sparkles1 = $$('.spark-1')
const sparkles2 = $$('.spark-2')
const rocket = $('#rocket')
const rocketFlames = $('#rocket-flames')
const planet = $('#planet')
const introTitle = $('h1')
const introText = $$('main > h1 ~ *')

// child timelines
// space welder
const tlSpaceWelder = () => {
  let floatingX =  Math.floor(Math.random() * 15) + 7
  let floatingY = Math.floor(Math.random() * 10) + 5
  const tl = gsap.timeline({})
  
  tl.from(spaceWelder, 3, {opacity:0, scale:0})
    .to(spaceWelder, 3, {x: floatingX, y: floatingY })
    .to(spaceWelder, 5, {scale:.5, x:'-5vw', y:'-12vh', transformOrigin: 'center center'}, '+=2')
    .staggerTo(sparkles1,.1,{opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, stagger:.025})
    .staggerTo(sparkles2,.15, {opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, delay:.5, stagger:.025})
  
  return tl
}

// space nerd
const tlSpaceNerd = () => {
  let floatingX =  Math.floor(Math.random() * 5) + 3
  let floatingY = Math.floor(Math.random() * 10) + 5
  const tl = gsap.timeline({})
  
  tl.from(spaceNerd, 3, {opacity:0, scale:0})
    .to(spaceNerd, 3, {x: floatingX, y: -floatingY})
    .to(spaceNerdArm,{rotate: 2, repeat: -1, duration: 2, yoyo: true })
    .to(spaceNerd, 5, {scale:.5, y:'10vh', x:'40vw', transformOrigin: 'center center'}, '-=2')
  
    return tl
}

// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})

  tl.to(rocket, 1, {opacity:1})
    .to(rocketFlames, .1, { opacity:0, repeat: -1, yoyo:true})
    .to(rocket, 2, {x:'5vw', y:'-5vh' })
    .to(rocket, 2, {x:'50vw', y:'-45vh', scale: .8, rotate: -100 })
    .to(rocket, 1, {y:'-30vh'}, '+=2')
    .to(rocketFlames, 3, {opacity:0}, '-=1.5')
    .to(rocketFlames, 100, {opacity:0}) // lame hack for now, handle rocketflames in own timeline so solve this
  
  return tl 
} 

// rocket
const tlPlanet = () => {
  const tl = gsap.timeline({})
  
  tl.to(planet, 1,  {opacity:1})
    .to(planet, 10, {scale:6, x:'-5vh', transformOrigin: 'center top'})
  
  return tl 
}

// Introduction
const tlIntro = () => {
  const tl = gsap.timeline({})
  
  tl.from(introTitle, .5, {opacity:0})
    .staggerFrom(introText, .5, {opacity:0, y:'-2.5vh', delay:10, stagger:.75})
    
  return tl 
}

// master timeline
const master = () => {
  tlMaster.add(tlIntro(), .25)
          .add(tlPlanet(), .5)
          .add(tlSpaceNerd(), .75)
          .add(tlSpaceWelder(),1)
          .add(tlRocket(),1)
          
}
master();

// helper functions
function $(element) {
  return document.querySelector(element)
}

function $$(elements) {
  return document.querySelectorAll(elements)
}
