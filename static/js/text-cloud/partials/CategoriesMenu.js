import { getUniqueTypes } from "./utils/getUniqueTypes.js"

export class CategoriesMenu{
   constructor(data, category_containers, global_state){
      this.container = document.querySelector('.content .categories')
      this.data = data
      this.createButtons(this.data)
      this.category_containers = category_containers
      this.global_state = global_state
   }
   createButtons(array){
      getUniqueTypes(array).forEach(c =>{
         const btn = document.createElement('button')
         btn.textContent = c
         this.container.insertAdjacentElement('beforeend', btn)
         btn.addEventListener('click', this.handleClick.bind(this))
      })
   }
   handleClick(e){
      const category = e.target.textContent.trim().toLowerCase()
      const category_container = this.category_containers.find(x=>x.type === category)
      this.global_state.category_selected = category_container
      this.global_state.setVisibleContainer()
   }
}