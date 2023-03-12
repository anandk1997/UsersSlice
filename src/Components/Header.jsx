import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import "../Styles/header.scss";
import ProfileImage from "./ProfileImage";
import { useUserDetails } from "./../Hooks/useUserDetails";
import { useNavigate } from "react-router-dom";

const Header = ({ PageName }) => {
  const { selectedUser } = useUserDetails();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-100">
        <div className="d-flex justify-content-between px-5 py-3">
          <div className="">
            <h4>{PageName}</h4>
          </div>

          <div className="">
            <Dropdown>
              <Dropdown.Toggle
                className="d-flex align-items-center"
                variant=""
                id="dropdown-basic"
              >
                <ProfileImage SRC={selectedUser?.profilepicture} HEIGHT="20" />
                <span className="ps-2">{selectedUser?.name}</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="d-flex justify-content-center align-items-center">
                  <ProfileImage
                    SRC={selectedUser?.profilepicture}
                    HEIGHT="80"
                  />
                </Dropdown.Item>

                <Dropdown.Item>{selectedUser?.name}</Dropdown.Item>
                <Dropdown.Item>{selectedUser?.email}</Dropdown.Item>

                <div className="d-flex justify-content-center align-items-center">
                  <Button className="signOut" onClick={() => navigate("/")}>
                    Sign Out
                  </Button>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <hr className="headerHr" />
      </div>
    </>
  );
};

export default Header;
