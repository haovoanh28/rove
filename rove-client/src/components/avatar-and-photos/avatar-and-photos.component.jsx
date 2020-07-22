import React from "react";
import { connect } from "react-redux";

import {
  AvatarAndPhotosContainer,
  AvatarContainer,
  PhotosContainer,
} from "./avatar-and-photos.styles";

import Button from '../button/button.component';

import { selectPhotos, selectAvatar } from "../../redux/user/user.selectors";

const AvatarAndPhotos = ({ avatar, photos }) => {
  const displayModal = () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  const setUploadImageType = (type) => {
    const upload_image_type = document.getElementById("upload_image_type");
    upload_image_type.innerText = type;
  }

  const uploadAvatar = e => {
    displayModal();
    setUploadImageType("avatar");
  }

  const uploadPhoto = e => {
    displayModal();
    setUploadImageType("photo");
  }

  return (
    <AvatarAndPhotosContainer>
      <AvatarContainer>
        <img src={avatar} alt="user avatar" id="avatar"/>
        <div onClick={uploadAvatar}><p>Change avatar</p></div>
      </AvatarContainer>

      <PhotosContainer>
        <div>
          {photos.map((photo) => (
            <div>
              <img src={photo} alt="user photos" />
            </div>
          ))}
        </div>
      </PhotosContainer>
      <Button primary onClick={uploadPhoto}>+</Button>
    </AvatarAndPhotosContainer>
  );
};

const mapStateToProps = (state) => ({
  avatar: selectAvatar(state),
  photos: selectPhotos(state),
});

export default connect(mapStateToProps)(AvatarAndPhotos);
