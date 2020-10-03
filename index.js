/**
 * Calculate factorial of n. Reminder n! = 1 * 2 * ... * n
 */


function factorialIterative(n){
    if(n === 0){
        return 0;
    }
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }

    return result;
}

function factorialRecursive(n){
    if(n <= 1){
        return n;
    }

    return n * factorialRecursive(n - 1);
}


// function factorialRecursive(n){
//     let result = 1;

//     function factorial(n){
//         if(n <= 1){
//             return n;
//         }
//         result = n * factorial(n - 1);
//         return result
//     }

//     factorial(n)

//     return result;
// }

console.log(factorialIterative(10))
console.log(factorialRecursive(10))
// console.log(factorialIterative(10000))
