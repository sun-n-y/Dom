//global events--===================================

// //domcontent loaded
// window.addEventListener('DOMContentLoaded', function () {
//   const heading = document.querySelector('h1');
//   console.log(heading);
//   heading.style.color = 'red';
// });

// //load event ==================================

// window.addEventListener('load', function () {
//   console.log('2nd');
//   const img = document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// window.addEventListener('DOMContentLoaded', function () {
//   console.log('1st');
//   const img = document.querySelector('img');
//   console.log(img);
//   console.log(img.width);
// });

// //scroll event =========================================

// window.addEventListener('scroll', function () {
//   console.log(window.scrollX + ' X pixels');
//   console.log(window.scrollY + ' Y pixels');
// });

// //get size on window=======================================
// console.log('height : ' + window.innerHeight);
// console.log('width : ' + window.innerWidth);

// //get the size of elements==================================
// const btn = document.querySelector('.btn');
// const box = document.querySelector('.box');

// btn.addEventListener('click', function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

//resize event =============================================

window.addEventListener('resize', function () {
  console.log(window.innerWidth);
});
