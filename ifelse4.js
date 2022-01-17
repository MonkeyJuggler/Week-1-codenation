//Create an array of the number to be tested
let num = [1, 0, 0, 2];
console.log('num:', num)

//Reverse the number
let palin = num.reverse();
console.log('palin:', palin);

//Join the arrays together and reverse the reversal then strictly compare them.
if (num.join() === palin.reverse().join()) {
    console.log("Congratulations, your number is a palindrome!")
}
    else {
        console.log("Better luck next time")
    }

    // console.log(num.join())
    // console.log(palin.join())