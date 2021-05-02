import React, { useContext } from 'react';
import ContextAuth from '../store/context-auth';

import classes from './Navigation.module.css';

const Navigation = (props) => {

  const context = useContext(ContextAuth);

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
            <button onClick={context.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
