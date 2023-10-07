import { useEffect, useState } from "react";
import getCurrentUserTokens from "../../api/helpers/getCurrentUserTokens";
import { Navigate } from "react-router-dom";
import { AUTH_ENUM, AuthType } from "../../global/types";

type Props = {
  children: JSX.Element;
};



const AuthWrapper = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<AuthType>(AUTH_ENUM.LOADING);

  useEffect(() => {
    if (getCurrentUserTokens()) {
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
