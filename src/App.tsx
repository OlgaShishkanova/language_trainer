import React from "react";
import { Router } from "@reach/router";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header/Header";
import LoginForm from "./components/Forms/LoginForm";
import RegistrationForm from "./components/Forms/RegistrationForm";

const App: React.FC = () => {
  return (
    <div className="">
      <Header />
        <div className="container border-v-gradient vh-100 pt-4">
          <Router>
            <VideoPage path="/video" />
            <LoginForm path="/login" />
            <RegistrationForm path="/registration" />
          </Router>
        </div>
    </div>
  );
};
export default App;
