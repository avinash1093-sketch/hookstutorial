import React, { useState } from 'react'


const HooksRule = () => {
  const [name,setName] = useState('Avinash Page Tech')
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default HooksRule;

