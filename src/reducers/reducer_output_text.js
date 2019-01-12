import { UPDATE_OUTPUT_TEXT, MOVE_TEXT } from "../constants";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_OUTPUT_TEXT:
      let result = Array(9);

      action.payload.map(value => {
        for (let i = 0; i < value.length; i++) {
          result[i] = (result[i] || []).concat(value[i][0].split(""));
          result[i] = result[i].map(value => +value);
        }

        return result;
      });

      return result.map(value => {
        value.unshift(...Array(5).fill(0));
        value.push(...Array(30).fill(0));
        return value;
      });

    case MOVE_TEXT:
      return state.map((value, id) => {
        const firstElement = value.shift();
        value.push(firstElement);

        return value;
      });

    default:
      return state;
  }
}
