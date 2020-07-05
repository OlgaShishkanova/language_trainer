import React, { Suspense } from "react";
import './i18n'
import { Router } from "@reach/router";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header/Header";
import LoginForm from "./components/Forms/LoginForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ForgotPassword from "./components/Forms/ForgotPassword/ForgotPassword";
import NotFound from "./pages/NotFound";
import VideoCatalog from "./pages/VideoCatalog";
import SettingsForm from "./components/Forms/SettingsForm";

const App: React.FC = () => {
  return (
    <div className="">
      <Suspense fallback={null}>
        <Header />
        <div className="container border-v-gradient min-vh-100 pt-4">
          <Router>
            <VideoCatalog path="/" />
            <VideoPage path="/video" />
            <LoginForm path="/login" />
            <RegistrationForm path="/registration" />
            <ForgotPassword path="/forgot-password" />
            <SettingsForm path="/settings"/>
            <NotFound path="/404" />
          </Router>
        </div>
      </Suspense>
    </div>
  );
};
export default App;
