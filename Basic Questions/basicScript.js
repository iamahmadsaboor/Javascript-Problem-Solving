// 2- What will be the result for these expressions?
5 > 4 //true because 5 is greater than 4
"apple" > "pineapple" //false because in comparison a is smaller than p in dictionary and A is smaller than a
 "2" > "21"   //true here like absove same 2 is greater than second value first character 1 if both would be same then we will look to second character
undefined == null //true they are equal in value
undefined === null //false the are not equal in type
null == "\n0\n"  //false because null is nothing  \n is escape sequence
null === +"\n0\n" //false becaue it is not equal in value and type


// 3-What are the final values of all variables a, b, c and d after the code below?


// let a = 1, b = 1;
// let c = ++a; // value of c will be 2 and a also 2 as increment is done first
// let d = b++; // value of d will be 1 as increment done after assigning and b will be 2



// 4-What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2); //in bracket a value becomes 4 so a=4 and x=5(1+4)



// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// solution
let firstNumb = Number.parseInt(prompt("First number?", 1));
let secondNumb= Number.parseInt(prompt("Second Number?", 2));

alert( firstNumb+ secondNumb); //now it would be 3 as prompt take take string value and it was concatinating it

// 6- Rewrite this if using the conditional operator '?':
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// Solution

let numbOne = Number.parseInt(prompt("Enter First Number"));
let numbTwo = Number.parseInt(prompt("Enter Second Number"));
let result = numbOne + numbTwo;
(result < 4) ? alert("Below") : alert("Over");


// 7- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// Solution

let login = prompt("Enter Designation:","");
(login == "Employee") ? alert('Hello') :
 (login == "Director") ? alert('Greeting') :
 (login=="")? alert('No Login'): alert("")

//8 What would be the output of the following string
alert(null || 2 || undefined); //2 as null and undefined has no value and it has 2 that why output would be 2

// 9-What will the code below output?

// Solution

alert(alert(1) || 2 || alert(3)); //first alert 1 will execute than alert 2 when it see first is true or has some value does not check second


// and has highest order  of precedence than or operator


// 10-What is this code going to show?


// Solution

alert( 0 && null && 2 ); //here 0 would be printed it print value which is first false value false



// 11-What will this code show?


// Solution

alert(alert(1) && alert(5)); // it will enter in the bracket and will alert 1 and then check between both alerts that would be undefined and that would be alert

// 12-What will the result be?
// alert( null || 2 && 3 || 4 );


// Solution

alert( null || 2 && 3 || 4 ); // output would be 3 reason:--null or 2 would be 2 beacue true returns first truth value and 3  or 4 would be 3 and then 2 and 3 would be check when and sees 2 is true then it will automatically prints the second value null is treats as false


// 13-Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.


// Solution 1
let takeAge = +prompt("Enter Age:")
if (takeAge < 14 || takeAge > 90) {
    alert("The age is not between 14 and 90");
    
}
else if(takeAge>=14 && takeAge<=90) {
    alert("The age is between 14 and 90")
    
}

// Solution 2
// let takeAge = +prompt("Enter Age:")

// if (!(takeAge >= 14 && takeAge <= 90)) //! will reverse the result
// {
//         alert("The age is not between 14 and 90");
        
//     }
//     else {
//         alert("The age is between 14 and 90")
        
//     }




// 14-Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );  //condition true this would execute
if (-1 && 0) alert( 'second' ); //condition false will not execute
if (null || -1 && 1) alert( 'third' ); //condition true this will execcute


// 15-Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// solution

let askBrowser = prompt("Enter Your Browser");
if (askBrowser == "Edge") {
    alert("You have got the edge")
}
else if (askBrowser == "Chrome" || askBrowser == "Firefox" || askBrowser == "Safari" || askBrowser == "Opera") {
    alert(`Okay We Support ${askBrowser} too`)
}
else {
    alert('We hope that this page looks ok!' );
}


// 16-Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// Solution


let chkNumb = +prompt('chkNumb?', ''); // + is doing the work or Number.parseInt
switch (chkNumb) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
        alert('2,3');
        break;
    case 3:
        alert('2,3');
        break;
    
    default:
        alert("wrong Value")
}



//And has highest precednce then or precedence
//Null is treated as false value in boolean expression
