import React, { useEffect, useState } from 'react'

const CountA = () => {
const [count,setCount]=useState(0)

useEffect(()=>{
    if (count>=5) {
        throw new Error('app crashed from component A')
    }
},[count])

  return (
    <div>
      <h1>component a</h1>
      <h2>count: {count}</h2>
    <button onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}

export default CountA
