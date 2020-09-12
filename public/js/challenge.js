let html = document.getElementById('html')
let css = document.getElementById('css')
let js = document.getElementById('js')
let code = document.getElementById("code").contentWindow.document;

function addButtons (){
  const allButtons = document.querySelectorAll('form button')
  allButtons.forEach(button => (
      button.classList.add('display')
  ))

  setupFieldsets(allButtons)
}
function setupFieldsets(buttons) {
  const allFieldsets = document.querySelectorAll('.context-challenge')
  const nextButtons = document.querySelectorAll('form .next')
  const previousButtons = document.querySelectorAll('form .previous')

  allFieldsets.forEach((fieldset, i) => {
      if(i !== 0) {
          fieldset.classList.add('hide')
      }
  })
  let index = 0;
  console.log(nextButtons)
  nextButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault()
          allFieldsets[index].classList.add('hide')
          index += 1;
          allFieldsets[index].classList.remove('hide')
      })
  })

  previousButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault()
          if(allFieldsets[index] !== undefined) {
              allFieldsets[index].classList.add('hide')
              index -= 1
              allFieldsets[index]?.classList?.remove('hide')
              if(allFieldsets[index] === undefined) {
                  allFieldsets[index + 1].classList.remove('hide')
                  index += 1
              }
          }
      })
  })
}

addButtons()

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