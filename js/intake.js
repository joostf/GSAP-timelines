function addButtons() {
  const allButtons = document.querySelectorAll(".intake__buttons button");
  allButtons.forEach((button) => button.classList.add("display"));
  document.querySelector(".no-js").classList.add("intake__fieldset--hide");

  setupFieldsets(allButtons);
}

function setupFieldsets(buttons) {
  const allFieldsets = document.querySelectorAll("fieldset");
  const nextButtons = document.querySelectorAll(".intake__buttons .next");
  const previousButtons = document.querySelectorAll(".intake__buttons .previous");

  allFieldsets.forEach((fieldset, i) => {
    if (i !== 0) {
      fieldset.classList.add("intake__fieldset--hide");
    }
  });
  let index = 0;
  nextButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      allFieldsets[index].classList.add("intake__fieldset--hide");
      index += 1;
      allFieldsets[index].classList.remove("intake__fieldset--hide");
    });
  });

  previousButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (allFieldsets[index] !== undefined) {
        allFieldsets[index].classList.add("intake__fieldset--hide");
        index -= 1;
        allFieldsets[index]?.classList?.remove("intake__fieldset--hide");
        if (allFieldsets[index] === undefined) {
          allFieldsets[index + 1].classList.remove("intake__fieldset--hide");
          index += 1;
        }
      }
    });
  });
}

addButtons();
