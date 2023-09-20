import React, { useContext } from "react";
import { AuthContex } from "../../contex/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loding from "../../Myminycomponent/loding/Loding";

const Privaterought = ({ children }) => {
  const { user,loding } = useContext(AuthContex);
  const location = useLocation();
  if(loding){
    return <Loding></Loding>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Privaterought;
