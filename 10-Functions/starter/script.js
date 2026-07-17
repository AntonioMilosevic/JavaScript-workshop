'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers,
// ) {
//   // es5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', '2', '800');
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000);

// const flight = 'LH234';

// const jonas = {
//   name: 'Jonas Schmedtman',
//   passport: 42425236,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 42425236) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// // Is the same as doing
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)} `);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
// u ovom slucaju upperFirstWord sluzi kao callback fn koja je pozvana preko transformera
transformer('JavaScript is the best', oneWord);

// Js uses callback all the time
const high5 = function () {
  console.log('✊');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} `);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

//to isto sa arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  //book: function()
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on flight ${this.iatacode} ${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iatacode} ${flightNum} `, name });
  },
};

lufthansa.book(232, 'Jonas Schemdtmn');
lufthansa.book(474, 'Jon SMith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// const book: (flightNum:any , name: any) => void
// book(23, 'Sarah W');

//call  method
book.call(eurowings, 23, 'Sarah W');
console.log(eurowings);
//call umjesto "this" da bi znali da li hocemo lufthansa ili eurowings

book.call(lufthansa, 333, 'Mary Mery');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss airlines',
  iatacode: 'LX',
  bookings: [],
};
//apply method
const flightData = [583, 'George Best'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Gerrard');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtman');
bookEW23('Martha Stuart');

//With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
