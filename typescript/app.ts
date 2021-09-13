function add(n1: number, n2: number, result: boolean, phrase: string) {
  if (result) {
    console.log(phrase + (n1 + n2));
  } else {
    return n1 + n2;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const showResult = true;
const showPhrase = 0;

add(number1, number2, showResult, showPhrase);
