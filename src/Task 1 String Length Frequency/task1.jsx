import { useState } from "react";

const Task1 = () => {
//khởi tạo state cho input và kết quả
  const [inputStrings, setInputStrings] = useState("");
  const [result, setResult] = useState([]);

//xử lý sự kiện input
  const handleInputChange = (event) => {
    setInputStrings(event.target.value);
  };

//hàm tìm các độ dài chuỗi xuất hiện nhiều nhất
  const findMostFrequentLengths = (strings) => {
    const lengthFrequency = {};
    const lengthToStrings = {};
    
    //tạo một đối tượng để đếm tần suất của các độ dài chuỗi
    strings.forEach((str) => {
      const length = str.length;
      lengthFrequency[length] = (lengthFrequency[length] || 0) + 1;
      if (!lengthToStrings[length]) {
        lengthToStrings[length] = [];
      }
      lengthToStrings[length].push(str);
    });

    //tìm độ dài xuất hiện nhiều nhất lengthFrequency
    const maxFrequency = Math.max(...Object.values(lengthFrequency));
    const mostFrequentLengths = Object.keys(lengthFrequency).filter(
      (length) => lengthFrequency[length] === maxFrequency
    );    

    //trả về các chuỗi có độ dài xuất hiện nhiều nhất
    const resultStrings = [];
    mostFrequentLengths.forEach((length) => {
      resultStrings.push(...lengthToStrings[length]);
    });

    return resultStrings;
  };

  //xử lý chia các input thành mảng và tính toán
  const handleCalculate = () => {
    const stringArray = inputStrings.split(",").map((s) => s.trim());
    setResult(findMostFrequentLengths(stringArray));
  };

  return (
    <div>
      <h1>Task 1:String Length Frequency</h1>
      <h2>Input:</h2>
      <input
        type="text"
        value={inputStrings}
        onChange={handleInputChange}
        placeholder="e.g: abc, ab, c, cd, abc"
      />
      <button onClick={handleCalculate}>Cal</button>
      <div>
        <h2>Output:</h2>
        <p>Most Frequent Lengths: {result.map(str => str.length).join(", ")}</p>
        {result.join(", ")}
      </div>
    </div>
  );
};

export default Task1;