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
  const cssInput = document.getElementById('cssInput')
  const jsInput = document.getElementById('jsInput')

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
          console.log(index)          
          index += 1;
          if (index === 1) cssInput.classList.remove('hide')
          if (index === 2) jsInput.classList.remove('hide')
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
              if (index === 0) cssInput.classList.add('hide')
              if (index === 1) jsInput.classList.add('hide')
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
  <header>
    <button>≡ Menu</button>
    <h1>Coding Challenge</h1>
  </header>`
  
    css.value= `
    body {
      font-family: "Exo", sans-serif;
      margin: 0;
      background-color: white;
    }

    header {
      background-color: #ff9e00;
      color: #001f53;
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }

    header h1 {
      font-size: 1.5rem;
    }

    header button {
      border: none;
      color: #001f53;
      font-weight: bold;
      font-size: 1rem;
      background-color: transparent;
      cursor: pointer;
    }
    `
js.value = `
console.log('Check your console')
`