//.map functions

// const array1 = [5 ,10, 15, 20]

// pass a function to map
// const map1 = array1.map(x => x / 5);

// console.log(map1);
// expected output: Array [2, 8, 18, 32]

// .shift functions

// const array1 = [1, 2, 3, 4]

// const firstElement = array1.shift();

// console.log(array1);
// // expected output: Array [2, 3,]


// console.log(firstElement);

//.unshift functions

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));

// console.log(array1);


// .slice functions

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));

// console.log(animals.slice(2,4));

// console.log(animals.slice(1, 5));

// console.log(animals.slice(-2));

// console.log(animals.slice(2, -1));

// .splice functions

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
//inserts at index 1
console.log(months);
//expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
