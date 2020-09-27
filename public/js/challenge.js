const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  return new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  })
})

const toggleElement = (e) => {
  const rotatedIcons = document.querySelectorAll('.is-rotated')
  rotatedIcons.forEach(icon => {
    icon.classList.remove('is-rotated')
  })

  const openPanels = document.querySelectorAll('.is-opened')
  openPanels.forEach(panel => {
    panel.classList.remove('is-opened')
  })

  e.target.querySelector('i').classList.toggle('is-rotated')
  document.getElementById(e.target.dataset.for).classList.toggle('is-opened')
}

const panelLabels = document.querySelectorAll('.panelLabel')
panelLabels.forEach(label => {
  label.addEventListener('click', toggleElement)
})

const fullscreenButton = document.getElementById('button-fullscreen')
fullscreenButton.addEventListener('click', e => toggleFullscreen(e)) 

const toggleFullscreen = (e) => {
  e.preventDefault()
  fullscreenButton.classList.toggle('is-fullscreen')
  const codeContainer = document.querySelector('.codepanels-container')
  codeContainer.classList.toggle('is-fullscreen')
  const codePanels = document.querySelectorAll('.codepanel')
  codePanels.forEach(panel => panel.classList.toggle('is-fullscreen'))
}
// CodeFlask.onUpdate((code => {
//   console.log(code)
// }))
