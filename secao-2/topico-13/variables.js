// var
// var declarations are globally scoped or function scoped
var myName = 'Heitor';

function newFunction() {
  var hello = 'hello';
}
console.log(myName);
// console.log(hello); // error: hello is not defined

// var variables can be updated and re-declared within its scope
var animal = 'tiger';
var animal = 'cat';
console.log(animal);

// let and const

// let is block scoped (A block lives in curly braces)
let greeting = 'say Hi';
let times = 5;

if (times > 4) {
  let hello = 'say Hello man';
  console.log(hello); // "say Hello man"
}
//console.log(hello); // hello is not defined

// let can be updated but not re-declared

let course = 'React';
couse = 'React Native';

let name = 'Heitor';
//let name = 'Carlos'; Error: Identifier 'name' has already been declared

// const (Variables declared with the const maintain CONSTANT values)
// const declarations are block scoped
// const cannot be updated or re-declared

const friend = 'Marta';
//friend = 'Marta Santos'; // error: Assignment to constant variable.

//objects declared with const
// A const object cannot be updated

const person = {
  name: 'Heitor',
  age: 33,
};

/*
const person = {
  name: 'Artur',
  age: 38
};*/
//Identifier 'person' has already been declared

// the properties of this objects can be updated
person.name = 'Heitor Camara';
person.age = 34;
console.log(person);
