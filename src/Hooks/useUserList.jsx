import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAsync } from "../Redux/UserThunks";

export const useUserList = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return { users, status };
};
