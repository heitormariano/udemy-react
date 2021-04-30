//não consegui fazer o export e import de mais funções

// Encontrei esta informação:
/*There are two different types of export, named and default. 
You can have multiple named exports per module but only one default export
*/

//import mySum from './default-exports.mjs';
import myAverage from './default-exports.mjs';

// let sum = mySum(10, 50);
// console.log('Sum: ' + sum);

let numbers = [2, 3, 4, 5, 6];
let avg = myAverage(numbers);
console.log('Average: ' + avg);
