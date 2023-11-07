        // String Methods Problems

// Problem 1 Write a js program to find the length of a string.

let chkString = "Welcome to JavaScript";
console.log(`The Length of ${chkString} is `, chkString.length);

// Problem 2 Write a js program to concatenate two strings.
let concatString1 = "Ahmad";
let concatString2 = "Saboor";
let concatedString = concatString1.concat(concatString2);
console.log(concatedString);

// Problem 3 Write a js program to convert a string to uppercase.
let rndmCase = "WhAt Are yoU DoInG";
// Below rndmCase is treated as Object which method is toUpperCase and stored it into variable upperCase
let upperCase = rndmCase.toUpperCase();
console.log(upperCase);

// Problem 4 Write a js program to convert a string to lowercase.
let lowerCase = rndmCase.toLowerCase();
console.log(lowerCase);

// Problem 5 Write a js program to check if a string contains a specific substring.
let repString = "Ahmad is writting js programmer";
let chgString = repString.includes(prompt("Enter the string you want to chk:"))
if (chgString == true) {
    alert(`Yes It Has`)
}
else {
    alert(`No is not here`)
}

// Problem 6 Write a js program to find the index of a specific character in a string.
let chkIndex = "Ahmad";
// To Chk the index of String
for (let i in chkIndex) {
    // Below will print chkIndex value i then will print the index
    console.log(`The Value ${chkIndex[i]} index is `,i)
}

// Problem 7  Write a js program to replace a specific substring in a string.
let givString = prompt("Enter String Here");
let strToRep = prompt(`Enter String You want to replace form ${givString}`);
let strToWith=prompt(`Enter String you want to replace with`)
let goingTOrep = givString.replace(strToRep,strToWith);
alert(goingTOrep);

// Problem 8 Write a js program to remove leading and trailing whitespace from a string.
let beforeTrimString = "       Ahmad       "
let afterTrimString = beforeTrimString.trim();

console.log(afterTrimString);




// Problem 9 Write a js program to split a string into an array of substrings.
let beforeStr = "Ahmad";
// if we use double quotes between split method it will make each element in a string and put in an array
let aftStr = beforeStr.split("");
console.log(aftStr);



// Problem 10 Write a js program to reverse a string.

let reverTheString = "What are you doing man";
let divideBy = reverTheString.split("");
// Reverse is the method of array so thats why use split to convert that to convert into array
let reverseArr = divideBy.reverse();
// "" will remove the commas which was added by split
console.log(reverseArr.join(""));




// Numbers Programs Starts Here



// Problem 11 Write a js program to find the sum of two numbers
// below num1 and num2 are parameter when we call function then we give argument
let twoSum = (num1, num2) => {
    return num1+num2
    
}
console.log(twoSum(2, 4));

// Problem 12 Write a js program to find the difference between two numbers.

let twoDiff = (num1, num2) => {
    return num1-num2
    
}
console.log(twoDiff(2, 4));

// Problem 13 Write a js program to find the product of two numbers.

let twoMult = (num1, num2) => {
    return num1*num2
    
}
console.log(twoMult(2, 4));

// Problem 14 Write a js program to find the quotient and remainder of two numbers.

let modAndRema = (num1, num2) => {
    let mod = num1 % num2;
    let rema = num1 / num2;
    console.log(`The mod/remainder is ${mod} and Quotient is ${rema}`)
}
modAndRema(4, 2);

// Problem 15 Write a js program to round a number to the nearest integer.
let num1 = Number.parseInt(prompt("Enter number for nearest round"));
console.log(`The Number before round was ${num1}and now is`,Math.round(num1));

// Problem 16 Write a js program to generate a random number between 0 and 1.

let genNum = console.log(Math.random() * 1);

// Problem 17 Write a js program to find the maximum and minimum of two numbers.
let chkkNum1 = Number.parseInt(prompt("Enter Number First"));
let chkkNum2 = Number.parseInt(prompt("Enter Number Second"));
console.log(`The Maximum Value Between ${chkkNum1} and ${chkkNum2}`,Math.max(chkkNum1, chkkNum2));
console.log(`The Minimum Value Between ${chkkNum1} and ${chkkNum2}`,Math.min(chkkNum1, chkkNum2));


// Problem 18 Write a js program to calculate the square root of a number.
let sqrtNum = Number.parseInt(prompt("Enter Number For SquareRoot"));
console.log(`The SquareRoot of ${sqrtNum} is`,Math.sqrt(sqrtNum));

// Problem 19 Write a js program to calculate the absolute value of a number.
let absVal = Number.parseInt(prompt("Enter Number For Absolute"));
console.log(`The Absolute Value of ${absVal} is `,Math.abs(absVal));


