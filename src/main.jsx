import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="797595300559-75b5122n29hr1jskrso9lh5fooh05trr.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
