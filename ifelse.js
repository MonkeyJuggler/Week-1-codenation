
let num = 15

switch (num) {
    case (num % 3 == 0):
    case (num % 5 == 0):
        console.log("This number is divisible by 3 or 5")
        break;
    
    default:
        console.log("This number is not divisible by 3 or 5")
} 