import * as React from "react"


type IinitValue = { count: number, price: number }
const initValue: IinitValue = { count: 0, price: 1 }

const UseEffect: React.FC = () => {
  const [value, setValue] = React.useState<IinitValue>(initValue)
  let restTimerId = null

  React.useEffect(() => {

    const timerId = setTimeout(() => setValue((value: IinitValue) => { return { ...value, ...{ count: 2 } } }), 2 * 1000)

    return () => {
      clearTimeout(timerId)
      clearTimeout(restTimerId)
    }
  }, [])


  const onRest = () => {
    setValue((value: IinitValue) => { return { ...value, ...{ count: 0 } } })
    restTimerId = setTimeout(() => setValue((value: IinitValue) => { return { ...value, ...{ count: 3 } } }), 2 * 1000)
  }


  return (
    <div>
      <div>
        <kbd>{value?.count || 0}</kbd>
      </div>

      <div className={"mt-3"}>
        <button className={"btn btn-info"} onClick={() => onRest()}>重置</button>
      </div>
    </div>
  )
}

export default UseEffect
