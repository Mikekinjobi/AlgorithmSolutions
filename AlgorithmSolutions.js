// Question 1
// Find the elements in array Y that are equal to a given variable X
// i.e elementsEqualToX(Y,X);
// example
// elementsEqualToX(['a', 'a', 'b', 'f', 'x', 'y'], 'a')
// returns [a,a];

//ANSWER

function elementsEqualToX(X, Y) {
  // let equal_elements =[];
  // X.forEach(x=>{if(x===Y) equal_elements.push(x)});

  let equal_elements = X.filter((x) => x === Y);

  console.log(equal_elements);
}

elementsEqualToX(["a", "a", "b", "f", "x", "y"], "a");

// Question 2
// Find the length of the numbers in array A that are divisible by
// 2 and 3, and at the same Time, greater than 15
// for example...
// toDivide(A)
// toDivide([2,3,12,18,42,24]); to return 3

//ANSWER

function toDivide(A) {
  let dividable = [];
  A.forEach((a) => {
    if (a % 2 == 0 && a % 3 == 0 && a > 15) {
      dividable.push(a);
    }
  });

  console.log(dividable.length);
}

toDivide([2, 3, 12, 18, 42, 24]);

// Question 3
// find the total age of applicants that applied for this interview from
// the given record below
// totalAge([{ name:"XYZ", age: 66},
//  { name: "WER", age: 44},
//  {name: "AZX", age: 22}]) to return 132;

//ANSWER

function totalAge(arr) {
  console.log(arr.reduce((x, y) => x + y.age, 0));
}

totalAge([
  { name: "XYZ", age: 66 },
  { name: "WER", age: 44 },
  { name: "AZX", age: 22 },
]);

//  Question 4
//  Given an array of objects containing user's information
//  assign a default age X for any user that did not enter his/her age
//  and return the array

//  checkAge([{name: "XYZ", age: 23}, { name: "ABC"}], 33) to return
//  [{name: "XYZ", age: 23}, { name: "ABC", age: 33}];

//ANSWER

function checkAge(arr, X) {
  arr.forEach((x) => {
    if (!x["age"]) {
      x["age"] = X;
    }
  });

  console.log(arr);
}

checkAge([{ name: "XYZ", age: 23 }, { name: "ABC" }], 33);

// Question 5
// Find the sum of all ages in an array of objects
// for example
// [{name:'Uche Egbo', age: 24, occupation: 'Trader'},
// {name:'Solomon Ogbodo', age:30, occupation:'Accountant'}
// ] to return 54

//ANSWER

totalAge([
  { name: "Uche Egbo", age: 24, occupation: "Trader" },
  { name: "Solomon Ogbodo", age: 30, occupation: "Accountant" },
]);

// Question 6
// Find all the numbers in a string and sum them up
// for example
// expect('1weudh56jdnbfskjn788sdhkfbs90'); to return 935

//ANSWER

let string1 = "1weudh56jdnbfskjn788sdhkfbs90";

function addNumString(str) {
  let splitstr = str.split("");
  let numarr = [];
  let number = [];
  for (let i = 0; i <= splitstr.length; i++) {
    if (/\d/.test(splitstr[i])) {
      number.push(splitstr[i]);
    } else if (!/\d/.test(splitstr[i])) {
      let stringnum = number.reduce((x, y) => x + y, "");

      numarr.push(stringnum);
      stringnum = "";
      number = [];
    }
  }

  numarr = numarr.filter((x) => x !== "");
  for (let i = 0; i < numarr.length; i++) {
    numarr[i] = parseInt(numarr[i]);
  }

  let Total = numarr.reduce((x, y) => x + y, 0);

  console.log(Total);
}

addNumString(string1);

// else if(!/\d/.test(splitstr[i])){
//     number.join();
//     numarr.push
//     number =[];
// }

// let acc = numarr.reduce((x,y)=> x+y,0);
// console.log(acc);

//  Question 9
//  return all the unique values in an array as another array in
//  a sorted order
//  for example
//  uniques([2,4,5,4,3,2,5,6,6,7,7,9,1,2,3,5]);
//  to return [1,2,3,4,5,6,7,9]

//ANSWER

function uniques(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newarr.includes(arr[i])) newarr.push(arr[i]);
  }
  newarr.sort();
  console.log(newarr);
}

uniques([2, 4, 5, 4, 3, 2, 5, 6, 6, 7, 7, 9, 1, 2, 3, 5]);

// Question 10
// return true if a word is a palindrome
// and false if it isnt
// example 'madam' true
//         'decagon' false

//ANSWER

