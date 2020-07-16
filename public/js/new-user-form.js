const newUserForm = document.getElementById('new-users-fieldset')
const inputElements = newUserForm.querySelectorAll('.entry')

inputElements[inputElements.length - 1].addEventListener('change', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('keypress', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('paste', createNewEntry)

// this function creates a new input element and label every time an emailadress is added.
function createNewEntry(e) {
  const fieldset = document.getElementById('new-users-fieldset')
  const entries = fieldset.querySelectorAll('.entry')
  const elementID = entries.length + 1
  const newLabel = document.createElement('label')  
  const newInput = document.createElement('input')

  this.addEventListener('change', removeEntryIfEmpty)
  this.removeEventListener('keypress', createNewEntry)
  this.removeEventListener('change', createNewEntry)
  this.removeEventListener('paste', createNewEntry)

  newLabel.htmlFor = `emails[${elementID}]`
  newLabel.innerText = `emailadres student ${elementID}: `
  newLabel.classList.add('entry')

  newLabel.addEventListener('change', createNewEntry)
  newLabel.addEventListener('keypress', createNewEntry)
  newLabel.addEventListener('paste', createNewEntry)

  newInput.type = 'email'
  newInput.id = `emails[${elementID}]`
  newInput.name = `emails[${elementID}]`
  newInput.placeholder = 'emailadres'

  newLabel.appendChild(newInput)
  newUserForm.appendChild(newLabel)
}

// this function removes empty input elements.
function removeEntryIfEmpty() {
  if (this.querySelector('input').value === '') this.remove()
}