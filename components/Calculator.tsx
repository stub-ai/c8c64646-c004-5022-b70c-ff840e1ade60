import { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (!num1) {
      setNum1(value);
    } else {
      setNum2(value);
    }
  };

  const calculate = (operator: string) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case "+":
        setResult((number1 + number2).toString());
        break;
      case "-":
        setResult((number1 - number2).toString());
        break;
      case "*":
        setResult((number1 * number2).toString());
        break;
      case "/":
        setResult((number1 / number2).toString());
        break;
      default:
        setResult("Error");
    }
  };

  const clearInput = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="p-5 bg-white rounded shadow-lg w-64">
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          readOnly
          value={num1}
          className="border-2 border-gray-300 rounded w-full p-2"
        />
        <input
          type="text"
          readOnly
          value={num2}
          className="border-2 border-gray-300 rounded w-full p-2"
        />
        <button
          onClick={clearInput}
          className="ml-2 bg-red-500 text-white rounded p-2"
        >
          C
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value) => (
          <button
            key={value}
            onClick={() => handleClick(value.toString())}
            className="p-2 text-center border-2"
          >
            {value}
          </button>
        ))}
        {["+", "-", "*", "/"].map((value) => (
          <button
            key={value}
            onClick={() => calculate(value)}
            className="p-2 text-center bg-green-500 text-white"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <h2 className="text-2xl">Result:</h2>
        <p className="text-lg">{result}</p>
      </div>
    </div>
  );
};

export default Calculator;