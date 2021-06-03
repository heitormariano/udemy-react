class Student {
  constructor() {
    this.name = 'Mateus';
  }

  printMyName() {
    console.log(this.name);
  }
}

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const myStudent = new Student();
myStudent.printMyName();

const myPerson = new Person('Heitor', 'Camara', 34);
console.log(`Full name: ${myPerson.getFullName()}. Age: ${myPerson.age}`);
