import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";
import boardsReducer from "../components/boards/boardSlice";
import recordsReducer from "../components/saved-records/recordSlice";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const combinedReducers = combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  records: recordsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "reset") {
    state = {};
  }

  return combinedReducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
