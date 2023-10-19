import { Outlet } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import { StoreProvider } from "../../store/StoreProvider";
import AuthWrapper from "./AuthWrapper";

const PrivateWrapper = () => {

  return (
    <AuthWrapper>
      <StoreProvider>
        <PageWrapper>
          <Outlet />
        </PageWrapper>
      </StoreProvider>
    </AuthWrapper>
  );
};

export default PrivateWrapper;
