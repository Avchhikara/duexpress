import themeData from "./utils/theme";
import {
  addNumber,
  addOperand,
  clear,
  calculate,
  theme
} from "./utils/constants";

const defaultState = {
  theme: {
    value: "light",
    data: themeData
  },
  expression: {
    arr: [],
    latest: ""
  }
};

export default function(state = { ...defaultState }, { payload, type }) {
  switch (type) {
    case addNumber:
      return { ...state, ...payload };
    case addOperand:
      return { ...state, ...payload };

    case calculate:
      return { ...state, ...payload };

    case clear:
      return { ...defaultState, ...payload };

    case theme:
      return { ...state, ...payload };

    default:
      return { ...state };
  }
}
