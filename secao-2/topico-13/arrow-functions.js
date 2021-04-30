const languages = ['Javascript', 'Python', 'Java', 'C#'];

// using arrow functions

const printLength = (languages) => console.log(languages.map((language) => language.length));

console.log('Arrow Function:');
printLength(languages);

//traditional form
printLengthTraditional = function (languages) {
  console.log(
    languages.map(function (language) {
      return language.length;
    })
  );
};

console.log('Traditional Form:');
printLengthTraditional(languages);

// more arrow functions

const students = [
  { name: 'Heitor', score: 10 },
  { name: 'Raul', score: 9.5 },
  { name: 'Max', score: 8.5 },
];

let filterStudents = (students) => students.filter((elem) => elem.score >= 9.5);
console.log(filterStudents(students));
