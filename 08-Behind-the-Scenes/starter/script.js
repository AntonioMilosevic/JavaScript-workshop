'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName},You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // creating new variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // reasigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, ${firstName} you are millenial`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Mich';
// calcAge(1991);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// shallow copy
const copyJessica = { ...jessica };
copyJessica.lastName = 'Davies';

copyJessica.family.push('Mary');
copyJessica.family.push('John');

// function marriedPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davies';

console.log('before:', jessica);
console.log('after:', copyJessica);

// deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('Mary');
jessicaClone.family.push('John');

console.log('Original:', jessica);
console.log('Clone:', copyJessica);
