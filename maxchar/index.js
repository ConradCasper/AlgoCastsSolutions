// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


function maxChar(str) {
    let charMap = {};
    let count = 0;
    let maxChar = '';
    
    for (let char of str){
        charMap[char] = charMap[char]++ || 1
    }

    
    for (let char in charMap){
        if (charMap[char] > count){
            count = charMap[char]
            maxChar = char
        }
    }

    return maxChar

}


// function maxChar(str) {
//     let chars = {};
//     let count = 0

    
//     for (let char of str){
//         chars[char] = chars[char]++ || 1
//     }

    

//     for (const char in chars){
//         if (chars[char] > count){
//             count = chars[char]
//         }
//     }

//     for (const char in chars){
//         if (chars[char] === count){
//             return char
//         }
//     }

// }