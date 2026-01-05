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
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1994, 1996, 1969);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmidt", 2037 - 1991, "teacher", friends];
console.log(jonas);

// exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1991, 1985, 1996, 1998, 2000];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.lenght - 1]),
];
console.log(ages); */
/*
const friends = ["Michael", "Steven", "Peter"];

//add elements
const newLenght = friends.push("Jay");
console.log(friends);
console.log(newLenght);

friends.unshift("John");
console.log(friends);

// remove elements

friends.pop(); //last
const popped = friends.pop();

console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("I have a friend called Steven");
}
*/
/*

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);  */
/*
const Jonas = {
  firstName: "Jonas",
  lastName: "Schmdt",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Jon"],
};
console.log(Jonas);

console.log(Jonas.lastName);
console.log(Jonas["lastName"]);

const nameKey = "Name";
console.log(Jonas["first" + nameKey]);
console.log(Jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends "
);
console.log(Jonas[interestedIn]);

if (Jonas[interestedIn]) {
  console.log(Jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

Jonas.location = "Portugal";
Jonas["twitter"] = "@jonasscmd";
console.log(Jonas);

console.log(
  `${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}`
);
*/
/*
const Jonas = {
  firstName: "Jonas",
  lastName: "Schmdt",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Jon"],
  hasDriversLicence: true,

  // calcAge: function (birthYear) {
  // return 2037 - birthYear;
  //},

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      Jonas.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} drivers licence`;
  },
};

console.log(Jonas.calcAge());
console.log(Jonas.getSummary());
*/ /*

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jon = {
  fullName: "Jon Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
jon.calcBMI();

console.log(mark.bmi, jon.bmi);

if (mark.bmi > jon.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jon.fullName}'s BMI (${jon.bmi})}`
  );
} else if (jon.bmi > mark.bmi) {
  console.log(
    `${jon.fullName}'s BMI (${jon.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})}`
  );
}
*/
console.log("Lifting weights repetition 1");
console.log("Lifting weights repetition 2");
console.log("Lifting weights repetition 3");
console.log("Lifting weights repetition 4");
console.log("Lifting weights repetition 5");
console.log("Lifting weights repetition 6");
console.log("Lifting weights repetition 7");
console.log("Lifting weights repetition 8");
console.log("Lifting weights repetition 9");
console.log("Lifting weights repetition 10");

// for loop keep running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}💪`);
}
