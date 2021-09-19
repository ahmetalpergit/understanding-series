function add(n1: number, n2: number) {
    return n1 + n2;
}

//void return type - doesn't return anything
function printResult(num: number): void {
    console.log('The result is: ' + num);
}

//can be undefined type without error since it has return statement
function voidResult(num: number): undefined {
    console.log('The result is: ' + num);
    return;
}

printResult(add(5, 10));

//Best is to let functions infer the return types unless you specifially want a definite return type.
