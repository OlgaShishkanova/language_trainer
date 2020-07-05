import React, { useState, useRef } from "react";
import { Link } from "@reach/router";
import { FaUserNinja } from "react-icons/fa";
import classNames from "classnames";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useAuth } from "../../context/auth-context";

const Header: React.FC = () => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const dropdownRef: any = useRef();
  const user = useAuth()?.data?.user;
  const logoutFunc  = useAuth()?.logout

  useOutsideClick(dropdownRef, () => {
    toggleMenu(false);
  });

  return (
    <header className="shadow border-g-gradient">
      <div className="container">
        <div className="row p-2 justify-content-between align-items-center">
          <Link to="/" className="text-decoration-none">
            <h1 className="h2 text-primary">Train your Brain!</h1>
          </Link>
          {user ? (
            <div
              ref={dropdownRef}
              onClick={() => toggleMenu(!isMenuOpen)}
              className="dropdown text-primary"
            >
              <div className="dropdown-toggle">
                <FaUserNinja size={28} />
              </div>
              <div
                className={classNames("dropdown-menu right-0 left-auto", {
                  "d-block": isMenuOpen === true,
                })}
                aria-labelledby="dropdownMenuButton"
              >
                <Link to='/settings' className="dropdown-item">
                  Settings
                </Link>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-item" onClick={() => logoutFunc()}>
                  Log out
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <div className="font-weight-bold">Login </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
