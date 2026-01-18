import React, { useState } from 'react';

const UseState = () => {
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    pswd: '',
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const { uname, email, pswd } = formData;
  return (
    <>
      <h1>Registration Form</h1>
      <form>
        <label htmlFor="name">UserName:</label>
        <input
          type="text"
          name="uname"
          value={formData.uname}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="name">Password:</label>
        <input
          type="password"
          name="pswd"
          value={formData.pswd}
          onChange={changeHandler}
        />
        <br />
        {/* <input type="submit" /> */}
      </form>

      {(uname || email || pswd) && (
        <div>
          {uname && <p>Name-{uname}</p>}
          {email && <p>Email-{email}</p>}
        </div>
      )}
    </>
  );
};
export default UseState;
