// Set variable to current date and time
let now = new Date();

//My birthday
let birthday = new Date(2022, 3, 27);

//Get the current timestamp
now.getTime();

//Get the timestamp for my birthday
birthday.getTime();

//
let daysToGo = birthday.getTime() - now.getTime();

// Calculate the number of days

let delta = Math.floor(daysToGo / (1000*3600*24));

console.log(delta)
