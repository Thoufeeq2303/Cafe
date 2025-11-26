import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[count, setCount] = useState(0)
    const clicke=useCallback(()=>{
        setCount(count - 1)
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clicke}>Add to cart</button>
    </div>
  )
}

export default Usecallback
