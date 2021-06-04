import { useState } from 'react';

export const useInput = (validateValue) => {

    const [input, setInput] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const inputIsValid = validateValue(input);
    const inputHasError = !inputIsValid && isTouched;

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setInput('');
        setIsTouched(false);
    };

    return {
        enteredInput: input,
        inputIsTouched: isTouched,
        inputIsValid,
        inputHasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
};