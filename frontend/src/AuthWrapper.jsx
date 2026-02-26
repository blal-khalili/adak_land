import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Navigate } from "react-router";
import { checkAuth } from "../utils/auth/auth";


function AuthWrapper() {
  let navigate = useNavigate();
  // Navigate({to:'/'})

  useEffect(()=>{
    if(checkAuth()){
      navigate('/RegistrationLogin')
    }else{
    }
  },[])
  
  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <h1>hiiiiiiiiiiiiiiiiiiiiiiii im auth wrapper</h1>
      <Outlet></Outlet>
    </>
  );
}

export default AuthWrapper;