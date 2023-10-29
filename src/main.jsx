import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import  App from"./app/App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="195264984560-gq43pmmu45k3bdn1bju063627561rpc7.apps.googleusercontent.com">
          <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);