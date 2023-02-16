import { useState } from "react";

export default function RandomNum() {
  const [randomNum, setRandomNum] = useState([]);
  const [count, setCount] = useState(0);

  const generateRandomNumber = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandomNum([...randomNum, newNum]);
    setCount(count + 1);
  };
  const clearNumbers = () => {
    setRandomNum([]);
    setCount(0);
  };
  const average =
    randomNum.reduce((sum, num) => sum + num, 0) / randomNum.length;
  const min = Math.min(...randomNum);
  const max = Math.max(...randomNum);
  const mid = Math.floor(randomNum.length / 2);
  const num = [...randomNum].sort((num, newNum) => num - newNum);
  const median =
    randomNum.length % 2 !== 0 ? num[mid] : (num[mid - 1] + num[mid]) / 2;
  //Used w3resource to calculate median https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Number</button>
      <button onClick={clearNumbers}>Clear Numbers</button>
      <h2>Statistics</h2>
      <div>
        count: {count} Average: {average} Min: {min} Max: {max} Median: {median}
      </div>
      <h2>Data</h2>
      <ul>
        {randomNum
          .sort((num, newNum) => num - newNum)
          .map((number, index) => (
            <li key={index}>{number}</li>
          ))}
      </ul>
    </div>
  );
}
