import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userList } from "../components/userSlice";

export const UserHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1", {
      headers: new Headers({ "content-type": "application/json" }),
    })
      .then((res) => res.json())
      .then((res) => dispatch(userList(res.data)));
  }, []);

  const users = useSelector((state) => state.user.userList);

  return {
    users,
  };
};
