// key events

//select element
const nameInput = document.querySelector('#name');

// //listen for key press in that name input field
// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed a key');
// });

// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed a key');
// });

//grab value in the input
nameInput.addEventListener('keyup', function () {
  //   console.dir(nameInput); // to see where value is stored in node object = value property
  console.log(nameInput.value);
});
