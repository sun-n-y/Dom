//methods

//get acces to node object and assign variable then style it
const h1 = document.getElementById('title');

h1.style.color = 'red';

// slect element directly and apply changes

document.getElementById('btn').style.background = 'blue';
document.getElementById('btn').style.color = 'red';

//refractor it to short syntax
const btn = document.getElementById('btn');
btn.style.backgroundColor = 'green';
btn.style.color = 'white';
