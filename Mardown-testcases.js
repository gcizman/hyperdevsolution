/**
*@author:Gcobani Mkontwana
@date:24/02/2023
@ This program attempts to show how to use data-structure in Javascript
@The function sayNumber uses BigInt function that uses regex expression.
@Test function to test all test cases scenarios Must read any number from 0 to 999,999,999,999,999.
*/



function sayNumber(num) {
  return BigInt(num).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}


/*function test(num, expect) {
  const result = sayNumber(num);
  const pass = result === expect;
  console.log(`${pass ? "✓" : "ERROR ====>"} ${num} => ${result}`);
  return pass;
}

let failures = 0;
failures += !test(0, "0");
failures += !test(100, "100");
failures += !test(1000, "1,000");
failures += !test(10000, "10,000");
failures += !test(100000, "100,000");
failures += !test(1000000, "1,000,000");
failures += !test(10000000, "10,000,000");
failures += !test(999999999999999n, "999,999,999,999,999");
if (failures) {
  console.log(`${failures} test(s) failed`);
} else {
  console.log("All tests passed");
}
*/
const NUMBER_WORDS = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety"
};

function numberToText(n) {
    if (n < 0 || n > 999999999) {
        throw new Error("Number out of range");
    }
    if (n in NUMBER_WORDS) {
        return NUMBER_WORDS[n];
    }
    let text = "";
    if (n >= 1000000) {
        text += numberToText(Math.floor(n / 1000000)) + " Million ";
        n %= 1000000;
    }
    if (n >= 1000) {
        text += numberToText(Math.floor(n / 1000)) + " Thousand ";
        n %= 1000;
    }
    if (n >= 100) {
        text += numberToText(Math.floor(n / 100)) + " Hundred ";
        n %= 100;
    }
    if (n > 0) {
        if (text !== "") {
            text += "and ";
        }
        if (n in NUMBER_WORDS) {
            text += NUMBER_WORDS[n];
        } else {
            text += NUMBER_WORDS[Math.floor(n / 10) * 10] + " ";
            text += NUMBER_WORDS[n % 10];
        }
    }
    return text.trim();
}
console.log(numberToText(0));        // "Zero"
console.log(numberToText(100));      // "One Hundred"
console.log(numberToText(1000));     // "One Thousand"
console.log(numberToText(10000));    // "Ten Thousand"
console.log(numberToText(100000));   // "One Hundred Thousand"
console.log(numberToText(1000000));  // "One Million"
console.log(numberToText(10000000)); // "Ten Million"