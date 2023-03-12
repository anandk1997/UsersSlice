import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAsync } from "../Redux/UserThunks";
import homeStyle from "../Styles/home.module.scss";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className={homeStyle.main}>
        <div>
          <h2>Select an account</h2>

          <ul>
            {users?.map(({ id, name, profilepicture }) => (
              <li key={id} onClick={() => navigate(`/${id}/profile`)}>
                <img src={profilepicture} alt="" />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
