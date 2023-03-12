import React from "react";
import ComingSoon from "../../Components/ComingSoon";
import FloatingChat from "../../Components/FloatingChat";
import DetailsPage from "../DetailsPage";

const UserPosts = () => (
  <DetailsPage Page={2} PageName="Posts">
    <ComingSoon />
    <FloatingChat />
  </DetailsPage>
);

export default UserPosts;
