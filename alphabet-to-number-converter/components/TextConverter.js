"use client";

import React, { useState } from "react";

const charMap = {
    "A": 0, "B": 1, "C": 1, "D": 1, "E": 2, "F": 3, "G": 3, "H": 3, "I": 4,
    "J": 5, "K": 5, "L": 5, "M": 5, "N": 5, "O": 6, "P": 7, "Q": 7, "R": 7,
    "S": 7, "T": 7, "U": 8, "V": 9, "W": 9, "X": 9, "Y": 9, "Z": 9,
    "a": 9, "b": 8, "c": 8, "d": 8, "e": 7, "f": 6, "g": 6, "h": 6, "i": 5,
    "j": 4, "k": 4, "l": 4, "m": 4, "n": 4, "o": 3, "p": 2, "q": 2, "r": 2,
    "s": 2, "t": 2, "u": 1, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0,
    " ": 0,
  };

function TextConverter() {
  const [inputText, setInputText] = useState("");
  const [stepResults, setStepResults] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",

  });

  function handleInputChange(event) {
    const input = event.target.value;
    setInputText(input);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      // Step 1: Convert Text to Numbers
      const convertedText = convertText(inputText);
      // Step 2: Process Math
      const mathResult2 = processMath2(convertedText);

      const mathResult3 = processMath3(mathResult2)

      const mathResult4 = processMath4(mathResult3)

      const mathResult5 = processMath5(mathResult4)

      // Update step results
      setStepResults({
        step1: convertedText,
        step2: mathResult2,
        step3: mathResult3,
        step4: mathResult4,
        step5: mathResult5,
      });
    }
  }

 

  function getFirstUppercaseLetterMap(charMap) {
    const firstUppercaseMap = {};

    // Iterate over charMap and store the first uppercase letter for each digit
    for (let char in charMap) {
      const num = charMap[char];

      if (char === char.toUpperCase()) { // Check if it's an uppercase letter
        if (!firstUppercaseMap[num]) { // If we haven't stored an uppercase letter for this number
          firstUppercaseMap[num] = char;
        }
      }
    }

    return firstUppercaseMap;
}

  function convertToUppercaseString(digitList) {
    const firstUppercaseMap = getFirstUppercaseLetterMap(charMap);
    console.log("uppercase map:",firstUppercaseMap)
    let result = [];

    // Convert each digit in the list to its corresponding first uppercase letter
    for (let i = 0; i < digitList.length; i++) {
      const num = parseInt(digitList[i]); // Get the digit
      result.push(firstUppercaseMap[num] || ''); // Append the corresponding uppercase letter
    }
    console.log("Hasil mapp uppercase",result)
    return result;
}


  function convertText(input) {
    let output = "";
    for (let char of input) {
      output += charMap[char] !== undefined ? charMap[char] + " " : "? ";
    }
    return output.trim();
  }

  function processMath2(numericString) {
    let result = 0;
    let isSubtract = false;
    
    // Ensure that the numericString is only digits and replace non-digit characters
    for (let i = 0; i < numericString.length; i++) {
      const num = parseInt(numericString.charAt(i));

      // If the character is not a valid number, skip it
      if (isNaN(num)) {

        continue;
      }

      console.log("num", num);
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
      // Alternate between add and subtract
    }
    
    console.log("result", result);

    // Apply rule (a): if the result is negative, convert it to positive

    // Apply rule (b): break the number into individual digits and sum them
   

    console.log("Final result", result);
    return result;
  }

  function processMath3(numericString){
    let result = Math.abs(numericString);  // Ensure we are working with positive numbers
    let sum = 0;
    let sumDigits = [];
    let currentDigit = 0;  
    while (sum < result) {
      if(sum+currentDigit > result){
        currentDigit = 0
      }
      sum += currentDigit;
      sumDigits.push(currentDigit)
      currentDigit += 1
    }
    console.log("Summed Digits: ", sumDigits.join(' + '));
    console.log("Summed Digits: ", sumDigits);
    let resultStr = '';
    
      // Use the `charMap` to get the corresponding character for this sumDigit
      resultStr = convertToUppercaseString(sumDigits);
  

  console.log("Final Output: ", resultStr);
  // return resultStr;
  return resultStr
  }

  function processMath4(process3String) {
     let output = []
     for (let char of process3String) {
        output.push(charMap[char] !== undefined ? charMap[char] + " " : "? ")
      }
      console.log("Proses 4",output)

      let numberArray = output.map(item => parseInt(item.trim())).filter(item => !isNaN(item));

      // Check if we have at least two numbers
      if (numberArray.length >= 2) {
          // Add 1 to the last two numbers
          numberArray[numberArray.length - 1] += 1
          numberArray[numberArray.length - 2] += 1
      }
      let resultStr = '';
      resultStr = convertToUppercaseString(numberArray);
      
        
      return resultStr;
      
  }

  function processMath5(process4string) {
     let output = []
     for (let char of process4string) {
        output.push(charMap[char] !== undefined ? charMap[char] + " " : "? ")
      }
      console.log("Proses 5",output)

      let numberArray = output.map(item => parseInt(item.trim())).filter(item => !isNaN(item));
      for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 0 || numberArray[i] % 2 === 0) {
            numberArray[i] += 1;
        }
    }
      return numberArray;
  }

  return (
    <div>
      <label className="block text-gray-50 font-bold">Alphabet to Number Converter</label>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange} // Handle text input change
        onKeyDown={handleKeyDown}
        className="bg-gray-200 text-gray-700 focus:bg-white"  // Handle the Enter key press
      />
      <p>Step 1 - Convert Text to Numbers: {stepResults.step1}</p>
      <p>Step 2 - Math Operations2 Result: {stepResults.step2}</p>
      <p>Step 3 - Math Operations3 Result: {stepResults.step3}</p>
      <p>Step 4 - Math Operations4 Result: {stepResults.step4}</p>
      <p>Step 5 - Math Operations4 Result: {stepResults.step5}</p>
    </div>
  );
}

export default TextConverter;
