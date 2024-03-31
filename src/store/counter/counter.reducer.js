import {ACTION_DECREMENT, ACTION_INCREMENT, ACTION_SET} from "./counter.actions.js";

const initialState = {
  value: 0,
}

export default function counterReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ACTION_INCREMENT:
      return { ...state, value: state.value + 1 }
    case ACTION_DECREMENT:
      return { ...state, value: state.value - 1 }
    case ACTION_SET:
      return { ...state, value: payload }

    default:
      return state;
  }
}