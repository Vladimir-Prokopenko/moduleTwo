// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const nameLogin = prompt("Введите Логин")
// if (nameLogin === null || nameLogin === "") {
//   alert("Canceled")
// } else if (nameLogin.length < 4) {
//   alert("I don't know any users having name length less than 4 symbols")
// } else if (nameLogin === "User" || nameLogin === "Admin") {
//   const password = prompt("Введите пароль")
//   if (password === null || password === "") {
//     alert("Canceled")
//   } else if (nameLogin === "User" && password === "UserPass") {
       
//         const localTime = new Date().getHours()
//         if (localTime > 5 || localTime < 20) {
//           alert("Good day, dear User!")
//         } else {
//           alert("Good evening, dear User!")
//         }
//       } else if (nameLogin === "Admin" && password === "RootPass") {
     
//           const localTime = new Date().getHours()
//           if (localTime > 5 || localTime < 20) {
//             alert("Good day, dear Admin!")
//           } else {
//             alert("Good evening, dear Admin!")
//           }
        
//       }  else { alert("Wrong password") }
//     }
//  else if (nameLogin !== "User" || nameLogin !== "Admin") {
//   alert("I don’t know you")
// }


// function checkAge(age) {
//   if (age >= 18) { 
//     return  "You are an adult";
//   }

//   return "You are a minor";
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";   
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";    
//   }
//  if (ordered > available) {
//    return "Your order is too large, not enough goods in stock!";   
//   }
//   return "The order is accepted, our manager will contact you";
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length

// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [array[0], array[array.length - 1]];
// }
// console.log (getExtremeElements([1, 2, 3, 4, 5]));
// console.log (getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log (getExtremeElements(["apple", "peach", "pear", "banana"]));

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   return words;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)

// function calculateEngravingPrice(message, pricePerWord) {
//   const amount = message.split(" ").length;
//   const sum = amount * pricePerWord;
//   return sum;
// }
// console.log (calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log (calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log (calculateEngravingPrice("Web-development is creative work", 40));
// console.log (calculateEngravingPrice("Web-development is creative work", 20));

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   return string;
// }
// console.log (makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));

// function slugify(title) {
//   const toLowCaseTitle = title.toLowerCase();
//   const splitTitle = toLowCaseTitle.split(" ");
//   const slugTitle = splitTitle.join("-");
//   return slugTitle;
// }
// console.log (slugify("Arrays for begginers"));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   const concatArray = firstArray.concat(secondArray);
//   const amountArray = concatArray.length;
//   let newArray;
//   if (amountArray > maxLength) {
//     newArray = concatArray.slice(0, maxLength);
//   } else {
//     newArray = concatArray.slice();
//   }
//   return newArray;
// }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)));

// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sum = sum + i;
//   }
//   return sum;
// }
// console.log(calculateTotal(24));

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) { 
//     total = total + order[i];
//   }
//   return total;
// }
//  console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   const newArray = string.split(" ");
//   let result = 0;
//   let maxWord;
//   for (let i = 0; i < newArray.length; i += 1) {
//     console.log(newArray[i].length);
//     if (result < newArray[i].length) {
//       result = newArray[i].length;
//       maxWord = newArray[i];
//     }
//   }    
//   return maxWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) { 
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   } 
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const number of order) {
//     total = total + number;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   for (const number of numbers) {   
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// function getEvenNumbers(start, end) {
//   const evenArray = [];
//   for (let i = start; i <= end; i += 1) { 
//     if (i % 2 === 0) { 
//       evenArray.push(i);
//     }
//   }
//   return evenArray;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));

// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;      
//     }
//   }
// }
//  console.log(findNumber(2, 6, 5));
//  console.log(findNumber(8, 17, 3));
//  console.log(findNumber(6, 9, 4));
//  console.log(findNumber(16, 35, 7));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {    
//     if (array[i] === value) {
//       return true;
//     }
//   } return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));