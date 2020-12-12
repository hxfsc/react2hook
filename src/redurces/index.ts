export const ADD = "add"
export const MINUS = "minus"

export const initState = { num: 0 }

export const redurce = (state, action) => {
  switch (action.type) {
    case ADD:
      return { num: state.num + 1 }
    case MINUS:
      return { num: state.num - 1 }
    default:
      return { num: 0 }
  }
}