function isPalindrome(str) {
  str = str.toLowerCase();
  let strarr = str.split("");
  let revstr = strarr.reverse().join("");
  for (let i = 0; i < strarr.length; i++) {
    if (str[i] !== revstr[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam"));

// Question 11
// Extract all numbers in an array that are
// divisible by n
// for example
// isDivisible([1,3,5,6,7,4], 2) to return 4 and 6

function isDivisible(arr, n) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % n != 0) {
      continue;
    }
    newarr.push(arr[i]);
  }
  console.log(newarr.sort());
}

isDivisible([1, 3, 5, 6, 7, 4], 2);

// Question 12
// Given an array of player objects for a competition
// f several games
let register = [
  { name: "Tolu", age: 54, game: "Chess" },
  { name: "Ikenna", age: 19, game: "Catch" },
  { name: "Adammu", age: 78, game: "Fuzzbuzz" },
  { name: "David", age: 23, game: "Chess" },
];
// write a function that extracts all the names of players from the
// given array of objects

function playerNames(arr) {
  let playerNames = [];
  arr.forEach((x) => playerNames.push(x.name));
  console.log(playerNames);
}

playerNames(register);

// Question 13
// return the names of players playing a particular
// game

function playersForGame(arr, str) {
  let strarr = str.split("");
  strarr[0] = str[0].toUpperCase();
  str = strarr.join("");
  let players = [];
  arr.forEach((x) => {
    if (x.game === str) players.push(x.name);
  });
  console.log(players);
}

playersForGame(register, "Chess");

// Question 14
// given a string of numbers and characters separated
// by commas find the total of the numbers
// for example '2,g,65,e,3,7,5,g,3' => 85

addNumString("2,g,65,e,3,7,5,g,3");

// Question 15
// given two arrays, return the sum of all positive non zero results when arr[i]
// is subtracted from arr2[i]
// For Example
// totalPositiveSum([2,5,1,0,5,7], [2,3,5,6,2,1]);=> 11

function totalPositiveSum(arr1, arr2) {
  let sumarr = [];
  for (let i = 0; i < arr1.length; i++) {
    sumarr.push(arr1[i] - arr2[i]);
  }
  let sum = 0;
  let acc = sumarr.forEach((x) => {
    if (x > 0) {
      sum = sum + x;
    }
  });
  console.log(sum);
}

totalPositiveSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]);

// LAB 2 LAB 2 LAB 2 LAB 2 LAB 2 LAB 2 LAB 2

// Question 1
// Write a function that takes an array and returns the
// sum of all the numbers divisible by 2 and 3
// example
//sum([12,5,6,3]) => 18

// ANSWER

function sumOfDIvisible(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
      newarr.push(arr[i]);
    }
  }

  console.log(newarr.reduce((x, y) => x + y));
}

sumOfDIvisible([12, 5, 6, 3]);

// Question 2
// Write a function that takes an array and returns all
// the numbers that are not divisible by 5
// example
// notDivisibleBy5([3, 5, 15])=> returns 3

//ANSWER

function notDivisibleBy5(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 != 0) {
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}
notDivisibleBy5([3, 5, 15]);

// Question 3
// Write a function that takes in an array and returns
// the count of each unique element in the array
// for example

// unique(['java', 'kotlin', 'java', 'java','swift'])
// => {"java": 3, "kotlin": 1, "swift": 1}

// ANSWER

function unique(arr) {
  let obj = {};
  arr.forEach((x) => {
    if (!obj[x]) {
      obj[x] = 0;
    }
    obj[x]++;
  });
  console.log(obj);
}

unique(["java", "kotlin", "java", "java", "swift"]);

// Question 4
// write a function  that takes two arrays and returns the
// length of the array with the greater sum of its elements
// example
// lengthy([3, 5, 1, 7, 9], [11, 31])=>2

// ANSWER

function lengthy(arr1, arr2) {
  let sum1 = arr1.reduce((x, y) => x + y, 0);
  let sum2 = arr2.reduce((x, y) => x + y, 0);
  if (sum1 > sum2) {
    console.log(arr1.length);
  } else if (sum2 > sum1) {
    console.log(arr2.length);
  } else {
    console.log("they are equal");
  }
}

lengthy([3, 5, 1, 7, 9], [11, 31]);

// Question 5
// write code that takes an array of strings and returns
// strings whose lengths are greater than 3 but less than
// or equal to 7

// example
// rangeStr(['java', 'kotlin', 'javascript',
// 'php', 'spring', 'closure'])=> 4;

// ANSWER

function rangeStr(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3 && arr[i].length <= 7) {
      newarr.push(arr[i]);
    }
  }

  console.log(newarr);
}

rangeStr(["java", "kotlin", "javascript", "php", "spring", "closure"]);

// Question 6
// write a function that takes an array
// and return the numbers that are a multiple of 2 or 5

// example
// multiplesOf2and5([3,155,5,18])=> [155,5,18]

// ANSWER

function multiplesOf2and5(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 || arr[i] % 5 == 0) {
      newarr.push(arr[i]);
    }
  }

  console.log(newarr);
}

multiplesOf2and5([3, 155, 5, 18]);

// write a function that takes a string and returns the
// index of each letter in the alphabet
// example
// alphabetPosition("The sunset sets at twelve o' clock.");
// =>
// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11

