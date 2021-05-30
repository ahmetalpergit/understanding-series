import { useState, useRef, useEffect } from 'react';

const SimpleInput = (props) => {

  const nameInputRef = useRef();
  const [input, setInput] = useState('');
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);

  useEffect(() => {
    if (inputIsValid) console.log('valid input');
  }, [inputIsValid]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    setInputIsTouched(true);
    if (input.trim() === '') return setInputIsValid(false);

    setInputIsValid(true);
    setInput('');
    //nameInputRef.current.value = ''; //Not IDEAL - DO NOT manipulate DOM directly
  };

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={`form-control ${!inputIsValid && inputIsTouched ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={inputChangeHandler} value={input} ref={nameInputRef} />
        {!inputIsValid && inputIsTouched && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
