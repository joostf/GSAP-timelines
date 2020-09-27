const codePanels = ['html', 'css', 'js']

codePanels.forEach((panel) => {
  const flask = new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  })
})

function compile() {
  let html = document.getElementById("htmlArea");
  let css = document.getElementById("cssArea");
  let js = document.getElementById("jsArea");
  let code = document.querySelector("#output iframe").contentWindow.document;

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