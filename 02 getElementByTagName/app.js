//get element by tag name

const headings = document.getElementsByTagName('h2');
headings[0].style.color = 'red';
// console.log(headings); //result html collection

const items = document.getElementsByTagName('li');
//html collection
items[1].style.color = 'orange';

//spread operator to turn into array
betterItems = [...items];

betterItems.forEach(function (item) {
  console.log(item);
});

console.log(items);
console.log(betterItems);
