//query selector=======================

const result = document.querySelector('#result');
result.style.background = 'blue';
// console.log(result);

const item = document.querySelector('.special');
// console.log(item);

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

//queryselector all===================

const list = document.querySelectorAll('.special');

list.forEach(function (item) {
  console.log(item);
  item.style.color = 'yellow';
});
