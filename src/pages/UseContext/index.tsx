import * as React from "react"

import AppContext from "@/context/index"

import { redurce, initState, ADD } from "@/redurces/index"

const ChangeContext: React.FC = () => {
  const [state, dispatch] = React.useReducer(redurce, initState)
  return (
    <div>
      <hr />
      <div>{state.num}</div>
      <button className={"btn btn-outline-primary"} onClick={() => dispatch({ type: ADD })} >改变</button>
    </div>
  )
}

const UseContext: React.FC = () => {
  const { title = "" } = React.useContext(AppContext)
  return (
    <div>
      <div className={"mb-3"}>{title}</div>
      <ChangeContext />
    </div>
  )
}

export default UseContext
