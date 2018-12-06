'use strict'

// Fibonacci series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibbonaci(input) {
    
    // suku ke 1 dan ke 2
    if (input === 1){
        return 0
    } else if (input === 2){
        return 1
    }

    return fibbonaci(input-1) + fibbonaci(input-2)
}

// testing 
console.log(fibbonaci(2)) // 1
console.log(fibbonaci(3)) // 1
console.log(fibbonaci(5)) // 3
console.log(fibbonaci(9)) // 21