// Problem 20 Write a js program to calculate the power of a number.
let powerOn = Number.parseInt(prompt("Enter Number of which you want power"));
let powerOf = Number.parseInt(prompt("Enter the power"));
console.log(`The Power of ${powerOn} and of ${powerOf} `,Math.pow(powerOn,powerOf))


// Date Metods

// Problem 21 Write a js program to get the current date and time.
// to get the date we have to create Object of Date method
let crDate = new Date();
alert(crDate);

// Problem 22 Write a js program to get the current year.

console.log(crDate.getUTCFullYear());

// Problem 23 Write a js program to get the current month.
//  Current Month is 2 as january is 0
console.log(crDate.getMonth());

// Problem 24 Write a js program to get the current day of the week.
// days start from 1 and ends at 7

console.log(crDate.getDay());

// Problem 25 Write a js program to add a specific number of days to a date.
let yourCurrentDate = Number.parseInt(prompt("Enter Current Day:"));
let howMuchAdd = Number.parseInt(prompt(`Your Current Days is ${yourCurrentDate} How much do you want to add`));
let yourDateAfterAdd = yourCurrentDate + howMuchAdd;
//created addDay an object with new and date method .
const addDay = new Date(2023, 2, yourDateAfterAdd, 21, 34, 12);
alert(addDay);

// Problem 26 Write a js program to subtract a specific number of days from a date.

let yourCurrDate = Number.parseInt(prompt("Enter Current Day:"));
let howMuchSub = Number.parseInt(prompt(`Your Current Days is ${yourCurrDate} How much do you want to Subtraction`));
let yourDateAfterSub = yourCurrDate - howMuchSub;
const subDay = new Date(2023, 2, yourDateAfterSub, 21, 34, 12);
alert(subDay);

// Problem 27 Write a js program to get the time in milliseconds.

console.log(crDate.getMilliseconds());

// Problem 28 Write a js program to get the hours, minutes, and seconds from a date object

console.log(crDate.toTimeString());


// Problem 29 Write a js program to create a new date object with a specific year, month, and day.
let spcYear=prompt("Enter Specific Year Format eg 2022")
let SpcMonth=prompt("Enter Specific Month Format 0-11")
let SpcDate=prompt("Enter Specific date Format 0-31")
let specificDate = new Date(spcYear, SpcMonth, SpcDate,12,3,4)
alert(specificDate);

// Problem 30 Write a js program to compare two dates.
if (specificDate < crDate) {
    alert("Your Enter Date is smaller");
}
else {
    alert("Your Enter Date Is Greater");
}


// Math Methods
// Problem 31 Write a js program to find the absolute value of a number.
let negNum = Number.parseInt(prompt("Enter Negative Number"));
let posNum=Math.abs(negNum)
console.log(`The Negative Number is ${negNum} and the absolute value is ${posNum}`);

// Problem 32 Write a js program to find the highest value in a list of numbers.
let maxNuumb = Math.max(32, 213, 43324, 123, 4321, 2321, 324, 213);
console.log("The Maximum Number is",maxNuumb);

//  Problem 33 Write a js program to find the lowest value in a list of numbers.
let minNuumb= Math.min(32, 213, 43324, 123, 4321, 2321, 324, 213)
console.log("The Lowest Number is",minNuumb);

// // Problem 34 Write a js program to round a number up to the nearest integer.
let takNumb1 = Number.parseFloat(prompt("Enter the Number for round up"));
let roundNumb1 = Math.ceil(takNumb1);
console.log(`The Number Before Round up Was ${takNumb1} and now is ${roundNumb1}`);

// Problem 35 Write a js program to round a number down to the nearest integer.
let takNumb2 = Number.parseFloat(prompt("Enter the Number for round down"));
let roundNumb2 = Math.floor(takNumb2);
console.log(`The Number Before Round down Was ${takNumb2} and now is ${roundNumb2}`);

// Problem 36 Write a js program to calculate the exponential value of a number.
let whosePow = Number.parseInt(prompt("Enter the Number whose power"));
let whatPow = Number.parseInt(prompt("Enter the Number whose power"));
let takePow = Math.pow(whosePow, whatPow);
console.log(`The Number is ${whosePow} and power is ${whatPow}`,takePow);

// Problem 37 Write a js program to calculate the natural logarithm of a number.
let takeNatLg = Number.parseInt(prompt("Enter the Number for log"));
let logIs=Math.log(takeNatLg)
console.log(`The Number for Log was ${takeNatLg} and the log is ${logIs}`);


// Problem 38 Write a js program to calculate the sine of an angle in radians.
let takeSin= Number.parseInt(prompt("Enter the Number for Sin"));
let sinIs = Math.sin(takeSin);
console.log(`The sine was of ${takeSin} and is ${sinIs}`);

