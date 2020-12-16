
// create the master timeline
const master = gsap.timeline({ defaults: {duration: 1 } })

//buttons
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentSlide = 1;


let show = function(){
  const tl = gsap.timeline();
  tl.to(['#zs-part' + (currentSlide)], {
    x: -700,
    y: 0,
    duration: 1.5
  })
  tl.to(['#zs-part' + (currentSlide + 1)], {
    x: -600,
    y: 0,
    duration: 1
  })
  currentSlide = currentSlide + 1;
  return tl
}



const animate = () => {
  master.add();

}
//animate();
