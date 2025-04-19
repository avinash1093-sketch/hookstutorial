import React, { useState } from "react";

const UseStateArray = () => {
  let bioData = [
    {
      id: 0,
      name: "Avinash",
      age: 33,
    },
    {
      id: 1,
      name: "Aansh",
      age: 2,
    },
    {
      id: 2,
      name: "Kavita",
      age: 3,
    },
  ];
  const [myArray, setName] = useState(bioData);

  const clearData = () => {
    setName([]);
  };
  const removeData = (id) => {
    console.log(id);
    let newArray = myArray.filter((e) => e.id != id);
    console.log(newArray);
    setName(newArray);
  };

  return (
    <>
      {myArray.map((elem) => {
        return (
          <>
            <h1 key={elem.id}>
              Name: {elem.name} & age: {elem.age}
            </h1>
            <button type="submit" onClick={() => removeData(elem.id)}>
              Remove
            </button>
          </>
        );
      })}
      <button type="submit" onClick={clearData}>
        Clear
      </button>
    </>
  );
};

export default UseStateArray;
