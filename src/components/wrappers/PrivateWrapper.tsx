import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "./PageWrapper";

const PrivateWrapper = () => {
  useEffect(() => {
    console.log("RELOADING PRIVATE LAYOUT WRAPPER");
  }, []);

  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};

export default PrivateWrapper;
