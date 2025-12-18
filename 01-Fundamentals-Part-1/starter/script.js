/* let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");



let firstName = "Jonas";
console.log(firstName);
let PI = 3.145;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let myCountry = "Montenegro";
console.log(myCountry);

let myContinent = "Europe";
console.log(myContinent);

let myPopulation = "Male";
console.log(myPopulation);


true;
console.log(true);
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2);

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10; // x= x+ 10
console.log(x);

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const averageAge = (ageJonas + ageSarah) / 2;


const massMark = 78;
const heightMark = 178;
const massJohn = 92;
const heightJohn = 1.95;


const massMark = 95;
const heightMark = 188;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);

z
const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = "2037";

const jonas =
  "I am" + firstName + ", a" + (year - birthYear) + "years old" + job + "!";
console.log(jonas);

const jonasNew = 'I am' ${firstName}', a ${year-birthYear} year old $ (job)!';
console.log(jonasNew)

console.log('just a regular string ...')

console.log('String with \n\
  multiple \n\
  lines ');
  /*
  */
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can take driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log("Sarah is too young. Wait another ${yearsLeft} years;");
}

const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's ");
} else {
  console.log("JOhn's BMI is higher than Mark's");
}


//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old ");
console.log("23" - "10" - 3);
console.log(" 23 " * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Don't spend it at all;)");
} else {
  console.log("You should get a job!");
}

let hight;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
*/
const age = 18;
if (age === 18) console.log("You just became an adult :D(strict)");

if (age == 18) console.log("You just became and adult :D (loose)");

const favorite = prompt("What's your favorite number?");
console.log(favorite);
console.log(typeof favorite);

if (favorite == 27) {
  console.log("Cool! 27 is great number!");
} else if (favorite == 7) {
  console.log("7 is also a cool number");
} else if (favorite == 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 27 or 7 or 9");
}

if (favorite !== 27) console.log("Why not 27?");
