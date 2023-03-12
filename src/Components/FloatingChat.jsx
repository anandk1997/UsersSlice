import React, { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "../Redux/UserThunks";
import "../Styles/chat.scss";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsChatRight } from "react-icons/bs";

const FloatingChat = () => {
  const [showChat, setShowChat] = useReducer((show) => !show, true);
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  const toggleChat = () => (showChat ? <FaAngleDown /> : <FaAngleUp />);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

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
            <ul>
              {users?.map(({ id, name, profilepicture }) => (
                <li key={id}>
                  <img src={profilepicture} alt="" height="20" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingChat;
