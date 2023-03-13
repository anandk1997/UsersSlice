import React, { useReducer } from "react";
import "../Styles/chat.scss";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsChatRight } from "react-icons/bs";
import { useUserList } from "./../Hooks/useUserList";
import UserList from "./UserList";

const FloatingChat = () => {
  const [showChat, setShowChat] = useReducer((show) => !show, true);
  const { users, status } = useUserList();

  const toggleChat = () => (showChat ? <FaAngleDown /> : <FaAngleUp />);

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="chat">
        <div className="chatHeader">
          <BsChatRight /> Chats
          <span className="float-end" role="button" onClick={setShowChat}>
            {toggleChat()}
          </span>
        </div>

        {showChat && (
          <div className="chatBody">
            <UserList users={users} />
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingChat;
