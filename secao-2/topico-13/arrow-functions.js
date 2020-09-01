const languages = ['Javascript', 'Python', 'Java', 'C#'];

// using arrow functions

let printLength = (languages) => console.log(languages.map((elem) => elem.length));

console.log('Arrow Function:');
printLength(languages);

//traditional form
printLength = function (languages) {
  console.log(
    languages.map(function (elem) {
      return elem.length;
    })
  );
};

console.log('Traditional Form:');
printLength(languages);

// more arrow functions

const students = [
  { name: 'Heitor', score: 10 },
  { name: 'Raul', score: 9.5 },
  { name: 'Max', score: 8.5 },
];

let filterStudents = (students) => students.filter((elem) => elem.score >= 9.5);
console.log(filterStudents(students));
