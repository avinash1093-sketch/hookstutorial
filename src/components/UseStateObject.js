import React, { useState } from 'react'

const UseStateObject = () => {
    let myObject = {
         name:'Avinash',
         age:22
    }
    const [objectData, setName] = useState(myObject);
    const updateData = ()=>{
        setName({...myObject, name:'AZ',age:26})
    }

  return (
    <div>
        
      <h1>Name: {objectData.name} and Age: {objectData.age}</h1>
      <button onClick={updateData}>UPDATE</button>
    </div>
  )
}

export default UseStateObject
