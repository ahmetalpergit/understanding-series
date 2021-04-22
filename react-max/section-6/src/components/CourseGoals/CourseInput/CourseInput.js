import React, { useState } from 'react';
//import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

//const FormControl = styled.div`

//  margin: 0.5rem 0;

//  & label {
//    font-weight: bold;
//    display: block;
//    margin-bottom: 0.5rem;
//    color: ${({ invalid }) => invalid ? 'red' : '#000'}
//  }

//  & input {
//    display: block;
//    width: 100%;
//    border: 1px solid ${({ invalid }) => invalid ? 'red' : '#ccc'};
//    background: ${({ invalid }) => invalid ? 'pink' : 'transparent'};
//    font: inherit;
//    line-height: 1.5rem;
//    padding: 0 0.25rem;
//  }

//  & input:focus {
//    outline: none;
//    background: #fad0ec;
//    border-color: #8b005d;
//  }
//`;

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);


  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) setIsValidInput(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) return setIsValidInput(false);
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div invalid={!isValidInput} className={isValidInput ? styles['form-control'] : `${styles['form-control']} ${styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
