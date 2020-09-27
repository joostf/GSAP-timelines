function addButtons (){
  const allButtons = document.querySelectorAll('.buttons button')
  allButtons.forEach(button => (
    button.classList.add('display')
  ))
  document.querySelector('.no-js').classList.add('hide')

  setupFieldsets(allButtons)
}

function setupFieldsets(buttons) {
  const allFieldsets = document.querySelectorAll('fieldset')
  const nextButtons = document.querySelectorAll('.buttons .next')
  const previousButtons = document.querySelectorAll('.buttons .previous')

  allFieldsets.forEach((fieldset, i) => {
    if(i !== 0) {
      fieldset.classList.add('hide')
    }
  })
  let index = 0
  nextButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault()
      allFieldsets[index].classList.add('hide')
      index += 1
      allFieldsets[index].classList.remove('hide')
    })
  })

  previousButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault()
      if(allFieldsets[index] !== undefined) {
        allFieldsets[index].classList.add('hide')
        index -= 1
        allFieldsets[index]?.classList?.remove('hide')
        if(allFieldsets[index] === undefined) {
          allFieldsets[index + 1].classList.remove('hide')
          index += 1
        }
      }
    })
  })
}

addButtons()