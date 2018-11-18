import { generateDottedText } from "../helpers";
import { UPDATE_TEXT, UPDATE_OUTPUT_TEXT, TOGGLE_MOVE_TEXT, MOVE_TEXT } from "../constants";

export function updateText(newText) {
  return { type: UPDATE_TEXT, payload: newText };
}

export function updateOutputText(newText) {
  return { type: UPDATE_OUTPUT_TEXT, payload: generateDottedText(newText) };
}

export function toggleMoveText(status) {
  return { type: TOGGLE_MOVE_TEXT, payload: status };
}

export function moveText() {
  return { type: MOVE_TEXT };
}
