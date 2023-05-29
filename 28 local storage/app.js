//local storage

// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

//set items
localStorage.setItem('name', 'john');
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'dev');
localStorage.setItem('address', 'street 123');

//get items - to access
const name = localStorage.getItem('name');
console.log(name);

//remove items from local storage - 1 item or all
localStorage.removeItem('name');

//removes all
localStorage.clear();
