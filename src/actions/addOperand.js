import { addOperand } from "../utils/constants";

export default function(state, operand) {
  const arr = [...state.expression.arr];
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
          latest: ""
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

function isOperand(val) {
  let operands = "*/+-";
  return operands.includes(val);
}
