/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let newNumber = num.toString().split("");
  let finalNum = [];
  function Convertor(givenNumber) {
    // block for four numbers Working fine
    if (givenNumber.length == 4) {
      for (let i = 0; i < givenNumber[0]; i++) {
        finalNum.push("M");
      }
      newNumber.shift();
    }

    // block for three number block working fine
    if (givenNumber.length == 3) {
      if (givenNumber[0] < 4) {
        for (let i = 0; i < givenNumber[0]; i++) {
          finalNum.push("C");
        }
      }
      if (givenNumber[0] == 4) {
        finalNum.push("CD");
      }
      if (givenNumber[0] >= 5 && givenNumber[0] < 9) {
        finalNum.push("D");
        let number = givenNumber[0] - 4;
        for (let i = 1; i < number; i++) {
          finalNum.push("C");
        }
      }
      if (givenNumber[0] == 9) {
        finalNum.push("CM");
      }
      newNumber.shift();
    }

    // block for two numbers

    if (givenNumber.length == 2) {
      if (givenNumber[0] < 4) {
        for (let i = 0; i < givenNumber[0]; i++) {
          finalNum.push("X");
        }
      }
      if (givenNumber[0] == 4) {
        finalNum.push("XL");
      }
      if (givenNumber[0] >= 5 && givenNumber[0] < 9) {
        finalNum.push("L");
        let number = givenNumber[0] - 4;
        for (let i = 1; i < number; i++) {
          finalNum.push("X");
        }
      }

      if (givenNumber[0] == 9) {
        finalNum.push("XC");
      }

      newNumber.shift();
    }

    // block for a single number
    if (givenNumber.length == 1) {
      if (givenNumber[0] < 4) {
        for (let i = 0; i < givenNumber[0]; i++) {
          finalNum.push("I");
        }
      }
      if (givenNumber[0] == 4) {
        finalNum.push("IV");
      }
      if (givenNumber[0] >= 5 && givenNumber[0] < 9) {
        finalNum.push("V");
        let number = givenNumber[0] - 4;
        for (let i = 1; i < number; i++) {
          finalNum.push("I");
        }
      }
      if (givenNumber[0] == 9) {
        finalNum.push("IX");
      }

      newNumber.shift();
    }
  }
  if (newNumber.length > 0) {
    let res = Convertor(newNumber);
  }

  return finalNum.join("");
};
