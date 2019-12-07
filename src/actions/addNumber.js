import { addNumber } from "./../utils/constants";

export default function(state, number) {
  const prev = state.expression.latest;
  const latest = parseInt(prev + number).toString();
  const arr = [...state.expression.arr];
  if (prev) {
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
