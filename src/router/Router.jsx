import { useEffect, useState,lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import CodePassword from "../pages/CodePassword";
import  HomePage  from "../pages/HomePage";
import { RouterFirst } from "./RouterFirst.jsx";
import { RouterFive } from "./RouterFive.jsx";
import { RouterSecond } from "./RouterSecond.jsx";
import { RouterFour } from "./RouterFour.jsx";
const SignupLoadable = lazy(() => import("../components/Signup.jsx"));
const AuthUserLoadable = lazy(() => import("../components/AuthUser.jsx"));
const Privaci = lazy(() => import("../privacy/Privaci.jsx"));
const NewPassword = lazy(() => import("../pages/newPassword"));
const RecoveryPass = lazy(() => import("../pages/RecoveryPass"));
const RouterDasboard = lazy(() => import("./RouterDasboard.jsx"));

export const Router = () => {
  const [LoadingProgress, setLoadingProgress] = useState(0);
  const location = useLocation();
  useEffect(() => {
    // Update the loading bar when the location changes
    setLoadingProgress(0); // Reset the loading progress
    setLoadingProgress(30); // Show initial progress
    // Add any additional logic or API calls here if needed
    setLoadingProgress(100); // Complete the progress

    // Clean up the loading bar on component unmount
    return () => {
      setLoadingProgress(0); // Reset the loading progress
    };
  }, [location]);

  return (
    <>
        <LoadingBar color="#44b2fd" progress={LoadingProgress}onLoaderFinished={() => {setLoadingProgress(0);}}/>
        <Routes>
          <Route path="/privacy" element={<Privaci />} />
          {/* <Route path="*" element={<NotFount />} /> */}
          <Route path="/login" element={<AuthUserLoadable />} />
          <Route path="/newPassword+auth=true" element={<NewPassword />} />
          <Route path="/recovery+password/identify" element={<RecoveryPass />}/>
          <Route path="/verifyc+code/identify" element={<CodePassword />} />
          <Route path="/signup" element={<UserContextData><SignupLoadable /></UserContextData>}/>
          <Route index element={<HomePage />} />
         </Routes>
     <RouterDasboard/>
     <RouterFirst/>
     <RouterFive/>
     <RouterSecond/>
     <RouterFour/>

    </>
  );
};