function alphabetPosition(text) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let fltrtext = [];
  text = text.toLowerCase();
  text = text.split("");
  for (let i = 0; i < text.length; i++) {
    if (alphabets.includes(text[i])) {
      fltrtext.push(alphabets.indexOf(text[i]) + 1);
    }
  }
  text = fltrtext;
  text = text.join(" ");
  console.log(text);
}

alphabetPosition("The sunset sets at twelve o' clock.");

// you are given a string of space separated numbers,
// and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");   return "5 1"
// highAndLow("1 2 -3 4 5");  return "5 -3"
// highAndLow("1 9 3 4 -5");  return "9 -5"

function highAndLow(numbers) {
  let num = [];
  numbers = numbers.split("");
  numbers.forEach((x) => {
    if (/\d/.test(x)) {
      num.push(parseInt(x));
    }
  });
  num.sort();
  console.log("Highest:", num[num.length - 1], "Lowest:", num[0]);
}
highAndLow("1 9 3 4 -5");

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are equal)

function getSum(a, b) {
  if (a === b) {
    console.log(a);
    return;
  }
  let arr = [];
  arr.push(a, b);
  // arr.sort(function(a,b){return a-b});
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  console.log(sum);
}

getSum(-1, -5);

// Given an integer n, return a counter function. This counter function initially returns n
//  and then returns 1 more than the previous value
// every subsequent time it is called (n, n + 1, n + 2, etc).

// var createCounter = function(n) {
//     counter=[];
//     caonsole.log(counter);
//     if(counter ==[]){counter.push(n)}else {
//     return function() {
//     counter.push(++counter[counter.length-1])
//     }
// }

// };

// createCounter(5);

/* Given an amount between 40 and 10000 dollars (inclusive) and assuming
that the ATM wants to use as few bills as possible, determine 
the minimum number of 100, 50 and 20 dollar billsthe atm needs to dispense in 
that order */

function countMoney(amount) {
  let count = [];

  count.push(Math.floor(amount / 100));
  if ((amount % 100) % 50 !== 0 && (amount % 100) % 20 === 0) {
    count.push(0);
    count.push((amount % 100) / 20);
  } else if (((amount % 100) % 50) % 20 === 0) {
    count.push(Math.floor((amount % 100) / 50));
    count.push(((amount % 100) % 50) / 20);
  } else if ((amount % 100) % 20 != 0) {
    count.push(0);
    count.push(Math.floor((amount % 100) / 20));
  }

  console.log(count);
}

countMoney(260);

/**
 * Converts a number to a string with the correct ordinal indicator suffix.
 * For example, 1 turns into "1st".
 *
 * @param {number} number - The number to add the indicator suffix to.
 * @returns {string} The input number with ordinal indicator suffix added.
 */
const numberToOrdinal = (number) => {
  if (number === 0) {
    return String(0);
  }
  stringNum = number.toString();
  if (stringNum.length > 1 && stringNum[stringNum.length - 2] === "1") {
    return stringNum + "th";
  } else if (stringNum[stringNum.length - 1] === "1") {
    return stringNum + "st";
  } else if (stringNum[stringNum.length - 1] === "2") {
    return stringNum + "nd";
  } else if (stringNum[stringNum.length - 1] === "3") {
    return stringNum + "rd";
    //   }else if(parseInt(stringNum[stringNum.length-1]) >3){
    //     return stringNum + "th";
  } else {
    return stringNum + "th";
  }
};

console.log(numberToOrdinal(111));

/* write a function that returns as an array all the numbers in an array 
that are repeated an odd number of times */

function findOdd(array) {
  let oddnums = [];
  let newSet = new Set(array);
  newSet = [...newSet];
  newSet.forEach((x) => {
    if (array.filter((y) => y === x).length % 2 !== 0) oddnums.push(x);
  });
  return oddnums.sort((a, b) => a - b);
}

console.log(findOdd([2, 3, 2, 5, 4, 0, 3, 4, 5, 7, 6, 6, 2, 6, 2, 5]));

/* write a function to increase a number represented as an array of numbers
by one  */

function increasingArr(arr) {
  let copiedInput = arr.slice();

  let strNum = copiedInput.join("");
  let number = BigInt(strNum);
  number++;
  let newString = String(number);
  let newArray = [];

  for (let i = 0; i < newString.length; i++) {
    newArray.push(parseInt(newString[i]));
  }

  return newArray;
}
console.log(increasingArr([2, 0, 9, 0, 9, 9]));

/* 
given the following input find the duplicate transactions and group them in an array i.e
transactions with the same properties except time (time difference should be less than one minute)
*/
let transactions = [
  {
    id: 3,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:34:30.000Z",
  },
  {
    id: 1,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:00.000Z",
  },
  {
    id: 6,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:05.000Z",
  },
  {
    id: 4,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:36:00.000Z",
  },
  {
    id: 2,
    sourceAccount: "A",
    targetAccount: "B",
    amount: 100,
    category: "eating_out",
    time: "2018-03-02T10:33:50.000Z",
  },
  {
    id: 5,
    sourceAccount: "A",
    targetAccount: "C",
    amount: 250,
    category: "other",
    time: "2018-03-02T10:33:00.000Z",
  },
];

