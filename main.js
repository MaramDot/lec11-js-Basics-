
// # Task:

// ## Question 1: Predict the Output

let x;
console.log(x); //Output: undefined

console.log("5" + 3); //Output: 53


console.log("5" - 3); //Output: 2


console.log(5 == "5"); //Output: true


console.log(5 === "5"); //Output: false


let age = 16;

if (age >= 18) {
    console.log("Adult");
    } else {
    console.log("Minor");
}                     //Output: Minor

// -----------------------------------------------------------------------

// ## Question 2: Fix the Code
// 1.
const agee = 20; //Cannot reassign a const variable
agee = 25;       //Correction: let agee=20;


// 2.
// let name = "Ali";
// if name == "Ali" {     //Correction: if(name == "Ali")
//   console.log("Hello");
// }


// 3.
let num = 10;
if (num = 10) {  //Correction: if(num == 10)
    console.log("Ten");
}

// ------------------------------------------------------------------------------
// ## Question 3: Write the Code
// 1. Write a program that stores a student’s name and age, then prints them to the console.

let stName = "Maram";
let stAge = 23;
console.log(stName);
console.log(stAge);


// 2. Write a program that checks if a number is positive, negative, or zero using if / else if.

let number = 5;
if(number > 0)
{
    console.log("Number is Positive");
}
else if(number < 0)
{
    console.log("Number is Negative");
}
else
    console.log("Number is Zero");


// 3. Write a program that checks if a student passes or fails (pass mark is 50).

let mark = 95;
if(mark >= 50)
{
    console.log("you Pass");
}
else
    console.log("You Fail");


// 4. Write a program that uses a for loop to print numbers from 1 to 10.

for(let i =1; i<=10; i++)
{
    console.log(i);
}


// 5. Write a program that uses a while loop to print numbers from 10 to 1.

let j =10;
while(j>=1)
{
    console.log(j);
    j--;
}