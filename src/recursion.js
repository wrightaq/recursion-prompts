/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

//I: number
//O: factorial of that number
//C:na
//E: only for positive integers as inputs

//if n is negative return -1, if it is zero return one
//create a sum variable
//create an inner function that adds the current value to the sum and then substracts
//one from the current value and passes that as the next value through the function
//return the sum
var factorial = function(n) {

  if(n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }

return n * factorial(n - 1);
//when it reaches zero is will have a return value for factorial(n) which will give return
//values for all the other factorial(n) calls and provide the factorial answer
}
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

//I: array of integers
//O: number, the sum of integers in the array

//base: an array with length 0 would return 0, an array with length one would return the
//number. so if the length of the array is greater than one
//start with the length of the array add the last integer to a sum variable
//then substract one from the array length
//when the array is zero add zero and return the sum
var sum = function(array) {
   if (array.length === 0) {
  return 0;
 }
 return array[array.length-1] + sum(array.slice(0, -1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

//I: array, possibly nested arrays
//O: number, sum of integers in the array
//C:
//E: return 0 for empty array and single digit for array with length one

//if the array is empty return 0
//if the array has one digit return that digit
//flatten the array
  //create a new array variable
  //iterate over the array
  //if the item is not an array then return that item
  //otherwise return the call to the flatten function with that item array
//use the new array variable as the new input for the array sum function and
//follow the same steps as the previous sum problem
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var sum = 0
  if (!Array.isArray(array)) {
      return array;
    }
  array.forEach(function(item) {
      sum += arraySum(item)
    });

  return sum;
};

// 4. Check if a number is even.

//I: number
//O: boolean, true if even and false if not

//base: if n is one return false;
//subtract 2 from n
//if n is 0 return true
//if n is 1 return false
var isEven = function(n) {
  n = Math.abs(n);
  if (n === 1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  return isEven(n-2);
};

// 5. Sum all integers below a given integer. not including that integer
// sumBelow(10); // 45
// sumBelow(7); // 21

//I: starting number
//O: number sum
//C: should return the sum of negative integers above given negative integer (-2 --> -1)
//E: na

//create a negative boolean variable
//if n is negative variable is true
//abs n
//base: 1 or -1 return zero
//create a sum variable
//as long as n isnt 1 then add n to sum then subtract one from sum if is negative is true
//add the negative back to the number

var sumBelow = function(n) {
  if (n === 0) {
    return 0
  }
  if (n > 0) {
    sum = n - 1
    return sum += (sumBelow(n - 1))
  }
  if (n < 0) {
    sum = n + 1
    return sum += (sumBelow(n + 1))
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//I: number minimum and number maximum
//O: array of numbers between the max and min inputs
//C: should work for negative numbers
  // should work for the larger number being first
//E: if not range return empty array

//base: range difference is only one return array with only that middle integer
//create result array
//if x is smaller than y
  //add 1 to x and push to result
  //if x plus one is equal to y then stop (base)
//if x is larger than y
  //subtract 1 from x and push to result
  //if x-1 is equal to y then stop (also base?)
// (2,2) ===> []
// (2,3) ===> []
// (3,2) ===> []
// (2,6) ===> [3,4,5]
// (6,2) ===> [5,4,3]
//create a result array
//if x > y
  //if x+1 === y or x===y
    //return x
  //else result.push(x+1)
  //range(x+1, y)
//return result array
var range = function(x, y) {
  var result = [];
  if (x === y) {
    return result;
  }
  if (x + 1 === y || x - 1 === y) {
    return result;
  }
  if (x < y) {
    result.push(x + 1)
    return result.concat(range(x+1,y))
  }
  if(x > y) {
    result.push(x - 1)
    return result.concat(range(x-1,y))
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

//I: two numbers, the first is the base number and the second is the exponent
//O: the base number multiplied by itself the exponent number of time
//C: should work for negative numbers
//E: when exp is 0 return 1 when exp is 1 return base

//base case is exponent is zero, return 1
//create a product variable that is equal to the base
//call the function and subtract one from the exponent
//product is product of how many times til exp is zero then return

var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  var product = base;
  if (exp < 0) {
    product = 1 / base;
    return parseFloat((product *= exponent(base, exp+1)).toFixed(5));
  }
  return product *= exponent(base, exp-1)
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//I: number
//O: boolean if the number is a power of two or not

//if n is one the return true
//if n modulo 2 is 0 continue else return false
var powerOfTwo = function(n) {
  if (n === 1) {
    return true;
  }
  if (n % 2 === 1 || n === 0) {
    return false;
  }
  return powerOfTwo(n / 2)
};

// 9. Write a function that reverses a string.
//I: string
//O: string in reverse order

//create a string return variable
//if length of input is one then return the string variable/return the item?
//if string length is greater than 1 then add the last element to return
//return a call to the function with input string but with the last item removed and concat

var reverse = function(string) {
  var result = '';
  if (string.length === 1) {
    return string;
  }
  if (string.length > 1) {
    result = (string[string.length-1])
    return result += reverse(string.slice(0, -1))
  }
};

// 10. Write a function that determines if a string is a palindrome.
//I: string
//O: boolean, is string palindrome true or false
//C: ignore spaces and capital letters

//remove spaces and make all cases the same
//if string length is 1 then return true
//if first and last item of string arent the same return false
//if first and last item of string are the same call the function with the first and
  //last items removed as the new input
var palindrome = function(string) {
  var noSpaces = string.split(" ").join("");
  console.log(noSpaces)
  var newString = noSpaces.toLowerCase();
  var nextString = newString.slice(1, -1);

  if (newString.length === 1) {
    return true;
  }
  if(newString.length === 2 && newString[0] === newString[1]) {
    return true;
  }
  if (newString[0] !== newString[newString.length-1]) {
    return false;
  }

    return palindrome(nextString);
};
      //<!------- STOP ---------->

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

//I: object and a target value
//O: number of target value occurrences, can only be a value not a key

//create a count variable
//if value of not nested item is the target value then count increases by one
//iterate over the obj. if value is not an object check against target value
  //if matches target value add one to the count
//if the value is another object call the function again with the current object as the
//new input

// var arraySum = function(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   var sum = 0
//   if (!Array.isArray(array)) {
//       return array;
//     }
//   array.forEach(function(item) {
//       sum += arraySum(item)
//     });

//   return sum;
// };

var countValuesInObj = function(obj, value) {
  var count = 0;
  var values = Object.values(obj)

  values.forEach(function(item) {
    if (typeof item !== 'object') {
        if (item === value) {
          count++
        }
    }
    if (typeof item === 'object') {
      count += countValuesInObj(item, value);
    }
  });
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

//I: object, target key, and a new key name
//O: object with the target keys changed to the new key name
//C: mutate the input object

//create a result object
//create an array of key value pair array
//iterate over the pairs
//if the second index isn't an object
  //check if the item is the oldkey value, add to result obj with new key name
//if it is an object call the function
//return the object

//base:
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (key in obj) {
    if (key === oldKey) {
      obj[newKey] = obj[key]
      delete obj[key]
    }
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey)
    }
    if (key !== oldKey) {
      continue;
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
