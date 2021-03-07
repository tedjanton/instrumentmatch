import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

function PictureModal({ image }) {

  return (
    <div className="modal-image-container">
      <img src={image.imgSrc} />
    </div>
  );
}

export default PictureModal;
