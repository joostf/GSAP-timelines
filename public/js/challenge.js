const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  return new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  })
})

const toggleElement = (e) => {
  document.getElementById(e.target.dataset.for).classList.toggle('is-collapsed')
}

const panelLabels = document.querySelectorAll('.panelLabel')
panelLabels.forEach(label => {
  label.addEventListener('click', (e) => toggleElement(e))
})

// CodeFlask.onUpdate((code => {
//   console.log(code)
// }))
