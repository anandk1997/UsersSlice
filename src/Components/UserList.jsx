import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({ users }) => {
  const navigate = useNavigate();

  return (
    <>
      <ul>
        {users?.map(({ id, name, profilepicture }) => (
          <li key={id} onClick={() => navigate(`/${id}/profile`)}>
            <img src={profilepicture} alt="" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;
