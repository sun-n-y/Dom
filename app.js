//methods

// //get elements by id

// //get acces to node object and assign variable then style it
// const h1 = document.getElementById('title');

// h1.style.color = 'red';

// // slect element directly and apply changes

// document.getElementById('btn').style.background = 'blue';
// document.getElementById('btn').style.color = 'red';

// //refractor it to short syntax
// const btn = document.getElementById('btn');
// btn.style.backgroundColor = 'green';
// btn.style.color = 'white';

// // get elements based on tag name

// const headings = document.getElementsByTagName('h2');
// // console.log(headings); //result is an html collection = array like object
// headings[0].style.color = 'red';
// // console.log(headings.length);

// const items = document.getElementsByTagName('li');
// items[1].style.color = 'orange';
// //turn items into an array
// const betterItems = [...items];

// betterItems.forEach(function (item) {
//   console.log(item);
// });

// console.log(items);
// console.log(betterItems);

//get elements based on class name

const listItems = document.getElementsByClassName('special');

listItems[2].style.color = 'blue';

console.log(listItems);

const better = [...listItems];

better.forEach(function (item) {
  console.log(item);
});

console.log(better);
