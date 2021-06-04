// Topic class: classes, properties and methods
// observation: The property values are defined directly by instructor

class Human {
  gender = 'Male';

  printGender = () => {
    console.log(this.gender);
  };
}

// class adapted
class Person extends Human {
  firstName = 'Heitor';
  lastName = 'Camara';
  age = 34;

  getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person01 = new Person();
console.log(person01.getFullName());
person01.printGender();
