import {useDispatch, useSelector} from "react-redux";
import {decrementAction, incrementAction, setValueAction} from "../../store/counter/counter.actions.js";
import {Navigation} from "../010_Navigation/Navigation.jsx";

export function CounterRedux() {
  const counts = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navigation />
      <h1>Counter {counts}</h1>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch(decrementAction())}>Decrement</button>
      <button onClick={() => dispatch(setValueAction(10))}>Set</button>
    </>
  )
}