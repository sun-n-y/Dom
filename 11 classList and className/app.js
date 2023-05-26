// class list

//access to headings==========================================
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

//class name property to get the class name aka checking
const classValue = first.className;
// console.log(classValue);

//class name property to add a class
second.className = 'colors';
second.className = 'text';

//class list===============================================

//add
// third.classList.add('colors');
// third.classList.add('text');
third.classList.add('text', 'colors');

//remove
third.classList.remove('text');

//contains
let result = third.classList.contains('colors');

if (result) {
  console.log(true);
} else {
  console.log(false);
}

console.log(third.classList);
