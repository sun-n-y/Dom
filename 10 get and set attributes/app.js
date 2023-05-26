// get and set attribute

//get attribute================================
const first = document.querySelector('.first');

const classValue = first.getAttribute('class');
const idValue = first.getAttribute('id');
console.log(classValue);
console.log(idValue);

const link = document.getElementById('link');
console.log(link.getAttribute('href'));

//set attribute=========================
const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'hi there';
console.log(last);

//
const links = document.querySelectorAll('.first');
console.log(links);
