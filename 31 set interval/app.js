// set interaval

//function reference
function showScore(name, score) {
  console.log(`hello ${name} ${score}`);
}

//set interval every 2s
// setInterval(showScore, 2000);

//pass in arguments
const first = setInterval(showScore, 2000, 'batman', 88);
clearTimeout(first);
