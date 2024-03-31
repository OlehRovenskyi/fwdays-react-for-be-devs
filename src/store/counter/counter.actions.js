export const ACTION_INCREMENT = '[CounterRedux] increment';
export const ACTION_DECREMENT = '[CounterRedux] decrement';
export const ACTION_SET = '[CounterRedux] set';

export function incrementAction() {
  return {
    type: ACTION_INCREMENT,
  }
}

export function decrementAction() {
  return {
    type: ACTION_DECREMENT,
  }
}

export function setValueAction(payload) {
  return {
    type: ACTION_SET,
    payload,
  }
}
