//traverse dom element siblings

const first = document.querySelector('.first');

first.nextElementSibling.style.color = 'cyan';

const last = document.querySelector('#last');

last.previousElementSibling.style.color = 'purple';
