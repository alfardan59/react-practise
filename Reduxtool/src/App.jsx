import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy5, increment, incrementBy5 } from './features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)

  //Here we are doing two way binding
  const [incNum, setIncNum] = useState(5)
  const [decNum, setDecNum] = useState(5)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <input type="number" value={incNum} onChange={(e)=>{setIncNum(Number(e.target.value))}}/>
      <button onClick={()=>{dispatch(incrementBy5(incNum))}}>Increase by Amount</button>
      <input type="number" value={decNum} onChange={(e)=>{setDecNum(Number(e.target.value))}}/>
      <button onClick={()=>{dispatch(decrementBy5(decNum))}}>Decrement by Amount</button>  
    </div>
  )
}

export default App