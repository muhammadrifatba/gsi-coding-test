import { convertToUppercaseString } from "./textConversion";
import charMap from "./charMap";

export function processMath2(numericString) {
  let result = 0;
  let isSubtract = false;
  for (let i = 0; i < numericString.length; i++) {
    const num = parseInt(numericString.charAt(i));
    if (isNaN(num)) continue;
    console.log("Num",num)
    if (i < 1) {
        result += num
    
       
      } else {
          if (isSubtract) {
           result -= num;
          } else {
           result += num;
          }
       
        isSubtract = !isSubtract; 
      }
  }
  console.log("Hasil",result)
  return result;
}

export function processMath3(numericValue) {
  let result = Math.abs(numericValue);
  let sum = 0;
  let sumDigits = [];
  let currentDigit = 0;
  while (sum < result) {
    currentDigit = sum + currentDigit > result ? 0 : currentDigit;
    sum += currentDigit;
    sumDigits.push(currentDigit);
    currentDigit += 1;
  }
  return convertToUppercaseString(sumDigits);
}

export function processMath4(digitList) {
  let output = [];
  for (let char of digitList) {
    output.push(charMap[char] !== undefined ? charMap[char] + " " : "? ");
  }
  let numberArray = output.map(item => parseInt(item.trim())).filter(item => !isNaN(item));
  if (numberArray.length >= 2) {
    numberArray[numberArray.length - 1] += 1;
    numberArray[numberArray.length - 2] += 1;
  }
  return convertToUppercaseString(numberArray);
}

export function processMath5(digitList) {
  let output = [];
  for (let char of digitList) {
    output.push(charMap[char] !== undefined ? charMap[char] + " " : "? ");
  }
  let numberArray = output.map(item => parseInt(item.trim())).filter(item => !isNaN(item));
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === 0 || numberArray[i] % 2 === 0) {
      numberArray[i] += 1;
    }
  }
  return numberArray;
}
