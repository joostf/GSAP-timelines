const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  const flask = new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`,
  })
})

function giveName(){ 
  const codeFlaskTextAreas = document.querySelectorAll('.codeflask textarea')
  codeFlaskTextAreas.forEach((area, i) => {
    area.name = codePanels[i]
    console.log(area.value)
  })
}

function compile() {
  let html = document.getElementById('htmlArea')
  let css = document.getElementById('cssArea')
  let js = document.getElementById('jsArea')
  let code = document.querySelector('#output iframe').contentWindow.document

  window.onload = (event) => {
    injectCode()
    watchForPress()
  }

  function watchForPress() {
    document.body.onkeyup = function() {
      injectCode()
    }
  }

  function injectCode() {
    code.open()
    code.writeln(
      html.value +
          '<style>' +
          css.value +
          '</style>' +
          '<script>' +
          js.value +
          '</script>'
    )
    code.close()
  }
}

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
giveName()
compile()
