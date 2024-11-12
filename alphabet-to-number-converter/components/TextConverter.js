"use client";

import React, { useState, useEffect } from "react";
import { convertText, validateInput } from "../utils/textConversion";
import { toast } from "react-toastify";
import { processMath2, processMath3, processMath4, processMath5 } from "../utils/processMath";

function TextConverter() {
  const [inputText, setInputText] = useState("");
  const [stepResults, setStepResults] = useState({
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
  });

  
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      
      try{
        validateInput(inputText)
        const convertedText = convertText(inputText);
        const mathResult2 = processMath2(convertedText);
        const mathResult3 = processMath3(mathResult2);
        const mathResult4 = processMath4(mathResult3);
        const mathResult5 = processMath5(mathResult4);

        setStepResults({
          step1: convertedText,
          step2: mathResult2,
          step3: mathResult3,
          step4: mathResult4,
          step5: mathResult5,
        });
      }catch(error){
         toast.error(error.message);
      }
     
    }
  }



  return (
    <div className="flex flex-col w-full  space-y-3">
      <div className="flex flex-col items-center mb-4 space-y-2 w-full">
      <h2 className=" text-2xl font-bold text-black pb-3">Alphabet to Number Converter</h2>
        <div className="flex flex-row w-full my-4">
         <label className="w-1/4 mb-2">Text input: </label>
          <input
            type="text"
            placeholder="Enter text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full shadow-sm border-gray-300 rounded-lg  focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
          />
        </div>
       
      </div>
        
      <hr></hr>
      <div className="flex flex-col items-center space-y-4 mt-2">
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Step 1:</span> Convert Text to Numbers: <span className="text-blue-600">{stepResults.step1}</span>
          </p>
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Step 2:</span> Math Operations 2 Result: <span className="text-blue-600">{stepResults.step2}</span>
          </p>
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Step 3:</span> Math Operations 3 Result: <span className="text-blue-600">{stepResults.step3}</span>
          </p>
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Step 4:</span> Math Operations 4 Result: <span className="text-blue-600">{stepResults.step4}</span>
          </p>
          <p className="text-gray-700 font-medium">
            <span className="font-semibold">Step 5:</span> Math Operations 5 Result: <span className="text-blue-600">{stepResults.step5}</span>
          </p>
        </div>
    </div>
  );
}

export default TextConverter;
