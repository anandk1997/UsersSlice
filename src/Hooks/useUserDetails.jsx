import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserAsync } from "../Redux/UserThunks";
import { useEffect } from "react";

export const useUserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserAsync(id));
  }, [dispatch, id]);

  return { selectedUser };
};
