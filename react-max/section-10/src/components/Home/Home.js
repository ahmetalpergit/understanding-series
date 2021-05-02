import React, { useContext } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ContextAuth from '../store/context-auth';
import classes from './Home.module.css';

const Home = (props) => {

  const context = useContext(ContextAuth);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={context.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
