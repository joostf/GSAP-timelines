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

window.addEventListener('scroll', function(e) {
  input.getBoundingClientRect().top < 50 ? editMode() : normalMode();
});

function editMode () {
  document.body.classList.add('edit-mode');
}
function normalMode () {
  document.body.classList.remove('edit-mode');
}
