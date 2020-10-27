const topPane = document.querySelector(".input__html");
const midPane = document.querySelector(".input__css");

const divider = document.querySelectorAll(".input__resizer");

function resizer(elem) {
  const nextPanel = elem.srcElement.nextElementSibling;
  const previousPanel = elem.srcElement.previousElementSibling;
  console.log(nextPanel);
  console.log(previousPanel);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevY = elem.y;
  const panel = previousPanel.getBoundingClientRect();
  // console.log(topPanel);
  function mousemove(elem) {
    let newY = prevY - elem.y;
    console.log(newY);
    previousPanel.style.height = panel.height - newY + "px";
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

divider.forEach((bar) => {
  console.log(bar);
  bar.addEventListener("mousedown", resizer);
});

const arrow = document.querySelectorAll(".input__arrow");

// create toggle
arrow.forEach((elem) => {
  const parent = elem.parentElement;
  elem.addEventListener("click", () => {
    parent.style.height = `3.33%`;
    elem.style.transform = `rotate(-135deg)`;
  });
});
