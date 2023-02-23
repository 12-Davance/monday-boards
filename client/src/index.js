import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

axios.interceptors.request.use((request) => {
  if (
    store.getState().auth.isAuthenticated.status &&
    !request.url.includes("api.monday.com")
  ) {
    request.headers["Authorization"] = `Bearer ${
      store.getState().auth.isAuthenticated.access_token
    }`;
  }
  if (request.method === "post") {
    request.headers["Content-Type"] = "application/json";
  }
  return request;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
