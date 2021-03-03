import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import LoginForm from './LoginForm';


function PictureModal({ image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal-image-container">
      <img src={image.imgSrc} />
    </div>
  );
}

export default PictureModal;
