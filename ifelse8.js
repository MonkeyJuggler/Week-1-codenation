let num1 = 6
let num2 = 3

let multiplesTwo = [];
for(let i = 0; i < 2000; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }

console.log(`Numbers divisible by 2 between 0 and 2000 are: ${multiplesTwo}.`)

if(num1 + num2 == multiplesTwo) {
    console.log(num1 + num2);
}
    else {
        console.log(num1 * num2)
    }
}

