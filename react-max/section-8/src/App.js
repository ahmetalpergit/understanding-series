import React, { useState } from 'react';
import Main from './Components/Containers/Main';
import CardContainer from './Components/Containers/CardContainer';
import Form from './Components/Form/Form';
import User from './Components/User/User';
import Modal from './Components/Modal/Modal';

function App() {

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const getUserHandler = (user) => {
    const newUser = { ...user, id: Math.random().toString() };
    setUsers(prev => [...prev, newUser]);
  };

  const showModalHandle = () => {
    setModalMessage('error');
    setShowModal(true);
  };

  const closeModalHandle = (e) => {
    if (e.target.className.includes('ModalContainer') || e.target.className.includes('Button')) setShowModal(false);
    return;
  };


  return (
    <Main>
      {showModal && <Modal closeModal={closeModalHandle} message={modalMessage} />}
      <CardContainer>
        <Form getUserData={getUserHandler} onInvalidInput={showModalHandle} />
      </CardContainer>
      {users.length > 0 &&
        <CardContainer>
          {users.map(user => <User key={user.id} name={user.name} age={user.age} />)}
        </CardContainer>}
    </Main>
  );
}

export default App;
