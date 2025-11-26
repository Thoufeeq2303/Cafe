import React, { useState } from 'react'

const UseState = () => {
    const[count, setCount]= useState(1)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}

export default UseState
