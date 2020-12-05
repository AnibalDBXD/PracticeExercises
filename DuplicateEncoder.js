function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  let repeated_letter = {};
  let Encode = "";
  for (letter of lowerWord) {
    if (repeated_letter[letter]) {
      repeated_letter[letter]++;
    } else {
      repeated_letter[letter] = 1;
    }
  }
  for (letter of lowerWord) {
    if (repeated_letter[letter] > 1) {
      Encode += ")";
    } else {
      Encode += "(";
    }
  }
  return Encode;
}

duplicateEncode("din"); //"()()()");
