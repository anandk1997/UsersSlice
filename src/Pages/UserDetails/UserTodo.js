import React from "react";
import ComingSoon from "../../Components/ComingSoon";
import FloatingChat from "../../Components/FloatingChat";
import DetailsPage from "../DetailsPage";

const UserTodo = () => (
  <DetailsPage Page={4} PageName="ToDo">
    <ComingSoon />
    <FloatingChat />
  </DetailsPage>
);

export default UserTodo;
