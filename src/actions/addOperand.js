import { addOperand } from "../utils/constants";
import isOperand from "./../utils/isOperand";

export default function(state, operand) {
  const arr = [...state.expression.arr];
  const latest = state.expression.latest;
  if (arr.length) {
    if (isOperand(arr[arr.length - 1])) {
      arr[arr.length - 1] = operand;
    } else {
      arr.push(operand);
    }
    return {
      type: addOperand,
      payload: {
        expression: {
          arr,
          latest
        }
      }
    };
  } else {
    return {
      type: "NONE",
      payload: {}
    };
  }
}
