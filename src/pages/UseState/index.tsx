import * as React from "react"

const UseState: React.FC = () => {

  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      <div className={"mb-3"}><kbd>{count}</kbd></div>
      <button className={"btn btn-primary mr-2"} onClick={() => setCount((count: number) => count + 1)}>+</button>
      <button className={"btn btn-danger"} onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  )
}

export default UseState
