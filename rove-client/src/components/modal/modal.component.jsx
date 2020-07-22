import React from "react";

import UploadImageForm from "../upload-image-form/upload-image-form.component";

import { ModalContainer, StyledModal } from "./modal.styles";

const Modal = () => {
  const handleClick = (e) => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  return (
    <ModalContainer id="modal">
      <StyledModal>
        <div className="modal_header"></div>
        <label id="close" onClick={handleClick}>
          X
        </label>
        <UploadImageForm />
      </StyledModal>
    </ModalContainer>
  );
};

export default Modal;
