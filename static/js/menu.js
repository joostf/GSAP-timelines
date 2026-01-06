// menu.js



// ----- State (private) -----
let containsFocus = false

// ----- DOM (private) -----
const button = document.querySelector('.menu-button')
const menuRoot = document.querySelector('.menu')
const items = menuRoot.querySelectorAll('a')

// ----- Initialize Menu (public) -----
export function initMenu() {
  button.addEventListener('click', onClick)
  button.addEventListener('animationend', onAnimationEnd)
  menuRoot.addEventListener('animationend', onAnimationEnd)
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('focusin', onFocusIn)
  document.addEventListener('scroll', onScroll)
}

// ----- Actions (private) -----
function open() {
}

function close() {
}

function toggle() {
}

function reset() {
}

// ----- Event handlers (private) -----
function onClick(event) {
}

function onKeydown(event) {
}

function onFocusIn(event) {
}

function onScroll(event) {
}

function onAnimationEnd(event) {
}

function onMenuAnimationEnd(event) {
}

function onButtonAnimationEnd(event) {
}
