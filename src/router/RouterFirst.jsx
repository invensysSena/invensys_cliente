import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { DataTablePedido } from "../components/DataTablePedido";
import { FormPedido } from "../components/FormPedido";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { dataIsAllowed } from "../secure/lowed.Modules";
import Shope from "../layout/Shope.jsx";
import Trae from "../layout/Trae.jsx";
import { rolesPemissionsRouter } from "../utils/RolesRouter";
import { permissionsPages } from "../utils/RolesRouter";
export const RouterFirst = () => {
    useEffect(() => {
      (async () => { await  rolesPemissionsRouter()})()
    }, [])
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
      <UserContextData>
        <LoadingBar color="#44b2fd" progress={LoadingProgress}
          onLoaderFinished={() => {
            setLoadingProgress(0);
          }}
        />
        <Routes>
       
          

          </Routes>
        {/* </GetUsersContext> */}
      </UserContextData>
    </>
  );
};
