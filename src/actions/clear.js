import { clear } from "./../utils/constants";

export default function(state) {
  const theme = state.theme;
  return {
    type: clear,
    payload: { theme }
  };
}
