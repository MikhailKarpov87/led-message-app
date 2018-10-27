import { combineReducers } from "redux";
import text from "./reducer_text";
import outputText from "./reducer_output_text";
import isMoving from "./reducer_toggle";

const reducer = combineReducers({
  text,
  outputText,
  isMoving
});

export default reducer;
