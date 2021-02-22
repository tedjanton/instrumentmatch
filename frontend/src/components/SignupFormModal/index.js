import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({ setShowMenu }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="signup-button-modal" onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => {
          setShowModal(false)
          setShowMenu(false)
        }}>
          <SignupForm setShowMenu={setShowMenu}/>
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
