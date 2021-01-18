const masterTimeLine = gsap.timeline({ defaults: {duration: 1 } })


//SVG Animation elements
  //Spaceman
  const svg_spaceNerd = document.getElementById('spaceNerd');
  const svg_spaceWelder = document.getElementById('spaceWelder');

  //Rocket
  const svg_rocket = document.getElementById('rocket');

// Enviroment elements
  const env_planet = document.getElementById('planet');

  // Text Elements
  const txt_welcome = document.getElementById('welcome');
  const txt_minor = document.getElementById('minor');
  const txt_epiloque_years = document.getElementById('zs-epiloque_years');
  const txt_epiloque_location = document.getElementById('zs-epiloque_location');


// Animations loops
  //Spaceman
  const spaceWelder = () => {
    let floatingX =  Math.floor(Math.random() * 15) + 10; 
    let floatingY = Math.floor(Math.random() * 10) + 5;
    const tl = gsap.timeline({})
      tl.to(svg_spaceWelder,{
        duration: 4,
        x: floatingX,
        y: floatingY,
        repeat: -1,
        yoyo: true,
      });
      return tl
  }
  const spaceNerd = () => {
    let floatingX =  Math.floor(Math.random() * 25) + 10; 
    let floatingY = Math.floor(Math.random() * 20) + 5;
    const tl = gsap.timeline({})
      tl.to(svg_spaceNerd,{
          duration: 9,
          x: floatingX,
          y: floatingY,
          repeat: -1,
          yoyo: true,
      });
      tl.to(document.getElementById('spaceman_code_arm'),{
        rotate: 2,
        repeat: -1,
        duration: 2,
        yoyo: true
      });
      return tl
  }

  // Rocket
  const rocketToPlanet = () => {
    const tl = gsap.timeline({})
      tl.to(svg_rocket, 
      {
        duration:10, 
        delay: 1,  
        y:-450,
        scale: .6,
        x:900,
        rotate: -50,
        onComplete: function name() {
          // Voor nu even een lijst van wat er allemaal weg moet
          fade(txt_welcome);
          fade(txt_minor);
          fade(svg_spaceWelder);
          fade(svg_spaceNerd);
          fade(svg_rocket);
          fade(env_planet);
          //Raket groot en buiten beeld 
          svg_rocket.style.width = "1300px";
          svg_rocket.style.height = "1400px";
          svg_rocket.style.rotate = 50;
          svg_rocket.style.position.x = 40;
        }
      });
    return tl 
  } 



// Element functions
const typeWrite = (element, elementWidth) => {
  const tl = gsap.timeline({ });
  tl.fromTo(element, 3, {
    width: "0",
  },{
    width: elementWidth,
    ease:  SteppedEase.config(37)
    
  }, 
  0);
  tl.fromTo(element, 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
  }, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: -1,
    ease:  SteppedEase.config(37)
  }, 0);
  return tl;
}

const fade = (element) => {
  const tl = gsap.timeline({ });
  tl.fromTo(
    element,3,
    { 
      opacity: 1, 
      ease: Linear.ease },
    { 
      opacity: 0,
      onComplete: function(){
        element.style.display = 'none';
      }
    }, 
  )
  return tl;
}

const fadein = (element, startFunction) => {
  if (startFunction){
    startFunction;
  }
  TweenLite.fromTo(
    element,4,
    { 
      opacity: 0, 
      ease: Linear.ease 
    },
    { 
      display: 'block',
      opacity: 1 
    }
    );
}



//Master Timeline
const master = () => {
  masterTimeLine.add(typeWrite(txt_epiloque_years, "20em"), 'start')
                .add(typeWrite(txt_epiloque_location, "15em"), 4)
                .add(fade(txt_epiloque_location), 9)
                .add(fade(txt_epiloque_years), 9)
                .add(typeWrite(txt_welcome, '20em'), 13)
                // Om 1 of andere reden wordt deze direct uitgevoerd
                .add(fadein(txt_minor), 12)
                .add(fadein(svg_spaceNerd, spaceNerd()), 9)
                .add(fadein(svg_spaceWelder, spaceWelder()), 9)
                //tot hier
                .add(rocketToPlanet(), 20);
}
master();








// let tl1 = gsap.timeline({

// })
// let tl2 = gsap.timeline({

// })


// // Part 1 vars
// let textAnim_part1 = document.getElementsByClassName('zs-part1__text');


// const showPart1 = () => {
//   const anim = gsap.timeline({ 
//     onComplete: rocketmove2()
//   })
//       anim.add(typeWrite(textAnim_part1[0]))
//       anim.add(fadein(textAnim_part1[1]) );
//   return anim;
// }


// // Part 2 vars
// function showPart2(){
//   fadein(document.getElementById("spaceman_code"));
//   //fadein()
// }


// // Rocket animations
// const rocketmove1 = () => {
//   const tl = gsap.timeline({})
//     tl.to(".zs-rocket", 
//     {
//       duration:5, 
//       delay: 1,  
//       y:-450,
//       scale: .6,
//       x:1400,
//       rotate: -50,
//       onComplete: showPart1
//     });
//   return tl 
// }  

// const rocketmove2 = () => {
//   const tl = gsap.timeline({ delay: 2})
//     tl.to(".zs-rocket", 
//     {
//       duration:15, 
//       delay: 1,  
//       y:100,
//       scale: 1,
//       x:1600,
//       rotate:-185,
//       onComplete: showPart2()
//     });
//   return tl 
// }






// // Timelines
// const part1 = () => {
//   tl1.add(rocketmove1(), 'part1')
//       .add(showPart1(), '<2')
// }

// const part2 = () =>{
//   tl2.add(rocketmove2());
// }


