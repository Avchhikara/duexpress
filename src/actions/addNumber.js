import { addNumber } from "./../utils/constants";

import isOperand from "./../utils/isOperand";

export default function(state, number) {
  const prev = state.expression.latest;
  const arr = [...state.expression.arr];
  let topIsOperand = isOperand(arr[arr.length - 1]);
  const latest = parseInt((topIsOperand ? "" : prev) + number).toString();

  if (!topIsOperand && prev) {
    arr[arr.length - 1] = latest;
  } else {
    arr.push(latest);
  }
  return {
    type: addNumber,
    payload: {
      expression: {
        arr,
        latest
      }
    }
  };
}
