import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "./authSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const auth = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.isAuthenticated.status) {
      navigate("/home");
    }
  }, [auth.isAuthenticated]);

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    dispatch(registerUser(rest));
  };

  const checkPasswords = () => {
    return password === confirmPassword;
  };

  return (
    <div className="d-flex flex-lg-row flex-column justify-content-center vh-100 overflow-auto align-items-center">
      <div className="card flex-basis-25">
        <div className="card-header text-center">
          <h1 className="display-6">Register</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Enter name"
                required
                value={name}
                onChange={onChange}
              />
            </div>

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
                placeholder="Enter password"
                required
                minLength={8}
                value={password}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                id="confirmPassword"
                className="form-control"
                type="password"
                placeholder="Confirm Password"
                required
                minLength={8}
                pattern={password}
                title="Passwords do not match."
                value={confirmPassword}
                onChange={onChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
            <div className="mt-3">
              <span>
                Already have an account? <Link to="/login">login here</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
