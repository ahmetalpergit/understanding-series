import React, { useState } from 'react';
import Main from './Components/Containers/Main';
import CardContainer from './Components/Containers/CardContainer';
import Form from './Components/Form/Form';
import User from './Components/User/User';

function App() {

  const [users, setUsers] = useState([]);

  const getUserHandler = (user) => {
    const newUser = { ...user, id: Math.random().toString() };
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <Main>
      <CardContainer>
        <Form getUserData={getUserHandler} />
      </CardContainer>
      {users.length > 0 &&
        <CardContainer>
          {users.map(user => <User key={user.id} name={user.name} age={user.age} />)}
        </CardContainer>}
    </Main>
  );
}

export default App;
