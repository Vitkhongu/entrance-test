import { useState } from "react";

const Task2 = () => {
// Khởi tạo state cho input và kết quả
  const [inputNumbers, setInputNumbers] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(null);

  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };

  // chia các input thành mảng và tính toán
  const handleCalculate = () => {
    const numArray = inputNumbers.split(",").map((num) => parseInt(num.trim(), 10));
    setNumbers(numArray);
    setSum(sumOfTopTwo(numArray));
  };

  // hàm tính tổng của hai số lớn nhất
  const sumOfTopTwo = (arr) => {
    if (arr.length < 2) return "Cần ít nhất 2 số!";
    arr.sort((a, b) => b - a); 
    return arr[0] + arr[1];
  };

  return (
    <div>
      <h1>Task 2: Sum of Top Two Integers</h1>
      <h3>Enter a sequence of numbers (separated by commas):</h3>
      <input type="text" value={inputNumbers} onChange={handleInputChange} 
      placeholder="e.g: 1, 2, 3, 4, 5" />
      <button onClick={handleCalculate}>Cal</button>
      {numbers.length > 0 && (
        <div>
          <p>Two Top Integers: {numbers.slice(0,2).join(",")}</p>
          <p>Sum of Top Two Integers: {sum}</p>
        </div>
      )}
    </div>
  );
};

export default Task2;