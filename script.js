// Part 1: Time-based Greeting
let userName = prompt("What is your name?");
let currentHour = new Date().getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning";
} else if (currentHour < 18) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
console.log(`${greeting}, ${userName}!`);

// Part 2: Age and Days Lived Verification
let birthYear = Number(prompt("What year were you born?")); // Converted to number for safety
let currentYear = 2026; // Per your project instructions
let age = currentYear - birthYear;
let daysLived = age * 365;

console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
