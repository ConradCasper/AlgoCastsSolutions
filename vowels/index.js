// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0;
}



// function vowels(str) {
//     let vowels = [];

//     for (char of str.toLowerCase()){
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//             vowels.push(char)
//         }
//     }
//     if (vowels === []){
//         return 0
//     } else {
//         return vowels.length
//     }
// }