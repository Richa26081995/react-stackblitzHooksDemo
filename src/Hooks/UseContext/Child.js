import React, { useContext } from 'react';
import { AppContext } from './UserContext.js';
const Child = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <>
      <h1>Hello From Child!!!</h1>
      <p>CallingbData....</p>
      <p>{data.name}</p>
    </>
  );
};
export default Child;
