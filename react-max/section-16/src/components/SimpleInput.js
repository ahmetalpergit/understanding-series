import { useState } from 'react';

const SimpleInput = (props) => {

  const [input, setInput] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = input.trim() !== '';
  const inputHasFailedValidation = !inputIsValid && inputIsTouched;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (inputIsValid && inputIsTouched) {
      setInput('');
      setInputIsTouched(false);
    }
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputIsTouched(true);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={`form-control ${inputHasFailedValidation ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputChangeHandler} onBlur={inputBlurHandler} value={input} />
        {inputHasFailedValidation && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
