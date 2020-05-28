import * as React from "react"

import { ADD, MINUS, redurce, initState } from "@/redurces/index"

const UseReducer = () => {

  const [state, dispatch] = React.useReducer(redurce, initState)

  return (
    <div>
      <div>{state.num}</div>
      <hr/>
      <button className={"btn btn-outline-info mr-3"} onClick={() => dispatch({ type: ADD })}>+</button>
      <button className={"btn btn-outline-danger"} onClick={() => dispatch({ type: MINUS })}>-</button>
    </div>
  )
}

export default UseReducer
