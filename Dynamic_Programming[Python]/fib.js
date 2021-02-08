// memoization
//      js Obj(key(arg): value (will be returned _value_))   

memo = {}

const fib = (n) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1

    memo[n] = fib(n - 1) + fib(n - 2)
    
    return memo[n]
};





// test
console.log(fib(1)); // 1
console.log(memo)
console.log(fib(2)); // 1
console.log(memo)
console.log(fib(3)); // 2
console.log(memo)
console.log(fib(4)); // 3
console.log(memo)
console.log(fib(5)); // 5
console.log(memo)
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13

