import { useEffect,useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { CategoryDasboard } from "../components/screen/CategoryDasboard";
import { GetCategoryProvider } from "../components/screen/GetCategoryProvider";
import { HomeDaboard } from "../components/screen/HomeDaboard";
import { ProductoDasboard } from "../components/screen/ProductoDasboard";
import { ProvidersDasboard } from "../components/screen/ProvidersDasboard";
import { UserInfo } from "../components/screen/UserInfo";
import { UsersDasboard } from "../components/screen/UsersDasboard";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { rolesPemissionsRouter } from "../utils/RolesRouter";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { permissionsPages } from "../utils/RolesRouter";
import AdminLoadable from "../pages/Admin/Admin.jsx";
export const RouterFive = () => {
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
          
        <Route
            path="/dasboard/*"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("dasboard")}
              >
                <GetUsersContext>
                  <AdminLoadable />
                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<HomeDaboard />} />
            <Route path="users/:id/*" element={<UsersDasboard />}>
              <Route path="usersInfo/:id" element={<UserInfo />} />
            </Route>
            <Route path="productos/:id" element={<ProductoDasboard />} />
            <Route path="categorias/:id" element={<CategoryDasboard />} />

            <Route path="proveedores/:id/*" element={<ProvidersDasboard />}>
              <Route
                path="categoryProvider/:id"
                element={<GetCategoryProvider />}
              />
            </Route>
          </Route>
         /</Routes>
      </UserContextData>
    </>
  );
};
