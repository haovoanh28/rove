import React from "react";
import {withRouter} from 'react-router-dom';

import { PhotosContainer, ImageContainer } from "./photos.styles";

const Photos = (props) => {
  const photos = props.history.location.state.user.photos;
  return (
    <PhotosContainer>
      {photos.map((photoUrl) => (
        <ImageContainer>
          <img src={photoUrl} alt="libary" />
        </ImageContainer>
      ))}
    </PhotosContainer>
  );
};

export default withRouter(Photos);
