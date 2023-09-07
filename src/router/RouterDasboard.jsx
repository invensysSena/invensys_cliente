import { useEffect, useState,lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { dataIsAllowed } from "../secure/lowed.Modules";
import Perfil from "../layout/Perfil";
import { rolesPemissionsRouter } from "../utils/RolesRouter";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { permissionsPages } from "../utils/RolesRouter";
import { TranslateProduct } from "../container/TranslateProduct";
import { ConfigInventory } from "../container/ConfigInventory";
// import Inventory from "../layout/Inventory";
// import AyudaAdmin from "../layout/AyudaAdmin";
const Inventory = lazy(() => import("../layout/Inventory"));
const AyudaAdmin =lazy(() => import("../layout/AyudaAdmin"));
const RouterDasboard = () => {
  useEffect(() => {
    (async () => { await  rolesPemissionsRouter()})()
  }, [])
  const [LoadingProgress, setLoadingProgress] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setLoadingProgress(0); 
    setLoadingProgress(30); 
    setLoadingProgress(100);
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
          <Route path={`${dataIsAllowed[1].url}/*`}
            element={<ProtectedRouter isAllowed={!!permissionsPages && permissionsPages.permisions.includes("bodega")}
                redirectTo="/bodega"><GetUsersContext><Inventory /></GetUsersContext>
              </ProtectedRouter>}>
            <Route path="inventory/:id/*" element={<ConfigInventory />}>
              <Route
                path="TrasladarProduct/:id"
                element={<TranslateProduct />}
              />
            </Route>
            <Route path="" element={<div></div>} />
          </Route>
          <Route
            path={dataIsAllowed[13].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[13].nombre)
                }
              >
                <AyudaAdmin />
              </ProtectedRouter>
            }
          />
          <Route
            path={'/perfil'}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[9].nombre)
                 
                }
              >
                <GetUsersContext>
                  <Perfil />
                </GetUsersContext>
               </ProtectedRouter>
            }
          />
      </Routes>
      </UserContextData>
    </>
  );
};
export default RouterDasboard;