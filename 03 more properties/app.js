// //more properties

// const item = document.getElementById('special');
// const value = item.nodeValue;
// console.log(item.childNodes[0].nodeValue);

// const easyValue = item.textContent;
// console.log(easyValue);

//attributes

const first = document.querySelector('.first');
const idValue = first.getAttribute('id');

// console.log(idValue);

const link = document.getElementById('link');
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = 'i also have a class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);
