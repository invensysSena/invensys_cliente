import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ChartBodega } from "../Generator/ChartBodega";
import { ChartHome } from "../Generator/ChartHome";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { EditarProduct } from "../components/FormProduct/EditarProduct";
import { ModalModule } from "../components/ModalModule";
import { CategoryNotify } from "../components/NotificationsHeader/CategoryNotify";
import { HomeNotification } from "../components/NotificationsHeader/HomeNotification";
import { InventoryNotify } from "../components/NotificationsHeader/InventoryNotify";
import { PedidosNotify } from "../components/NotificationsHeader/PedidosNotify";
import { ProductNotification } from "../components/NotificationsHeader/ProductNotification";
import { ProviderNotifyc } from "../components/NotificationsHeader/ProviderNotifyc";
import { UsersNotification } from "../components/NotificationsHeader/UsersNotification";
import { VentasNotify } from "../components/NotificationsHeader/VentasNotify";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { ChartProductos } from "../Generator/ChartProductos";
import { ComandsSistemA } from "../Generator/ComandsSistemA";
import { ProductAgotados } from "../components/NotificationsHeader/ProductAgotados";
import { dataIsAllowed } from "../secure/lowed.Modules";
import Analitycs from "../layout/Analitycs.jsx";
import Category from "../layout/Category.jsx";
import Notification from "../layout/Notification.jsx";
import Product from "../layout/Product.jsx";
import Provider from "../layout/Provider.jsx";
import Usuarios from "../layout/Usuarios.jsx";
import { permissionsPages, rolesPemissionsRouter } from "../utils/RolesRouter";
export const RouterFour = () => {
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
            path={dataIsAllowed[2].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[2].nombre)
                }
                redirectTo={dataIsAllowed[2].url}
              >
                <GetUsersContext>
                  <Usuarios />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />

          <Route
            path="/permisions/:id"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("administrador")}
                redirectTo="/bodega"
              >
                 <GetUsersContext>
                <ModalModule />

                 </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path="/notificaciones/*"element={<ProtectedRouter isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes("notificaciones")}redirectTo="/notificaciones"
              >
                <GetUsersContext>
                <Notification />
                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<HomeNotification />} />
            <Route path="notification/users" element={<UsersNotification />} />
            <Route
              path="notification/product"
              element={<ProductNotification />}
            />
            <Route path="notification/bodega" element={<InventoryNotify />} />
            <Route path="notification/category" element={<CategoryNotify />} />
            <Route path="notification/provider" element={<ProviderNotifyc />} />
            <Route path="notification/pedidos" element={<PedidosNotify />} />
            <Route path="notification/ventas" element={<VentasNotify />} />
            <Route
              path="notification/ProductVencer"
              element={<ProductAgotados />}
            />
          </Route>
          <Route
            path="/admin/productos/editar/:id"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages}
                redirectTo={dataIsAllowed[1].url}
              >
                <EditarProduct />
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[5].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[5].nombre)
                }
                redirectTo={dataIsAllowed[5].url}
              >
                <GetUsersContext>

                <Product />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[3].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[3].nombre)
                }
                redirectTo={dataIsAllowed[3].url}
              >
                <GetUsersContext>
                <Category />

                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path={dataIsAllowed[6].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[6].nombre)
                }
                redirectTo={dataIsAllowed[6].url}
              >
                <GetUsersContext>
                <Provider />

                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path="/analityc/*"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("analityc")}
                redirectTo="/analityc"
              >
                <GetUsersContext>
                <Analitycs />

                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="" element={<ChartHome />}></Route>
            <Route path="AnBodega/:id" element={<ChartBodega />}></Route>

            <Route path="TodoComands/:id" element={<ComandsSistemA />}></Route>
            <Route path="AnProductos/:id" element={<ChartProductos />}></Route>
          </Route>
          
       </Routes>
        {/* </GetUsersContext> */}
      </UserContextData>
    </>
  );
};
