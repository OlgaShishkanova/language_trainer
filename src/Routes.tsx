import React from "react";
import { Router } from "@reach/router";
import VideoPage from "./pages/VideoPage";
import LoginForm from "./components/Forms/LoginForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ForgotPassword from "./components/Forms/ForgotPassword/ForgotPassword";
import NotFound from "./pages/NotFound";
import VideoCatalog from "./pages/VideoCatalog";
import SettingsForm from "./components/Forms/SettingsForm";

const Routes: React.FC = () => {
  return (
    <Router>
      <VideoCatalog path="/" />
      <VideoPage path="/video" />
      <LoginForm path="/login" />
      <RegistrationForm path="/registration" />
      <ForgotPassword path="/forgot-password" />
      <SettingsForm path="/settings" />
      <NotFound path="/404" />
    </Router>
  );
};

export default Routes;
