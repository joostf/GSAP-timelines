let html = document.getElementById('html')
let css = document.getElementById('css')
let js = document.getElementById('js')
let code = document.getElementById("code").contentWindow.document;

function compile() {
    window.onload = function() {
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
    }
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
  
  compile();

  html.value= `
  <main>
  </main>`
  
    css.value= `
    body {
      font-family: "Exo", sans-serif;
      margin: 0;
    }
    
    main {
      width:100vw;
      height:100vh;
      background: #fff;
    }
    `
js.value = `
console.log('Check your console')
`