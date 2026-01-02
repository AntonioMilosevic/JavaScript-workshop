"use strict";
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I can drive`);
*/
/*
function logger() {
  console.log("My name is Toni");
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */
/*
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2); */
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));   */
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces og apples and ${orangePieces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2, 3));  */
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  //return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));   */
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the throphy(${avgDolphins}vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy (${avgKoalas}vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);   */

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1994, 1996, 1969);
