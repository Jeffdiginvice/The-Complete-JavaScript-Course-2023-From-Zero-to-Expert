// // /*let js = "amazing";
// // // if (js === "amazing") alert("Javascript is FUN");
// // // console.log(40 + 8 + 23 - 10);

// // console.log("Jonas");
// // console.log(23);

// // let firstName = "Matilda";

// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// // //variable name conventions
// // let jonas_matilda = 'JM';
// // let $function = 27;

// // let person = "jonas";
// // let PI = 3.1415;

// // let myFirstJob = "Coder";
// // let myCurrentJob = "Teacher";

// // let job1 = "programmer";
// // let job2 = "teacher";

// // console.log(myFirstJob);

// //  let javascriptIsFun = true;
// //  console.log(javascriptIsFun);

// //  console.log(typeof true);
// //  console.log(typeof javascriptIsFun);
// //  console.log(typeof 23);
// //  console.log(typeof 'true');

// //  javascriptIsFun = 'yes';
// //  console.log(javascriptIsFun)

// //  let year;
// //  console.log(year);
// //  console.log(typeof year);

// //  year = 1991;
// //  console.log(typeof year);

// //  console.log(typeof null)
// //  */

// // //  let age = 30;
// // //  age = 31;

// // //  const birthYear = 1991;
// // //  birthYear = 1990;

// // const now = 2037;
// // const ageJonas = now - 1991;
// //   const ageSarah = now - 2020;
// //   console.log(ageSarah, ageJonas)
// //   console.log(ageJonas);

// //   console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// //   // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// //   const firstName = 'Jonas';
// //   const lastName = 'Schedtman';
// //   console.log(firstName + ' ' + lastName);

// //   // // assignment operators
// //   // // let x = 10 + 5; //15
// //   // x += 10; // x = x + 10
// //   // x *= 4; // x =  x * 4 = 100
// //   // x++; // x = x + 1
// //   // x--; // x = x - 1
// //   // console.log(x);

// //   // Comparison operators

// //   // >, <, >=, <=
// //   console.log(ageJonas > ageSarah);
// //   console.log(ageJonas < ageSarah);
// //   console.log(ageSarah >= 18);

// //   const isFullAge = ageSarah >= 18;

// //   console.log(now - 1991 > now - 2018);

// //   console.log(25 - 10 - 5);

// //   let x, y;
// //   x = y = 25-10-5; // x = y = 10, x = 10
// //   console.log(x);

// //   const everageAge = (ageJonas + ageSarah) / 2;
// //   console.log(ageJonas, ageSarah, everageAge);

// //   //Coding Challenge

// //   // let markMass = 78;
// //   // let markHeight = 1.69;
// //   // let johnMass = 92;
// //   // let johnHeight = 1.95;

// //   let markMass = 95;
// //   let markHeight = 1.88;
// //   let johnMass = 85;
// //   let johnHeight = 1.76;

// //  const BMIMark = markMass / markHeight ** 2;
// //  const BMIJohn = johnMass / (johnHeight * johnHeight);
// //  const markhigherBMI = BMIMark > BMIJohn;

// //  console.log(BMIMark, BMIJohn, markhigherBMI);

// const fistName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + fistName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${fistName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\ multiple \n\ lines')

// console.log(`String
// multiple
// lines`)

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years :`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markhigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markhigherBMI);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's!`)
}