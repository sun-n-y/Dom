// navigate the dom

// //childern==================================================
// const result = document.querySelector('#result');
// const allChildern = result.childNodes;

// console.log(allChildern);

// const childern = result.children;
// console.log(childern);

// console.log(result.firstChild);
// console.log(result.lastChild);

// //parent element============================================

// const heading = document.querySelector('h2');

// const parent = heading.parentElement;

// parent.style.color = 'red';

//sibling ====================================================

// const first = document.querySelector('.first');

// const second = (first.nextSibling.nextSibling.style.color = 'red');

// console.log(second);

// const last = document.querySelector('#last');

// const third = (last.previousSibling.previousSibling.style.color = 'blue');

// console.log(third);

// element siblings ===========================================

const first = document.querySelector('.first');
first.nextElementSibling.style.color = 'red';

const last = document.querySelector('#last');
last.previousElementSibling.style.color = 'red';