// Problem 39 Write a js program to calculate the cosine of an angle in radians.

let takeCos= Number.parseInt(prompt("Enter the Number for Cos"));
let cosIs = Math.cos(takeCos);
console.log(`The sine was of ${takeCos} and is ${cosIs}`);

// Problem 40 Write a js program to calculate the square root of a number.

let askForSqrt = Number.parseInt(prompt("Enter Number For SquareRoot"));
let sqrtIs = Math.sqrt(askForSqrt);
console.log(`The SquareRoot of ${askForSqrt} is ${sqrtIs}`);




// For loop



// Problem 41 Write a program that uses a for loop to print the numbers from 1 to 10.
for (let i = 1; i <= 10; i++){
    console.log("The Value of i is", i);
}

//  Problem 42 Write a program that uses a for loop to print the elements of an array.

const arrOfEven = [2, 4, 6, 8, 10];
for (let i in arrOfEven) {
    console.log(`The Value is ${arrOfEven[i]} and the index is ${i}`);
}

//  Problem 43 Write a program that uses a for loop to calculate the factorial of a number.

let tempNumb;
let factNumb = Number.parseInt(prompt("Enter a  Number"));
tempNumb = factNumb;
for (let i = factNumb; i >= 1; i--){
    factNumb = factNumb * i;

    if (i == 1) {
        console.log(`The Factorial of ${tempNumb} is`,factNumb);
    }
    
}

// Problem 44 Write a program that uses a for loop to generate a multiplication table for a given number.
let tableOf = Number.parseInt(prompt("Enter a Number For Table"))
for (let i = 1; i <= 10; i++){
    let ansTab = tableOf * i;
    console.log(`${tableOf} * ${i}= ${ansTab}`);
}


// Problem 45 Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.
let SumEven = 0;
for (let i = 0; i <= 100; i = i + 2){
    SumEven = SumEven + i;
}
console.log(`The Sum of First 100 Even Number is`, SumEven);



// WHILE LOOP

// Problem 46 Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.
let askOdd = Number.parseInt(prompt("Enter a Number Till you want to print odd number"));
let i = 1;
while (i <= askOdd) {
      console.log(i)
      i=i+2
}

// Problem 47 Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.

let askForTable = Number.parseInt(prompt("Enter a Number for table"));
let w = 1;
while (w <= 10) {
    let tableStore = askForTable * w;
    console.log(`${askForTable} * ${w}= ${tableStore}`);
    w++;
}
 
// Problem 48 Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.

let guessForRandomNumber;

let generateRandomNumber = Math.floor(Math.random() * 101);

while (generateRandomNumber != guessForRandomNumber) {
    guessForRandomNumber = Number.parseInt(prompt("Enter a Number Between 1-100 and Guess"));

    if (guessForRandomNumber == generateRandomNumber) {
        alert("Hurrah You are right")
    }

    else if (guessForRandomNumber < generateRandomNumber) {
        alert("The Number is Greater Than What are you guessing")
    }
    
    else {
        alert("The Number is Lesser Than What are you guessing")
        
    }

}


// Problem 49 Write a program that asks the user to enter a word and then prints out the word in reverse order.

let askWord = prompt("Enter Word For Reverse")
let wordSplit = askWord.split("");
let splitReverse = wordSplit.reverse();
let reverseJoin = splitReverse.join("");
console.log(reverseJoin);


// Problem 50 Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.

let askForAvg = Number.parseInt(prompt("Enter a Number"));
let theSum = 0;
let p = askForAvg;
while (p != 0) {
    theSum = theSum + p;
    p--;
}
let theAverage = theSum / askForAvg;

console.log(`The Sum from ${askForAvg} till 1 is `,theSum);
console.log(`The Average of ${askForAvg} is `,theAverage);



// Do While Loop

// Pronlem 51 Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.
let createPass = prompt("Create Password");
let askForPass;

do {
     askForPass = prompt("Enter Password");
    if (askForPass != createPass) {
        alert("Wrong Password")
     askForPass = prompt("Re-Enter Password");
    }
    alert("Login granted")
} while (askForPass!=createPass)

//Problem 52 Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.

let dasNumb = Number.parseInt(prompt("Enter a Number to make a reverse order"));
do {
    console.log(dasNumb);
    dasNumb--;
    
} while (dasNumb != 0)

// Problem 53 Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.

let randyNumby = Math.floor(Math.random() * 101);
let guessyNumb;
do {

    guessyNumb = Number.parseInt(prompt("Guess The Number Between 1-100"));
    if (randyNumby < guessyNumb) {
    alert("Less")
    }
    else if(randyNumby>guessyNumb)
    {
        alert("greater")
    }
    else {
        alert(`hurrah you have gussed right  ${guessyNumb} `)
        let a = confirm("Do you want to play again")
    }
    
    
} while (randyNumby != guessyNumb)


