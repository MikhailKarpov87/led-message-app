export default function(state = {}, action) {
  switch (action.type) {
    case "TOGGLE_MOVE_TEXT":
      return action.payload || false;
    default:
      return state;
  }
}
