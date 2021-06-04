import { useReducer } from 'react';

export const useInput = (validateValue) => {

    const initialState = {
        input: '',
        isTouched: false
    };

    const inputStateReducer = (state, action) => {
        if (action.type === 'INPUT') {
            return {
                input: action.value,
                isTouched: state.isTouched
            };
        }
        if (action.type === 'BLUR') {
            return {
                input: state.input,
                isTouched: true
            };
        }
        if (action.type === 'RESET') {
            return {
                input: '',
                isTouched: false
            };
        }
        return state;
    };

    const [state, dispatch] = useReducer(inputStateReducer, initialState);

    const inputIsValid = validateValue(state.input);
    const inputHasError = !inputIsValid && state.isTouched;

    const inputChangeHandler = (e) => {
        dispatch({
            type: 'INPUT',
            value: e.target.value
        });
    };

    const inputBlurHandler = () => {
        dispatch({
            type: 'BLUR',
        });
    };

    const reset = () => {
        dispatch({
            type: 'RESET',
        });
    };

    return {
        enteredInput: state.input,
        inputIsTouched: state.isTouched,
        inputIsValid,
        inputHasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    };
};