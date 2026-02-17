'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName},You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // reasigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, ${firstName} you are millenial`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      
    }
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
