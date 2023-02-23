import React from "react";
import Notification from "../../components/shared/notification";
import Header from "../../components/shared/header";
import { useLocation, Link, Outlet } from "react-router-dom";
import "./home.css";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    isAuthenticated: { user },
  } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <div className="wrapper">
      <Header />
      <div className="container d-flex flex-column gap-3">
        <Notification
          title={`🙂👋 Hello ${user.name}`}
          type="success"
          align="start"
        />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to={`/home/search`}
              className={`nav-link ${pathname === "/home/search" && "active"}`}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`/home/saved-records`}
              className={`nav-link ${
                pathname === "/home/saved-records" && "active"
              }`}
            >
              Saved Records
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
