function combine(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
) {
    let result;

    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(5, 10, 'as-number');
const combineNames = combine('Max', 'Anna', 'as-text');
const combineBoth = combine('5', 5, 'as-number');

console.log(combineAges);
console.log(combineNames);
console.log(combineBoth);
