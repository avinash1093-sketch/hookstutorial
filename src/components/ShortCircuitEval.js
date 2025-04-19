import React, { useState } from 'react'

const ShortCircuitEval = () => {
    const [demo,setDemo]=useState('true');
  return (
    <div>
      <h1>
        {demo || 
        <>
        <h1>HELLO</h1>
        <p>Welcome</p>
        </>
        }
      </h1>
    </div>
  )
}

export default ShortCircuitEval
