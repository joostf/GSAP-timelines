const newUserForm = document.getElementById('new-users-fieldset')
const inputElements = newUserForm.querySelectorAll('.entry')
inputElements[inputElements.length - 1].addEventListener('change', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('keypress', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('paste', createNewEntry)


function createNewEntry(e) {
  const fieldset = document.getElementById('new-users-fieldset')
  const entries = fieldset.querySelectorAll('.entry')

  this.addEventListener('change', removeEntryIfEmpty)

  function removeEntryIfEmpty() {
    if (this.querySelector('input').value === '') this.remove()
  }

  this.removeEventListener('keypress', createNewEntry)
  this.removeEventListener('change', createNewEntry)
  this.removeEventListener('paste', createNewEntry)

  const elementID = entries.length + 1

  const newLabel = document.createElement('label')  
  newLabel.classList.add('entry')
  newLabel.htmlFor = `emails[${elementID}]`
  newLabel.innerText = `emailadres student ${elementID}: `

  newLabel.addEventListener('change', createNewEntry)
  newLabel.addEventListener('keypress', createNewEntry)
  newLabel.addEventListener('paste', createNewEntry)

  const newInput = document.createElement('input')
  newInput.type = 'email'
  newInput.id = `emails[${elementID}]`
  newInput.name = `emails[${elementID}]`
  newInput.placeholder = 'emailadres'

  newLabel.appendChild(newInput)
  newUserForm.appendChild(newLabel)
}

