import React from 'react';
import './style.css';
import UseState from './Hooks/UseState.js';
import Parent from './Hooks/UseContext/Parent.js';
import UseReducerCount from './Hooks/UseReducer/UseReducerCount.js';

export default function App() {
  return (
    <div>
      {/* <UseState /> */}
      {/* <Parent /> */}
      <UseReducerCount/>
    </div>
  );
}
