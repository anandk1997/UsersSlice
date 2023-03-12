import React from "react";
import ComingSoon from "../../Components/ComingSoon";
import FloatingChat from "../../Components/FloatingChat";
import DetailsPage from "../DetailsPage";

const UserGallery = () => (
  <DetailsPage Page={3} PageName="Gallery">
    <ComingSoon />
    <FloatingChat />
  </DetailsPage>
);

export default UserGallery;
