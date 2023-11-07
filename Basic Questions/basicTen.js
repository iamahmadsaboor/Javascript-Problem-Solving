// Question 1- Declare a variable called myVar and assign it the value of 5. Then, using the console.log function, print the value of myVar to the console.

let myVar = 5;
console.log("The Value of myVar is ",myVar);


// 2- Declare a variable called myString and assign it the value of "Hello, world!". Then, using the alert function, display the value of myString in an alert box.

let myString = "Hello, world";
alert(myString);

// 3- Declare two variables called num1 and num2, and assign them the values of 5 and 10, respectively. Using the prompt function, ask the user to enter a number, and store the result in a variable called userNum. Then, using the console.log function, print the sum of num1, num2, and userNum to the console.

let num1 = 5;
let num2 = 10;
let userNum = parseInt(prompt("Enter Third Number"));
let sumResult = console.log(`The Sum of ${num1} , ${num2} and ${userNum} is  `, num1 + num2 + userNum);


// 4- Declare a variable called myBoolean and assign it the value of true. Using an if statement, check if myBoolean is true, and if so, use the console.log function to print "It's true!" to the console. Otherwise, print "It's false!" to the console.

let myBoolean = true;
if (myBoolean == true) {
    console.log("its True!");
}
else {
    console.log("Its False");
}

// 5- Use an if/else statement to check if a number is even or odd. If the number is even, log "even" to the console. If the number is odd, log "odd" to the console.
let chkNum = parseInt(prompt("Enter a Number to check wheteher even or odd"));
if (chkNum % 2 == 0) {
    console.log(`The Number ${chkNum} is Even`);
}
else if (chkNum % 2 != 0) {
    
    console.log(`The Number ${chkNum} is odd`)
}


// 6- Use the + operator to concatenate two strings together. Then, log the result to the console.
let str1 = "This is String1";
let str2 = " Now Starts String2";
console.log(str1 + str2);

// 7- Use the * operator to multiply two numbers together. Then, log the result to the console.
let multnumb1 = parseInt(prompt("Enter First Number For Multiplication"));
let multnumb2 = parseInt(prompt("Enter Second Number For Multiplication"));
multiResult = console.log(`The Multiplication of ${multnumb1} and ${multnumb2} is  `, multnumb1 * multnumb2);


// 8- Write a program that takes a string from the user using prompt and checks if it's equal to "password". If it is, display an alert saying "Access granted", otherwise display an alert saying "Access denied".
let password=prompt("Create Your Password");
let chkPassword = prompt("Enter Your Password");
if (chkPassword == password) {
    alert("Access Granted");
}

else {
        alert("Access denied");
}
    


 // 9- Write a program that takes three numbers as input and returns the largest of those three numbers.

let chkLrg1 = parseInt(prompt("Enter First Number"));
let chkLrg2 = parseInt(prompt("Enter Second Number"));
let chkLrg3 = parseInt(prompt("Enter Third Number"));

if (chkLrg1 > chkLrg2 && chkLrg1 > chkLrg2) {
    console.log(`${chkLrg1} is Largest Number than ${chkLrg2} and ${chkLrg3}`);
}

else if (chkLrg2 > chkLrg1 && chkLrg2 > chkLrg3) {
    console.log(`${chkLrg2} is Largest Number than ${chkLrg1} and ${chkLrg3}`);
}

else if(chkLrg3 > chkLrg1 && chkLrg3 > chkLrg2) {
    console.log(`${chkLrg3} is Largest Number than ${chkLrg1} and ${chkLrg2}`);
}
else {
    alert("Enter Correct Number")
}

// 10 -Write a program that takes two strings from the user using prompt and checks if they are equal. If they are, display an alert saying "The strings are equal", otherwise display an alert saying "The strings are not equal".
let chkEqStr1 = prompt("Enter First String");
let chkEqStr2 = prompt("Enter Second String");
if (chkEqStr1 == chkEqStr2) {
    alert("The Strings Are Equal");
}
else {
    alert("The Strings Are Not Equal");
}