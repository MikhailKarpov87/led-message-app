export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_TEXT":
      return action.payload;
    default:
      return state;
  }
}
