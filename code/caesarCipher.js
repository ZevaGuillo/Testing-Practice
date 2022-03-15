function caesarCipher(str, key) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  let string = str.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      let index = alphabet.indexOf(string[i]);
      result += alphabet[(index + key) % 26];
    } else {
      result += " ";
    }
  }

  return result;
}

module.exports = caesarCipher;
