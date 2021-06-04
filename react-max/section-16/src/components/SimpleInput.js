import { useInput } from '../hooks/useInput';

const SimpleInput = (props) => {

  const {
    enteredInput: enteredName,
    inputIsTouched: nameIsTouched,
    inputIsValid: nameIsValid,
    inputHasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset
  } = useInput(value => value.trim() !== '');

  const {
    enteredInput: enteredEmail,
    inputIsTouched: emailIsTouched,
    inputIsValid: emailIsValid,
    inputHasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) formIsValid = true;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (formIsValid && nameIsTouched && emailIsTouched) {
      nameReset();
      emailReset();
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className={`form-control ${nameHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={`form-control ${emailHasError ? 'invalid' : ''}`}>
        <label htmlFor='mail'>E-mail</label>
        <input type='text' id='mail' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailHasError && <p className="error-text">Email must not be empty or invalid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
