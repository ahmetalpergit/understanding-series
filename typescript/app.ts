function add(n1: number, n2: number) {
    return n1 + n2;
}

//void return type - doesn't return anything
function printResult(num: number): void {
    console.log('The result is: ' + num);
}

// 1- perfectly fine pointer function
let combineValues = add;
console.log(combineValues(5, 10));

// 2- This is how we define a function type (param names don't matter)
let combineValues2: (a: number, b: number) => number = add;

// 3- Throws error because the function we're pointing doesn't satisfy our function type
//let combineValues3: (a: number, b: number) => number = printResult;
