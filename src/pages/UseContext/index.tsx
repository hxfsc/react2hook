import * as React from "react"

import AppContext from "@/context/index"

import { redurce, initState, ADD } from "@/redurces/index"
const { useReducer, useContext } = React

const WrapperContext: any = React.createContext(initState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(redurce, initState)
  return <WrapperContext.Provider value={{ state, dispatch }}>{children}</WrapperContext.Provider>
}

const useCont = () => {
  const contextValue: any = useContext(WrapperContext)
  return contextValue
}

const ChangeContext = () => {
  const { state, dispatch } = useCont()
  return (
    <div>
      <hr />
      <div>{state?.num}</div>
      <button className={"btn btn-outline-primary"} onClick={() => dispatch({ type: ADD })}>
        改变
      </button>
    </div>
  )
}

const RestContext = () => {
  const { state } = useCont()
  return <div>parent: {state?.num}</div>
}

const UseContext = () => {
  const { title = "" } = useContext(AppContext)
  return (
    <ContextProvider>
      <div className={"mb-3"}>{title}</div>
      <RestContext />
      <ChangeContext />
    </ContextProvider>
  )
}

export default UseContext
