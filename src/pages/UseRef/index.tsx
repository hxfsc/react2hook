import * as React from "react"

const { useRef, useState, useEffect, forwardRef, useImperativeHandle } = React

interface IInputProps {
  value: number | string
}

const Input = (props: IInputProps, ref) => {
  const refInput: any = useRef<any>()

  useEffect(() => {
    refInput.current.value = props.value
  }, [props.value])

  useImperativeHandle(
    ref,
    () => ({
      focus: () => refInput.current.focus()
    }),
    []
  )

  return <input type="text" className={"form-control"} ref={refInput} />
}

export default () => {
  const [value, setValue] = useState(0)
  const MInput = forwardRef(Input)
  const r0 = useRef()
  const r1: any = useRef()
  const r2: any = useRef()
  return (
    <div>
      {/* <div className={"form-inline"}>
        <Input value={value} />
        <button className={"btn btn-success"} onClick={() => setValue(Math.random())}>
          click
        </button>
      </div>
      <hr /> */}
      <div>
        <MInput value={"input1"} ref={r1} />
        <hr />
        <MInput value={"input2"} ref={r2} />

        <div>
          <hr />
          <button className={"btn btn-info"} onClick={() => r2.current.focus()}>input1</button>
          <button className={"btn btn-primary"} onClick={() => r1.current.focus()}>input2</button>
        </div>
      </div>
    </div>
  )
}
