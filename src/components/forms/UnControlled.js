import React, { useRef } from "react";

const UnControlled = () => {
  const luckyName = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">Enter Lucky Name</label>
          <input type="text" id="luckyName" ref={luckyName}></input>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UnControlled;
