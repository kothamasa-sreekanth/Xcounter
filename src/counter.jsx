import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <center>
        <h1>Counter App</h1>
        <h3>count: {count}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement </button>
      </center>
    </div>
  )
}

export default Counter;