function findDuplicateTransactions(transactions) {
  let transactionsCopy = transactions.slice();

  transactionsCopy.sort(
    (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
  );

  let millisecondsInOneMinute = 60000;

  let groupedArray = transactionsCopy.reduce((accTransactions, transaction) => {
    for (let i = 0; i < accTransactions.length; i++) {
      let accTransactionsTime = new Date(transaction.time).getTime();

      if (
        accTransactions[i].some(
          (purchase) =>
            transaction.sourceAccount === purchase.sourceAccount &&
            transaction.targetAccount === purchase.targetAccount &&
            transaction.amount === purchase.amount &&
            transaction.category === purchase.category &&
            accTransactionsTime / millisecondsInOneMinute -
              new Date(purchase.time).getTime() / millisecondsInOneMinute <
              1
        )
      ) {
        accTransactions[i].push(transaction);
        return accTransactions;
      }
    }
    accTransactions.push([transaction]);
    return accTransactions;
  }, []);

  groupedArray = groupedArray.filter((x) => x.length > 1);
  return groupedArray;
}

console.log(findDuplicateTransactions(transactions));

/* given the following input, group the students into groups of not more 
than 3 students per group and the difference in age of the students 
is not more than 5years. 
add the age of each student to each student's object
(dob contains date of birth, assume the year is 2019)

the result should be an object containing a "noOfGroups"property and properties 
that represent each group(group1:, group2)
as an object and those group objects should contain

properties

members: array containing each grouped students object
oldest: age of the oldest member in the group
sum: total age of students in the group
regNos: an array of regNo of each student in accesnding order*/

const input = [
  {
    name: "Hendrick",
    dob: "1853-07-18T00:00:00.000Z",
    regNo: "041",
  },
  {
    name: "Albert",
    dob: "1910-03-14T00:00:00.000Z",
    regNo: "033",
  },
  {
    name: "Marie",
    dob: "1953-11-07T00:00:00.000Z",
    regNo: "024",
  },
  {
    name: "Neils",
    dob: "1853-10-07T00:00:00.000Z",
    regNo: "02",
  },
  {
    name: "Max",
    dob: "1853-04-23T00:00:00.000Z",
    regNo: "014",
  },
  {
    name: "Erwin",
    dob: "1854-08-12T00:00:00.000Z",
    regNo: "09",
  },
  {
    name: "Auguste",
    dob: "1854-01-28T00:00:00.000Z",
    regNo: "08",
  },
  {
    name: "Karl",
    dob: "1852-12-05T00:00:00.000Z",
    regNo: "120",
  },
  {
    name: "Louis",
    dob: "1852-08-15T00:00:00.000Z",
    regNo: "022",
  },
  {
    name: "Arthur",
    dob: "1892-09-10T00:00:00.000Z",
    regNo: "321",
  },
  {
    name: "Paul",
    dob: "1902-08-08T00:00:00.000Z",
    regNo: "055",
  },
  {
    name: "William",
    dob: "1890-03-31T00:00:00.000Z",
    regNo: "013",
  },
  {
    name: "Owen",
    dob: "1853-04-26T00:00:00.000Z",
    regNo: "052",
  },
  {
    name: "Martin",
    dob: "1854-02-15T00:00:00.000Z",
    regNo: "063",
  },
  {
    name: "Guye",
    dob: "1854-10-15T00:00:00.000Z",
    regNo: "084",
  },
  {
    name: "Charles",
    dob: "1954-02-14T00:00:00.000Z",
    regNo: "091",
  },
];

function classifier(input) {
  let students = input.slice();
  students.sort(
    (a, b) => new Date(b.dob).getFullYear() - new Date(a.dob).getFullYear()
  );

  let groupedStudents = [];
  for (let i = 0; i < students.length; i++) {
    students[i].age = 2019 - new Date(students[i].dob).getFullYear();
    if (groupedStudents.length === 0) groupedStudents.push([students[0]]);
  }

  for (let i = 1; i < students.length; i++) {
    let finalGroup = groupedStudents[groupedStudents.length - 1];
    let finalMember = finalGroup[finalGroup.length - 1];

    if (
      finalGroup.length !== 3 &&
      Math.abs(
        new Date(finalMember.dob).getFullYear() -
          new Date(students[i].dob).getFullYear()
      ) <= 5
    ) {
      finalGroup.push(students[i]);
    } else {
      groupedStudents.push([students[i]]);
    }
  }

  let groupObjects = [];

  for (let i = 0; i < groupedStudents.length; i++) {
    let oldest = groupedStudents[i][groupedStudents[i].length - 1].age;
    let sum = groupedStudents[i].reduce((x, y) => x + y.age, 0);
    let regNos = [];
    groupedStudents[i].forEach((x) => {
      regNos.push(parseInt(x.regNo));
    });
    groupObjects.push({
      members: groupedStudents[i],
      oldest: oldest,
      sum: sum,
      regNos: regNos.sort((a, b) => a - b),
    });
  }

  let finalResult = { noOfGroups: 0 };

  groupObjects.forEach((x, y) => {
    finalResult.noOfGroups++;
    finalResult[`group${y + 1}`] = x;
  });

  return finalResult;
}
console.log(classifier(input));

function incrementString(strng) {
  let prefix = "";
  let strNum = "";
  let leadingZeros = "";
  let numAfterZero = "";

  stop1: for (let i = strng.length - 1; i >= 0; i--) {
    if (/\d/.test(strng[i])) {
      strNum += strng[i];
    } else {
      for (let j = 0; j <= i; j++) prefix += strng[j];
      break stop1;
    }
  }

  strNum = strNum.split("").reverse().join("");

  if (strNum[0] == "0") {
    Stop: for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] == "0") leadingZeros += strNum[i];
      else {
        for (let j = i; j < strNum.length; j++) numAfterZero += strNum[j];
        break Stop;
      }
    }

    leadingZeros = leadingZeros.split("");

    if (leadingZeros.length > 0) {
      if (numAfterZero === "") {
        leadingZeros.pop();
        leadingZeros.push("1");
        return prefix + leadingZeros.join("");
      }
    }
    if (numAfterZero[numAfterZero.length - 1] == "9" && leadingZeros.length > 0)
      leadingZeros.pop();

    numAfterZero = Number(numAfterZero);
    numAfterZero++;

    leadingZeros;
    numAfterZero = String(numAfterZero).split("");

    let combined = [...leadingZeros, ...numAfterZero].join("");

    return prefix + combined;
  }

  strNum = Number(strNum);
  strNum++;
  strNum = String(strNum);

  return prefix + strNum;
}

