import Icon2 from './1.png';
import {
  numberAdd
} from './test.ts'
export default function printMe() {
  var ing2 = new Image(200, 200);
  ing2.src = Icon2;
  console.log('ts', numberAdd(2));
  console.log("I' m printMe");
  console.log('a', process.env, process.env.NODE_ENV);
  const aaa = () => {
    return 3 ** 2;
  }
  console.log(aaa);
  return import( /* webpackChunkName: "custom-lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div')
    element.innerHTML = _.join(["Hello", "yao duo duo"]);
    document.body.appendChild(ing2);
    document.body.appendChild(element);
    return element;
  }).catch(error => 'An error occurred while loading the component')
}