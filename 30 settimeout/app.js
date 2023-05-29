//set timeout

//function reference
function sayHello() {
  console.log('hello john');
}

//delay function
// setTimeout(sayHello, 1000);

//alternative appraoch, used with arrow functions ES6
// setTimeout(function () {
//   console.log('hello john');
// }, 2000);

//pass arguments
function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

// setTimeout(showScore, 1000, 'john', 55);

//unique identifier
const firstId = setTimeout(showScore, 1000, 'john', 55);
const secondId = setTimeout(showScore, 1000, 'peter', 77);
console.log(firstId);
console.log(secondId);

//to stop running
clearTimeout(firstId);
