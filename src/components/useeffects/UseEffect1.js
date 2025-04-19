import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count === 0 ? `Chat`:`Chat (${count})`
  },[count]);
  const changeCount = ()=> {
    setCount(count+1);
 
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={changeCount}>Click</button>
    </div>
  );
};

export default UseEffect1;
