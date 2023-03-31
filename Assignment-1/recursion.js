function fib(n){
    if(n <= 0) return "Invalid number!";
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    let prev = fib(n-1);
    return [...prev, prev[n-2]+prev[n-3]];
}

console.log(fib(-2)); // "Invalid number!"
console.log(fib(0)); // "Invalid number!"
console.log(fib(1)); // [ 0 ]
console.log(fib(2)); // [ 0, 1 ]
console.log(fib(3)); // [ 0, 1, 1 ]
console.log(fib(5)); // [ 0, 1, 1, 2, 3 ]
