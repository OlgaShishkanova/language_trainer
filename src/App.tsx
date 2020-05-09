import React from "react";
import { Router } from "@reach/router";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="">
      <Header />
        <div className="container border-v-gradient vh-100 pt-2">
          <Router>
            <VideoPage path="/video" />
          </Router>
        </div>
    </div>
  );
};

export default App;
