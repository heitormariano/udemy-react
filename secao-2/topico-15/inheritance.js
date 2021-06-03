class Human {
  constructor(gender) {
    this.gender = gender;
  }

  printMyGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(firstName, lastName, age, gender) {
    super(gender);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person01 = new Person('Carlos', 'Alencar', 28, 'Male');
console.log(person01.getFullName());
person01.printMyGender();
