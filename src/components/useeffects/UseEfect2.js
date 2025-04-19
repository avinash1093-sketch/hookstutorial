import React, { useEffect, useState } from 'react'

const UseEfect2 = () => {
    const [widthCount,setWidthCount] = useState(window.screen.width)
    const actualWidth = ()=>{
        setWidthCount(window.innerWidth)
    }
    useEffect(()=>{
      window.addEventListener('resize', actualWidth);
      return ()=> {
        window.removeEventListener("resize", actualWidth);
      }
    },[widthCount]);
  return (
    <div>
      <p>The actual Size of the window is:</p>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEfect2
