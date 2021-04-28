import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if (action.type === 'INPUT_PASSWORD') {
    return {
      ...state,
      enteredPassword: action.value
    };
  }
  if (action.type === 'INPUT_EMAIL') {
    return {
      ...state,
      enteredEmail: action.value
    };
  }
  if (action.type === 'VALIDATE_PASSWORD') {
    return {
      ...state,
      passwordIsValid: action.isValid
    };
  }
  if (action.type === 'VALIDATE_EMAIL') {
    return {
      ...state,
      emailIsValid: action.isValid
    };
  }
  if (action.type === 'VALIDATE_FORM') {
    return {
      ...state,
      formIsValid: action.isValid
    };
  }

  return state;
};

const Login = (props) => {

  const initialState = {
    emailIsValid: '',
    passwordIsValid: '',
    formIsValid: false,
    enteredEmail: '',
    enteredPassword: ''
  };

  const [state, dispatcher] = useReducer(emailReducer, initialState);

  //useEffect(() => {
  //  const identifier = setTimeout(() => {
  //    console.log('checking validity');

  //  }, 500);

  //  return () => {
  //    console.log('cleaning');
  //    clearTimeout(identifier);
  //  };
  //}, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatcher({ type: 'INPUT_EMAIL', value: event.currentTarget.value });
    dispatcher({ type: 'VALIDATE_EMAIL', isValid: state.enteredEmail.includes('@') });
    dispatcher({ type: 'VALIDATE_FORM', isValid: state.enteredEmail.includes('@') && state.enteredPassword.trim().length > 6 });
  };

  const passwordChangeHandler = (event) => {
    dispatcher({ type: 'INPUT_PASSWORD', value: event.currentTarget.value });
    dispatcher({ type: 'VALIDATE_PASSWORD', isValid: state.enteredPassword.trim().length > 6 });
    dispatcher({ type: 'VALIDATE_FORM', isValid: state.enteredEmail.includes('@') && state.enteredPassword.trim().length > 6 });
  };

  const validateEmailHandler = () => {
    dispatcher({ type: 'VALIDATE_EMAIL', isValid: state.enteredEmail.includes('@') });
  };

  const validatePasswordHandler = () => {
    dispatcher({ type: 'VALIDATE_PASSWORD', isValid: state.enteredPassword.trim().length > 6 });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.enteredEmail, state.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${state.emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={state.enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${state.passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={state.enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!state.formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
