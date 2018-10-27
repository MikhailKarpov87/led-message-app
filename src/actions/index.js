import lettersArray from "../constants";

export function updateText(newText) {
  return {
    type: "UPDATE_TEXT",
    payload: newText
  };
}

export function updateOutputText(newText) {
  return {
    type: "UPDATE_OUTPUT_TEXT",
    payload: generateDottedText(newText)
  };
}

export function toggleMoveText(status) {
  return {
    type: "TOGGLE_MOVE_TEXT",
    payload: status
  };
}

export function moveText() {
  return { type: "MOVE_TEXT" };
}

function generateDottedText(text) {
  const specialChars = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  //Dotted type doesn't have any numbers and special characters
  //Checking for this
  if (/\d/.test(text) || specialChars.test(text)) {
    text = "Sorry,no digits..";
  }

  if (text.length > 35) {
    text = "Sorry, too long..";
  }

  if (text.length < 12) {
    text = text.padEnd(12, " ");
  }

  const textArray = text.split("");
  let resultArray = [];

  for (let i = 0; i < textArray.length; i++) {
    let currentLetter = lettersArray[textArray[i]];
    resultArray.push(currentLetter);
  }

  return resultArray;
}
