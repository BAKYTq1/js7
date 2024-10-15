// let num = prompt('as')
// function name() {
  
// }

// function calculateAndLogNumber () {
//   let x = 5;
//   x = x + 100;
//   x = x / 5;
//     console.log(x);
// }
// calculateAndLogNumber ()



// function calculateAndLogNumber () {
//   let x = 10;
//   x = x + 100;
//   x = x / 5;
//   return x;
// }
// const result =  calculateAndLogNumber ()
// console.log(result);

// function calculateNumber(num) {
//   let x = num;
//   x = x + 100;
//   x = x / 5;
//   return x;
// }
// const num =  calculateNumber (5)
// console.log(num);

// function calculatorNumberlog(){
//     var num = prompt('Number') 
//     num = num * 100
//     return num;
// }
// const  num = calculatorNumberlog()
// console.log(num);

// function calcu (calculate){
//   let num  = 3.14 * calculate ** 2
//   return num;
// }

// const num = calcu(5)
// console.log(num);

function htmlElement(){
  let element = document.createElement('h1');
  element.id = '2';
  element.innerText = 'text'
  return element;
}
const j = htmlElement()
console.log(j);



document.body.append(j)