import React from 'react'
import { useCounter } from './useCounter'

const CustomHooks = () => {
  const {count, increment, decrement, triple, reset} = useCounter(3);
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={triple}>triple</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CustomHooks
