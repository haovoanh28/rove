import React, { useState } from "react";
import { connect } from "react-redux";

import { userUpdateAvatarStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  StyledInputFileType,
  ImageContainer,
  UploadImageFormContainer,
  ButtonsContainer,
} from "./upload-image-form.styles";

import Button from "../button/button.component";

const UploadImageForm = ({ currentUser, userUpdateAvatarStart }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasUserUploadedImage, setHasUserUploadedImage] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    previewImageFromInput(e);
  };

  const handleFileUpload = async (e) => {
    console.log(selectedFile);
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    const { token, _id } = currentUser;
    const data = {
      _id,
      token,
      formData,
    };

    userUpdateAvatarStart(data);
  };

  const previewImageFromInput = (e) => {
    const previewImage = document.getElementById("preview-image");
    previewImage.src = URL.createObjectURL(e.target.files[0]);
    previewImage.onload = () => {
      URL.revokeObjectURL(previewImage.src);
    };
    previewImage.style.display = "block";

    const tempText = document.getElementById("temp-text");
    tempText.style.display = "none";

    setHasUserUploadedImage(true);
  };

  return (
    <UploadImageFormContainer>
      <StyledInputFileType
        type="file"
        name="upload-file"
        id="uploadFile"
        onChange={handleFileChange}
      />
      <ButtonsContainer>
        <Button as="label" htmlFor="uploadFile">
          Choose your image
        </Button>
        <Button
          id="upload-button"
          disabled={!hasUserUploadedImage}
          primary={true}
          onClick={handleFileUpload}
        >
          Upload your image
        </Button>
      </ButtonsContainer>
      <ImageContainer>
        <p id="temp-text">Your image here</p>
        <img src="" alt="your" id="preview-image" />
      </ImageContainer>
    </UploadImageFormContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  userUpdateAvatarStart: (data) => dispatch(userUpdateAvatarStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageForm);
