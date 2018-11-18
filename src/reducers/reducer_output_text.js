import { UPDATE_OUTPUT_TEXT, MOVE_TEXT } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_OUTPUT_TEXT:
      let result = [];

      const results = action.payload.map(value => {
        for (let i = 0; i < value.length; i++) {
          result[i] = (result[i] || []) + value[i];
        }
        return result;
      });

      return results[0].map(value => {
        return value.padStart(value.length + 5, "0").padEnd(value.length + 30, "0");
      });

    case MOVE_TEXT:
      return state.map(value => value.substr(1, value.length) + value.substr(0, 1));

    default:
      return state;
  }
}
