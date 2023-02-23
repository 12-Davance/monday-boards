import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import PrivateRoute from "./components/routing/private-route";
import Home from "./pages/home/home";
import Boards from "./components/boards/boards";
import SavedRecords from "./components/saved-records/saved-records";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer hideProgressBar={true} closeOnClick={false} />
      <Router>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route exact element={<Login />} path="/login" />
          <Route exact element={<Register />} path="/register" />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route index element={<Navigate to="search" />} />
            <Route path="search" element={<Boards />} />
            <Route path="saved-records" element={<SavedRecords />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
