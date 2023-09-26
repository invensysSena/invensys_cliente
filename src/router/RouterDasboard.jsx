import { useEffect, useState,lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { GetUsersContext } from "../hooks/context/GetUsersContext";
import { UserContextData } from "../hooks/context/UserContextData.jsx";
import { dataIsAllowed } from "../auth/lowed.Modules";
import Perfil from "../pages/Perfil";
import { rolesPemissionsRouter } from "../auth/RolesRouter";
import { ProtectedRouter } from "../auth/ProtectedRouter";
import { permissionsPages } from "../auth/RolesRouter";
import { TranslateProduct } from "../components/container/TranslateProduct";
import { ConfigInventory } from "../components/container/ConfigInventory";
import Shope from "../pages/Shope";
import { FormPedido } from "../components/FormPedido";
import { DataTablePedido } from "../components/Tables/DataTablePedido";
import AdminLoadable from "../pages/Admin/Admin.jsx";
import Trae from "../pages/Trae";
import { HomeDaboard } from "../components/screen/HomeDaboard";
import { UsersDasboard } from "../components/screen/UsersDasboard";
import { UserInfo } from "../components/screen/UserInfo";
import { ProductoDasboard } from "../components/screen/ProductoDasboard";
import { CategoryDasboard } from "../components/screen/CategoryDasboard";
import { ProvidersDasboard } from "../components/screen/ProvidersDasboard";
import { GetCategoryProvider } from "../components/screen/GetCategoryProvider";
import Usuarios from "../pages/Usuarios";
import { ModalModule } from "../components/ModalModule";
import { HomeNotification } from "../components/NotificationsHeader/HomeNotification";
import { UsersNotification } from "../components/NotificationsHeader/UsersNotification";
import { ProductNotification } from "../components/NotificationsHeader/ProductNotification";
import Notification from "../pages/Notification";
import { InventoryNotify } from "../components/NotificationsHeader/InventoryNotify";
import { CategoryNotify } from "../components/NotificationsHeader/CategoryNotify";
import { ProviderNotifyc } from "../components/NotificationsHeader/ProviderNotifyc";
import { PedidosNotify } from "../components/NotificationsHeader/PedidosNotify";
import { VentasNotify } from "../components/NotificationsHeader/VentasNotify";
import { ProductAgotados } from "../components/NotificationsHeader/ProductAgotados";
import { EditarProduct } from "../components/FormProduct/EditarProduct";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Provider from "../pages/Provider";
import Analitycs from "../pages/Analitycs";
import { ChartHome } from "../components/generator/ChartHome";
import { ChartBodega } from "../components/generator/ChartBodega";
import { ComandsSistemA } from "../components/generator/ComandsSistemA";
import { ChartProductos } from "../components/generator/ChartProductos";
import { Licence } from "../pages/Licence";
import InventoryGeneral from "../pages/InventoryGeneral";
import ConfigAdmin from "../pages/ConfigAdmin";
import { Somos } from "../pages/Somos";
import { FormSalida } from "../components/FormSalida";
import { Contactanos } from "../pages/Contactanos";
import { ComprasPDF } from "../components/pdf/ComprasPDF";
import { DatatableVentas } from "../components/Tables/DatatableVentas";
import Ventas from "../pages/Ventas";
// import Inventory from "../layout/Inventory";
// import AyudaAdmin from "../layout/AyudaAdmin";
const Inventory = lazy(() => import("../pages/Inventory"));
const AyudaAdmin =lazy(() => import("../pages/AyudaAdmin"));
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
            path={dataIsAllowed[18].url}
            element={
              <ProtectedRouter
                isAllowed={
                  !!permissionsPages && permissionsPages.permisions.includes(dataIsAllowed[18].nombre)
                }
              >
                <GetUsersContext>
                  <Trae />
                </GetUsersContext>
              </ProtectedRouter>
            }
          />
          <Route
            path="/pedidos/*"
            element={
              <ProtectedRouter
                isAllowed={!!permissionsPages && permissionsPages.permisions.includes("pedidos")}
                redirectTo="/pedidos"
              >
                <GetUsersContext>
                <Shope />
                </GetUsersContext>
              </ProtectedRouter>
            }
          >
            <Route path="ListPedidos" element={<DataTablePedido />} />
            <Route path="" element={<FormPedido />}>
              <Route path="bodega/:id" element={<h1>Hola mundo</h1>} />
            </Route>
            
          </Route>
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
export default RouterDasboard;