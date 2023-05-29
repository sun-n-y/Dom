//local storage arrays

const friends = ['john', 'peter', 'bob'];

//store as an array using json stringify
localStorage.setItem('friends', JSON.stringify(friends));

//get items using jason parse
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

//empty array
let fruits;
if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);

//add to array using push method
// fruits.push('apple');
fruits.push('orange');
//add to local storage
localStorage.setItem('fruits', JSON.stringify(fruits));
