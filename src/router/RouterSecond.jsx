import { useEffect,useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { DatatableVentas } from "../components/DatatableVentas";
import { FormSalida } from "../components/FormSalida";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { Ventas } from "../layout/Ventas";
import { Contactanos } from "../pages/Contactanos";
import { Somos } from "../pages/Somos";
import { ComprasPDF } from "../pdf/ComprasPDF";
import { dataIsAllowed } from "../secure/lowed.Modules";
import { Licence } from "../security/Licence";
import ConfigAdmin from "../layout/ConfigAdmin.jsx";
import InventoryGeneral from "../layout/InventoryGeneral.jsx";
import { permissionsPages, rolesPemissionsRouter } from "../utils/RolesRouter";
export const RouterSecond = () => {
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
            path="/venta/*"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("venta")}
                redirectTo="/venta"
              >
                <GetUsersContext>
                <Ventas />

                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<FormSalida />}>
              <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
            </Route>
            <Route path="AllVentas/*" element={<DatatableVentas />}>
              <Route path="viewPdf" element={<ComprasPDF />} />
            </Route>
          </Route>
          <Route path="/somos" element={<Somos />} />
          <Route path="/contactanos" element={<Contactanos />} />

          <Route
            path="/settings"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("config")}
                redirectTo="/config"
              >
                <GetUsersContext>

                <ConfigAdmin />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[17].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[17].nombre)
                }
                redirectTo={dataIsAllowed[17].url}
              >
                <GetUsersContext>
                <InventoryGeneral />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[19].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[19].nombre)
                }
                redirectTo={dataIsAllowed[19].url}
              >
                <GetUsersContext>
                <Licence />

                </GetUsersContext>
              </ProtectedRouter>
            }
          />
        </Routes>
      </UserContextData>
    </>
  );
};
