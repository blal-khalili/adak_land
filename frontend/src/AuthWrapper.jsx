import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { checkAuth } from "../utils/auth/auth";
import authStore from "../stores/authStore";
import useCheckAuth from "./hooks/useCheckAuth";

function AuthWrapper() {
  let navigate = useNavigate();
  const [isExpired] = useCheckAuth()

  return (
    <>
      {isExpired ?
        navigate('/RegistrationLogin') :
        <Outlet></Outlet>
      }
    </>
  );
}

export default AuthWrapper;