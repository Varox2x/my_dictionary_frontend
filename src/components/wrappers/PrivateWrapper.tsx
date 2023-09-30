import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PrivateWrapper = () => {
  useEffect(() => {
    console.log("RELOADING PRIVATE LAYOUT WRAPPER");
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateWrapper;
