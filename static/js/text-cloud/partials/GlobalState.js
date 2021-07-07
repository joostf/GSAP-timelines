export class GlobalState {
   constructor(questions){
      this.max_points = questions.reduce((acc, curr)=>acc + curr.point,0)
      this.wrong_answers = 0
      this.correct_answers = 0
      this.points = 0
      this.category_selected = false
      this.init()
   }
   correct(points){
      this.correct_answers++
      this.points = this.points + points
      console.log(this)
   }
   wrong(){
      console.log(this)
      this.wrong_answers++
   }
   setVisibleContainer(){
      const categories = document.querySelector('.categories')
      const questions = document.querySelectorAll('.question')
      const header = document.querySelector('header')

      questions.forEach(question =>{
         if(!question.classList.contains('hidden')){
            question.classList.add('hidden')
         }
      })
      header.querySelectorAll('h1').forEach(h1 =>{
         if(!h1.classList.contains('hidden')){
            h1.classList.add('hidden')
         }
      })
      if(!categories.classList.contains('hidden')){
         categories.classList.add('hidden')
      }
      
      if(this.category_selected){
         const category = header.querySelector('.category')
         this.category_selected.showQuestion()
         category.querySelector('span').textContent = this.category_selected.type
         category.classList.remove('hidden')
      }else{
         const all_categories = header.querySelector('.all_categories')
         all_categories.classList.remove('hidden')
         categories.classList.remove('hidden')
      }
   }
   init(){
      const headerBackBtn = document.querySelector('header h1.category button')
      headerBackBtn.addEventListener('click', ()=>{
         this.category_selected = false
         this.setVisibleContainer()
      })
   }
}