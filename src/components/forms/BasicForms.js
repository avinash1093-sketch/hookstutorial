import React, { useState } from "react";

const BasicForms = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataList, setList] = useState([]);
  const saveDetails = (e) => {
    e.preventDefault();
    let newEntry = {
      id: new Date().getTime().toString(),
      email: email,
      pass: password,
    };
    setList([...dataList, newEntry]);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <form action="" onSubmit={saveDetails}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Pasword</label>
          <input
            type="password"
            name="email"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        {email && password ? (
          <div>
            <button type="submit">Login</button>
          </div>
        ) : (
          alert("Please fill the form with valid details.")
        )}
      </form>
      <div>
        {dataList.map((list) => {
          return (
            <h3 key={list.id}>
              Email:{list.email} password:{list.pass}
            </h3>
          );
        })}
      </div>
    </>
  );
};

export default BasicForms;
