console.log("Problem Solving Q: 1 ");

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter
 being passed and return the largest word in the string. 
 If there are two or more words that are the same length, 
 return the first word from the string with that length.
*/

function LongestWord(sen) {
  let longest = "";
  sen.split(" ").forEach((element) => {
    if (element.length > longest.length) longest = element;
  });
  return longest;
}

console.log(
  LongestWord("lol time"), // => 'time'
  LongestWord("I love cats"), // => 'love'
  LongestWord("coding is awesome"), // => 'awesome'
  LongestWord("hello world") // => 'hello'
);
console.log("---------------------------------------------");
console.log("Problem Solving Q: 2 ");

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length.
 Ignore punctuation and assume sen will not be empty.
*/

function LongestWord_2(sen) {
  sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()|]/g, "");

  let longest = "";
  sen.split(" ").forEach((element) => {
    if (element.length > longest.length) longest = element;
  });
  return longest;
}

console.log(
  LongestWord_2("lol!- time."), // => 'time'
  LongestWord_2("I** love, cats"), // => 'love'
  LongestWord_2("coding&& is awesome"), // => 'awesome'
  LongestWord_2("hello|| world") // => 'hello'
);
console.log("---------------------------------------------");
console.log("Problem Solving Q: 3 ");

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and
 return the string in reversed order.
 For example: if the input string is "Hello World and Coders"
  then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse(str) {
  return str.split("").reverse().join("");
}

console.log(
  FirstReverse("I Love Code"),
  "\n", // => 'edoC evoL I'
  FirstReverse("Hello World"),
  "\n", // => 'dlroW olleH'
  FirstReverse("How are you?"),
  "\n" // => '?uoy era woH'
);
console.log("---------------------------------------------");
console.log("Problem Solving Q: 4 ");

/* Codeland Username Validation */

/*  
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.
If the username is valid then your program should return the string true, otherwise return the string false.
*/

function CodelandUsernameValidation(str) {
  // console.log("_____________________________________________");
  // console.log(`FIRST COND LINGHT  ${str.length} : ` + (4 < str.length < 24));
  // console.log(
  //   `SEC COND FIRST CHAR ${str[0]} : ` +
  //     (str[0].toLowerCase() != str[0].toUpperCase())
  // );
  // console.log(`THIRD COND CONTAIN ${str} : ` + /^\w+$/.test(str)); //\w is a character class that represents [A-Za-z0-9_]
  // console.log(
  //   `FOURTH COND LAST CHAR ${str[str.length - 1]} : ` +
  //     (str[str.length - 1] != "_")
  // );
  // console.log("---------------------------------------------");
  return (
    4 < str.length < 25 &&
    str[0].toLowerCase() != str[0].toUpperCase() &&
    str[str.length - 1] != "_"
  );
}

console.log(CodelandUsernameValidation("aa_")); // => false
console.log(CodelandUsernameValidation("u__hello_world123")); // => true
// console.log(CodelandUsernameValidation("1__hello_world123")); // => false
// console.log(CodelandUsernameValidation("u__hello_world123_")); // => false

console.log("---------------------------------------------");
console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr
 which will contain 2 elements: 
 the first element will represent a list of comma-separated numbers 
 sorted in ascending order, the second element will represent 
 a second list of comma-separated numbers (also sorted). 
 Your goal is to return a comma-separated string 
 containing the numbers that occur in elements of strArr in sorted order.
  If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  let intersection = [];

  strArr[0].split(", ").forEach((char0) => {
    strArr[1].split(", ").forEach((char1) => {
      if (char0 === char1) intersection.push(char1);
    });
  });

  if (intersection.length === 0) return false;
  else return intersection;
}

console.log(
  FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]),
  "\n", // => '1,4,13'

  FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]),
  "\n" // => '1,9,10'
);

console.log("Problem Solving Q: 6");

/* Even or Not */

/*  
Write a function that returns true if a number is even, and false otherwise.
*/

function evenOrNot(num) {
  return num % 2 === 0;
}

console.log(
  "1:",
  evenOrNot(1), // => false
  " 2:",
  evenOrNot(2), // => true
  " 5:",
  evenOrNot(5), // => false
  " 99:",
  evenOrNot(99), // => false
  " 0:",
  evenOrNot(0) // => true
);

console.log("Problem Solving Q: 7");

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(nums) {
  let Summation_result = 0;
  nums.map((num) => {
    if (num % 2 !== 0) Summation_result += num;
  });
  return Summation_result;
}

console.log(
  "sum results : ",
  SumOddNumber([1, 2, 3, 4, 5]), // => 9
  " ",
  SumOddNumber([1, 5, 3, 4, 5]), // => 14
  " ",
  SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
);

console.log("Problem Solving Q: 8");

/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

function uniqueItems(items) {
  let uniques = [];
  items.forEach((item) => {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  });
  return uniques.length;
}

console.log(
  " results : ",
  uniqueItems([1, 1, 1, 1, 1]), // => 1
  " ",
  uniqueItems([3, 3, 5, 3]), // => 2
  " ",
  uniqueItems([5, 1, 1, 5, 1]), // => 2
  " ",
  uniqueItems([1, 6, 7]), // => 3
  " ",
  uniqueItems([1, 2, 3, 1, 2, 3]), // => 3
  " ",
  uniqueItems([5, 1, 2, 2, 1, 5]), // => 3
  " ",
  uniqueItems([5, 77, 1, 3]) // => 4
);

console.log("Problem Solving Q: 9");

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(sequence) {
  let max = 0,
    ones = 0;
  // console.log('max befor =   ',max)
  // console.log('ones befor: ' +ones);
  for (let i = 0; i <= sequence.length; i++) {
    // console.log("i=", i, "sequence[i] =", sequence[i]);
    if (sequence[i] === 1) {
      if (ones >= 1) {
        ones++;
      } else {
        ones = 1;
      }
    } else {
      if (ones > max) {
        max = ones;
      }
      ones = 0;
    }
    // console.log('max after =   ',max)
    // console.log('ones after =   ',ones)
  }
  if (max === 0) return "There is no one sequenced";
  return max;
  // YOUR CODE HERE
}

console.log(
  " longest sereis results : \n",
  longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
  ," ",
  longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
  ," ",
  longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
  ," ",
  longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
  ," ",
  longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
  ," ",
  longestSequence([1, 0, 0, 1]) // => 1
  ," ",
  longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
);


