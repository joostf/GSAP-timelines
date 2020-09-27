const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  const flask = new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  })
})

<<<<<<< HEAD
function compile() {
  let html = document.getElementById("htmlArea");
  let css = document.getElementById("cssArea");
  let js = document.getElementById("jsArea");
  let code = document.querySelector("#output iframe").contentWindow.document;
=======
const toggleElement = (e) => {
  document.getElementById(e.target.dataset.for).classList.toggle('is-collapsed')
}

const panelLabels = document.querySelectorAll('.panelLabel')
panelLabels.forEach(label => {
  label.addEventListener('click', (e) => toggleElement(e))
})
>>>>>>> 3a7e5e6acfeca0111412d7dd0d3221ac8a177a56

  document.body.onkeyup = function() {
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
  };
}

compile()