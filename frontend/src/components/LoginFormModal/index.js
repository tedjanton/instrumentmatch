import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({ setShowMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="login-form-modal" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => {
          setShowModal(false)
          setShowMenu(false)
        }}>
          <LoginForm setShowMenu={setShowMenu}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
