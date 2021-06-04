// class produced after studies about ES6

class Person {
  constructor(name, age) {
    this._name = this._capitalize(name);
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._capitalize(value);
  }

  _capitalize(value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }
}

class Developer extends Person {
  constructor(name, age, codeLanguage) {
    super(name, age);
    this._codeLanguage = codeLanguage;
  }

  code() {
    return `${this._name} is coding in ${this._codeLanguage}`;
  }
}
const myPerson = new Person('heitor', 34); // name in lower case
console.log(myPerson.name);

myPerson.name = 'marcos'; // changing the name
console.log(myPerson.name);

const john = new Developer('John', 30, 'JavaScript');
console.log(john.code());

const michael = new Developer('michael', 28, 'C++');
console.log(michael.code());
