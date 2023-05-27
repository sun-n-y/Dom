//remove elements from dom

//remove
// //select element to remove
// const result = document.querySelector('#result');
// //remove it
// result.remove();

//remove child
//would need to run it on a parent
const result = document.querySelector('#result');
//select element to remove
const heading = result.querySelector('h1');
//remove child
result.removeChild(heading);
