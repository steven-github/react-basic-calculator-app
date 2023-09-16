import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-4 rounded shadow-lg">
        <input type="text" className="w-full mb-2 p-2 border rounded" value={input} readOnly />
        <div className="grid grid-cols-4 gap-2">
          <button className="col-span-3 bg-gray-200 p-2 rounded" onClick={clearInput}>
            Clear
          </button>
          <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleButtonClick("/")}>
            /
          </button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleButtonClick("*")}>
            *
          </button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleButtonClick("-")}>
            -
          </button>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleButtonClick("+")}>
            +
          </button>
          <button className="col-span-2" onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button onClick={calculateResult}>=</button>
        </div>
        <p className="mt-2 text-2xl font-bold">{result}</p>
      </div>
    </div>
  );
}

export default App;
