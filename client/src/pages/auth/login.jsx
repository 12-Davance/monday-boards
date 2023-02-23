import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";

const Login = () => {
  const auth = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });
  const { email, password } = form;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated.status) {
      navigate("/home");
    }
  }, [auth.isAuthenticated]);

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="d-flex flex-lg-row flex-column justify-content-center vh-100 overflow-auto align-items-center">
      <div className="card flex-basis-25">
        <div className="card-header text-center">
          {/*<div className="alert alert-primary text-center">*/}
          <h1 className="display-6">Login</h1>
          {/*</div>*/}
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                id="email"
                className="form-control"
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={onChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            <div className="mt-3">
              <span>
                Don't have account? <Link to="/register">register here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
