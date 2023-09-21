import React,{Suspense} from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import  App from"./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="195264984560-gq43pmmu45k3bdn1bju063627561rpc7.apps.googleusercontent.com">
        <Suspense fallback={<div className="h-10 w-full shadow-lg"></div>}>
          <App />

        </Suspense>

      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
