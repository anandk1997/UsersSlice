import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfileImage from "../../Components/ProfileImage";
import { useUserDetails } from "../../Hooks/useUserDetails";
import DetailsPage from "../DetailsPage";
import "../../Styles/profile.scss";
import FloatingChat from "./../../Components/FloatingChat";

const UserProfile = () => {
  const { selectedUser } = useUserDetails();

  const text = (Label, Value) => (
    <div className="d-flex justify-content-center">
      <span className="me-2">{Label} :</span>
      <strong>{Value}</strong>
    </div>
  );

  return (
    <>
      <DetailsPage Page={1} PageName="Profile">
        <Row>
          <Col xl={4} lg={6} md={6} sm={12} xs={12}>
            <div className="d-flex">
              <div className="profileLeft w-100">
                <div className="d-flex justify-content-center mt-4">
                  <ProfileImage
                    SRC={selectedUser?.profilepicture}
                    HEIGHT="180"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <div>
                    <div className="bold text-center">{selectedUser?.name}</div>
                    {text("Username", selectedUser?.username)}
                    {text("Email", selectedUser?.email)}
                    {text("Phone", selectedUser?.phone)}
                    {text("Website", selectedUser?.website)}
                    <hr />
                    <span className="text-center d-flex justify-content-center">
                      Company
                    </span>
                    {text("Name", selectedUser?.company?.name)}
                    {text("CatchPhrase", selectedUser?.company?.catchPhrase)}
                    {text("bs", selectedUser?.company?.bs)}
                  </div>
                </div>
              </div>
              <div>
                <span className="devider"></span>
              </div>
            </div>
          </Col>

          <Col xl={8} lg={6} md={6} sm={12} xs={12}>
            <span className="text-center d-flex justify-content-center">
              Address:
            </span>
            {text("Street", selectedUser?.address?.street)}
            {text("Suite", selectedUser?.address?.suite)}
            {text("City", selectedUser?.address?.city)}
            {text("Zipcode", selectedUser?.address?.zipcode)}
          </Col>
        </Row>
        <FloatingChat />
      </DetailsPage>
    </>
  );
};

export default UserProfile;
