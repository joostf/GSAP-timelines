const tlMaster = gsap.timeline({ defaults: {duration: 1 } })

// elements
const spaceNerd = $('#space-nerd');
const spaceNerdArm = $('#space-nerd-arm')
const spaceWelder = $('#space-welder');
const sparkles1 = $$('.spark-1')
const sparkles2 = $$('.spark-2')
const rocket = $('#rocket');
const rocketFlames = $('#rocket-flames');
const planet = $('#planet');

// child timelines
// space welder
const tlSpaceWelder = () => {
  let floatingX =  Math.floor(Math.random() * 15) + 7; 
  let floatingY = Math.floor(Math.random() * 10) + 5;
  const tl = gsap.timeline({})
  
  tl.to(spaceWelder, {duration: 1, opacity:1})
    .to(spaceWelder, {duration: 3, x: floatingX, y: floatingY, repeat: -1, yoyo: true })
    .staggerTo(sparkles1,.1,{opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false}, .025)
    .staggerTo(sparkles2,.15, {opacity: 1, x:-10, y:-10, repeat: -1, yoyo: false, delay:0.5}, .025);
  
  return tl
}

// space nerd
const tlSpaceNerd = () => {
  let floatingX =  Math.floor(Math.random() * 5) + 3; 
  let floatingY = Math.floor(Math.random() * 10) + 5;
  const tl = gsap.timeline({})
  
  tl.to(spaceNerd,{duration: 3, opacity:1})
    .to(spaceNerd,{duration:3, x: floatingX, y: -floatingY, repeat: -1, yoyo: true})
    .to(spaceNerdArm,{rotate: 2, repeat: -1, duration: 2, yoyo: true });
  
    return tl
}

// rocket
const tlRocket = () => {
  const tl = gsap.timeline({})
  const planetPosition = planet.getBoundingClientRect();
  const rocketDestination = {
    x: planetPosition.right - 270, // fix hardcoded offset
    y: planetPosition.top
  }
  
  tl.to(rocket, { duration:1, opacity:1})
    .to(rocketFlames, { duration:.1, opacity:0, repeat: -1, yoyo:true})
    .to(rocket, { duration:2, delay: 1, top:rocketDestination.y, left:rocketDestination.x, scale: .6, rotate: -100 })
    .to(rocketFlames, { duration:3, opacity:0})
    .to(rocketFlames, { duration:100, opacity:0}); // lame hack for now, handle rocketflames in own timeline so solve this
  
  return tl 
} 

// rocket
const tlPlanet = () => {
  const tl = gsap.timeline({})
  
  tl.to(planet, { duration:1, opacity:1}) 
  
  return tl 
} 

// master timeline
const master = () => {
  tlMaster.add(tlPlanet(),0.5)
          .add(tlSpaceNerd(),1)
          .add(tlSpaceWelder(),1.5)
          .add(tlRocket(),2);
}
master();

// helper functions
function $(element) {
  return document.querySelector(element);
}

function $$(elements) {
  return document.querySelectorAll(elements);
}
