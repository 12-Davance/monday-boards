import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({ type: "reset" });
  };

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MONDAY BOARDS
        </a>
        <button
          onClick={() => setShow((prevState) => !prevState)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={show}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            show ? "" : "collapse"
          } navbar-collapse justify-content-lg-end`}
          id="navbarTogglerDemo01"
        >
          <button className="btn btn-link text-light" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