// Problem 54 Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.

let largestNumber = 0;
let number;

do {
    let userInput = prompt("Enter a number:");
    tempNumber = userInput;
if (number >= 0) {
    largestNumber = tempNumber;
  }
} while (tempNumber >= 0);
alert("The largest number is: " + largestNumber);




// Problem 55 Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop".

let takeAstring;
do {
    
    takeAstring = prompt("Enter a String");
    if (takeAstring != "stop") {
    let takeAstringSplit = takeAstring.split("");
    let splitReverse = takeAstringSplit.reverse();
    let reverseJoin = splitReverse.join("");
    alert(reverseJoin)
}

} while (takeAstring != "stop")








// Switch Statement
// Problem 56 Write a js program to print day of week name using switch case.
let askNumberForDate=Number.parseInt(prompt("Enter From 1-7 to Print the Day "))
switch (askNumberForDate) {
    case 1:
        alert("Monday")
        break;
    case 2:
        alert("Tuesday")
        break;
    case 3:
        alert("Wednesday")
        break;
    case 4:
        alert("Thursday")
        break;
    case 5:
        alert("Friday")
        break;
    case 6:
        alert("Saturday")
        break;
    case 7:
        alert("Sunday")
        break;

    default:
        alert("Invalid")
        break;
}

// Problem 57 Write a js program print total number of days in a month using switch case.
let askTheMonth = prompt("Enter  Month ");
askTheMonth=askTheMonth.toLowerCase();
switch (askTheMonth) {
    case "january":
        alert("31 DAYS")
        break;
    
    case "feburary":
        alert("28 Days In Leap Year 29 Days")
        break;
    case "march":
        alert("31 DAYS")
        break;
    case "april":
        alert("30 DAYS")
        break;
    case "may":
        alert("31 DAYS")
        break;
    case "june":
        alert("30 DAYS")
        break;
    case "july":
        alert("31 DAYS")
        break;
    case "august":
        alert("31 DAYS")
        break;
    case "september":
        alert("30 DAYS")
        break;
    case "october":
        alert("31 DAYS")
        break;
    case "november":
        alert("30 DAYS")
        break;
    case "december":
        alert("31 DAYS")
        break;
    default:
        alert('Invalid');
        break;
}


// Problem 58 Write a js program to check whether an alphabet is vowel or consonant using switch case.

let askTheVowel = prompt("Enter an Alphabet");
askTheVowel = askTheVowel.toLowerCase();
switch (askTheVowel) {
    case "a":
        alert(`Hurrah its a Vowel`);
        
        break;
        case "e":
        alert(`Hurrah its a Vowel`);
            
            break;
            case "i":
        alert(`Hurrah its a Vowel`);
        
        break;
        case "o":
        alert(`Hurrah its a Vowel`);
        
        break;
        case "u":
            alert(`Hurrah its a Vowel`);
        
            break;


    default:
        alert("it is a consonent")
        break;
}


// Problem 59 Write a js program to find maximum between two numbers using switch case.
let maxNum1 = Number.parseInt(prompt("Enter a Number"));
let maxNum2 = Number.parseInt(prompt("Enter a Number"));

switch (true) {
    case (maxNum1>maxNum2):
        alert(`${maxNum1} is greater`)
        break;
       case (maxNum2>maxNum1):
        alert(`${maxNum2} is greater`)
        break;
       case (maxNum2==maxNum1):
        alert(`Equal`)
        break;

    default:
        alert("Invalid")
        break;
}


// Problem 60 Write a js program to check whether a number is even or odd using switch case.

let forEvenOrOdd = Number.parseInt(prompt("Enter Check Number For Even Or Odd"));
switch (true) {
    case (forEvenOrOdd % 2 == 0):
        alert(`${forEvenOrOdd} is even`)
        break;
    case (forEvenOrOdd % 2 != 0):
        alert(`${forEvenOrOdd} is odd`)
        break;

    default:
        alert(`${forEvenOrOdd} seems to be null or undefined`)
        break;
}

// Problem 61 Write a js program to check whether a number is positive, negative or zero using switch case.
let chkPosOrNeg = Number.parseInt(prompt("Enter Check Number For + Or - Null"));
switch (true) {
    case (chkPosOrNeg < 0):
        alert(`${chkPosOrNeg} is negative`)
        break;
    case (chkPosOrNeg > 0):
        alert(`${chkPosOrNeg} is positive`)
        break;
    case (chkPosOrNeg == 0):
        alert(`${chkPosOrNeg} is Zero`)
        break;
    default:
        alert("Invalid")
        break;
}