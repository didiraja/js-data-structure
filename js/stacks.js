// function Stack() {
//   let items = [];

//   this.push = (element) => {
//     items.push(element);
//   };

//   this.pop = () => {
//     // remove item from top stack
//     return items.pop();
//   };

//   this.peek = () => {
//     // return item from top stack
//     return items[items.length - 1];
//   };

//   this.isEmpty = () => {
//     return items.length === 0;
//   };

//   this.clear = () => {
//     items = [];
//   };

//   this.size = () => {
//     // return stack length
//     return items.length;
//   };

//   this.print = () => {
//     // return stack itself
//     console.log(items.toString());
//   };
// }

// let stack = new Stack();

// console.log(stack.isEmpty());

// stack.push(5);
// stack.print();

// stack.push(8);
// stack.print();

// stack.push(11);
// stack.print();

// stack.push(15);
// stack.print();

// stack.pop();
// stack.print();

// stack.pop();
// stack.print();

// stack.pop();
// stack.print();

// stack.pop();

// console.log(stack.isEmpty());

// function dec2Bin(decNumber) {
//   let restStack = [];
//   let rest;
//   let binaryString = "";

//   while (decNumber > 0) {
//     // 23 - 11 - 5 - 2 - 1
//     rest = Math.floor(decNumber % 2); // 1 - 1 - 1 - 0 - 1
//     restStack.push(rest); // [1, 1, 1, 0, 1]
//     decNumber = Math.floor(decNumber / 2); // 11 (11.5) - 5 (5.5) - 2 (2.5) - 1 - 0
//   }

//   console.log(restStack.toString());

//   while (restStack.length > 0) {
//     // length: 5
//     binaryString += restStack.pop().toString();
//     // or simply: restStack.reverse()
//   }

//   // console.log(restStack);

//   return binaryString;
// }

// console.log(dec2Bin(23));

function baseConverter(decNumber, base) {
  let restStack = [];
  let rest;
  let baseString = "";
  let digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    // 123 - 7
    rest = Math.floor(decNumber % base); // 11 - 7
    restStack.push(rest); // [11, 7]
    decNumber = Math.floor(decNumber / base); // 7 - 0
  }

  while (restStack.length > 0) {
    // 2 - 1

    // pop returns value REMOVED FROM RESTSTACK,
    // in this example is the same as:
    // digits[7] and digits[11]
    baseString += digits[restStack.pop()]; // 7 - B
  }

  return baseString;
}

console.log(baseConverter(123, 16));
