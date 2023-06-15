import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "@loadable/component";
const App = lazy(() => import("./app/App"));
window.addEventListener("load", () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches;
  if (prefersDarkMode) {
    document.body.style.backgroundColor = "#162c47";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="797595300559-75b5122n29hr1jskrso9lh5fooh05trr.apps.googleusercontent.com">
        <Suspense
          fallback={
            <>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  placeContent: "center",
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                
                  margin: "0",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".14"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".29"
                      transform="rotate(30 12 12)"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".43"
                      transform="rotate(60 12 12)"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".57"
                      transform="rotate(90 12 12)"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".71"
                      transform="rotate(120 12 12)"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      opacity=".86"
                      transform="rotate(150 12 12)"
                    />
                    <rect
                      width="2"
                      height="5"
                      x="11"
                      y="1"
                      fill="currentColor"
                      transform="rotate(180 12 12)"
                    />
                    <animateTransform
                      attributeName="transform"
                      calcMode="discrete"
                      dur="0.75s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
                    />
                  </g>
                  50
                </svg>
              </div>
            </>
          }
        >
          <App />
        </Suspense>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
