import charMap from "./charMap";
import { toast } from "react-toastify";

export function convertText(input) {
  let output = "";
  for (let char of input) {
    if (charMap[char] === undefined) {
        throw new Error(`Invalid character detected: "${char}". Please use characters from the defined charMap.`);
      }
    output += charMap[char] !== undefined ? charMap[char] + " " : "? ";
  }
  return output.trim();
}

export function validateInput(input) {
    if (!input || input.trim() === "") {
      throw new Error("Please fulfill the form.");
    }
    if (/\d/.test(input)) {
      throw new Error("Numbers are not allowed.");
    }
  }

export function getFirstUppercaseLetterMap() {
  const firstUppercaseMap = {};
  for (let char in charMap) {
    const num = charMap[char];
    if (char === char.toUpperCase() && !firstUppercaseMap[num]) {
      firstUppercaseMap[num] = char;
    }
  }
  return firstUppercaseMap;
}

export function convertToUppercaseString(digitList) {
  const firstUppercaseMap = getFirstUppercaseLetterMap();
  let result = [];
  for (let i = 0; i < digitList.length; i++) {
    const num = parseInt(digitList[i]);
    result.push(firstUppercaseMap[num] || '');
  }
  return result;
}
