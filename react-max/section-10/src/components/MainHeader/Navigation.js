import React from 'react';
import ContextAuth from '../store/context-auth';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <ContextAuth.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {context.loginValidation && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {context.loginValidation && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {context.loginValidation && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </ContextAuth.Consumer>
  );
};

export default Navigation;