console.log(incrementString("foobar99foobar99"));

function arrayOfProducts(array) {
  let newArr = [];
  let sum = 0;
  if (array.length === 0 || array.length === 1) return array;

  for (let i = 0; i < array.length; i++) {
    let toMultiply = array.slice();
    toMultiply.splice(i, 1);
    newArr.push(toMultiply.reduce((acc, num) => acc * num));
  }

  return newArr;
}
console.log(arrayOfProducts([45, 30, 25]));

const arrayPacking = (integers) => {
  let newNum = "";
  for (let i = integers.length - 1; i >= 0; i--) {
    newNum += ("00000000" + integers[i].toString(2)).slice(-8);
  }
  return parseInt(newNum, 2);
};

console.log(arrayPacking([200, 12, 500]));

const packArray = (integers) => {
  let array = [];
  let iteration = 0;
  while (integers.length > 1) {
    iteration++;
    for (let i = 0; i < integers.length; i + 2) {
      if (iteration % 2 !== 0) {
        array.push(integers[i] + integers[i + 1]);
      } else if (iteration % 2 === 0) {
        array.push(integers[i] * integers[i + 1]);
      }
    }

    integers = array;
    array = [];
  }

  return integers;
};

console.log(packArray([1, 2, 3, 4, 5, 6, 7, 8]));

/* A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" */

