//inner html , text content

//select elements
const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('item');

const randomVar = 'random variable';

console.log(div.textContent);
console.log(list.innerHTML);

//create list using innerhtml
const ul = document.createElement('ul');
// set to template string
ul.innerHTML = `<li class="item">list item</li>
<li>list item</li>
<li>${randomVar}</li>`;
//append to body
document.body.appendChild(ul);
