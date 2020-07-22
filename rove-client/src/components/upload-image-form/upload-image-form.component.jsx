import React, { useState } from "react";
import { connect } from "react-redux";

import {
  userUpdateAvatarStart,
  userAddPhotoStart,
} from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  StyledInputFileType,
  ImageContainer,
  UploadImageFormContainer,
  ButtonsContainer,
  UploadImageTypeContainer,
} from "./upload-image-form.styles";

import Spinner from "../spinner/spinner.component";
import Button from "../button/button.component";

const UploadImageForm = ({
  currentUser,
  isPending,
  userUpdateAvatarStart,
  userAddPhotoStart,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [hasUserUploadedImage, setHasUserUploadedImage] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    previewImageFromInput(e);
  };

  const updateStart = (type) => {
    const formData = new FormData();

    if (type.toLowerCase() === "avatar") {
      formData.append("avatar", selectedFile);
    }

    if (type.toLowerCase() === "photo") {
      formData.append("photo", selectedFile);
    }

    const { token, _id } = currentUser;
    const data = {
      _id,
      token,
      formData,
    };

    if (type.toLowerCase() === "avatar") {
      userUpdateAvatarStart(data);
    }

    if (type.toLowerCase() === "photo") {
      userAddPhotoStart(data);
    }
  };

  const handleFileUpload = async (e) => {
    const type = document.getElementById("upload_image_type").innerText;

    updateStart(type);
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
    <>
      {isPending ? <Spinner /> : <></>}
      <UploadImageTypeContainer>
        <h2>
          Upload your <span id="upload_image_type">avatar</span>
        </h2>
      </UploadImageTypeContainer>
      <UploadImageFormContainer>
        <StyledInputFileType
          type="file"
          name="upload-file"
          id="uploadFile"
          onChange={handleFileChange}
        />
        <ButtonsContainer className="big_screen">
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
        <Button as="label" htmlFor="uploadFile" className="small_screen">
          Choose your image
        </Button>
        <Button
          id="upload-button"
          disabled={!hasUserUploadedImage}
          primary={true}
          onClick={handleFileUpload}
          className="small_screen"
        >
          Upload your image
        </Button>
        <ImageContainer>
          <p id="temp-text">Your image here</p>
          <img src="" alt="your" id="preview-image" />
        </ImageContainer>
      </UploadImageFormContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  isPending: state.user.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  userUpdateAvatarStart: (data) => dispatch(userUpdateAvatarStart(data)),
  userAddPhotoStart: (data) => dispatch(userAddPhotoStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageForm);
