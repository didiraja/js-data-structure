// *****************
// *** FIBONACCI ***
// *****************
// let fibonacci = [];
// fibonacci[0] = 0;
// fibonacci[1] = 1;
// fibonacci[2] = 1;

// for (let i = 3; i < 20; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// for (let i = 0; i < fibonacci.length; i++) {
//   const element = fibonacci[i];

//   console.log(element);
// }

// **************
// *** ARRAYS ***
// **************
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers[numbers.length] = 10;
// numbers[numbers.length] = 11;

// numbers.push(12);
// numbers.push(13);
// numbers.push(14);
// numbers.push(15);
// numbers.push(16);

// numbers.unshift(-1);
// numbers.unshift(-2);
// numbers.unshift(-3);
// numbers.unshift(-4);

// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();

// numbers.shift();
// numbers.shift();
// numbers.shift();
// numbers.shift();

// numbers.splice(3, 3);
// console.log(numbers);

// numbers.splice(3, 0, 3, 4, 5 );

// console.log(numbers);

// ****************
// *** ARRAY 2D ***
// ****************
// let avgTempWeek = [];

// let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
// let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

// avgTempWeek[0] = avgTempWeek1;
// avgTempWeek[1] = avgTempWeek2;

// console.log(avgTempWeek[0][3]);

// for (let i = 0; i < avgTempWeek.length; i++) {
//   const element = avgTempWeek[i];

//   for (let j = 0; j < element.length; j++) {
//     console.log(avgTempWeek[i][j]);
//   }
// }

// ****************
// *** ARRAY 3D ***
// ****************

let month = [];
let firstWeeks = [];
let lastWeeks = [];

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

let avgTempWeek3 = [33, 45.7, 18, 7, 3.4, 21.5, 15];
let avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

// console.log(month[1][1][4]);

for (let x = 0; x < month.length; x++) {
  for (let y = 0; y < month[x].length; y++) {
    for (let z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
