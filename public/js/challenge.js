const codePanels = ['html', 'css', 'js'];

codePanels.forEach((panel) => {
  return new CodeFlask(`#${panel}`, {
    language: panel,
    lineNumbers: true,
    areaId: `${panel}Area`
  });
})


// CodeFlask.onUpdate((code => {
//   console.log(code)
// }))