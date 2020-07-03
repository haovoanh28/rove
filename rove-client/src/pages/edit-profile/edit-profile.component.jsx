import React from "react";

import { EditProfileContainer } from "./edit-profile.styles";

import AvatarAndPhotos from "../../components/avatar-and-photos/avatar-and-photos.component";
import EditProfileForm from "../../components/edit-profile-form/edit-profile-form.component";
import Modal from "../../components/modal/modal.component";

const EditProfile = () => {
  return (
    <>
      <Modal />
      <EditProfileContainer>
        <AvatarAndPhotos />
        <EditProfileForm />
      </EditProfileContainer>
    </>
  );
};

export default EditProfile;
