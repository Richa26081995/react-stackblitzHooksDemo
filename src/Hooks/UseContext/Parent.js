import React from 'react';
import Child from './Child.js';
const Parent = () => {
  // const data = {
  //   name: 'Richa',
  //   age: 30,
  // };
  return (
    <>
      <h1>Parent calling child data</h1>
      <Child />
    </>
  );
};
export default Parent;
