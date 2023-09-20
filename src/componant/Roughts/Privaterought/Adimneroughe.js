import React, { useContext } from 'react';
import { AuthContex } from '../../contex/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../../Myminycomponent/loding/Loding';
import useAdmin from '../../Myminycomponent/hokes/usetoken/useAdmin';

const Adimneroughe = ({children}) => {
    const { user,loding } = useContext(AuthContex);
    const [isAdmin,isadminloding]=useAdmin(user?.email)
    const location = useLocation();
    
    if(loding || isadminloding){
      return <Loding></Loding>
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };
  
export default Adimneroughe;