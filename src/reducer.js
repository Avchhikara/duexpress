import theme from "./utils/theme";

export default function(
  state = {
    theme: {
      value: "light",
      data: theme
    },
    expression: ["2", "+", "3", "-", "1", "*", "10"]
  },
  action
) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
