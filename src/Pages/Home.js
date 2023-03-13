import React from "react";
import UserList from "../Components/UserList";
import { useUserList } from "../Hooks/useUserList";
import homeStyle from "../Styles/home.module.scss";

const Home = () => {
  const { users, status } = useUserList();

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className={homeStyle.main}>
        <div>
          <h2>Select an account</h2>

          <UserList users={users} />
        </div>
      </div>
    </>
  );
};

export default Home;
