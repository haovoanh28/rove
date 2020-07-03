import React from "react";
import { connect } from "react-redux";

import {
  AvatarAndPhotosContainer,
  AvatarContainer,
  PhotosContainer,
} from "./avatar-and-photos.styles";

import { selectPhotos, selectAvatar } from "../../redux/user/user.selectors";

const AvatarAndPhotos = ({ avatar, photos }) => {
  const handleClick = e => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  }

  return (
    <AvatarAndPhotosContainer>
      <AvatarContainer>
        <img src={avatar} alt="user avatar" id="avatar"/>
        <div onClick={handleClick}><p>Change avatar</p></div>
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
    </AvatarAndPhotosContainer>
  );
};

const mapStateToProps = (state) => ({
  avatar: selectAvatar(state),
  photos: selectPhotos(state),
});

export default connect(mapStateToProps)(AvatarAndPhotos);
