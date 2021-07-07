import {GlobalState} from './partials/GlobalState.js'
import { CategoriesMenu } from './partials/CategoriesMenu.js'
import { getUniqueTypes } from './partials/utils/getUniqueTypes.js'
import { CategoryContainer } from './partials/CategoryContainer.js'

fetch('./questions.json')
   .then(res=>res.json())
   .then(data=>{
      const global_state = new GlobalState(data)
      const questions = getUniqueTypes(data)
         .map(x=>{
            const questions = data.filter(y=>y.type === x)
            return {
               type:x,
               questions
            }
         })
         .map(type => 
            new CategoryContainer(type, global_state)
         )
      new CategoriesMenu(data, questions, global_state)
      
   })