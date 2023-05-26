//traverse dom siblings

const first = document.querySelector('.first');

const second = first.nextSibling.nextSibling;

second.style.color = 'green';

console.log(second);

const last = document.querySelector('#last');

const third = last.previousSibling.previousSibling;

console.log(third);
