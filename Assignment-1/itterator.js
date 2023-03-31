function fib(n){
    if(n <= 0) return "Invalid number!";
    if(n === 1) return [0];
    if(n === 2) return [0,1];
    arr = [0,1];
    for(let i = 2; i<n; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr;
}

console.log(fib(-2)); // "Invalid number!"
console.log(fib(0)); // "Invalid number!"
console.log(fib(1)); // [ 0 ]
console.log(fib(2)); // [ 0, 1 ]
console.log(fib(3)); // [ 0, 1, 1 ]
console.log(fib(5)); // [ 0, 1, 1, 2, 3 ]

