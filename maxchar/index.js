// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    let chars = {};

    for (let char of str){
        chars[char] = chars[char]++ || 1
    }

    let count = 0

    for (const char in chars){
        if (chars[char] > count){
            count = chars[char]
        }
    }

    for (const char in chars){
        if (chars[char] === count){
            return char
        }
    }

}