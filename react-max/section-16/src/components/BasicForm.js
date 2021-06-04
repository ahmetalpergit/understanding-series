import { useInput } from '../hooks/useInput';

const BasicForm = (props) => {

  const {
    enteredInput: firstname,
    inputIsValid: firstnameIsValid,
    inputHasError: firstnameHasError,
    inputChangeHandler: firstnameChangeHandler,
    inputBlurHandler: firstnameBlurHandler,
    reset: firstnameReset
  } = useInput(value => value.trim() !== '');

  const {
    enteredInput: lastname,
    inputIsValid: lastnameIsValid,
    inputHasError: lastnameHasError,
    inputChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset
  } = useInput(value => value.trim() !== '');

  const {
    enteredInput: email,
    inputIsValid: emailIsValid,
    inputHasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!firstnameIsValid || !lastnameIsValid || !emailIsValid) return;

    firstnameReset();
    lastnameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={`form-control ${firstnameHasError ? 'invalid' : ''}`}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstnameChangeHandler} onBlur={firstnameBlurHandler} value={firstname} />
          {firstnameHasError && <p className="error-text">Enter a valid firstname.</p>}
        </div>
        <div className={`form-control ${lastnameHasError ? 'invalid' : ''}`}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastnameChangeHandler} onBlur={lastnameBlurHandler} value={lastname} />
          {lastnameHasError && <p className="error-text">Enter a valid lastname.</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError ? 'invalid' : ''}`}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} />
        {emailHasError && <p className="error-text">Enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
