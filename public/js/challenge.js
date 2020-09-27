const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  const flask = new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`,
  })
})

function giveName(){ 
  const codeFlaskTextAreas = document.querySelectorAll('.codeflask textarea');
  codeFlaskTextAreas.forEach((area, i) => {
    area.name = codePanels[i];
    console.log(area.value)
  })
}

function compile() {
  let html = document.getElementById("htmlArea");
  let css = document.getElementById("cssArea");
  let js = document.getElementById("jsArea");
  let code = document.querySelector("#output iframe").contentWindow.document;

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
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
  }
}

const toggleElement = (e) => {
  document.getElementById(e.target.dataset.for).classList.toggle('is-collapsed')
}

const panelLabels = document.querySelectorAll('.panelLabel')
panelLabels.forEach(label => {
  label.addEventListener('click', (e) => toggleElement(e))
})

giveName()
compile()