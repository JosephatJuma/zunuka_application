import { useSelector } from "react-redux";
import React from "react";

const useUser = () => {
  const user = useSelector((state) => state.login.user);
  return user;
};

export default useUser;
