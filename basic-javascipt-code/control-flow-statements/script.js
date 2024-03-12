///(1)if,elseif,else//

//1(a)Determine if a given number is positive, negative, or zero//
let num = prompt("Enter a number: ");
num = Number.parseInt(num);
if (num > 0) {
  console.log("The Number is positive");
} else if (num < 0) {
  console.log("The Number is negative");
} else {
  console.log("The Number is zero");
}

//1(b)Classify a person's age such as "Child," "Teenager," "Adult," or "Senior.//

Let age = prompt("Enter your age: ");
age = Number.parseInt(age);
if (age < 13) {
  console.log("You are a child");
} else if (age >= 13 && age <18) {
  console.log("You are a teenager");
} else if (age >= 18 && age < 60) {
  console.log("You are an adult");
} else if (age >= 60) {
  console.log("You are a senior");
} 
//1(c) Imagine you are tasked with developing a JavaScript program //that assists a movie ticket booking system. Your program needs to //determine customers' ticket prices based on age.//

let age = Number.parseInt(prompt("Enter your customers  age: "));

if(age>=0 && age<=5){
  console.log('the ticket is free');
}else if(age>=6 && age<=12){
  console.log('the ticket price is $8')
}else if(age>=13 && age<=18){
  console.log('the ticket price $12')
}else if (age>=19 && age<=60){
  console.log('the ticket price $15')
}else if (age>=61){
    console.log(' the ticket is free as a senior citizen discount.')
}else{
  console.log('invalid age')
}



// (2) switch case//


//2(a)Assigning the day of the week based on a given number (1-7).//

let day = prompt("Enter a number: ");//prompts function return value as string//
day = Number.parseInt(day);

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}


 //2(b)Identifying the type of fruit based on a provided fruit name.//
let fruit = prompt("Enter a fruit name: ");
switch (fruit) {
  case "Apple" || 'Strawberry' || 'Pineapple':
    console.log(" False fruit");
    break;
  case 'Plums' || 'Pears' || 'Watermelon' || 'Orange':
    console.log(" True Fruit");
    break;
  case 'Banana' || 'Pineapple' || 'Cucumber' || 'Tomatoes':
    console.log(" Parthenocarpic fruits");
    break;
  default:
    console.log("Invalid input");
}
//2(c)Imagine you're tasked with building a smart home automation //system that controls different appliances(TV, AC, fan, etc..) //based on voice commands. Your JavaScript program needs to interpret voice commands and execute actions accordingly using a switch case. Develop a JavaScript program that takes voice commands and performs specific actions based on the command given.
 let command = prompt('voice command like lights on,tv on ,tv off,')
     switch(command){
       case 'lights on' : 
         console.log('Turning on lights');
         break;
       case 'lights off':
         console.log('Turning off Lights')
         break;
       case 'tv on':
         console.log("Turning on the Tv");
         break;
       case 'tv off':
         console.log('Turning off the Tv');
         break;
       case 'fan on':
         console.log('Turning on the fan');
         break;
       default:
         console.log('invalid input')


     }


// (3) Nested if-else Statements//
//In practice, you should avoid using nested//

//(a)Determine eligibility for voting based on age and citizenship.//
let citizenShip = prompt(
  "Enter your citizenship: ");
let age = prompt("Enter your age: ");

if (citizenShip == "Indian") {
  if(age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}

//(b)Categorize a person's BMI (Body Mass Index) as "Underweight," "Normal weight," "Overweight," or "Obese."//

let weight = prompt("Enter your weight in kg: ");
let age = 18;
let height = '165cm';
if (age == 18) {
  if (height == '165cm') {
    if (weight < 50) {
      console.log("You are underweight");
    } else if (weight >= 50 && weight < 70) {
      console.log("You are normal weight");
    } else if (weight >= 70 && weight < 100) {
      console.log("You are overweight");
    } else if (weight >= 100) {
      console.log("You are obese");
    }
  }
}

// (4) Ternarary Operator//

//(a)Write a program to determine whether a given number is even or odd.//
let num = prompt("Enter a number: ");
let message;
num = Number.parseInt(num);//converting string to number b/c prompt return value as string//
num % 2 == 0 ? (message = "Number is Even") : message = ("Number is Odd");//short method of if else//

console.log(message);

//(b)Determine whether a person is eligible for a discount based on their membership status.//
let membershipStatus = prompt("Enter your membership status: y/n");
membershipStatus == "y" ? console.log("You are eligible for a discount") : console.log("You are not eligible for a discount");


// (5) while and do while Loops//

//5(a)Display numbers from 1 to 10 in reverse order.//
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

//(b)Calculate the factorial of a given number.//
let num = prompt("Enter a number: ");
 num = Number.parseInt(num);
let fact = 1;
let i = 1;
while (i <= num) {
  fact *= i;
  i++;
}
console.log(fact);
//do-while loop//
let num = prompt("Enter a number: ");
let i = 1;
let fact = 1;
do{
  fact *= i;
  i++;
}while(i <= num);
console.log(fact);

//5(b)do while loop to calculate the sum of numbers from 1 to a //given positive integer limit. console the total sum of numbers. //For example if limit value is 10 then the output should be //Expected 55. like (1 + 2 + 3 + ... + 10 = 55)

let givenNum = Number.parseInt(prompt('enter positive number'));
let i = 1;
let totalSum=0;
do{
  totalSum += i;
  i++;
}while(i<=givenNum);
console.log(totalSum);

// (6)for Loop, break, and continue Statements//

//6(a)Find prime numbers within a specified range.

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

//6(b)Display the multiplication table of a given number, skipping multiplication by 3//
const number = parseInt(prompt("Enter a number: "));
let table;
for (let i = 1; i <= 10; i++) {
  table = i * number;
  if (i == 3) {
    continue;
  }
   console.log(table);
}












