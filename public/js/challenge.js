const codePanels = ['html', 'css', 'js'];

codePanels.forEach((panel) => {
  return new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  });
})

/* Edit / Normal mode */
const input = document.querySelector('section#input');

<<<<<<< HEAD
window.addEventListener('scroll', function(e) {
  input.getBoundingClientRect().top < 50 ? editMode() : normalMode();
});
=======
  setupFieldsets(allButtons)
}

function setupFieldsets(buttons) {
  const allFieldsets = document.querySelectorAll('.context-challenge')
  const nextButtons = document.querySelectorAll('form .next')
  const previousButtons = document.querySelectorAll('form .previous')
  const cssInput = document.getElementById('cssInput')
  const jsInput = document.getElementById('jsInput')
  let index = 0

  allFieldsets.forEach((fieldset, i) => {
      if(i !== 0) {
          fieldset.classList.add('hide')
      }
  })

  nextButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault()
          allFieldsets[index].classList.add('hide')
          index += 1;
          if (index === 1) cssInput.classList.remove('hide')
          if (index === 2) jsInput.classList.remove('hide')
          allFieldsets[index].classList.remove('hide')
      })
  })
>>>>>>> 9df1c651448b7c50304ecc76f204a93815e0e2b2

function editMode () {
  document.body.classList.add('edit-mode');
}
<<<<<<< HEAD
function normalMode () {
  document.body.classList.remove('edit-mode');
}
=======

function compileCode() {
    window.onload = function() {
        codePanel.open();
        codePanel.writeln(
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
      codePanel.open();
      codePanel.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      codePanel.close();
    };

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
        }`

    js.value = `
      console.log('Check your console')`
}


>>>>>>> 9df1c651448b7c50304ecc76f204a93815e0e2b2
