import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { checkAuth } from "../utils/auth/auth";


function AuthWrapper() {
  let navigate = useNavigate();

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
      <Outlet></Outlet>
    </>
  );
}

export default AuthWrapper;