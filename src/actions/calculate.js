import { calculate } from "./../utils/constants";

export default function(state) {
  const arr = [...state.expression.arr];
  if (arr.length) {
    let result = calc([...arr]);
    return {
      type: calculate,
      payload: {
        expression: {
          arr: [result],
          latest: result
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

function calc(arr) {
  let op1, op2, op;
  while (arr.length) {
    if (typeof op1 !== "number") {
      op1 = parseInt(arr.shift());
    }
    op = arr.shift();
    op2 = parseInt(arr.shift());
    op1 = performOperation(op1, op, op2);
  }
  return op1;
}

function performOperation(op1, op, op2) {
  switch (op) {
    case "*":
      return (op1 || 0) * (op2 || 1);
    case "/":
      return (op1 || 0) / (op2 || 1);
    case "-":
      return (op1 || 0) - (op2 || 0);
    default:
      return (op1 || 0) + (op2 || 0);
  }
}