function rangeExtraction(list) {
  let newArr = [];
  for (let i = 0; i < list.length; i++) {
    let j = i;
    newArr.push(list[i].toString());

    let range = false;
    let count = 0;

    while (list[i + 1] - list[i] === 1) {
      i++;
      count++;

      if (count >= 2) range = true;
    }

    if (range) {
      newArr[newArr.length - 1] += "-" + list[i].toString();
    } else if (!range) {
      i = j;
    }
  }
  return newArr.join(",");
}
console.log(
  rangeExtraction([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);

/* Counts how many different ways you can make change for an
 * amount of money given an array of coin denominations.
 *
 * @param {number} money - The amount of money to make change for.
 * @param {number[]} coins - The available coin denominations.
 * @returns {number} The number of ways to make change for the given denominations.
 */

function countChange(money, coins) {
  if (money === 0) return 1;
  if (money < 0 || coins.length === 0) return 0;

  return (
    countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
  );
}

console.log(countChange(300, [5, 10, 20, 50, 100, 200, 500]));

function reverseLinkedList(head) {
  let arr = [];
  let currentNode = head;
  let nextNode = null;
  let previousNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }

  return previousNode;
}

// increase the whole number represented by an array by 1
function increasingArr(arr) {
  let copiedInput = arr.slice();

  let strNum = copiedInput.join("");
  let number = BigInt(strNum);
  number++;
  let newString = String(number);
  let newArray = [];

  for (let i = 0; i < newString.length; i++) {
    newArray.push(parseInt(newString[i]));
  }

  return newArray;
}
console.log(increasingArr([2, 0, 9, 0, 9, 9]));

let palindromeTest =
  "zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir";

("zudfweormatjycujjirzjpyrmaxurectxrtqedmmgergwdvjmjtstdhcihacqnothgttgqfywcpgnuvwglvfiuxteopoyizgehkwuvvkqxbnufkcbodlhdmbqyghkojrgokpwdhtdrwmvdegwycecrgjvuexlguayzcammupgeskrvpthrmwqaqsdcgycdupykppiyhwzwcplivjnnvwhqkkxildtyjltklcokcrgqnnwzzeuqioyahqpuskkpbxhvzvqyhlegmoviogzwuiqahiouhnecjwysmtarjjdjqdrkljawzasriouuiqkcwwqsxifbndjmyprdozhwaoibpqrthpcjphgsfbeqrqqoqiqqdicvybzxhklehzzapbvcyleljawowluqgxxwlrymzojshlwkmzwpixgfjljkmwdtjeabgyrpbqyyykmoaqdambpkyyvukalbrzoyoufjqeftniddsfqnilxlplselqatdgjziphvrbokofvuerpsvqmzakbyzxtxvyanvjpfyvyiivqusfrsufjanmfibgrkwtiuoykiavpbqeyfsuteuxxjiyxvlvgmehycdvxdorpepmsinvmyzeqeiikajopqedyopirmhymozernxzaueljjrhcsofwyddkpnvcvzixdjknikyhzmstvbducjcoyoeoaqruuewclzqqqxzpgykrkygxnmlsrjudoaejxkipkgmcoqtxhelvsizgdwdyjwuumazxfstoaxeqqxoqezakdqjwpkrbldpcbbxexquqrznavcrprnydufsidakvrpuzgfisdxreldbqfizngtrilnbqboxwmwienlkmmiuifrvytukcqcpeqdwwucymgvyrektsnfijdcdoawbcwkkjkqwzffnuqituihjaklvthulmcjrhqcyzvekzqlxgddjoir");
("babad");
("everywhere");

var longestPalindrome = function (s) {
  if (s.length === 1) {
    return s;
  }

  let newArr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j++) {
      let palindromeCheck = s.substring(i, j);
      let reversed = palindromeCheck.split("").reverse().join("");
      if (palindromeCheck.localeCompare(reversed) === 0) {
        newArr.push(palindromeCheck);
      }
    }
  }

  // if (newArr.length === 0) return "No Palindrome";

  // console.log("all palindrome substrings:", newArr);

  let length = 0;
  let longest = "";
  newArr.forEach((x) => {
    lengthOfString = x.length;

    if (lengthOfString > length) {
      length = lengthOfString;
      longest = x;
    }
  });

  return longest;
};

console.log(longestPalindrome(palindromeTest));

function longestPalindromeAlt(s) {
  if (s.length === 1) return s;

  let newStr = "";
  newStr = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 2; j <= s.length; j++) {
      let palindromeCheck = s.substring(i, j);
      let reversed = palindromeCheck.split("").reverse().join("");
      if (
        palindromeCheck.localeCompare(reversed) === 0 &&
        palindromeCheck.length > newStr.length
      ) {
        newStr = palindromeCheck;
      }
    }
  }

  return newStr;
}

console.log(longestPalindromeAlt(palindromeTest));

function splitingNums(num, splitAmount) {
  let array = [];
  remainderCount = 0;

  for (let i = 0; i < splitAmount; i++) array.push(num / splitAmount);

  for (let i = 0; i < splitAmount; i++) {
    remainderCount += array[i] % 1;
    if (remainderCount + 0.9 >= 1) {
      array[i] += 1;
      remainderCount -= 1;
    }
    array[i] -= array[i] % 1;
  }

  return array.sort((a, b) => a - b);
}

console.log(splitingNums(400, 3));

function validateHello(greetings) {
  let newArr = greetings.toLowerCase().split("");
  let lowerCaseArr = [];

  let compareArr = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

  lowerCaseArr = newArr.filter(
    (x) => (x >= "a" && x <= "z") || (x >= "A" && x <= "Z") || x === " "
  );

  lowerCaseArr = lowerCaseArr.join("").split(" ");

  for (let i = 0; i < lowerCaseArr.length; i++) {
    for (let j = 0; j < compareArr.length; j++) {
      if (lowerCaseArr[i].localeCompare(compareArr[j]) === 0) return true;
    }
  }

  return false;
}

console.log(
  validateHello(
    "yOu? wIE; quE? la TSCHUSs! TscHUSs yOu! tschuSs? CIAO wIE, WIE TrES dOInG HOLA! tsCHUSs, YOU? paSA WIE, YoU hASTA LA"
  )
);

var countBits = function (n) {
  let count = 0;
  let val = n;
  for (let i = n; i > 0; n / 2) {
    if (val & (n !== 0)) count++;
  }

  return count;
};

console.log(countBits(11));

// convert a message to rot13
let message = "test";
function rot13(message) {
  let rot13Message = "";

  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  for (let i = 0; i < message.length; i++) {
    if (alphabet.indexOf(message[i]) !== -1)
      rot13Message += rot13[alphabet.indexOf(message[i])];
    else rot13Message += message[i];
  }

  return rot13Message;
}

console.log(rot13("where is tolu?"));

let charCode = "somewhere in the world";

