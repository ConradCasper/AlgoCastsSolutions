// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let char = '';
    let count = 0;

    for (let char of str) {
        if(charMap[char]){
          charMap[char]++
        } else {
          charMap[char] = 1;
        }
    }
    
    for (const hello in charMap){
      if (charMap[hello] > count){
        count = charMap[hello];
        char = hello;
      }
    }
    return char;
}

module.exports = maxChar;