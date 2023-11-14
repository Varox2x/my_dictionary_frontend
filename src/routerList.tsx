import { FC } from "react";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import SetPage from "./components/pages/SetPage";
import HomeUserPage from "./components/pages/HomeUserPage";
import SettingsPage from "./components/pages/SettingsPage";
import CreateNewSetPage from "./components/pages/CreateNewSetPage";

export type RouterListElementType = {
  url: string;
  component: FC;
  isPublic: boolean;
};

export type RouterList = {
  [key: string]: RouterListElementType;
};

const routerList: RouterList = {
  LoginPage: {
    url: "login",
    component: LoginPage,
    isPublic: true,
  },
  RegisterPage: {
    url: "register",
    component: RegisterPage,
    isPublic: true,
  },
  SetPage: {
    url: "set",
    component: SetPage,
    isPublic: false,
  },
  HomeUserPage: {
    url: "home",
    component: HomeUserPage,
    isPublic: false,
  },
  SettingsPage: {
    url: "settings",
    component: SettingsPage,
    isPublic: false,
  },
  CreateNewSetPage: {
    url: "newSet",
    component: CreateNewSetPage,
    isPublic: false,
  },
};

export default routerList;
