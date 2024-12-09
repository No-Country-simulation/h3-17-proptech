import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";

import loginReducer from "./slices/loginSlice";
import registerReducer from "./slices/registerSlice";
import simulatorSlice from "./slices/simulatorSlice";


const persistConfig = {
  key: "root", // Clave en localStorage
  storage, // Usa localStorage por defecto
};

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  simulator: simulatorSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Necesario para redux-persist
    }),
});

// Configura el persistor
export const persistor = persistStore(store);