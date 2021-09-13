function add(n1, n2, result, phrase) {
    if (result) {
        console.log(phrase + (n1 + n2));
    }
    else {
        return n1 + n2;
    }
}
var number1;
number1 = 5;
var number2 = 2.8;
var showResult = true;
var showPhrase = 0;
add(number1, number2, showResult, showPhrase);
