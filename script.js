//Problem 1 Declare two variables: admin and name. Assign the value "Umair Azmat" to name. Copy the value from name to admin. Show the value of admin using alert (must output Name).

let admin, name = "Umair Azmat";
admin = name;
alert(admin);

// 2.	Create a variable with the name of our planet. How would you name such a variable?

let ourPlanet;

// 3.	Create a variable to store the name of a current visitor to a website. How would you name that variable?

let currentActiveUser;

// 4.	Create a string variable called favDrink and assign a value to it.
var favDrink = "Tea";

// 5.	Create a number variable called favNum and assign a value to it
var favNum = 20;

// 6.	Create a function block called myFavs that console logs your answers, don't forget to invoke the myFavs function.

let myFavs = () => {
    console.log("Your favourite drink is ",favDrink)
    console.log("Your favourite Number is ",favNum)
}
myFavs();

// 7.	Create an object called person, with name set to Umair and age set to 20.

let person = {
    name:"Umair",
    age:20

}

// 8.	write a JS program, define two variables and sum those two variable and save result in third variable and print in console?

let firstNum = 123;
let secondNum = 312;
let result = firstNum + secondNum;
console.log(`Your Result For ${firstNum} + ${secondNum} is =`, result);

//9- write a JS program, that can divide two numbers and show the result in console? console.log("result of firstProgram", a);

let devNum_1 = 600;
let devNum_2 = 30;
let devNumResult = devNum_1 / devNum_2;
console.log("result of first program is",devNumResult)


// 10.	write a JS program, that can add two number, divide result by 5 and show in console?console.log("result of firstProgram", a);

let addNum1 = 32, addNum2 = 28, divisor = 5, resultof;
resultof = (addNum1 + addNum2) / divisor;
console.log("result of first program", resultof);

// 11.	write a JS program, that can convert temp from F into C and show into console, using C = (F − 32) * 5/9. use if F = 50, what will be the value of C?

let tempConverter = (f,c) => {
    
    // f = prompt("enter the value");
    c = ((f - 32) * 5 / 9);
    console.log(`${f} Farenheit into Celcius Temperature is `, c)

}
tempConverter(50);
// Will not work in vscode but would work in chrome console v8 engine
// tempConverter(f);

// 12.	Write a JavaScript program to find the sum of two numbers obtained from prompt and display the result using alert.

let oneNumb, twoNumb, otResult;
oneNumb = prompt("Enter the first Number for addition");
twoNumb = prompt("Enter the second Number for addition");
otResult = Number(oneNumb) + Number(twoNumb);
// otResult = +oneNumb + +twoNumb;
alert(`The Result of Addition of ${oneNumb} and ${twoNumb} is =` + otResult);

console.log(`The Result of Addition of ${oneNumb} and ${twoNumb} is =` + otResult);




// 13.	Write a JavaScript program to find the difference of two numbers obtained from prompt and display the result using console.log.
let subValue1 = prompt("Enter First Value for Subtraction");
let subValue2 = prompt("Enter Second Value for Subtraction");
let otsResult = subValue1 - subValue2;
console.log(`The Subtraction of ${subValue1} and ${subValue2} =`,otsResult)


// 14.	Write a JavaScript program to find the product of two numbers obtained from prompt and display the result using alert.
let multiValue1 = prompt("Enter First Number For Multiplication");
let multiValue2 = prompt("Enter Second Number For Multiplication");

let otmResult = multiValue1 * multiValue1;
alert(`The Multiplication of ${multiValue1} and ${multiValue2} is =` + BigInt(otmResult))
console.log(`The Multiplication of ${multiValue1} and ${multiValue2} is =` + BigInt(otmResult));


// 15.	Write a JavaScript program to find the quotient(answer) of two numbers obtained from prompt and display the result using console.log.

let qtntNumb1 = prompt("Enter the first value for division");
let qtntNumb2 = prompt("Enter the secodn value for division");
let quotient = qtntNumb1 / qtntNumb2;
console.log(`The Quotient of ${qtntNumb1} and ${qtntNumb2} is =` + quotient);

//16- Write a JavaScript program to find the remainder of two numbers obtained from prompt using the modulus operator and display the result using alert.

let modNumb1 = prompt("Enter the first value for division");
let modNumb2 = prompt("Enter the first value for division");
let remainderof = modNumb2 / modNumb1;
alert(`The Remainder of ${modNumb2} and ${modNumb1} is =`+remainderof)


