// import './style.css'
const style = require('./style.css');
const style2 = require('./style2.css');
const txt = require('./aaa.txt');
import Icon from './timg.jpeg'
import printMe from './print';
console.log('style', style);
console.log('style2', style2);
import {
  cube
} from './math';

function component() {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  div.innerHTML = 'hello webpack 你好啊';
  btn.innerHTML = '点我';
  console.log(cube(5));
  div.classList.add('red');
  div.classList.add('aaa');
  div.classList.add('bbb');
  console.log(div, div.classList);
  btn.onclick = printMe;
  var ing = new Image(200, 200);

  console.log(ing, Icon);
  ing.src = Icon;

  div.appendChild(ing);

  div.appendChild(btn);
  console.log('txt', txt, txt.default)
  return div;
}
document.body.appendChild(component())