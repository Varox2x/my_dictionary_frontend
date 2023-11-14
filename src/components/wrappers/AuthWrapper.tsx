import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AUTH_ENUM, AuthType } from "../../global/types";
import authHeader from "../../api/helpers/authHeader";

type Props = {
  children: JSX.Element;
};



const AuthWrapper = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<AuthType>(AUTH_ENUM.LOADING);
  useEffect(() => {
    if (authHeader('access_token')) {
      setIsAuth(AUTH_ENUM.OK);
    } else {
      setIsAuth(AUTH_ENUM.NO);
    }
  }, []);


  return (
    <div>
      {isAuth === AUTH_ENUM.NO && <Navigate to="/login" replace={true} />}
      {isAuth === AUTH_ENUM.LOADING && <p>LOADING</p>}
      {isAuth === AUTH_ENUM.OK && children}
    </div>
  );
};

export default AuthWrapper;
