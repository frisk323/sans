const main = document .querySelector('.main');
const btn = document.querySelector('.btn');

let colors = ['#ffe224', '#9aff26', '#57ffcf', '#00e1ed', '#29096e', '#9a4bbf', '#c20030'];

btn.addEventListener('click', changeColor)

function  changeColor() {
    const colorIndex = parseInt(Math.random() * colors. length);
main.style.backgroundColor = colors[colorIndex];
}