/* 
PART 1: VARIABLES AND DATA TYPES

PART A: Q + A

1. How do we assign a value to a variable?
    - With the assignment operator. 

2. How do we change the value of a variable? 
    - By reassigning a new value.

3. How do we assign an existing variable to a new variable?
    - Declaring the new vairable and assigning its value to the existing variable.

4. Remind me, what are declare, assign, and define?
    - Declaring a vairable means to name a new variable. You can assign a variable its value with the assignment operator. Defining is the process of declaring and assigning.

5. What is pseudocoding and why should you do it?
    - Pseudocoding is when you write down comments on your thought process/ approach to tackling a problem. This helps you organize your thoughts and creates a game plan for what you need to accomplish step-by-step.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    - I would say around 35% should be given to thinking of game plan. However, it is important to think of a game plan before you start coding so that you avoid going back and forth with your code. Coding should then take up the rest of your effort because you can also start working from something foundational up to something fully developed.

*/

// PART B: STRINGS

// Create a variable called firstVariable
    let firstVariable;
// Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
// Change the value of this variable to some number
    firstVariable = 8;
// Store the value of firstVariable in a new variable called secondVariable
    secondVariable = firstVariable;
// Change the value of secondVariable to any string.
    secondVariable = "Hello Hello Hello!"
// What is the value of firstVariable?
    8
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    let yourName = "Miguel";
    console.log("Hello, my name is " + yourName);

// PART C: BOOLEANS

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console
    const a = 4; const b = 53; const c = 57; const d = 16; const e = 'Kevin';

    // console.log(a < b); 
    // console.log(c > d); 
    // console.log('Name' == 'Name'); 
    
    // FOR THE NEXT TWO, USE ONLY && OR || 
    // console.log(true || false);
    // console.log(false && false && false && false && false || true);

    // console.log(false === false);
    // console.log(e == 'Kevin'); 
    // console.log(a + b >= c); 
    // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)

    // console.log(a * a <= d); 
    // note: the answer is a simple arithmetic equation, not something "weird" 
    
    // console.log(48 == '48');

// PART D: THE FARM

// Declare a variable animal. Set it to be either "cow" or something else
    let animal = "dog";
// Write code that will print out "mooooo" if the it is equal to cow
    if (animal === "cow") {
        console.log("moooo");
    };

// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
    if (animal !== "cow") {
        console.log("Look at all those chickens!");
    };

// PART E: DRIVER'S ED

// Make a variable that holds a person's age; be semantic
    let myAge = 25;
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
    // if (myAge >= 16) {
    //     console.log("Here are the keys!");
    // }
    // else if (myAge < 16) {
    //     console.log("Sorry, you're too young.");
    // };

// PART 2: LOOPS

// PART A: THE BASICS

// Write a loop that will print out all the numbers from 0 to 10, inclusive
    // for (let i = 0; i <= 10; i++) {
    //     console.log(i);
    // };
// Write a loop that will print out all the numbers from 10 up to and including 400
    // for (let i = 10; i <= 400; i++) {
    //     console.log(i);
    // };
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
    // for (let i = 12; i < 4000; i += 3) {
    //     console.log(i);
    // };

// PART B: GET EVEN

// Print out the numbers that are within the range of 1 - 100
    // for (let i = 1; i <= 100; i++) {
    //     console.log(i);
    // };
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    // for (let i = 1; i <= 100; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i + " <-- is an even number");
    //     } else {
    //         console.log(i);
    //     };
    // };

// PART C: GIVE ME FIVE

// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            console.log(i + " <-- I found a number. High five!");
        };
    };