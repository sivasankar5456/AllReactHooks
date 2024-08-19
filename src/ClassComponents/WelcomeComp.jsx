import React, { useState } from 'react'
import LifceCycleOfReact from './LifceCycleOfReact'

const WelcomeComp = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
      {  !show? <LifceCycleOfReact /> : <h1>Welcome</h1>}
      <button onClick={()=>setShow(!show)} >toggle component</button>
    </div>
  )
}

export default WelcomeComp
