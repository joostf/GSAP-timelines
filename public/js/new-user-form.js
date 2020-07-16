const newUserForm = document.getElementById('new-users-fieldset')
const inputElements = newUserForm.querySelectorAll('.entry')
inputElements[inputElements.length - 1].addEventListener('change', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('keypress', createNewEntry)
inputElements[inputElements.length - 1].addEventListener('paste', createNewEntry)


function createNewEntry(e) {
  const fieldset = document.getElementById('new-users-fieldset')
  const entries = fieldset.querySelectorAll('.entry')
  const lastEntryElement = entries[entries.length - 1]
  console.log(lastEntryElement)
  console.log(e)

  lastEntryElement.removeEventListener('keypress', createNewEntry)
  lastEntryElement.removeEventListener('change', createNewEntry)
  lastEntryElement.removeEventListener('paste', createNewEntry)

  const elementID = entries.length + 1

  const newLabel = document.createElement('label')  
  newLabel.classList.add('entry')
  newLabel.htmlFor = `email${elementID}`
  newLabel.innerText = `emailadres student ${elementID}: `
  newLabel.addEventListener('change', createNewEntry)
  newLabel.addEventListener('keypress', createNewEntry)
  newLabel.addEventListener('paste', createNewEntry)

  const newInput = document.createElement('input')
  newInput.type = 'email'
  newInput.id = `email${elementID}`
  newInput.name = `email${elementID}`
  newInput.placeholder = 'emailadres'

  newLabel.appendChild(newInput)
  newUserForm.appendChild(newLabel)
}

