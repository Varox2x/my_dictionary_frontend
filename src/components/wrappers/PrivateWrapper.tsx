import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { StoreProvider } from "../../store/StoreProvider";

const PrivateWrapper = () => {
  useEffect(() => {
    console.log("RELOADING PRIVATE LAYOUT WRAPPER");
  }, []);

  return (
    <StoreProvider>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </StoreProvider>
  );
};

export default PrivateWrapper;
