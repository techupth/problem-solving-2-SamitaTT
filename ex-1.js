//Exercise 1: Roman to Integer
const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let acc = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      acc += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      acc += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      acc += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      acc += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      acc += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      acc += 900;
      i++;
    } else {
      acc += romanNumbers[s[i]];
    }
  }
  return acc;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
