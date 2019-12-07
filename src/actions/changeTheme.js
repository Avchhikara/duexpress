import { theme } from "./../utils/constants";

export default function(state, value) {
  const data = state.theme.data;
  return {
    type: theme,
    payload: {
      theme: {
        value,
        data
      }
    }
  };
}