console.log(charCode.charCodeAt(4));
console.log(String.fromCharCode(122));

//calculating the sum of digits in a number
function digitSum(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(digitSum(456));

//calculating the sum of digits in a number till its just one number
function digitalRoot(n) {
  if (n < 9) return n;
  return n % 9 || 9;
}

console.log(digitalRoot(456));

/* convert a string to a new string where each character in the new string is "(" if that character 
  appears only once in the original string, or ")" if that character appears more than 
  once in the original string. Ignore capitalization when determining if a character is a duplicate. */

function duplicateEncode(word) {
  word = word.toLowerCase();
  let wordChars = word.split("");
  let mapped = wordChars.map((x) => {
    if (wordChars.filter((y) => y === x).length > 1) {
      return `)`;
    } else return `(`;
  });

  return mapped.join("");
}

console.log(duplicateEncode("teen"));

/* You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4' */
function expandedForm(num) {
  let numStr = String(num);

  let result = `${numStr[0]}`;
  for (let j = 0; j < numStr.length - 1; j++) result += `0`;

  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] == 0) continue;
    result += ` + ${numStr[i]}`;

    for (let j = i; j < numStr.length - 1; j++) result += `0`;
  }
  return result;
}
console.log(expandedForm(70304));

/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

function rgb(r, g, b) {
  r = r - (r % 1);
  g = g - (g % 1);
  b = b - (b % 1);
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  // if (r === 0 && g === 0 && b === 0) return "000000";

  let rString = r.toString(16);
  let gString = g.toString(16);
  let bString = b.toString(16);

  if (rString.length === 1) rString = "0" + rString;
  if (gString.length === 1) gString = "0" + gString;
  if (bString.length === 1) bString = "0" + bString;

  let result = rString + gString + bString;
  return result.toUpperCase();
}
console.log(rgb(2, 300, 224));

/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

 */

function incrementString(strng) {
  let prefix = "";
  let strNum = "";
  let leadingZeros = "";
  let numAfterZero = "";

  stop1: for (let i = strng.length - 1; i >= 0; i--) {
    if (/\d/.test(strng[i])) {
      strNum += strng[i];
    } else {
      for (let j = 0; j <= i; j++) prefix += strng[j];
      break stop1;
    }
  }

  strNum = strNum.split("").reverse().join("");

  if (strNum[0] == "0") {
    Stop: for (let i = 0; i < strNum.length; i++) {
      if (strNum[i] == "0") leadingZeros += strNum[i];
      else {
        for (let j = i; j < strNum.length; j++) numAfterZero += strNum[j];
        break Stop;
      }
    }

    leadingZeros = leadingZeros.split("");

    if (leadingZeros.length > 0) {
      if (numAfterZero === "") {
        leadingZeros.pop();
        leadingZeros.push("1");
        return prefix + leadingZeros.join("");
      }
    }
    if (numAfterZero[numAfterZero.length - 1] == "9" && leadingZeros.length > 0)
      leadingZeros.pop();

    numAfterZero = Number(numAfterZero);
    numAfterZero++;

    leadingZeros;
    numAfterZero = String(numAfterZero).split("");

    let combined = [...leadingZeros, ...numAfterZero].join("");

    return prefix + combined;
  }

  strNum = Number(strNum);
  strNum++;
  strNum = String(strNum);

  return prefix + strNum;
}

console.log(incrementString("fo99obar99"));

/* return an array where each index contains the product of all the elements except 
the one at the correspnding index of the original array   */
function arrayOfProducts(array) {
  let newArr = [];
  if (array.length === 0 || array.length === 1) return array;

  for (let i = 0; i < array.length; i++) {
    let toMultiply = array.slice();
    toMultiply.splice(i, 1);
    newArr.push(toMultiply.reduce((acc, num) => acc * num));
  }
  return newArr;
}

console.log(arrayOfProducts([4, 5, 6, 8, 10]));

function pigIt(str) {
  //Code here

  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    let wordArr = strArr[i].split("");
    let toPop = wordArr.shift();
    wordArr.push(toPop);
    if (
      (strArr[i][strArr[i].length - 1] >= "a" &&
        strArr[i][strArr[i].length - 1] <= "z") ||
      (strArr[i][strArr[i].length - 1] >= "A" &&
        strArr[i][strArr[i].length - 1] <= "Z")
    )
      strArr[i] = wordArr.join("") + "ay";
  }

  str = strArr.join(" ");
  return str;
}

/* 
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
 */

function listSquared(m, n) {
  // your code
  const newArr = [];
  for (let i = m; i <= n; i++) {
    const nums = factors(i);

    const sum = nums.reduce((acc, x) => {
      return (acc += x * x);
    }, 0);

    if (square(sum)) {
      newArr.push([i, sum]);
    }
  }

  return newArr;
}

const square = (x) => {
  return Math.sqrt(x) % 1 === 0;
};

const factors = (x) => {
  const factors = [];
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      factors.push(i);
    }
  }

  return factors;
};

