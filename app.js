'use strict'
//「１」から「コマンドラインで与えた引数の数字」までを足す
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);