function add(n1: number, n2: number) {
    return n1 + n2;
}

//void return type - doesn't return anything
function printResult(num: number): void {
    console.log('The result is: ' + num);
}

function addAndHandle(
    num1: number,
    num2: number,
    cb: (result: number) => void
) {
    const result = num1 + num2;
    cb(result);
}

//works because printResult satisfies the cb function type
addAndHandle(10, 20, printResult);

//works because we define the function for cb and it passes the requirements
addAndHandle(20, 30, (result: number) => {
    console.log(result);
});