/* There is a secret string which is unknown to you. Given a collection of random triplets from the 
string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere
 before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets 
and that they contain sufficient information to deduce the original string. 
In particular, this means that the secret string will never 
contain letters that do not occur in one of the triplets given to you. */

var recoverSecret = function (triplets) {
  let dupletArr = [];
  let word = "";

  for (let i = 0; i < triplets.length; i++) {
    let tripletString = triplets[i].join("");
    let duplet1 = tripletString.substr(0, 2);
    let duplet2 = tripletString.substr(1, 3);

    if (!dupletArr.includes(duplet1)) dupletArr.push(duplet1);
    if (!dupletArr.includes(duplet2)) dupletArr.push(duplet2);
  }

  let nextLetter = nextLetterFunction(dupletArr);

  while (nextLetter) {
    word += nextLetter;
    dupletArr = dupletArr.filter((duplet) => !duplet.includes(nextLetter));
    nextLetter = nextLetterFunction(dupletArr);
  }

  return word;

  function nextLetterFunction(dupletArr) {
    let firstLetterDuplet = dupletArr.find((duplet) =>
      dupletArr.every((dup) => duplet[0] !== dup[1])
    );
    if (dupletArr.length > 1) return firstLetterDuplet[0];
    else return dupletArr[0];
  }
};
console.log(recoverSecret(triplets1));

/* Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example
For a0 = 16, the output should be 9

Here's how elements of the sequence are constructed:

a0 = 16

a1 = 12 + 62 = 37

a2 = 32 + 72 = 58

a3 = 52 + 82 = 89

a4 = 82 + 92 = 145

a5 = 12 + 42 + 52 = 42

a6 = 42 + 22 = 20

a7 = 22 + 02 = 4

a8 = 42 = 16, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.

 */

function squareDigitsSequence(a0) {
  let seqArr = [];

  seqArr.push(String(a0));

  for (let i = 0; i < seqArr.length; i++) {
    let num = squareNum(seqArr[i]);

    seqArr.push(num);

    if (num == a0) break;
  }
  return seqArr.length;

  function squareNum(numStr) {
    let splitNum = numStr.split("");

    let sum = splitNum.reduce((acc, x) => acc + +x * +x, 0);

    return String(sum);
  }
}

console.log(squareDigitsSequence(16));

/* The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

From Wikipedia:

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

. . .

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Example
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'
Any character not in the alphabet must be left as is. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
 */

function VigenèreCipher(key, abc) {
  let keyCopy = key;
  this.encode = function (str) {
    //     let keyCopy = key;
    let encodedArr = [];
    if (key.length < str.length) {
      let i = 0;
      while (keyCopy.length < str.length) {
        keyCopy += key[i];
        i++;
        if (i === key.length) i = 0;
      }
    }

    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i]) && abc.includes(keyCopy[i])) {
        let index = abc.indexOf(str[i]) + abc.indexOf(keyCopy[i]);
        if (index > abc.length - 1) index -= abc.length;
        encodedArr.push(abc[index]);
      } else encodedArr.push(str[i]);
    }

    return encodedArr.join("");
  };
  this.decode = function (str) {
    let decodedArr = [];
    for (let i = 0; i < str.length; i++) {
      if (abc.includes(str[i]) && abc.includes(keyCopy[i])) {
        let index = abc.indexOf(str[i]) - abc.indexOf(keyCopy[i]);
        if (index < 0) index += abc.length;
        decodedArr.push(abc[index]);
      } else decodedArr.push(str[i]);
    }

    return decodedArr.join("");
  };
}

abc = "abcdefghijklmnopqrstuvwxyz";
key = "pizza";
c = new VigenèreCipher(key, abc);

console.log(c.encode("javascript"));
console.log(c.decode("yiuzsrzhot"));

/* 
    Description
You’re given a substring s of some cyclic string. What’s the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?

Where:

substring: A string that appears within another string. In other words, s is considered a substring of t if all the characters of s appear in t in the same order, with no other elements in between.

Examples:

cat is a substring of scatter rest is a substring of arrest implied is not a substring of simplified because there are other characters in between happy is not a substring of happiest because they contain different characters

cyclic string: We call a string cyclic if it can be obtained by concatenating another string to itself many times (for example, s2 = "abcabcabcabc..." is cyclic since it can be obtained from s1 = "abc" in such a way).

Example

For s = "cabca", the output should be cyclicString(s) = 3.

"cabca" is a substring of a cycle string "abcabcabcabc..." that can be obtained by concatenating “abc” to itself. Thus, the answer is 3.

 */

function cyclicString(s) {
  var arr = s.split("");
  for (var i = 1; i < arr.length; i++) {
    if (isSub(arr.slice(0, i), arr.slice(i))) {
      return i;
    }
  }
  return arr.length;
}

function isSub(sub, candidate) {
  for (var i = 0; i < candidate.length; i++) {
    if (candidate[i] !== sub[i % sub.length]) {
      return false;
    }
  }
  return true;
}
