function add(n1, n2) {
    return n1 + n2;
}
//void return type - doesn't return anything
function printResult(num) {
    console.log('The result is: ' + num);
}
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
//works because printResult satisfies the cb function type
addAndHandle(10, 20, printResult);
//works because we define the function for cb and it passes the requirements
addAndHandle(20, 30, function (result) {
    console.log(result);
});
