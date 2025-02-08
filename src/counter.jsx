import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); 
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };



  return (
    <div>
      <center>
        <h1>Counter App</h1>
        <h3 data-testid="count">Count: {count}</h3>
        <button onClick={increment} data-testid="increment-button">Increment</button>
        <button onClick={decrement} data-testid="decrement-button">Decrement</button>
      
      </center>
    </div>
  );
};

export default Counter;
