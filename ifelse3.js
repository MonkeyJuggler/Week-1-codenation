let num = 11;

if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz");
}
if (num % 3 == 0) {
    console.log("fizz");
}
if (num % 5 == 0) {
    console.log("buzz");
}
else {
    console.log(num);
}