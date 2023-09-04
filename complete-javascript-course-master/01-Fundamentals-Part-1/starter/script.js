// // 

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive){
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

//  const scoreDolphins = (96 + 108 +89) / 3;
//  const scoreKoalas = (88 + 91 + 110) / 3;
//  console.log(scoreDolphins, scoreKoalas);

//  if(scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
//  } else if(scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
//  } else if(scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
//  }

 //BONUS 1
 const scoreDolphins = (97 + 112 + 80) / 3;
 const scoreKoalas = (109 + 95 + 50) / 3;
 console.log(scoreDolphins, scoreKoalas);

 if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
 } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
 } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreDolphins >= 100) {
  console.log('Both win the trophy!');
 } else {
  console.log('No one wins the trophy')
 }