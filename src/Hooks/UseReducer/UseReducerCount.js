import React,{useReducer} from 'react'

const UseReducerCount = () => {
    const initial_val = 0
    const[count,dispatch]=useReducer(reducer,initial_val)

  return (
    <>
    <button onClick={()=>dispatch(type="INC")}>+</button>
    <p>Count:</p>
    <button OnClick={()=>dispatch(type="DEC")}>-</button>
    </>
  )
}

export default UseReducerCount