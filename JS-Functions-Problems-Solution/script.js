// // // // Functions

// // // // Problem 1  Write a js program to find cube of any number using function.

// // // let cubFunc = (numb) => {
// // //     numb = Number.parseInt(prompt("Enter a Number For Cube"));
// // //     cubeIs = numb ** 3;
// // //     return alert(`The Cube of ${numb} is ${cubeIs} `)
// // // }

// // // // cubFunc();

// // // // Problem 2 Write a js program to find diameter, circumference and area of circle using functions.
// // // // diameter = 2radius
// // // // circumference=2(pi)(r)
// // // // Area Circle =pi *R*R

// // // let circleFunc = (askRadius, diameter, circumference, areaCircle) => {
    
// // //     askRadius = Number.parseInt(prompt("Enter Radius Here"))
// // //     diameter = 2 * askRadius;
// // //     alert(`The Diameter is ${diameter}`);
// // //     circumference = 2 * 3.14 * askRadius;
// // //     alert(`The Circumference is ${circumference}`);
// // //     areaCircle = 3.14 * (askRadius * askRadius)
// // //     alert(`The Area of Circle is ${areaCircle}`);
// // // }
// // // // circleFunc();


// // // // Problem 3 Write a js program to find maximum and minimum between two numbers using functions.

// // // let maxAndMin = (numbOne, numbTwo) => {
// // //     numbOne = Number.parseInt(prompt("Enter Number First"));
// // //     numbTwo = Number.parseInt(prompt("Enter Number Second"));
// // //     alert("Maximum Number is-->"+Math.max(numbOne, numbTwo));
// // //     alert("Minimum Number is-->"+Math.min(numbOne, numbTwo));

// // // }

// // // // maxAndMin();



// // // // Problem 4 Write a js program to check whether a number is even or odd using functions.

// // // let evenOrOdd = (chkNumb) => {
// // //     chkNumb = Number.parseInt(prompt("Enter Number to check whether Even or odd"))
    
// // //     if (chkNumb % 2 == 0) {
// // //         alert(`${chkNumb} is Even`)
// // //     }
// // //     else {
// // //         alert(`${chkNumb} is Odd`)
// // //     }
// // // }

// // // // evenOrOdd();


// // // // // Problem 5 Write a js program to check whether a number is prime, Armstrong or perfect number using functions.




// // // function forPrime(num) {
// // //     if (num <= 1) {
        
// // //         return false;
// // //     }
// // //   for(let i = 2; i <= Math.sqrt(num); i++) {
// // //       if (num % i === 0) {
// // //         return false;
// // //       }
// // //   }
// // //   return true;
// // // }

// // // function isArmstrong(num) {
// // //   let sum = 0;
// // //   let temp = num;
// // //   while(temp > 0) {
// // //     let digit = temp % 10;
// // //     sum += Math.pow(digit, 3);
// // //     temp = Math.floor(temp / 10);
// // //   }
// // //   return sum == num;
// // // }

// // // // function to check if a number is perfect
// // // function isPerfect(num) {
// // //   let sum = 0;
// // //   for(let i = 1; i < num; i++) {
// // //     if(num % i === 0) {
// // //       sum += i;
// // //     }
// // //   }
// // //   return sum == num;
// // // }

// // // // test the functions
// // // let num = 153;
// // // console.log(`${num} is ${isPrime(num) ? 'a prime' : 'not a prime'} number`);
// // // console.log(`${num} is ${isArmstrong(num) ? 'an Armstrong' : 'not an Armstrong'} number`);
// // // console.log(`${num} is ${isPerfect(num) ? 'a perfect' : 'not a perfect'} number`);



// // // // 6. Write a js program to find all prime numbers between given interval using functions


// // // const startinng = Number.parseInt(prompt('Enter lower number: '));
// // // const ending = Number.parseInt(prompt('Enter higher number: '));

// // // console.log(`The prime numbers between ${starting} and ${ending} are:`);

// // // for (let i = starting; i <= ending; i++) {
// // //     let counter = 0;

// // //     for (let j = 2; j < i; j++) {
// // //         if (i % j == 0) {
// // //             counter = 1;
// // //             break;
// // //         }
// // //     }
// // //     if (i > 1 && counter == 0) {
// // //         console.log(i);
// // //     }
// // // }


// // // // 7. Write a js program to print all strong numbers between given interval using functions.



// // // let factOf=(num)=> {
// // //   if (num === 0 || num === 1) {
// // //     return 1;
// // //   } else {
// // //     return num * factOf(num - 1);
// // //   }
// // // }

// // // let isStrNumb=(num)=> {
// // //   let sum = 0;
// // //   let temp = num;
// // //   while (temp > 0) {
// // //     let digit = temp % 10;
// // //     sum =sum+factOf(digit);
// // //     temp = Math.floor(temp / 10);
// // //   }
// // //   return sum === num;
// // // }

// // // let strNumb=(start, end)=> {
// // //   for (let i = start; i <= end; i++) {
// // //     if (isStrNumb(i)) {
// // //       console.log(i);
// // //     }
// // //   }
// // // }

// // // strNumb(20,80);

// // // 8. Write a js program to print all Armstrong numbers between given interval using functions.

// // let getOrder=(num)=> {
// //   let order = 0;
// //   while (num !== 0) {
// //     order++;
// //     num = Math.floor(num / 10);
// //   }
// //   return order;
// // }

// // function isArmstrongNumber(num) {
// //   let sum = 0;
// //   let temp = num;
// //   const order = getOrder(num);
// //   while (temp > 0) {
// //     let digit = temp % 10;
// //     sum += Math.pow(digit, order);
// //     temp = Math.floor(temp / 10);
// //   }
// //   return sum === num;
// // }

// // let consoleArmStrong=(start, end)=> {
// //   for (let i = start; i <= end; i++) {
// //     if (isArmstrongNumber(i)) {
// //       console.log(i);
// //     }
// //   }
// // }

// // consoleArmStrong(200,400);


// // // 9. Write a js program to print all perfect numbers between given interval using functions.
// let perfectNumb=(num)=> {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       sum += i;
//     }
//   }
//   return sum === num;
// }
// let consolePerfectNumber=(start, end)=> {
//   for (let i = start; i <= end; i++) {
//     if (perfectNumb(i)) {
//       console.log(i);
//     }
//   }
// }
// consolePerfectNumber(10,100000);



// // 10. Write a js program to find power of any number using function.

// let powFunc = (takeNumb, takePow) => {
//     takeNumb = Number.parseInt(prompt("Enhter Number"));
//     takePow = Number.parseInt(prompt("Enhter Number how much power"));
//     let f= Math.pow(takeNumb, takePow);
//     alert(f);
// }

// powFunc();


// // 11. Write a js program to print all natural numbers between 1 to n using function.

// let natNumb = (range) => {
//     for (let i = 1; i <= range; i++) {
//         console.log(i)
//     }
// }
// natNumb();


// 12. Write a js program to print all even or odd numbers in given range using function.

