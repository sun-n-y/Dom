//prepend() , inner text
//insert h2 infron to first heading

//create new element
const heading = document.createElement('h2');
// instead of creating text node and appending
//use inner text property
heading.innerText = `i'm a dynamic heading`;

//use prepend which will add at start of body
document.body.prepend(heading);
