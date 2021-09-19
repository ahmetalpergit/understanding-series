function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(5, 10, 'as-number');
var combineNames = combine('Max', 'Anna', 'as-text');
var combineBoth = combine('5', 5, 'as-number');
console.log(combineAges);
console.log(combineNames);
console.log(combineBoth);
