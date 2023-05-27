// add elements and text

const result = document.querySelector('#result');
const first = document.querySelector('.red');
//create empty element
const bodyDiv = document.createElement('div');
//create text node
const text = document.createTextNode('a simple body div');
//append text node to bodyDiv
bodyDiv.appendChild(text);
//append bodydiv to body use insertbefore
document.body.insertBefore(bodyDiv, result);

//seen only when js runs

//exercise
const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');

heading.appendChild(headingText);
heading.classList.add('blue');
//appedn using insert before
result.insertBefore(heading, first);

console.log(result.children);
