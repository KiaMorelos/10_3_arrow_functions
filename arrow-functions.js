const double = arr => arr.map(val => val * 2);

// const arr = [2, 3, 6, 78, 99, 104, 23]
// const doubled = arr.map(val => val * 2) // I see this behaves differently than the above line, but was my first try. This only works with the array saved in arr. The uncommented line can be used with any array that is passed in.

const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);


// Coding along with video, for my own notes, not hw:
// [2, 3, 6, 78, 99, 104, 23].reduce((max, curnum) => {
//     return Math.max(max, curnum)
// });
