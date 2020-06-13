import React from "react";
import { Link } from "@reach/router";

const Header: React.FC = () => {
  return (
    <div className="shadow pt-2 pb-2 border-g-gradient">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <h1 className="h2 text-primary">Train your Brain!</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
