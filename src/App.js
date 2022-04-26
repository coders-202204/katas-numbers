import { useState } from "react";
import Numbers from "./components/Numbers/Numbers";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

  const increment = () => {
    if (numbers[numbers.length - 1] < 20) {
      setNumbers(numbers.map((number) => number + 1));
    }
  };

  const decrement = () => {
    if (numbers[0] > 0) {
      setNumbers(numbers.map((number) => number - 1));
    }
  };

  return (
    <Numbers numbers={numbers} increment={increment} decrement={decrement} />
  );
}

export default App;
