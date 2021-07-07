export function getUniqueTypes(array){
   return array
      .map(x=>x.type)
      .filter((value, index, self)=> self.indexOf(value) === index)
}