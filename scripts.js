let confetti_colors = [
  '#E68F17',
  '#FAB005',
  '#FA5252',
  '#E64980',
  '#BE4BDB',
  '#0B7285',
  '#15AABF',
  '#EE1233',
  '#40C057'
];
let confettis_conf = [

  // 2
  {
    angle: 270,
    spread: 90,
    startVelocity: 30,
    elementCount: 30,
    decay: 0.73,
    colors: confetti_colors
  }

];

let buttons = Array.from(document.querySelectorAll('[data-fun]'));
buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();
    window.confetti(button, confettis_conf[button.getAttribute('data-fun')]);
  })
});