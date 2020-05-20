// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let step = 1;
    while(step <= n) {
        let steps = '';
        for(let i = 0; i < step; i++) {
            steps += '#';
        }
        for (let i = 0; i < (n - step); i++) {
            steps += ' ';
        }
        console.log(steps)
        step++
    }
}

module.exports = steps;
