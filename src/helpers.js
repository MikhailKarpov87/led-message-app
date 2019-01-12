import lettersArray from "./constants";

export function generateDottedText(text) {
  const specialChars = new RegExp(/[^!,?\-. 'A-z]/g);
  let resultText = text;
  //    Dotted type doesn't have any numbers and special characters
  if (specialChars.test(resultText)) resultText = "Sorry, no digits";

  //    Checking for max length
  if (text.length > 35) resultText = "Sorry, too long..";

  //    Checking for length < 12 chars and padding it if needed
  if (text.length < 12) resultText = resultText.padEnd(12, " ");

  const textArray = resultText.split("");
  let resultArray = [];

  for (let i = 0; i < textArray.length; i++) {
    let currentLetter = lettersArray[textArray[i]];
    resultArray.push(currentLetter);
  }

  return resultArray;
}
