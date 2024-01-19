import { ReactNode } from "react";
import { lazy } from "react";

const LoginPage = lazy(() => import("./components/pages/LoginPage"))
const RegisterPage = lazy(() => import("./components/pages/RegisterPage"))
const SetPage = lazy(() => import("./components/pages/SetPage"))
const HomeUserPage = lazy(() => import("./components/pages/HomeUserPage"))
const SettingsPage = lazy(() => import("./components/pages/SettingsPage"))
const CreateNewSetPage = lazy(() => import("./components/pages/CreateNewSetPage"))

export type RouterListElementType = {
  url: string;
  component: ReactNode;
  isPublic: boolean;
};

export type RouterList = {
  [key: string]: RouterListElementType;
};

const routerList: RouterList = {
  LoginPage: {
    url: "login",
    component: <LoginPage />,
    isPublic: true,
  },
  RegisterPage: {
    url: "register",
    component: <RegisterPage />,
    isPublic: true,
  },
  SetPage: {
    url: "set/:id",
    component: <SetPage />,
    isPublic: false,
  },
  HomeUserPage: {
    url: "home",
    component: <HomeUserPage />,
    isPublic: false,
  },
  SettingsPage: {
    url: "settings",
    component: <SettingsPage />,
    isPublic: false,
  },
  CreateNewSetPage: {
    url: "newSet",
    component: <CreateNewSetPage />,
    isPublic: false,
  },
};

export default routerList;
