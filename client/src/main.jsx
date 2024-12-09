import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import {store, persistor} from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
