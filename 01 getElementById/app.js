//get element by id

//assign to variable - faster
const h1 = document.getElementById('title');
console.log(h1);

h1.style.color = 'red';

//not assigning to variable - slower
document.getElementById('btn').style.color = 'white';
document.getElementById('btn').style.background = 'red';
