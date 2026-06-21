// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//

// function findSmallestInt(arr) {
//     let smallestResult = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallestResult) {
//             smallestResult = arr[i];
//         }
//
//     }
//
//     return smallestResult;
// }

function findSmallestIntMathMin(arr) {
    return Math.min(...arr);
}

// Math.min(...arr) разворачивает весь массив в отдельные аргументы функции, поэтому на очень больших массивах
// может возникнуть ошибка из-за превышения допустимого количества аргументов.
// Обычный цикл for работает надёжнее и использует меньше дополнительной памяти.

function findSmallestIntForLoop(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const largeArray = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 2000000) - 1000000);

console.time('Math.min');
findSmallestIntMathMin(largeArray);
console.timeEnd('Math.min');

console.time('For loop');
findSmallestIntForLoop(largeArray);
console.timeEnd('For loop');