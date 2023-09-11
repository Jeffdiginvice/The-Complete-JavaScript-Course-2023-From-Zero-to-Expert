// // // 

// // const hasDriversLicense = true; // A
// // const hasGoodVision = true; // B

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(!hasDriversLicense);

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // // if(shouldDrive){
// // //   console.log('Sarah is able to drive!');
// // // } else {
// // //   console.log('Someone else should drive...');
// // // }

// // const isTired = true; // C
// // console.log(hasDriversLicense && hasGoodVision && isTired);

// // if(hasDriversLicense && hasGoodVision && !isTired){
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Someone else should drive...');
// // }

// //  const scoreDolphins = (96 + 108 +89) / 3;
// //  const scoreKoalas = (88 + 91 + 110) / 3;
// //  console.log(scoreDolphins, scoreKoalas);

// //  if(scoreDolphins > scoreKoalas) {
// //   console.log('Dolphins win the trophy 🏆');
// //  } else if(scoreKoalas > scoreDolphins) {
// //   console.log('Koalas win the trophy 🏆');
// //  } else if(scoreDolphins === scoreKoalas) {
// //   console.log('Both win the trophy!');
// //  }

//  //BONUS 1
//  const scoreDolphins = (97 + 112 + 80) / 3;
//  const scoreKoalas = (109 + 95 + 50) / 3;
//  console.log(scoreDolphins, scoreKoalas);

//  if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
//  } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
//  } else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreDolphins >= 100) {
//   console.log('Both win the trophy!');
//  } else {
//   console.log('No one wins the trophy')
//  }

const day = 'friday'; //day === 'monday
switch(day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'Wednesday':
  case 'Thursay':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Emjoy the weeked :D');
    break;
  default:
    console.log('Not a valid day!')
}

if(day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday') {
  console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if(day === 'friday') {
  console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday') {
  console.log('Emjoy the weeked :D');
} else {
  console.log('Not a valid day!')
}